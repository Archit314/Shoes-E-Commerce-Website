import { useState } from "react";
import { ShoppingBag, Menu, X, LogInIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md shadow-lg px-6 py-4 flex justify-between items-center rounded-b-2xl border-b border-white/20">
      {/* Logo */}
      <div className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
        Kick<span className="text-pink-400">Z</span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-white font-medium">
        <Link className="hover:text-pink-300 transition-colors duration-300 cursor-pointer" to={"/"}>Home</Link>
        <Link className="hover:text-pink-300 transition-colors duration-300 cursor-pointer" to={"/"}>Shop</Link>
        <Link className="hover:text-pink-300 transition-colors duration-300 cursor-pointer" to={"/about"}>About</Link>
        <Link className="hover:text-pink-300 transition-colors duration-300 cursor-pointer" to={"/"}>Contact</Link>
        <Link className="hover:text-pink-300 transition-colors duration-300 cursor-pointer" to={"/"}><ShoppingBag/></Link>
      </ul>

      {/* Auth Button - Desktop */}
      <div className="hidden md:block">
        <button className="flex items-center gap-2 bg-white text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold">
          <LogInIcon />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <button className="bg-white text-pink-600 hover:bg-pink-600 hover:text-white p-2 rounded-full shadow-lg transition-all duration-300">
          <LogInIcon size={20} />
        </button>
        <button
          className="text-white hover:text-pink-300 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg md:hidden flex flex-col items-center space-y-6 py-6 text-white font-medium animate-fadeIn">
          <Link className="list-none hover:text-pink-300 cursor-pointer" to={"/"}>Home</Link>
          <Link className="list-none hover:text-pink-300 cursor-pointer" to={"/"}>Shop</Link>
          <Link className="list-none hover:text-pink-300 cursor-pointer" to={"/about"}>About</Link>
          <Link className="list-none hover:text-pink-300 cursor-pointer" to={"/"}>Contact</Link>
          <Link className="list-none hover:text-pink-300 cursor-pointer" to={"/"}><ShoppingBag/></Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
