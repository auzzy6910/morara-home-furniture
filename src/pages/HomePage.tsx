import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, Timer, Sparkles, Tag, ChevronLeft, ChevronRight, Sofa, BedDouble, UtensilsCrossed, Briefcase, TreePine, Lamp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, formatPrice } from '../data/products';

export default function HomePage() {
  const monthlyOffers = products.filter(p => p.isMonthlyOffer);
  const flashSales = products.filter(p => p.isFlashSale);
  const featuredProducts = products.slice(0, 4);
  const exclusiveProducts = products.filter(p => p.discount);

  const heroSlides = [
    {
      image: '/morara-home-furniture.jpg',
      badge: 'NEW ARRIVALS',
      title: 'Transform Your Home',
      subtitle: 'Premium Furniture Collection',
      description: 'Up to 25% OFF on selected items this month',
    },
    {
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      badge: 'BEST SELLERS',
      title: 'Living Room Essentials',
      subtitle: 'Comfort & Style Combined',
      description: 'Discover our most popular living room furniture',
    },
    {
      image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=300&fit=crop',
      badge: 'FLASH SALE',
      title: 'Bedroom Collection',
      subtitle: 'Sleep in Luxury',
      description: 'Up to 50% OFF on bedroom furniture this week',
    },
    {
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop',
      badge: 'NEW ARRIVAL',
      title: 'Dining Sets',
      subtitle: 'Gather Around Style',
      description: 'Premium dining sets for memorable meals',
    },
  ];

  const promoImages = [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPromoImage, setCurrentPromoImage] = useState(0);
  const [activeExclusive, setActiveExclusive] = useState(0);
  const [flashTimeLeft, setFlashTimeLeft] = useState({ hours: 5, minutes: 32, seconds: 17 });

  const sidebarCategories = [
    { name: 'Living Room', icon: Sofa },
    { name: 'Bedroom', icon: BedDouble },
    { name: 'Dining Room', icon: UtensilsCrossed },
    { name: 'Office', icon: Briefcase },
    { name: 'Outdoor', icon: TreePine },
    { name: 'Lighting', icon: Lamp },
  ];

  const topCategories = [
    { name: 'Living Room', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop' },
    { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=200&h=200&fit=crop' },
    { name: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=200&h=200&fit=crop' },
    { name: 'Office', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=200&h=200&fit=crop' },
    { name: 'Outdoor', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=200&h=200&fit=crop' },
    { name: 'Lighting', image: '' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <div>
      {/* Jumia-style Hero: 3-column layout */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-4">
          {/* Left sidebar - Categories */}
          <div className="hidden lg:block w-56 shrink-0">
            <div className="bg-red-600 text-white font-bold text-sm uppercase tracking-wider px-4 py-3 rounded-t-lg">
              Shop by Category
            </div>
            <div className="bg-white border border-gray-200 rounded-b-lg shadow-sm">
              {sidebarCategories.map((cat) => (
                <Link
                  key={cat.name}
                  to="/shop"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-b border-gray-100 last:border-b-0 group"
                >
                  <cat.icon size={16} className="text-gray-400 group-hover:text-red-500" />
                  <span>{cat.name}</span>
                  <ChevronRight size={14} className="ml-auto text-gray-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Center - Hero Carousel */}
          <div className="flex-1 relative rounded-lg overflow-hidden min-h-[300px] md:min-h-[400px]">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-center px-8 md:px-12">
                  <div className="max-w-md">
                    <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded mb-3">
                      {slide.badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {slide.title}
                    </h2>
                    <p className="text-red-300 font-semibold text-lg mb-1">{slide.subtitle}</p>
                    <p className="text-gray-200 text-sm mb-6">{slide.description}</p>
                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Shop Now <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Carousel controls */}
            <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors">
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors">
              <ChevronRight size={20} className="text-gray-700" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide ? 'w-6 h-2 bg-red-600' : 'w-2 h-2 bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right sidebar - Feature cards */}
          <div className="hidden xl:flex flex-col gap-3 w-56 shrink-0">
            <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Truck size={20} className="text-red-600" />
              </div>
              <p className="font-bold text-sm text-gray-900">Free Delivery</p>
              <p className="text-xs text-gray-500">On orders over KSh 50,000</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Tag size={20} className="text-red-600" />
              </div>
              <p className="font-bold text-sm text-gray-900">Monthly Deals</p>
              <p className="text-xs text-gray-500">Up to 50% off select items</p>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={20} className="text-red-600" />
              </div>
              <p className="font-bold text-sm text-gray-900">Quality Guarantee</p>
              <p className="text-xs text-gray-500">Premium materials only</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-white border-y border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/track-order" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
              <Truck size={20} className="text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Free Delivery</p>
              <p className="text-gray-500 text-xs">Orders over KSh 50,000</p>
            </div>
          </Link>
          <Link to="/warranty" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
              <Shield size={20} className="text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Quality Guarantee</p>
              <p className="text-gray-500 text-xs">Premium materials</p>
            </div>
          </Link>
          <Link to="/help-center" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
              <Headphones size={20} className="text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">24/7 Support</p>
              <p className="text-gray-500 text-xs">Always here to help</p>
            </div>
          </Link>
          <Link to="/furniture-care" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shrink-0">
              <Timer size={20} className="text-red-600" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">Fast Assembly</p>
              <p className="text-gray-500 text-xs">Professional setup</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Flash Sales Section - Jumia style */}
      {flashSales.length > 0 && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between bg-red-600 text-white px-6 py-3 rounded-t-lg">
              <div className="flex items-center gap-3">
                <span className="animate-pulse text-lg">🔥</span>
                <h2 className="text-xl font-bold italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Flash Sales
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Time Left:</span>
                <div className="flex items-center gap-1 font-mono font-bold text-sm">
                  <span className="bg-white text-red-600 px-2 py-1 rounded min-w-[28px] text-center">{formatTime(flashTimeLeft.hours)}</span>
                  <span>:</span>
                  <span className="bg-white text-red-600 px-2 py-1 rounded min-w-[28px] text-center">{formatTime(flashTimeLeft.minutes)}</span>
                  <span>:</span>
                  <span className="bg-white text-red-600 px-2 py-1 rounded min-w-[28px] text-center">{formatTime(flashTimeLeft.seconds)}</span>
                </div>
              </div>
              <Link
                to="/shop"
                className="hidden sm:flex items-center gap-1 text-white font-semibold hover:underline text-sm"
              >
                SEE ALL <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-gray-50 border border-t-0 border-gray-200 rounded-b-lg p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {flashSales.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Top Categories - Jumia style circular */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Top Categories
            </h2>
            <Link to="/shop" className="flex items-center gap-1 text-red-600 font-semibold text-sm hover:text-red-700">
              SEE ALL <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {topCategories.map((cat) => (
              <Link
                key={cat.name}
                to="/shop"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-red-500 transition-colors bg-gray-100">
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-medium">
                      {cat.name}
                    </div>
                  )}
                </div>
                <span className="text-sm text-gray-700 group-hover:text-red-600 transition-colors font-medium text-center">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Offers Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Tag size={20} className="text-red-600" />
              <h2 className="text-xl font-bold text-gray-900 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Monthly Offers & Discounts
              </h2>
            </div>
            <Link to="/shop" className="flex items-center gap-1 text-red-600 font-semibold text-sm hover:text-red-700">
              SEE ALL <ArrowRight size={16} />
            </Link>
          </div>

          {/* Promo banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 mb-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="flex-1">
                <p className="text-red-200 font-medium text-sm uppercase tracking-widest">March 2026 Special</p>
                <h3 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Up to 25% OFF
                </h3>
                <p className="text-red-100 mt-4 max-w-md mb-8 text-lg">
                  Enjoy massive discounts on selected premium furniture this month.
                </p>
                <Link
                  to="/shop"
                  className="inline-block bg-white text-red-600 px-8 py-3.5 rounded-lg font-bold hover:bg-red-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  View All Offers
                </Link>
              </div>
              
              <div className="flex-1 flex justify-center md:justify-end w-full">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full" />
                  <div className="relative w-full h-full animate-float">
                    {promoImages.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`Special Offer Furniture ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/20 transition-all duration-1000 ease-in-out ${
                          index === currentPromoImage 
                            ? 'opacity-100 scale-100 z-10' 
                            : 'opacity-0 scale-95 z-0'
                        }`}
                      />
                    ))}
                    <div className="absolute top-4 -right-4 md:top-8 md:-right-6 bg-red-600 text-white font-black text-sm md:text-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full shadow-2xl border-4 border-white transform rotate-12 animate-pulse z-20">
                      SALE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyOffers.slice(0, 6).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">★</span>
              <h2 className="text-xl font-bold text-gray-900 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Featured Products
              </h2>
            </div>
            <Link
              to="/shop"
              className="flex items-center gap-1 text-red-600 font-semibold text-sm hover:text-red-700"
            >
              SEE ALL <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Get Exclusive Offers */}
      <section className="py-12 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="text-red-400" />
              <h2 className="text-xl font-bold italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                Exclusive Offers
              </h2>
            </div>
            <Link to="/shop" className="flex items-center gap-1 text-red-400 font-semibold text-sm hover:text-red-300">
              SEE ALL <ArrowRight size={16} />
            </Link>
          </div>

          {/* Featured Exclusive Product */}
          <div className="relative mb-10">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
              {exclusiveProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`transition-all duration-700 ease-in-out ${
                    index === activeExclusive
                      ? 'opacity-100 relative'
                      : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
                    <div className="flex-1 w-full md:w-auto">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-red-600/20 rounded-2xl blur-2xl group-hover:bg-red-600/30 transition-all" />
                        <Link to={`/product/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="relative w-full h-64 md:h-72 object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </Link>
                        {product.discount && (
                          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 rounded-lg font-bold text-sm animate-glow-pulse">
                            -{product.discount}% OFF
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">{product.category}</span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {product.name}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-4 justify-center md:justify-start mb-8">
                        <span className="text-3xl font-bold text-red-500">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                        )}
                      </div>
                      <Link
                        to={`/product/${product.id}`}
                        className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-red-700 transition-all hover:shadow-lg hover:shadow-red-600/25"
                      >
                        View Deal <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {exclusiveProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExclusive(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeExclusive
                      ? 'w-8 h-2 bg-red-500'
                      : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scrolling Ticker */}
          <div className="relative mb-10 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />
            <div className="flex animate-slide-left" style={{ width: `${exclusiveProducts.length * 2 * 280}px` }}>
              {[...exclusiveProducts, ...exclusiveProducts].map((product, index) => (
                <Link
                  key={`${product.id}-${index}`}
                  to={`/product/${product.id}`}
                  className="flex-shrink-0 w-[260px] mx-2.5 group"
                >
                  <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.discount && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                          -{product.discount}%
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-red-400 font-medium uppercase mb-1">{product.category}</p>
                      <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-red-400 transition-colors">{product.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-red-500 font-bold">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Tag size={18} className="text-red-200" />
                  <span className="text-red-200 text-xs font-semibold uppercase tracking-widest">Never Miss a Deal</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Subscribe for Exclusive Offers
                </h3>
                <p className="text-red-100 mt-2 max-w-md">
                  Be the first to know about new arrivals, flash sales, and members-only discounts.
                </p>
              </div>
              <form className="flex gap-2 w-full md:w-auto" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-red-200/60 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                />
                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors shrink-0 shadow-lg">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Get the Morara App bar */}
      <section className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 border-2 border-gray-500 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm">Get the Morara App</p>
              <p className="text-gray-400 text-xs">Shop smarter with exclusive app-only deals</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-gray-900 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight">Download on the</p>
                <p className="font-semibold text-xs leading-tight">App Store</p>
              </div>
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-gray-900 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
              <div className="text-left">
                <p className="text-[10px] leading-tight">Get it on</p>
                <p className="font-semibold text-xs leading-tight">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
