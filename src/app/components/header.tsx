import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <nav className="p-4">
        <ul className="container mx-auto flex justify-between items-center gap-8">
          
          <li className="text-2xl font-bold">
            <Link href="/">AI Solutions</Link>
          </li>

          <li className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-gray-400 transition-colors duration-300">
              Home
            </Link>
            <Link href="/responsive" className="hover:text-gray-400 transition-colors duration-300">
              Blogs
            </Link>
            <Link href="/contact" className="hover:text-gray-400 transition-colors duration-300">
              Contact
            </Link>
          </li>

          <li className="md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none hover:text-gray-400"
            >
              &#9776;
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
