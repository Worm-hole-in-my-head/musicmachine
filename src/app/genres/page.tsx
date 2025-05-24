import Link from 'next/link';
import staticGenreData from '@/data/staticGenreData';

export default function GenresPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-[var(--color-text-black)]">Browse Music Genres</h1>
      
      <p className="text-lg text-center mb-8 text-gray-700">
        Explore our collection of {staticGenreData.reduce((total, genre) => total + genre.midiCount, 0)} MIDI files across {staticGenreData.length} music genres. All files are free to download and ready to use in your favorite DAW.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {staticGenreData.map((genre) => (
          <Link key={genre.path} href={`/genre/${genre.path}`} legacyBehavior>
            <a className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-[var(--color-blue-medium)]" style={{borderRadius: "var(--radius)"}}>
              <h2 className="text-2xl font-semibold mb-2 text-[var(--color-text-black)]">{genre.name}</h2>
              <p className="text-gray-600 mb-4">{genre.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-[var(--color-blue-dark)]">{genre.midiCount} MIDI files</span>
                <span className="px-3 py-1 bg-[var(--color-blue-light)] text-[var(--color-text-black)] text-sm font-medium rounded-full">Explore</span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
