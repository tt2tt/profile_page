import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <button
          className="text-black focus:outline-none absolute top-4 right-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul
          className={`flex flex-col space-y-4 text-lg absolute top-16 right-0 w-64 bg-white shadow-md p-4 transition-transform transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <li><Link href="/" className="hover:underline">Top</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
          <li><Link href="/skill" className="hover:underline">Skill</Link></li>
        </ul>
      </nav>
    </header>
  );
}
