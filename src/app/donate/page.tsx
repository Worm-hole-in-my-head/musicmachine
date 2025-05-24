import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate - MusicMachine",
  description: "Support MusicMachine and help us continue providing free MIDI files for musicians and producers.",
};

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-[var(--color-text-black)]">Support MusicMachine</h1>
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md" style={{borderRadius: "var(--radius)"}}>
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">Why Donate?</h2>
        <p className="text-gray-700 mb-6">
          MusicMachine is committed to providing high-quality MIDI files completely free of charge. Your donations help us maintain our website, create new MIDI content, and continue offering these resources to musicians and producers worldwide.
        </p>
        
        <div className="bg-[var(--color-blue-light)] p-5 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2 text-[var(--color-text-black)]">Your Support Makes a Difference</h3>
          <p className="text-gray-700">
            Every contribution, no matter the size, helps us expand our MIDI library and improve our services. As a token of our appreciation, donors will receive early access to new MIDI packs and exclusive content.
          </p>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">Donation Options</h2>
        
        <div className="space-y-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-text-black)]">PayPal</h3>
            <p className="text-gray-700 mb-4">
              The easiest way to support us is through PayPal. All donations go directly to maintaining and expanding MusicMachine.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://paypal.me/digitalhumanoid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[var(--color-blue-dark)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-md inline-flex items-center"
                style={{borderRadius: "var(--radius)"}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.217a.77.77 0 0 1 .76-.656h6.585c2.251 0 3.835.598 4.713 1.777.833 1.121.872 2.537.113 4.413l-.061.152c-.044.111-.091.223-.142.338-.811 1.87-2.291 3.088-4.408 3.628a9.531 9.531 0 0 1-2.574.342H6.719a.77.77 0 0 0-.759.656l-1.51 7.01a.641.641 0 0 1-.633.54h-.741zm2.292-10.62h2.797c.972 0 1.746-.24 2.297-.715.551-.474.854-1.136.903-1.972a1.29 1.29 0 0 0-.279-.967c-.187-.251-.475-.44-.862-.563-.388-.122-.992-.184-1.813-.184H9.98l-.612 4.401z"/>
                  <path d="M22.816 7.198c.344 2.333-.58 4.634-2.772 6.903-2.192 2.27-5.008 3.405-8.448 3.405H9.683l-1.584 7.35h-4.15l-.423 1.955h4.149l1.585-7.35h1.913c3.44 0 6.256-1.135 8.448-3.405 2.192-2.269 3.116-4.57 2.772-6.903-.172-1.165-.664-2.084-1.477-2.755.893.682 1.478 1.6 1.755 2.755h.145z"/>
                </svg>
                Donate with PayPal
              </a>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-text-black)]">Direct Transfer</h3>
            <p className="text-gray-700 mb-4">
              You can also support us by sending a donation directly to our email address:
            </p>
            <div className="bg-gray-50 p-3 rounded text-center">
              <span className="font-medium">digitalhumanoid@outlook.com</span>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-text-black)]">How Your Donation Helps</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Server and hosting costs to keep MusicMachine online</li>
          <li>Development of new MIDI content across all genres</li>
          <li>Website improvements and new features</li>
          <li>Expansion of our MIDI library with more instruments and styles</li>
          <li>Creation of educational resources about MIDI and music production</li>
        </ul>
        
        <div className="text-center mt-8">
          <h3 className="text-xl font-semibold mb-2 text-[var(--color-text-black)]">Thank You for Your Support!</h3>
          <p className="text-gray-700">
            We appreciate every donation and are committed to continuing our mission of providing free, high-quality MIDI files to the music community.
          </p>
        </div>
      </div>
    </div>
  );
}
