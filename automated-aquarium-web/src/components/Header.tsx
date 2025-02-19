// app/header.tsx

// Import necessary modules
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Define the Header component
export default function Header() {
  return (
    <header className="text-white py-4 sticky top-0 z-50 font-[family-name:var(--font-geist-sans)] h-32">
      {/* Header container */}
      <div className="container mx-auto px-4 flex justify-center items-center md:justify-between relative">
        {/* Website title */}
        <h1 className="text-xl font-semibold">          automatedAquarium        </h1>
        {/* Navigation menu */}
        <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-x-6">
            {/* Navigation links */}
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Social media icons */}
        <div className="hidden md:block">
          <SocialIcons />
        </div>
        {/* Add Mobile Navigation Toggle Here */}
      </div>
    </header>
  );
}

// Define the SocialIcons component
function SocialIcons() {
  return (
    <div className="flex gap-x-4">
      {/* LinkedIn icon */}
      <a
        href="https://www.linkedin.com/in/jos%C3%A9-ram%C3%B3n-h-572a86234/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-white hover:text-gray-300" />
      </a>
      {/* GitHub icon */}
      <a
        href="https://github.com/Joserra13"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-white hover:text-gray-300" />
      </a>
      {/* Add more social media icons as needed */}
    </div>
  );
}
