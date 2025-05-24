import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - MusicMachine",
  description: "Learn about MusicMachine and our mission to provide high-quality MIDI files for musicians and producers.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-[var(--color-text-black)]">About MusicMachine</h1>
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md" style={{borderRadius: "var(--radius)"}}>
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          MusicMachine was created with a simple goal: to provide musicians, producers, and creators with high-quality MIDI files that can be easily integrated into any Digital Audio Workstation (DAW). We believe that everyone should have access to professional-grade musical building blocks, regardless of their technical skill level or budget.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">What We Offer</h2>
        <p className="text-gray-700 mb-6">
          Our extensive library contains thousands of MIDI files across multiple genres, instruments, and song structures. Whether you&apos;re looking for drum patterns, guitar riffs, bass lines, or keyboard melodies, MusicMachine has you covered. All our files are meticulously crafted to work seamlessly with popular VST plugins and instruments.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">Why Choose Us</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>All MIDI files are free to download and use in your productions</li>
          <li>Organized by genre, instrument, and song structure for easy navigation</li>
          <li>Compatible with all major DAWs including Ableton, FL Studio, Logic Pro, and more</li>
          <li>Guitar and bass MIDI files include key switches for enhanced playability</li>
          <li>Regular updates with new content across all genres</li>
          <li>Community-driven approach with user suggestions welcomed</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">Support MusicMachine</h2>
        <p className="text-gray-700">
          While all our MIDI files are available for free, we appreciate donations to help maintain and expand our library. If you&apos;ve found our resources valuable, please consider supporting us through our donation page. Your contribution helps us continue providing high-quality MIDI files to creators worldwide.
        </p>
      </div>
    </div>
  );
}
