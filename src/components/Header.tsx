import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, HelpCircle, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Main navigation bar - Jumia style */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex items-center gap-4">
            {/* Hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="bg-red-600 text-white font-bold text-xl px-3 py-1.5 rounded">M</div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Morara Home
                </h1>
                <p className="text-[10px] text-red-600 font-medium -mt-0.5 tracking-wider">FURNITURE</p>
              </div>
            </Link>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="flex-1 flex items-center max-w-2xl">
              <div className="flex w-full">
                <div className="relative flex-1">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search furniture..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 border-r-0 rounded-l-lg text-sm focus:outline-none focus:border-red-500 bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white px-5 py-2.5 rounded-r-lg font-semibold text-sm hover:bg-red-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Right side actions */}
            <div className="flex items-center gap-1 sm:gap-3 shrink-0">
              {/* Account */}
              <Link
                to="/about"
                className="hidden md:flex items-center gap-1.5 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
              >
                <User size={20} />
                <span className="text-sm font-medium">Account</span>
                <ChevronDown size={14} />
              </Link>

              {/* Help */}
              <Link
                to="/contact"
                className="hidden md:flex items-center gap-1.5 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
              >
                <HelpCircle size={20} />
                <span className="text-sm font-medium">Help</span>
                <ChevronDown size={14} />
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="flex items-center gap-1.5 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700 relative"
              >
                <ShoppingCart size={20} />
                <span className="hidden sm:inline text-sm font-medium">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 left-5 sm:left-auto sm:-top-0.5 sm:-right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      {mobileMenuOpen && (
        <div className="bg-white border-t shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium text-sm transition-colors">
              Home
            </Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium text-sm transition-colors">
              Shop All Furniture
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium text-sm transition-colors">
              About Us
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg font-medium text-sm transition-colors">
              Contact / Help
            </Link>
            <div className="border-t my-1" />
            <div className="px-4 py-2 text-xs text-gray-500 font-semibold uppercase tracking-wider">Categories</div>
            {['Living Room', 'Bedroom', 'Dining Room', 'Office', 'Outdoor'].map(cat => (
              <Link
                key={cat}
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg text-sm transition-colors"
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
