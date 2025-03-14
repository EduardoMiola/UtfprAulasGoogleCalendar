// src/components/organisms/Header.tsx
import Link from "next/link";

const Header: React.FC = () => (
  <header className="bg-blue-600 text-white p-4">
    <nav className="flex space-x-4">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/donate" className="hover:underline">
        Donate
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
    </nav>
  </header>
);

export default Header;
