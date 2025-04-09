import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Text */}
        <Link href="/">
          <span className="text-goldLight font-oraelya text-2xl tracking-wider hover:text-white transition duration-200">
            Oraelya
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-4 md:space-x-8 text-sm md:text-base font-body">
          <li>
            <a href="#oracle" className="hover:text-goldLight transition duration-200">Oracle</a>
          </li>
          <li>
            <a href="#about" className="hover:text-goldLight transition duration-200">About</a>
          </li>
          <li>
            <a href="#nft" className="hover:text-goldLight transition duration-200">NFT Access</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
