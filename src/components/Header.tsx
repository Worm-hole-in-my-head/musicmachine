import Link from 'next/link';

// Consistent genre data, ideally from a shared utility or API in a larger app
const mainGenres = [
  { name: 'Rock', path: 'rock', subGenres: [{ name: 'Classic Rock', path: 'classic-rock' }, { name: 'Alternative Rock', path: 'alternative-rock' }, { name: 'Hard Rock', path: 'hard-rock' }] },
  { name: 'Metal', path: 'metal', subGenres: [{ name: 'Heavy Metal', path: 'heavy-metal' }, { name: 'Thrash Metal', path: 'thrash-metal' }] },
  { name: 'Pop', path: 'pop', subGenres: [{ name: 'Synth Pop', path: 'synth-pop' }, { name: 'Indie Pop', path: 'indie-pop' }, { name: 'Dance Pop', path: 'dance-pop' }] },
  { name: 'Electronic', path: 'electronic', subGenres: [{ name: 'House', path: 'house' }, { name: 'Techno', path: 'techno' }, { name: 'Trance', path: 'trance' }] },
  { name: 'Hip Hop / Rap', path: 'hiphop-rap', subGenres: [{ name: 'Boom Bap', path: 'boom-bap' }, { name: 'Trap', path: 'trap' }] },
  { name: 'Jazz', path: 'jazz', subGenres: [{ name: 'Swing', path: 'swing' }, { name: 'Bebop', path: 'bebop' }] },
  // Add more main genres as defined in music_genres_list.md for full navigation
  // For brevity in this example, only a few are listed with subgenres.
  // The full list from genres/page.tsx should be used for completeness.
];

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[var(--color-blue-dark)] to-[var(--color-blue-medium)] text-[var(--color-text-black)] p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-4">
          <h1 className="site-header-title text-5xl md:text-6xl font-bold">
            <Link href="/">MUSICMACHINE</Link>
          </h1>
          <p className="text-sm md:text-md mt-1">
            Your source for professional MIDI files for all your VST instruments.
          </p>
        </div>

        <nav className="w-full mb-2">
          <ul className="flex flex-wrap justify-center space-x-3 md:space-x-6 text-sm md:text-lg">
            <li><Link href="/" className="hover:text-[var(--color-contrast-cream)] transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-[var(--color-contrast-cream)] transition-colors">About Us</Link></li>
            <li><Link href="/how-to-use" className="hover:text-[var(--color-contrast-cream)] transition-colors">How to Use MIDI</Link></li>
            <li><Link href="/genres" className="hover:text-[var(--color-contrast-cream)] transition-colors">Genres</Link></li>
            <li><Link href="/donate" className="hover:text-[var(--color-contrast-cream)] transition-colors">Donation</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-contrast-cream)] transition-colors">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Dynamic Genre Navigation with Dropdowns */}
        <nav className="w-full">
          <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4">
            {mainGenres.map((genre) => (
              <li key={genre.path} className="relative group">
                <Link href={`/genre/${genre.path.toLowerCase()}`} legacyBehavior>
                  <a className="px-3 py-2 rounded-md bg-[var(--color-blue-light)] hover:bg-[var(--color-contrast-cream)] text-[var(--color-text-black)] transition-colors text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-dark)] inline-block" style={{borderRadius: "var(--radius)"}}>
                    {genre.name}
                  </a>
                </Link>
                {genre.subGenres && genre.subGenres.length > 0 && (
                  <ul className="absolute left-0 mt-1 w-48 bg-[var(--color-contrast-cream)] text-[var(--color-text-black)] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50 overflow-hidden" style={{borderRadius: "var(--radius)"}}>
                    {genre.subGenres.map((subGenre) => (
                      <li key={subGenre.path}>
                        <Link href={`/genre/${genre.path.toLowerCase()}/${subGenre.path.toLowerCase().replace(/\s+/g, '-')}`} 
                              className="block px-4 py-2 text-xs md:text-sm hover:bg-[var(--color-blue-light)] transition-colors">
                          {subGenre.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

