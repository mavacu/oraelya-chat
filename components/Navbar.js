import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-mysticBlack text-white py-4 px-6 fixed top-0 left-0 z-50 shadow-md backdrop-blur-sm">
      <ul className="flex space-x-6 justify-center font-body text-sm md:text-base">
        <li>
          <Link href="#oracle" scroll={false} className="hover:text-goldLight transition duration-200">
            Oracle
          </Link>
        </li>
        <li>
          <Link href="#about" scroll={false} className="hover:text-goldLight transition duration-200">
            About
          </Link>
        </li>
        <li>
          <Link href="#nft" scroll={false} className="hover:text-goldLight transition duration-200">
            NFT Access
          </Link>
        </li>
      </ul>
    </nav>
  );
}
