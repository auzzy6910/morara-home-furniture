import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Zap, Search, Heart, ChevronDown, Sofa, BedDouble, UtensilsCrossed, Briefcase, TreePine } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import { products } from '../data/products';

const categoryIcons: Record<string, React.ReactNode> = {
  'Living Room': <Sofa size={18} />,
  'Bedroom': <BedDouble size={18} />,
  'Dining Room': <UtensilsCrossed size={18} />,
  'Office': <Briefcase size={18} />,
  'Outdoor': <TreePine size={18} />,
};

const categoryDescriptions: Record<string, string> = {
  'Living Room': 'Sofas, Tables, Shelves & more',
  'Bedroom': 'Beds, Nightstands, Wardrobes',
  'Dining Room': 'Dining Sets, Chairs & Tables',
  'Office': 'Desks, Chairs & Storage',
  'Outdoor': 'Patio Sets, Swings & more',
};

export default function Header() {
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

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
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  const filteredProducts = searchQuery.length > 1
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const categories = ['Living Room', 'Bedroom', 'Dining Room', 'Office', 'Outdoor'];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Flash Sale Countdown Banner */}
      <div className="bg-[#E31837] text-center py-2 relative overflow-hidden">
        <Link to="/shop" className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 group text-white text-sm">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-yellow-300 fill-yellow-300 animate-pulse" />
            <span className="font-bold tracking-wider">FLASH SALE</span>
            <span className="hidden sm:inline text-white/60 ml-2">|</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-medium hidden md:inline">Up to 50% OFF</span>
            <div className="flex items-center gap-1 font-mono font-bold text-xs">
              <span className="bg-white/20 text-white px-2 py-1 rounded min-w-[28px] text-center">{formatTime(timeLeft.hours)}</span>
              <span className="text-white/60">:</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded min-w-[28px] text-center">{formatTime(timeLeft.minutes)}</span>
              <span className="text-white/60">:</span>
              <span className="bg-white/20 text-white px-2 py-1 rounded min-w-[28px] text-center">{formatTime(timeLeft.seconds)}</span>
            </div>
            <span className="hidden sm:inline text-white/60">|</span>
            <span className="font-bold text-yellow-300 group-hover:underline underline-offset-4 transition-all">Shop Now</span>
          </div>
        </Link>
      </div>

      {/* Top utility bar */}
      <div className="bg-gray-900 text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="flex items-center gap-1"><Phone size={12} /> +254 700 000 000</span>
          <span className="hidden sm:block text-gray-300">Free delivery on orders over KSh 50,000</span>
          <span className="text-gray-400">Mon - Sat: 8AM - 6PM</span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-[#E31837] text-white font-bold text-xl px-3 py-1.5 rounded">M</div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900 leading-tight">Morara Home</h1>
              <p className="text-[10px] text-[#E31837] font-semibold -mt-0.5 tracking-wider">FURNITURE</p>
            </div>
          </Link>

          <div className="flex-1 max-w-2xl relative" ref={searchRef}>
            <div className="flex">
              <input
                type="text"
                placeholder="Search for furniture, categories..."
                value={searchQuery}
                onChange={e => { setSearchQuery(e.target.value); setSearchOpen(true); }}
                onFocus={() => setSearchOpen(true)}
                className="w-full px-4 py-2.5 border-2 border-[#E31837] rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 bg-gray-50"
              />
              <button className="bg-[#E31837] text-white px-5 rounded-r-lg hover:bg-primary-700 transition-colors flex items-center">
                <Search size={18} />
              </button>
            </div>
            {searchOpen && filteredProducts.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden">
                {filteredProducts.map(product => (
                  <Link key={product.id} to={`/product/${product.id}`} onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                    <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.category}</p>
                    </div>
                    <span className="text-sm font-bold text-[#E31837] shrink-0">KSh {(product.price / 100).toLocaleString()}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <SignedOut>
              <div className="hidden lg:flex items-center gap-3">
                <SignInButton mode="modal">
                  <button className="text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors">Log In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-[#E31837] hover:bg-primary-700 text-white rounded-lg font-medium text-sm px-4 py-2 transition-colors">Sign Up</button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <Link to="/shop" className="relative p-2 hover:bg-primary-50 rounded-full transition-colors hidden sm:flex">
              <Heart className="text-gray-700" size={22} />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#E31837] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{wishlist.length}</span>
              )}
            </Link>

            <Link to="/cart" className="relative p-2 hover:bg-primary-50 rounded-full transition-colors">
              <ShoppingCart className="text-gray-700" size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#E31837] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{totalItems}</span>
              )}
            </Link>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 hover:bg-primary-50 rounded-full transition-colors">
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega menu nav bar */}
      <nav className="hidden lg:block bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1">
            <div className="relative" ref={megaMenuRef}>
              <button onClick={() => setMegaMenuOpen(!megaMenuOpen)} className="flex items-center gap-2 bg-[#E31837] text-white px-5 py-3 font-semibold text-sm hover:bg-primary-700 transition-colors">
                <Menu size={16} /> All Categories <ChevronDown size={14} className={`transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {megaMenuOpen && (
                <div className="absolute top-full left-0 w-[600px] bg-white border border-gray-200 shadow-2xl rounded-b-lg z-50 grid grid-cols-2 gap-0">
                  {categories.map(cat => {
                    const catProducts = products.filter(p => p.category === cat);
                    return (
                      <Link key={cat} to="/shop" onClick={() => setMegaMenuOpen(false)} className="flex items-start gap-3 p-4 hover:bg-primary-50 transition-colors border-b border-r border-gray-100 group">
                        <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-[#E31837] group-hover:bg-[#E31837] group-hover:text-white transition-colors shrink-0">
                          {categoryIcons[cat]}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm group-hover:text-[#E31837] transition-colors">{cat}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{categoryDescriptions[cat]}</p>
                          <p className="text-[10px] text-gray-400 mt-1">{catProducts.length} items</p>
                        </div>
                      </Link>
                    );
                  })}
                  <Link to="/shop" onClick={() => setMegaMenuOpen(false)} className="col-span-2 flex items-center justify-center gap-2 p-3 bg-gray-50 hover:bg-primary-50 text-[#E31837] font-semibold text-sm transition-colors">View All Products</Link>
                </div>
              )}
            </div>
            <Link to="/" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors">Home</Link>
            <Link to="/shop" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors">Shop</Link>
            <Link to="/about" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors">About</Link>
            <Link to="/contact" className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#E31837] transition-colors">Contact</Link>
            <div className="ml-auto flex items-center gap-4 text-xs text-gray-500">
              <Link to="/track-order" className="hover:text-[#E31837] transition-colors">Track Order</Link>
              <Link to="/help-center" className="hover:text-[#E31837] transition-colors">Help Center</Link>
              <Link to="/returns" className="hover:text-[#E31837] transition-colors">Returns</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t px-4 pb-4 pt-3 flex flex-col gap-3 shadow-lg">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-[#E31837] font-medium py-1">Home</Link>
          <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-[#E31837] font-medium py-1">Shop</Link>
          <div className="border-t border-gray-100 pt-2">
            <p className="text-xs text-gray-400 uppercase font-semibold mb-2">Categories</p>
            {categories.map(cat => (
              <Link key={cat} to="/shop" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-gray-600 hover:text-[#E31837] py-1.5 text-sm">
                {categoryIcons[cat]} {cat}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-2">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#E31837] font-medium py-1">About</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 hover:text-[#E31837] font-medium py-1">Contact</Link>
          </div>
          <SignedOut>
            <div className="flex flex-col gap-2 mt-2 border-t border-gray-100 pt-3">
              <SignInButton mode="modal">
                <button className="text-gray-700 hover:text-[#E31837] font-medium text-left">Log In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-[#E31837] hover:bg-primary-700 text-white rounded-lg font-medium text-center py-2 transition-colors">Sign Up</button>
              </SignUpButton>
            </div>
          </SignedOut>
        </nav>
      )}
    </header>
  );
}
