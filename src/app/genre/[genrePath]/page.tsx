import type { Metadata } from "next";
import Link from 'next/link';
import staticGenreData from '@/data/staticGenreData';

// Pre-generate static paths for all genres
export function generateStaticParams() {
  return staticGenreData.map(genre => ({
    genrePath: genre.path,
  }));
}

type Props = {
  params: { genrePath: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const genrePath = params.genrePath.toLowerCase();
  const genre = staticGenreData.find(g => g.path === genrePath);
  
  if (!genre) {
    return {
      title: "Genre Not Found - MusicMachine",
    };
  }
  
  return {
    title: `${genre.name} MIDI Files - MusicMachine`,
    description: genre.description || `Download free MIDI files for ${genre.name}.`,
  };
}

export default function GenrePage({ params }: Props) {
  const genrePath = params.genrePath.toLowerCase();
  const genre = staticGenreData.find(g => g.path === genrePath);

  if (!genre) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-[var(--color-text-black)]">Genre Not Found</h1>
        <p className="text-lg mt-4 text-[var(--color-text-black)]">Sorry, the genre you are looking for does not exist or has not been added yet.</p>
        <Link href="/genres" className="mt-6 inline-block px-6 py-2 bg-[var(--color-blue-dark)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-md" style={{borderRadius: "var(--radius)"}}>
          Back to All Genres
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-[var(--color-text-black)]">{genre.name} MIDI Files</h1>
      <p className="text-lg text-center mb-8 text-gray-700">{genre.description}</p>

      {/* Static download information */}
      <div className="mb-8 text-center">
        <div className="px-6 py-3 bg-[var(--color-blue-dark)] text-white font-bold rounded-lg inline-flex items-center" style={{borderRadius: "var(--radius)"}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {genre.midiCount} {genre.name} MIDI Files Available
        </div>
        <p className="text-sm mt-2 text-gray-600">
          Visit our <Link href="/contact" className="text-[var(--color-blue-dark)] hover:underline">contact page</Link> to request specific MIDI files
        </p>
      </div>

      {/* Display structures available in this genre */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">Available Song Structures</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {genre.structures.map((structure) => (
            <div key={structure} className="block p-4 bg-[var(--color-blue-light)] rounded-lg shadow text-center" style={{borderRadius: "var(--radius)", background: "linear-gradient(to bottom, var(--color-blue-light), var(--color-blue-medium))"}}>
              <h3 className="text-lg font-medium text-[var(--color-text-black)]">{structure}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Static information about MIDI files */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">About Our {genre.name} MIDI Files</h2>
        <div className="bg-white p-6 rounded-lg shadow-md" style={{borderRadius: "var(--radius)"}}>
          <p className="text-gray-700 mb-4">
            Our {genre.name} MIDI collection includes files for various instruments and song parts. All files are professionally created and ready to use in your favorite DAW.
          </p>
          <p className="text-gray-700 mb-4">
            Each MIDI file is labeled with its tempo, key (where applicable), and structure, making it easy to find exactly what you need for your project.
          </p>
          <p className="text-gray-700">
            To get started with these MIDI files, visit our <Link href="/how-to-use" className="text-[var(--color-blue-dark)] hover:underline">How to Use</Link> page for detailed instructions.
          </p>
        </div>
      </section>

      {/* Call to action */}
      <div className="text-center">
        <Link href="/donate" className="px-6 py-3 bg-[var(--color-blue-dark)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-md inline-block" style={{borderRadius: "var(--radius)"}}>
          Support MusicMachine
        </Link>
        <p className="text-sm mt-2 text-gray-600">Your donations help us create more MIDI content</p>
      </div>
    </div>
  );
}
