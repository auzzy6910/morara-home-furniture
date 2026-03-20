import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, Timer, Sparkles, Tag, Star, ShoppingCart, Smartphone, Laptop, Shirt, Sofa, Utensils, Dumbbell, Baby, Wrench, ChevronRight, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

export default function HomePage() {
  const monthlyOffers = products.filter(p => p.isMonthlyOffer);
  const flashSales = products.filter(p => p.isFlashSale);
  const featuredProducts = products.slice(0, 4);
  const exclusiveProducts = products.filter(p => p.discount);
  const allProducts = products;

  const promoImages = [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop',
  ];

  const [currentPromoImage, setCurrentPromoImage] = useState(0);
  const [activeExclusive, setActiveExclusive] = useState(0);
  const { addToCart } = useCart();
  const [flashTimeLeft, setFlashTimeLeft] = useState({ hours: 5, minutes: 23, seconds: 47 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromoImage((prev) => (prev + 1) % promoImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveExclusive((prev) => (prev + 1) % exclusiveProducts.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [exclusiveProducts.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlashTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 5, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  const sidebarCategories = [
    { name: 'Living Room', icon: Sofa },
    { name: 'Electronics', icon: Smartphone },
    { name: 'Computing', icon: Laptop },
    { name: 'Fashion', icon: Shirt },
    { name: 'Dining Room', icon: Utensils },
    { name: 'Sports & Fitness', icon: Dumbbell },
    { name: 'Baby Products', icon: Baby },
    { name: 'Office', icon: Wrench },
  ];

  return (
    <div className="bg-[#F5F5F5]">
      {/* 3-COLUMN E-COMMERCE HEADER GRID */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-4">
          {/* LEFT: Category Sidebar (hidden on mobile) */}
          <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-[#E31837] text-white font-semibold text-sm px-4 py-3 flex items-center gap-2">
              <Sofa size={16} />
              Shop by Category
            </div>
            <nav className="divide-y divide-gray-100">
              {sidebarCategories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <Link key={cat.name} to="/shop" className="flex items-center justify-between px-4 py-2.5 hover:bg-red-50 hover:text-[#E31837] transition-colors text-sm text-gray-700 group">
                    <div className="flex items-center gap-3">
                      <IconComponent size={16} className="text-gray-400 group-hover:text-[#E31837] transition-colors" />
                      <span>{cat.name}</span>
                    </div>
                    <ChevronRight size={14} className="text-gray-300 group-hover:text-[#E31837]" />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* CENTER: Original Hero Section (preserved exactly) */}
          <div className="relative rounded-lg overflow-hidden shadow-sm" style={{ minHeight: '420px' }}>
            <img src="/morara-home-furniture.jpg" alt="Morara Home Furniture Store" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-6 md:px-10 w-full">
                <div className="max-w-xl">
                  <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-3">Welcome to</p>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Morara Home <span className="text-red-500">Furniture</span>
                  </h1>
                  <p className="text-gray-200 text-base mb-6 leading-relaxed">
                    Transform your living spaces with our premium quality furniture. Comfort, style, and durability — all under one roof.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/shop" className="bg-[#E31837] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#C4142F] transition-colors flex items-center gap-2 text-sm">
                      Shop Now <ArrowRight size={16} />
                    </Link>
                    <Link to="/about" className="border-2 border-white text-white px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-sm">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Mini-Promo Banners (hidden on mobile) */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="bg-[#E31837] rounded-lg overflow-hidden shadow-sm flex-1 relative group cursor-pointer">
              <Link to="/shop" className="block h-full p-4 flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <Zap size={14} className="text-yellow-300 fill-yellow-300" />
                    <span className="text-yellow-300 font-bold text-xs uppercase tracking-wider">Flash Sales</span>
                  </div>
                  <p className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Up to 50% OFF</p>
                  <p className="text-red-200 text-xs mt-1">Limited time deals</p>
                </div>
                <div className="mt-3">
                  <span className="bg-white text-[#E31837] text-xs font-bold px-3 py-1.5 rounded inline-flex items-center gap-1">Shop Now <ArrowRight size={12} /></span>
                </div>
              </Link>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-sm flex-1 relative group cursor-pointer">
              <Link to="/help-center" className="block h-full p-4 flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    <Headphones size={14} className="text-[#E31837]" />
                    <span className="text-[#E31837] font-bold text-xs uppercase tracking-wider">Service Centers</span>
                  </div>
                  <p className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>24/7 Support</p>
                  <p className="text-gray-400 text-xs mt-1">Expert help anytime</p>
                </div>
                <div className="mt-3">
                  <span className="bg-[#E31837] text-white text-xs font-bold px-3 py-1.5 rounded inline-flex items-center gap-1">Get Help <ArrowRight size={12} /></span>
                </div>
              </Link>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-[#E31837] text-white py-5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/track-order" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <Truck size={26} className="shrink-0" />
            <div><p className="font-semibold text-sm">Free Delivery</p><p className="text-red-200 text-xs">Orders over KSh 50,000</p></div>
          </Link>
          <Link to="/warranty" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <Shield size={26} className="shrink-0" />
            <div><p className="font-semibold text-sm">Quality Guarantee</p><p className="text-red-200 text-xs">Premium materials</p></div>
          </Link>
          <Link to="/help-center" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <Headphones size={26} className="shrink-0" />
            <div><p className="font-semibold text-sm">24/7 Support</p><p className="text-red-200 text-xs">Always here to help</p></div>
          </Link>
          <Link to="/furniture-care" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <Timer size={26} className="shrink-0" />
            <div><p className="font-semibold text-sm">Fast Assembly</p><p className="text-red-200 text-xs">Professional setup</p></div>
          </Link>
        </div>
      </section>

      {/* FLASH SALES with Red Countdown */}
      {flashSales.length > 0 && (
        <section className="py-10 bg-white mt-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4 flex-wrap">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Flash <span className="text-[#E31837]">Sales</span>
                </h2>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500 mr-1">Time Left:</span>
                  <span className="bg-[#E31837] text-white font-mono font-bold text-sm px-2 py-1 rounded">{formatTime(flashTimeLeft.hours)}</span>
                  <span className="text-[#E31837] font-bold">:</span>
                  <span className="bg-[#E31837] text-white font-mono font-bold text-sm px-2 py-1 rounded">{formatTime(flashTimeLeft.minutes)}</span>
                  <span className="text-[#E31837] font-bold">:</span>
                  <span className="bg-[#E31837] text-white font-mono font-bold text-sm px-2 py-1 rounded">{formatTime(flashTimeLeft.seconds)}</span>
                </div>
              </div>
              <Link to="/shop" className="hidden sm:flex items-center gap-1 text-[#E31837] font-semibold text-sm hover:underline">
                See All <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
              {flashSales.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow min-w-[200px] w-[200px] flex-shrink-0">
                  <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                    {product.discount && (<span className="absolute top-2 right-2 bg-[#E31837] text-white text-xs font-bold px-2 py-1 rounded">-{product.discount}%</span>)}
                  </Link>
                  <div className="p-3">
                    <Link to={`/product/${product.id}`}><h3 className="font-medium text-gray-900 text-sm mb-1 truncate hover:text-[#E31837] transition-colors">{product.name}</h3></Link>
                    <div className="flex items-center gap-1 mb-1"><Star size={12} className="fill-yellow-400 text-yellow-400" /><span className="text-xs text-gray-500">{product.rating}</span></div>
                    <span className="text-[#E31837] font-bold text-sm">{formatPrice(product.price)}</span>
                    {product.originalPrice && (<span className="text-xs text-gray-400 line-through ml-1">{formatPrice(product.originalPrice)}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Monthly Offers */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-[#E31837] font-semibold text-sm uppercase tracking-widest">Limited Time</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>Monthly Offers and <span className="text-[#E31837]">Discounts</span></h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Don\u2019t miss out on our exclusive monthly deals. Save big on premium furniture pieces for a limited time only!</p>
          </div>
          <div className="bg-gradient-to-r from-[#E31837] to-[#C4142F] rounded-2xl p-8 md:p-12 mb-10 text-white relative overflow-hidden mt-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="flex-1">
                <p className="text-red-200 font-medium text-sm uppercase tracking-widest">March 2026 Special</p>
                <h3 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>Up to 25% OFF</h3>
                <p className="text-red-100 mt-4 max-w-md mb-8 text-lg">Enjoy massive discounts on selected premium furniture this month.</p>
                <Link to="/shop" className="inline-block bg-white text-[#E31837] px-8 py-3.5 rounded-lg font-bold hover:bg-red-50 transition-colors shadow-lg hover:shadow-xl">View All Offers</Link>
              </div>
              <div className="flex-1 flex justify-center md:justify-end w-full">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full" />
                  <div className="relative w-full h-full animate-float">
                    {promoImages.map((src, index) => (
                      <img key={index} src={src} alt={`Special Offer Furniture ${index + 1}`} className={`absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/20 transition-all duration-1000 ease-in-out ${index === currentPromoImage ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`} />
                    ))}
                    <div className="absolute top-4 -right-4 md:top-8 md:-right-6 bg-[#E31837] text-white font-black text-sm md:text-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-2xl border-4 border-white transform rotate-12 animate-pulse z-20">SALE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyOffers.slice(0, 6).map(product => (<ProductCard key={product.id} product={product} />))}
          </div>
        </div>
      </section>

      {/* RECOMMENDED FOR YOU - 5-Column Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Recommended <span className="text-[#E31837]">for You</span></h2>
            <Link to="/shop" className="hidden sm:flex items-center gap-1 text-[#E31837] font-semibold text-sm hover:underline">See All <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                  {product.discount && (<span className="absolute top-2 left-2 bg-[#E31837] text-white text-[10px] font-bold px-2 py-1 rounded-sm">-{product.discount}%</span>)}
                </Link>
                <div className="p-3">
                  <Link to={`/product/${product.id}`}><h3 className="font-medium text-gray-800 text-sm mb-1.5 line-clamp-2 hover:text-[#E31837] transition-colors leading-tight min-h-[2.5rem]">{product.name}</h3></Link>
                  <div className="flex items-center gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map(star => (<Star key={star} size={12} className={star <= Math.round(product.rating) ? 'fill-orange-400 text-orange-400' : 'fill-gray-200 text-gray-200'} />))}
                    <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2"><span className="text-[#E31837] font-bold text-sm">{formatPrice(product.price)}</span></div>
                  {product.originalPrice && (<span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>)}
                  <button onClick={() => addToCart(product)} className="mt-2 w-full bg-[#E31837] text-white text-xs font-semibold py-2 rounded hover:bg-[#C4142F] transition-colors flex items-center justify-center gap-1">
                    <ShoppingCart size={14} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:hidden"><Link to="/shop" className="inline-flex items-center gap-2 text-[#E31837] font-semibold text-sm">View All Products <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[#E31837] font-semibold text-sm uppercase tracking-widest">Our Collection</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>Featured Products</h2>
            </div>
            <Link to="/shop" className="hidden sm:flex items-center gap-2 text-[#E31837] font-semibold hover:underline transition-colors">View All <ArrowRight size={18} /></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (<ProductCard key={product.id} product={product} />))}
          </div>
          <div className="text-center mt-8 sm:hidden"><Link to="/shop" className="inline-flex items-center gap-2 text-[#E31837] font-semibold">View All Products <ArrowRight size={18} /></Link></div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-[#E31837] font-semibold text-sm uppercase tracking-widest">Browse</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Living Room', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop', count: 4 },
              { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop', count: 3 },
              { name: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop', count: 1 },
              { name: 'Office', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop', count: 2 },
            ].map(cat => (
              <Link key={cat.name} to="/shop" className="relative rounded-xl overflow-hidden group h-48 md:h-64">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white"><h3 className="font-bold text-lg">{cat.name}</h3><p className="text-sm text-gray-300">{cat.count} items</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Offers */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#E31837]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E31837]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E31837]/20 border border-[#E31837]/30 rounded-full px-4 py-1.5 mb-4">
              <Sparkles size={14} className="text-red-400" />
              <span className="text-red-400 font-semibold text-xs uppercase tracking-widest">Exclusive Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Get Exclusive <span className="text-[#E31837]">Offers</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">Hand-picked premium furniture at unbeatable prices.</p>
          </div>
          <div className="relative mb-14">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
              {exclusiveProducts.map((product, index) => (
                <div key={product.id} className={`transition-all duration-700 ease-in-out ${index === activeExclusive ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
                  <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                    <div className="flex-1 w-full md:w-auto">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-[#E31837]/20 rounded-2xl blur-2xl group-hover:bg-[#E31837]/30 transition-all" />
                        <Link to={`/product/${product.id}`}><img src={product.image} alt={product.name} className="relative w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500" /></Link>
                        {product.discount && (<div className="absolute top-4 left-4 bg-[#E31837] text-white px-3 py-1.5 rounded-lg font-bold text-sm">-{product.discount}% OFF</div>)}
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">{product.category}</span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{product.name}</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">{product.description}</p>
                      <div className="flex items-center gap-4 justify-center md:justify-start mb-8">
                        <span className="text-3xl font-bold text-[#E31837]">{formatPrice(product.price)}</span>
                        {product.originalPrice && (<span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>)}
                      </div>
                      <Link to={`/product/${product.id}`} className="inline-flex items-center gap-2 bg-[#E31837] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#C4142F] transition-all hover:shadow-lg hover:shadow-red-600/25">View Deal <ArrowRight size={18} /></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
              {exclusiveProducts.map((_, index) => (
                <button key={index} onClick={() => setActiveExclusive(index)} className={`transition-all duration-300 rounded-full ${index === activeExclusive ? 'w-8 h-2 bg-[#E31837]' : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'}`} />
              ))}
            </div>
          </div>
          <div className="relative mb-14 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />
            <div className="flex animate-slide-left" style={{ width: `${exclusiveProducts.length * 2 * 280}px` }}>
              {[...exclusiveProducts, ...exclusiveProducts].map((product, index) => (
                <Link key={`${product.id}-${index}`} to={`/product/${product.id}`} className="flex-shrink-0 w-[260px] mx-2.5 group">
                  <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-[#E31837]/50 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500" />
                      {product.discount && (<div className="absolute top-2 right-2 bg-[#E31837] text-white text-xs font-bold px-2 py-1 rounded">-{product.discount}%</div>)}
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-red-400 font-medium uppercase mb-1">{product.category}</p>
                      <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-red-400 transition-colors">{product.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-[#E31837] font-bold">{formatPrice(product.price)}</span>
                        {product.originalPrice && (<span className="text-xs text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>)}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#E31837] to-[#C4142F] rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Tag size={18} className="text-red-200" />
                  <span className="text-red-200 text-xs font-semibold uppercase tracking-widest">Never Miss a Deal</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Subscribe for Exclusive Offers</h3>
                <p className="text-red-100 mt-2 max-w-md">Be the first to know about new arrivals, flash sales, and members-only discounts.</p>
              </div>
              <form className="flex gap-2 w-full md:w-auto" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200/60 focus:outline-none focus:border-white focus:bg-white/20 transition-all" />
                <button className="bg-white text-[#E31837] px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors shrink-0 shadow-lg">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
