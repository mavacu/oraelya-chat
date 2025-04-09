import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md fixed top-0 left-0 z-50">
      <Link href="/" className="text-goldLight text-2xl font-oraelya tracking-wider">
        Oraelya
      </Link>
      <div className="space-x-6 text-white text-sm md:text-base font-body">
        <a href="#oracle" className="hover:text-goldLight transition">Oracle</a>
        <a href="#about" className="hover:text-goldLight transition">About</a>
        <Link href="/nft" className="hover:text-goldLight transition">NFT Access</Link>
      </div>
    </nav>
  );
}
