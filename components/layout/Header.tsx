import Navbar from './Navbar';
import Link from 'next/link';
// import Navbar from './Navbar';
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#1A535C] to-[#2EC4B6] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <img src="/logo.png" alt="Ragas Modas Logo" className="h-12 mr-3" />
            <span className="text-2xl font-bold text-white">Ragas Modas</span>
          </div>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}