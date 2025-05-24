import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Use MIDI Files - MusicMachine",
  description: "Learn how to use MIDI files from MusicMachine in your favorite DAW and VST instruments.",
};

export default function HowToUsePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-[var(--color-text-black)]">How to Use MIDI Files</h1>
      
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md" style={{borderRadius: "var(--radius)"}}>
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">What are MIDI Files?</h2>
        <p className="text-gray-700 mb-6">
          MIDI (Musical Instrument Digital Interface) files contain musical note and timing information, but no actual audio. Think of them as digital sheet music that tells your virtual instruments what notes to play, when to play them, and how loudly or softly to play them.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">Getting Started with MIDI Files</h2>
        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-xl font-medium mb-2 text-[var(--color-text-black)]">Step 1: Download MIDI Files</h3>
            <p className="text-gray-700">
              Browse our collection by genre and download the MIDI files you need. You can download individual files or use the &quot;Download All&quot; button to get multiple files at once.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-xl font-medium mb-2 text-[var(--color-text-black)]">Step 2: Open Your DAW</h3>
            <p className="text-gray-700">
              Launch your Digital Audio Workstation (DAW) such as Ableton Live, FL Studio, Logic Pro, Cubase, or any other DAW of your choice.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-xl font-medium mb-2 text-[var(--color-text-black)]">Step 3: Import MIDI Files</h3>
            <p className="text-gray-700">
              Most DAWs allow you to import MIDI files by dragging and dropping them into your project or using the File &gt; Import menu option.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-xl font-medium mb-2 text-[var(--color-text-black)]">Step 4: Assign to VST Instruments</h3>
            <p className="text-gray-700">
              Once imported, assign the MIDI track to a compatible VST instrument. For example, drum MIDI files should be assigned to drum VSTs, guitar MIDI files to guitar VSTs, etc.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-xl font-medium mb-2 text-[var(--color-text-black)]">Step 5: Customize and Create</h3>
            <p className="text-gray-700">
              Feel free to modify the MIDI data to fit your project. You can change notes, adjust timing, alter velocities, or combine multiple MIDI files to create your own unique compositions.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">Compatible VST Instruments</h2>
        <p className="text-gray-700 mb-4">
          Our MIDI files are designed to work with a wide range of VST instruments. Here are some popular options for different instrument types:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-[var(--color-text-black)]">Drums</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Superior Drummer</li>
              <li>EZdrummer</li>
              <li>Addictive Drums</li>
              <li>BFD</li>
              <li>GetGood Drums</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-[var(--color-text-black)]">Guitar</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Ample Sound Guitar</li>
              <li>Shreddage</li>
              <li>Evolution Electric Guitar</li>
              <li>Heavier7Strings</li>
              <li>UJAM Virtual Guitarist</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-[var(--color-text-black)]">Bass</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Ample Sound Bass</li>
              <li>Modo Bass</li>
              <li>Trilian</li>
              <li>Scarbee Bass</li>
              <li>UJAM Virtual Bassist</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-medium mb-2 text-[var(--color-text-black)]">Keyboards/Synths</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Omnisphere</li>
              <li>Serum</li>
              <li>Massive</li>
              <li>Keyscape</li>
              <li>Pigments</li>
            </ul>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">Tips for Working with MIDI Files</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Our guitar and bass MIDI files include key switches for techniques like palm muting, slides, and harmonics. Check your VST documentation to see how these are implemented.</li>
          <li>Adjust the tempo of MIDI files to match your project without affecting pitch or quality.</li>
          <li>Combine different MIDI files (e.g., drums, bass, guitar) to quickly create full arrangements.</li>
          <li>Experiment with different VST instruments using the same MIDI file to find the sound that works best for your project.</li>
          <li>Use MIDI files as starting points and add your own creative touches to make them unique.</li>
        </ul>
        
        <div className="bg-[var(--color-blue-light)] p-5 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-[var(--color-text-black)]">Need Help?</h2>
          <p className="text-gray-700">
            If you have any questions about using our MIDI files or encounter any issues, please visit our Contact page. We&apos;re here to help you make the most of our resources!
          </p>
        </div>
      </div>
    </div>
  );
}
