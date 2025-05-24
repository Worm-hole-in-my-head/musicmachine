import { scanMidiFiles } from '@/utils/midiUtils';

// Get all genre data and filter out empty genres
const allGenresData = scanMidiFiles();
const nonEmptyGenres = Object.values(allGenresData).filter(
  genre => genre.midiFiles && genre.midiFiles.length > 0
);

// Create a static data file with pre-generated genre information
const staticGenreData = nonEmptyGenres.map(genre => ({
  name: genre.name,
  path: genre.path,
  description: genre.description,
  midiCount: genre.midiFiles?.length || 0,
  structures: [...new Set(genre.midiFiles?.map(file => file.structure) || [])]
}));

export default staticGenreData;
