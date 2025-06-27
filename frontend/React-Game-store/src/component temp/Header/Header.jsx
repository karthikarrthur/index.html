import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../public/GAME STORE.png"


const Header = () => {
  const [cartCount] = useState(3); // Placeholder for cart
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="2xl:container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/*logo*/}

        <a href="../public/GAME STORE.png" to="/" className="flex items-center space-x-2">
    <img src={logo} alt="GameStore Logo" className="h-12 w-auto" />
    <span className="text-2xl font-bold text-indigo-600 hidden sm:block">GameStore</span>
    </a>


        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full md:w-1/2 flex items-center relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for games, consoles, accessories..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 pl-5 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <button
            type="submit"
            className="absolute right-2 text-indigo-600 font-semibold hover:text-indigo-800 transition"
          >
            🔍
          </button>
        </form>

        {/* Navigation + Cart */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-4">
            <a href="" to="/" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Home
            </a>
            <a href="" to="/products" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Products
            </a>
            <a href="" to="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              About
            </a>
          </nav>

          {/* Cart */}
          <div className="relative">
            <a href="" to="/cart" className="text-2xl text-gray-700 hover:text-indigo-600 transition">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
