import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-green-500 text-white py-4">
      <nav className="container mx-auto flex justify-center items-center px-4">
        <ul className="flex space-x-4 text-lg">
          <li><Link href="/" className="hover:underline">Top</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
          <li><Link href="/skill" className="hover:underline">Skill</Link></li>
        </ul>
      </nav>
    </header>
  );
}