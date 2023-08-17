import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-semibold text-gray-800">
            Logo
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/result" className="text-gray-600 hover:text-gray-800">
            Result
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-800"
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100">
          <Link
            to="/"
            className="block py-2 px-4 text-gray-600 hover:text-gray-800"
          >
            Home
          </Link>
          <Link
            to="/result"
            className="block py-2 px-4 text-gray-600 hover:text-gray-800"
          >
            Result
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
