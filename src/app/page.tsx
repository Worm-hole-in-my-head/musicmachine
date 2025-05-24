import Link from 'next/link';

export default function HomePage() {
  // Placeholder for featured MIDI files or other homepage content
  const featuredMidi = [
    { id: 1, name: "Epic Rock Anthem Intro", genre: "Rock", instrument: "Full Band" },
    { id: 2, name: "Chill Lo-Fi Beat", genre: "Hip Hop", instrument: "Sampler" },
    { id: 3, name: "Uplifting Trance Melody", genre: "Electronic", instrument: "Synth Lead" },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center p-8 bg-[var(--color-blue-light)] rounded-lg shadow-lg" style={{borderRadius: "var(--radius)"}}>
        <h2 className="text-3xl font-bold mb-4 text-[var(--color-text-black)]">Discover High-Quality MIDI Files</h2>
        <p className="text-lg mb-6 text-[var(--color-text-black)]">
          Explore a vast library of MIDI patterns for drums, guitars, bass, keyboards, and more, across all your favorite genres. Ready to use in your DAW and VST plugins.
        </p>
        <Link href="/genres"
              className="px-8 py-3 bg-[var(--color-blue-dark)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-md" style={{borderRadius: "var(--radius)"}}>
          Browse All Genres
        </Link>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6 text-center text-[var(--color-text-black)]">Featured MIDI Packs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMidi.map((midi) => (
            <div key={midi.id} className="p-6 bg-[var(--color-contrast-cream)] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" style={{borderRadius: "var(--radius)", background: "linear-gradient(to bottom, var(--color-contrast-cream), var(--color-contrast-light-grey))"}}>
              <h4 className="text-xl font-bold mb-2 text-[var(--color-text-black)]">{midi.name}</h4>
              <p className="text-sm text-gray-700 mb-1">Genre: {midi.genre}</p>
              <p className="text-sm text-gray-700 mb-4">Instrument: {midi.instrument}</p>
              <Link href={`/midi/${midi.id}`} 
                    className="inline-block px-4 py-2 bg-[var(--color-blue-medium)] text-[var(--color-text-black)] font-medium rounded-md hover:bg-[var(--color-blue-dark)] hover:text-white transition-all duration-300 text-sm" style={{borderRadius: "var(--radius)"}}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center p-8 bg-[var(--color-blue-light)] rounded-lg shadow-lg" style={{borderRadius: "var(--radius)"}}>
        <h3 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">Easy to Use & Integrate</h3>
        <p className="text-lg mb-6 text-[var(--color-text-black)]">
          All our MIDI files are structured for ease of use (Intro, Verse, Chorus, etc.) and are compatible with major DAWs and VST plugins. Find key-switched MIDI for guitars and bass, and versatile drum patterns.
        </p>
        <Link href="/how-to-use"
              className="px-8 py-3 bg-[var(--color-blue-dark)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-md" style={{borderRadius: "var(--radius)"}}>
          Learn How to Use MIDI
        </Link>
      </section>
    </div>
  );
}

