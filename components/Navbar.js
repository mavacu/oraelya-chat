import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-black/40 backdrop-blur-md text-white py-4 px-6 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-goldLight font-oraelya text-xl md:text-2xl tracking-widest hover:text-white transition"
        >
          Oraelya
        </Link>

        <ul className="flex space-x-4 md:space-x-8 text-sm md:text-base font-body">
          <li>
            <a href="#oracle" className="hover:text-goldLight transition duration-300">
              Oracle
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-goldLight transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#nft" className="hover:text-goldLight transition duration-300">
              NFT Access
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
