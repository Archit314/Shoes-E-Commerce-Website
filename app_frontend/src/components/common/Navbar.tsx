function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md shadow-lg px-6 py-4 flex justify-between items-center rounded-b-2xl border-b border-white/20">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
            Kick<span className="text-pink-400">Z</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
            <li className="hover:text-pink-300 transition-colors duration-300 cursor-pointer">Home</li>
            <li className="hover:text-pink-300 transition-colors duration-300 cursor-pointer">Shop</li>
            <li className="hover:text-pink-300 transition-colors duration-300 cursor-pointer">About</li>
            <li className="hover:text-pink-300 transition-colors duration-300 cursor-pointer">Contact</li>
        </ul>

        {/* Cart Button */}
        <button className="flex items-center gap-2 bg-white text-pink-600 hover:bg-pink-600 hover:text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold">
            🛒 Cart
        </button>
    </nav>
  );
}

export default Navbar;
