import { TbHomeSearch } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center p-4 justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl flex gap-2 items-center font-bold text-gray-800">
          <TbHomeSearch className="text-blue-500" />
          <span>MERN</span>
          <span className="text-gray-600">Estate</span>
        </h1>

        {/* Search Bar */}
        <form className="hidden sm:block">
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-full shadow-sm border border-gray-200 hover:border-gray-300 focus-within:border-blue-400 transition">
            <CiSearch className="text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none flex-1 text-sm text-gray-700"
            />
          </div>
        </form>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-6 font-medium text-gray-700">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-500 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/sign-in"
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-sm transition duration-200"
            >
              Sign In
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden">
          <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
            <span className="sr-only">Open Menu</span>
            <div className="w-6 h-1 bg-gray-800 mb-1"></div>
            <div className="w-6 h-1 bg-gray-800 mb-1"></div>
            <div className="w-6 h-1 bg-gray-800"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
