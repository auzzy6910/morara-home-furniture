import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Zap, Heart, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useTheme } from '../context/ThemeContext';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import SearchBar from './SearchBar';

export default function Header() {
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      {/* Flash Sale Banner */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-center py-2 relative overflow-hidden">
        <Link to="/shop" className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 group text-white text-sm">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-yellow-400 fill-yellow-400 animate-pulse" />
            <span className="font-bold tracking-wider">FLASH SALE</span>
            <span className="hidden sm:inline text-gray-500 ml-2">|</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-medium hidden md:inline">Up to 50% OFF</span>
            
            <div className="flex items-center gap-1 font-mono font-bold text-xs">
              <span className="bg-gray-800 text-yellow-400 px-2 py-1 rounded border border-gray-700 min-w[24px] text-center">{formatTime(timeLeft.hours)}</span>
              <span className="text-gray-500">:</span>
              <span className="bg-gray-800 text-yellow-400 px-2 py-1 rounded border border-gray-700 min-w[24px] text-center">{formatTime(timeLeft.minutes)}</span>
              <span className="text-gray-500">:</span>
              <span className="bg-gray-800 text-yellow-400 px-2 py-1 rounded border border-gray-700 min-w[24px] text-center">{formatTime(timeLeft.seconds)}</span>
            </div>

            <span className="hidden sm:inline text-gray-500">|</span>
            <span className="font-bold text-yellow-400 group-hover:underline decoration-yellow-400 underline-offset-4 transition-all">
              Shop Now
            </span>
          </div>
        </Link>
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
              <h1 className="text-xl font-bold text-gray-900 dark:text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Morara Home
              </h1>
              <p className="text-xs text-red-600 font-medium -mt-0.5">FURNITURE</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium transition-colors">Shop</Link>
            <Link to="/blog" className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium transition-colors">Blog</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Search Bar - desktop */}
            <div className="hidden md:block">
              <SearchBar />
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
            </button>

            <SignedOut>
              <div className="hidden md:flex items-center gap-3">
                <SignInButton mode="modal">
                  <button className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 transition-colors">Log In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-red-600 hover:bg-red-700 text-white rounded-full font-medium text-sm px-4 py-2 transition-colors">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative p-2 hover:bg-red-50 dark:hover:bg-gray-800 rounded-full transition-colors">
              <Heart className="text-gray-700 dark:text-gray-300" size={22} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 hover:bg-red-50 dark:hover:bg-gray-800 rounded-full transition-colors">
              <ShoppingCart className="text-gray-700 dark:text-gray-300" size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-red-50 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X size={24} className="text-gray-700 dark:text-gray-300" /> : <Menu size={24} className="text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 border-t dark:border-gray-700 pt-3 flex flex-col gap-3">
            {/* Mobile Search */}
            <div className="mb-2">
              <SearchBar />
            </div>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium">Home</Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium">Shop</Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium">Blog</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium">About</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium">Contact</Link>
            <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium">Wishlist ({wishlist.length})</Link>
            <SignedOut>
              <div className="flex flex-col gap-2 mt-2">
                <SignInButton mode="modal">
                  <button className="text-gray-700 dark:text-gray-300 hover:text-red-600 font-medium text-left">Log In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-red-600 hover:bg-red-700 text-white rounded font-medium text-center py-2 transition-colors">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </nav>
        )}
      </div>
    </header>
  );
}
