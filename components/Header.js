import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white text-black py-4">
      <nav className="container mx-auto flex justify-between items-center px-4" aria-label="Main Navigation">
        <button
          className="text-black focus:outline-none absolute top-4 right-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
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
          role="menu"
          style={{ display: isMenuOpen ? 'block' : 'none' }}
        >
          <li role="menuitem"><button onClick={() => handleScroll('top')} className="hover:underline">Top</button></li>
          <li role="menuitem"><button onClick={() => handleScroll('about')} className="hover:underline">About</button></li>
          <li role="menuitem"><button onClick={() => handleScroll('portfolio')} className="hover:underline">Portfolio</button></li>
          <li role="menuitem"><button onClick={() => handleScroll('skill')} className="hover:underline">Skill</button></li>
        </ul>
      </nav>
    </header>
  );
}
