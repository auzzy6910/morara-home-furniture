import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Zap, Search, HelpCircle, Store, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

export default function Header() {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <header ref={headerRef} className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Header Strip - Help / Support & Sell on Morara */}
      <div className={`bg-[#333333] text-white text-xs transition-all duration-300 ${isScrolled ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-1.5">
          <div className="flex items-center gap-4">
            <Link to="/help-center" className="flex items-center gap-1 hover:text-orange-300 transition-colors">
              <HelpCircle size={12} />
              <span>Help / Support</span>
            </Link>
            <span className="text-gray-500">|</span>
            <Link to="/contact" className="flex items-center gap-1 hover:text-orange-300 transition-colors">
              <Store size={12} />
              <span>Sell on Morara</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-gray-400">Free delivery on orders over KSh 50,000</span>
            <span className="hidden sm:block text-gray-500">|</span>
            <span className="hidden sm:block">Mon - Sat: 8AM - 6PM</span>
          </div>
        </div>
      </div>

      {/* Flash Sale Banner */}
      <div className={`bg-[#E31837] text-center py-2 relative overflow-hidden transition-all duration-300 ${isScrolled ? 'hidden' : ''}`}>
        <Link to="/shop" className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 group text-white text-sm">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-yellow-300 fill-yellow-300 animate-pulse" />
            <span className="font-bold tracking-wider">FLASH SALE</span>
            <span className="hidden sm:inline text-white/50 ml-2">|</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-medium hidden md:inline">Up to 50% OFF</span>
            <div className="flex items-center gap-1 font-mono font-bold text-xs">
              <span className="bg-white/20 text-white px-2 py-1 rounded min-w-[24px] text-center">{formatTime(timeLeft.hours)}</span>
              <span className="text-white/70">:</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded min-w-[24px] text-center">{formatTime(timeLeft.minutes)}</span>
              <span className="text-white/70">:</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded min-w-[24px] text-center">{formatTime(timeLeft.seconds)}</span>
            </div>
            <span className="hidden sm:inline text-white/50">|</span>
            <span className="font-bold text-yellow-300 group-hover:underline decoration-yellow-300 underline-offset-4 transition-all">
              Shop Now
            </span>
          </div>
        </Link>
      </div>

      {/* Main nav with sticky search */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="bg-[#E31837] text-white font-bold text-xl px-3 py-1.5 rounded">M</div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Morara Home
                </h1>
                <p className="text-[10px] text-[#E31837] font-medium -mt-0.5">FURNITURE</p>
              </div>
            </Link>
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, brands and categories..."
                  className="w-full px-4 py-2.5 border-2 border-[#E31837] rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837]/30 bg-white"
                />
                <button className="bg-[#E31837] text-white px-5 rounded-r-lg hover:bg-[#C4142F] transition-colors flex items-center justify-center">
                  <Search size={18} />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <SignedOut>
                <div className="hidden md:flex items-center gap-3">
                  <SignInButton mode="modal">
                    <button className="text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors flex items-center gap-1">
                      Account <ChevronDown size={14} />
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="bg-[#E31837] hover:bg-[#C4142F] text-white rounded font-medium text-sm px-4 py-2 transition-colors">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <Link to="/cart" className="relative p-2 hover:bg-red-50 rounded-full transition-colors flex items-center gap-1">
                <ShoppingCart className="text-gray-700" size={22} />
                <span className="hidden md:inline text-sm font-medium text-gray-700">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#E31837] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-red-50 rounded-full transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Bar */}
      <div className="hidden md:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-6 py-2">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors">Home</Link>
            <Link to="/shop" className="text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors">Shop</Link>
            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors">Contact</Link>
            <Link to="/track-order" className="text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors">Track Order</Link>
            <Link to="/help-center" className="text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors">Help Center</Link>
          </nav>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3 shadow-lg">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-[#E31837] font-medium py-1">Home</Link>
          <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-[#E31837] font-medium py-1">Shop</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-[#E31837] font-medium py-1">About</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-[#E31837] font-medium py-1">Contact</Link>
          <Link to="/track-order" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-[#E31837] font-medium py-1">Track Order</Link>
          <Link to="/help-center" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-[#E31837] font-medium py-1">Help Center</Link>
          <div className="border-t pt-3 mt-1">
            <Link to="/help-center" onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-[#E31837] text-sm flex items-center gap-1 py-1">
              <HelpCircle size={14} /> Help / Support
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-[#E31837] text-sm flex items-center gap-1 py-1">
              <Store size={14} /> Sell on Morara
            </Link>
          </div>
          <SignedOut>
            <div className="flex flex-col gap-2 mt-2 border-t pt-3">
              <SignInButton mode="modal">
                <button className="text-gray-700 hover:text-[#E31837] font-medium text-left">Log In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-[#E31837] hover:bg-[#C4142F] text-white rounded font-medium text-center py-2 transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
        </nav>
      )}
    </header>
  );
}
