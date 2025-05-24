import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contact Us - MusicMachine",
  description: "Get in touch with the MusicMachine team for questions, feedback, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-[var(--color-text-black)]">Contact Us</h1>
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md" style={{borderRadius: "var(--radius)"}}>
        <p className="text-gray-700 mb-6">
          Have questions, feedback, or suggestions? We&apos;d love to hear from you! Fill out the form below or email us directly at <a href="mailto:yourmusicmachine@outlook.com" className="text-[var(--color-blue-dark)] hover:underline">yourmusicmachine@outlook.com</a>.
        </p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-medium)]"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-medium)]"
              placeholder="john@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-medium)]"
              placeholder="Question about MIDI files"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-blue-medium)]"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="px-6 py-3 bg-[var(--color-blue-dark)] text-white font-semibold rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-md"
            style={{borderRadius: "var(--radius)"}}
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-text-black)]">Other Ways to Connect</h2>
          <p className="text-gray-700 mb-2">
            Email: <a href="mailto:yourmusicmachine@outlook.com" className="text-[var(--color-blue-dark)] hover:underline">yourmusicmachine@outlook.com</a>
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-[var(--color-blue-dark)] hover:text-[var(--color-blue-medium)]">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-[var(--color-blue-dark)] hover:text-[var(--color-blue-medium)]">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
