import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Search, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Announcement bar */}
      <div className="bg-gray-900 text-white text-xs py-1.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-2">
          <Zap size={12} className="text-yellow-400 fill-yellow-400 animate-pulse" />
          <span className="font-medium">FLASH SALE: Up to 25% OFF selected furniture — Today Only!</span>
          <Zap size={12} className="text-yellow-400 fill-yellow-400 animate-pulse" />
        </div>
      </div>

      {/* Top bar */}
      <div className="bg-red-600 text-white text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="flex items-center gap-1">
            <Phone size={14} />
            +254 700 000 000
          </span>
          <span className="hidden sm:block">Free delivery on orders over KSh 50,000</span>
          <span className="text-red-100">Mon - Sat: 8AM - 6PM</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-red-600 text-white font-bold text-xl px-3 py-1.5 rounded">M</div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Morara Home
              </h1>
              <p className="text-xs text-red-600 font-medium -mt-0.5">FURNITURE</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Shop</Link>
            <Link to="/shop" className="text-red-600 font-semibold transition-colors flex items-center gap-1">
              <Zap size={14} className="fill-red-600" /> Flash Sales
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-gray-100 text-gray-500 text-sm px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors min-w-[200px]">
              <Search size={16} />
              Search furniture...
            </button>
            <Link to="/cart" className="relative p-2 hover:bg-red-50 rounded-full transition-colors">
              <ShoppingCart className="text-gray-700" size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-red-50 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 border-t pt-3 flex flex-col gap-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-red-600 font-medium">Home</Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-red-600 font-medium">Shop</Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-red-600 font-semibold flex items-center gap-1">
              <Zap size={14} className="fill-red-600" /> Flash Sales
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-red-600 font-medium">About</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-red-600 font-medium">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
