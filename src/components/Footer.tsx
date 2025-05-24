import { Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-blue-dark)] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">MUSICMACHINE</h2>
            <p className="text-sm mt-2">Your source for professional MIDI files</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-[var(--color-blue-light)] transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="hover:text-[var(--color-blue-light)] transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-[var(--color-blue-medium)] mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} MusicMachine. All rights reserved.</p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-[var(--color-blue-light)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-blue-light)] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[var(--color-blue-light)] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
