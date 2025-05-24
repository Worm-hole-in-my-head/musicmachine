import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

// Base directory for MIDI files
const MIDI_BASE_DIR = '/home/ubuntu/midi_files';

// Interface for MIDI file metadata
export interface MidiFile {
  id: string;
  name: string;
  instrument: string;
  tempo: number;
  key?: string;
  structure: string;
  path: string;
}

// Interface for genre data
export interface GenreData {
  name: string;
  description: string;
  path: string;
  subGenres?: { name: string; path: string }[];
  midiFiles?: MidiFile[];
}

// Cache for genre data to avoid repeated file system scans
let genreDataCache: { [key: string]: GenreData } | null = null;
let cacheTimestamp: number = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

// Function to scan the MIDI files directory and generate metadata
export function scanMidiFiles(): { [key: string]: GenreData } {
  // Check if we have a valid cache
  const now = Date.now();
  if (genreDataCache && (now - cacheTimestamp) < CACHE_TTL) {
    return genreDataCache;
  }
  
  const genreData: { [key: string]: GenreData } = {};
  
  try {
    // Check if the MIDI base directory exists
    if (!fs.existsSync(MIDI_BASE_DIR)) {
      console.error('MIDI base directory not found:', MIDI_BASE_DIR);
      return genreData;
    }
    
    // Get all genre directories
    const genreDirs = fs.readdirSync(MIDI_BASE_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    // Process each genre directory
    for (const genreName of genreDirs) {
      const genrePath = genreName.toLowerCase().replace(/\s+/g, '-');
      const genreDir = path.join(MIDI_BASE_DIR, genreName);
      
      // Initialize genre data
      genreData[genrePath] = {
        name: genreName,
        description: getGenreDescription(genreName),
        path: genrePath,
        subGenres: [],
        midiFiles: []
      };
      
      // Get all instrument directories within the genre
      const instrumentDirs = fs.readdirSync(genreDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      // Process each instrument directory
      for (const instrumentName of instrumentDirs) {
        const instrumentDir = path.join(genreDir, instrumentName);
        
        // Get all MIDI files for this instrument
        const midiFiles = fs.readdirSync(instrumentDir)
          .filter(file => file.endsWith('.mid'));
        
        // Process each MIDI file
        for (const midiFile of midiFiles) {
          // Parse file name to extract metadata
          // Expected format: Genre_Instrument_Structure_TempoBPM_Key_VariationNumber.mid
          const parts = midiFile.split('_');
          if (parts.length >= 3) {
            const structure = parts[2];
            
            // Extract tempo from the format "120bpm"
            let tempo = 120;
            const tempoPart = parts.find(part => part.toLowerCase().includes('bpm'));
            if (tempoPart) {
              tempo = parseInt(tempoPart.replace(/bpm/i, ''), 10) || 120;
            }
            
            // Extract key if available
            let key: string | undefined;
            const keyParts = parts.filter(part => 
              part.toLowerCase().includes('maj') || 
              part.toLowerCase().includes('min')
            );
            if (keyParts.length > 0) {
              key = keyParts[0];
            }
            
            // Generate a unique ID
            const id = `${genreName.toLowerCase()}_${instrumentName.toLowerCase()}_${structure.toLowerCase()}_${midiFiles.indexOf(midiFile)}`;
            
            // Create a readable name
            const name = `${genreName} ${instrumentName} ${structure} ${tempo}BPM${key ? ` - ${key}` : ''}`;
            
            // Add to the genre's MIDI files
            genreData[genrePath].midiFiles?.push({
              id,
              name,
              instrument: instrumentName,
              tempo,
              key,
              structure,
              path: path.join(instrumentDir, midiFile)
            });
          }
        }
      }
      
      // Sort MIDI files by structure and instrument
      genreData[genrePath].midiFiles?.sort((a, b) => {
        // First sort by structure
        const structureOrder = ['Intro', 'Verse', 'Chorus', 'Break', 'Breakdown', 'Fill', 'Outro'];
        const aStructureIndex = structureOrder.indexOf(a.structure);
        const bStructureIndex = structureOrder.indexOf(b.structure);
        
        if (aStructureIndex !== bStructureIndex) {
          return aStructureIndex - bStructureIndex;
        }
        
        // Then sort by instrument
        return a.instrument.localeCompare(b.instrument);
      });
    }
    
    // Update cache
    genreDataCache = genreData;
    cacheTimestamp = now;
    
    return genreData;
  } catch (error) {
    console.error('Error scanning MIDI files:', error);
    return genreData;
  }
}

// Function to get MIDI files for a specific genre and structure
export function getMidiFilesForGenreAndStructure(genre: string, structure: string): MidiFile[] {
  const allGenres = scanMidiFiles();
  const genrePath = genre.toLowerCase().replace(/\s+/g, '-');
  const genreData = allGenres[genrePath];
  
  if (!genreData || !genreData.midiFiles) {
    return [];
  }
  
  return genreData.midiFiles.filter(file => 
    file.structure.toLowerCase() === structure.toLowerCase()
  );
}

// Function to get all MIDI files for a specific genre
export function getMidiFilesForGenre(genre: string): MidiFile[] {
  const allGenres = scanMidiFiles();
  const genrePath = genre.toLowerCase().replace(/\s+/g, '-');
  const genreData = allGenres[genrePath];
  
  if (!genreData || !genreData.midiFiles) {
    return [];
  }
  
  return genreData.midiFiles;
}

// Function to create a ZIP file containing all MIDI files for a specific genre and structure
// Optimized with chunking to prevent memory issues
export async function createMidiZipForGenreAndStructure(genre: string, structure: string): Promise<Buffer | null> {
  try {
    // Get all MIDI files for this genre and structure
    const midiFiles = getMidiFilesForGenreAndStructure(genre, structure);
    
    // If no files were found, return null
    if (midiFiles.length === 0) {
      console.error('No MIDI files found for genre and structure:', genre, structure);
      return null;
    }
    
    // Create a new ZIP file
    const zip = new JSZip();
    
    // Process files in chunks to avoid memory issues
    const CHUNK_SIZE = 20; // Process 20 files at a time
    const chunks = Math.ceil(midiFiles.length / CHUNK_SIZE);
    
    for (let i = 0; i < chunks; i++) {
      const startIdx = i * CHUNK_SIZE;
      const endIdx = Math.min(startIdx + CHUNK_SIZE, midiFiles.length);
      const chunkFiles = midiFiles.slice(startIdx, endIdx);
      
      // Add each file in this chunk to the ZIP
      for (const midiFile of chunkFiles) {
        try {
          const fileData = fs.readFileSync(midiFile.path);
          
          // Add to the ZIP with a folder structure
          const folderPath = `${genre}/${midiFile.instrument}/${structure}`;
          const fileName = path.basename(midiFile.path);
          zip.file(`${folderPath}/${fileName}`, fileData);
        } catch (fileError) {
          console.error(`Error adding file to ZIP: ${midiFile.path}`, fileError);
          // Continue with other files even if one fails
        }
      }
      
      // Small delay to allow garbage collection between chunks
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // Generate the ZIP file with compression level optimized for speed
    const zipBuffer = await zip.generateAsync({ 
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 3 // Lower level = faster but less compression
      }
    });
    
    return zipBuffer;
  } catch (error) {
    console.error('Error creating ZIP file:', error);
    return null;
  }
}

// Function to create a ZIP file containing all MIDI files for a specific genre
// Optimized with chunking to prevent memory issues
export async function createMidiZipForGenre(genre: string): Promise<Buffer | null> {
  try {
    // Get all MIDI files for this genre
    const midiFiles = getMidiFilesForGenre(genre);
    
    // If no files were found, return null
    if (midiFiles.length === 0) {
      console.error('No MIDI files found for genre:', genre);
      return null;
    }
    
    // Create a new ZIP file
    const zip = new JSZip();
    
    // Process files in chunks to avoid memory issues
    const CHUNK_SIZE = 20; // Process 20 files at a time
    const chunks = Math.ceil(midiFiles.length / CHUNK_SIZE);
    
    for (let i = 0; i < chunks; i++) {
      const startIdx = i * CHUNK_SIZE;
      const endIdx = Math.min(startIdx + CHUNK_SIZE, midiFiles.length);
      const chunkFiles = midiFiles.slice(startIdx, endIdx);
      
      // Add each file in this chunk to the ZIP
      for (const midiFile of chunkFiles) {
        try {
          const fileData = fs.readFileSync(midiFile.path);
          
          // Add to the ZIP with a folder structure
          const folderPath = `${genre}/${midiFile.instrument}/${midiFile.structure}`;
          const fileName = path.basename(midiFile.path);
          zip.file(`${folderPath}/${fileName}`, fileData);
        } catch (fileError) {
          console.error(`Error adding file to ZIP: ${midiFile.path}`, fileError);
          // Continue with other files even if one fails
        }
      }
      
      // Small delay to allow garbage collection between chunks
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // Generate the ZIP file with compression level optimized for speed
    const zipBuffer = await zip.generateAsync({ 
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 3 // Lower level = faster but less compression
      }
    });
    
    return zipBuffer;
  } catch (error) {
    console.error('Error creating ZIP file:', error);
    return null;
  }
}

// Helper function to get a description for a genre
function getGenreDescription(genre: string): string {
  const descriptions: { [key: string]: string } = {
    'Rock': 'From classic riffs to modern anthems, explore a wide variety of rock MIDI files.',
    'Metal': 'Heavy, powerful, and intense MIDI files for all metal sub-genres.',
    'Pop': 'Catchy melodies, chart-topping vibes, and infectious pop MIDI grooves.',
    'Electronic': 'Explore House, Techno, Trance, Dubstep, and more electronic MIDI patterns.',
    'Hip Hop': 'Beats, loops, and patterns for hip hop production of all styles.',
    'R&B': 'Soulful, smooth, and groove-oriented MIDI files for R&B production.',
    'Jazz': 'Sophisticated harmonies and swinging rhythms for jazz compositions.',
    'Blues': 'Expressive, emotional, and authentic blues MIDI patterns.',
    'Classical': 'Elegant and timeless classical music MIDI arrangements.',
    'Country': 'Authentic country music MIDI files with that Nashville sound.',
    'Reggae': 'Laid-back, rhythmic reggae MIDI patterns with authentic feel.',
    'Folk': 'Traditional and contemporary folk music MIDI arrangements.',
    'Latin': 'Vibrant and rhythmic Latin music MIDI patterns and progressions.',
    'World Music': 'Diverse MIDI files representing musical traditions from around the globe.',
    'Funk': 'Groovy, rhythmic funk MIDI patterns with attitude and style.',
    'Soundtrack': 'Cinematic and atmospheric MIDI files for film and game scoring.',
    'Children\'s Music': 'Fun and playful MIDI files perfect for children\'s content.',
    'Holiday Music': 'Festive MIDI arrangements for all holiday seasons.'
  };
  
  return descriptions[genre] || `Explore our collection of ${genre} MIDI files for your productions.`;
}
