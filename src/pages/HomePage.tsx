import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, Timer, Sparkles, Tag, ChevronLeft, ChevronRight, Sofa, BedDouble, UtensilsCrossed, Briefcase, TreePine, Lamp, Star, Percent, Gift, Flame } from 'lucide-react';
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
      title: 'Transform Your Home',
      subtitle: 'Premium Furniture Collection',
      description: 'Up to 25% OFF on selected items this month',
      cta: 'Shop Now',
      ctaLink: '/shop',
      badge: 'NEW ARRIVALS',
    },
    {
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=600&fit=crop',
      title: 'Living Room Sale',
      subtitle: 'Comfort Meets Style',
      description: 'Save big on sofas, tables & more',
      cta: 'Explore Deals',
      ctaLink: '/shop',
      badge: 'HOT DEALS',
    },
    {
      image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1200&h=600&fit=crop',
      title: 'Bedroom Collection',
      subtitle: 'Sleep in Luxury',
      description: 'Premium beds & mattresses from KSh 19,999',
      cta: 'View Collection',
      ctaLink: '/shop',
      badge: 'BEST SELLER',
    },
    {
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&h=600&fit=crop',
      title: 'Dining Sets',
      subtitle: 'Elegant Dining Experience',
      description: 'Complete dining sets up to 40% OFF',
      cta: 'Shop Dining',
      ctaLink: '/shop',
      badge: 'LIMITED OFFER',
    },
  ];

  const categoryList = [
    { name: 'Living Room', icon: Sofa, count: 4, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
    { name: 'Bedroom', icon: BedDouble, count: 3, image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop' },
    { name: 'Dining Room', icon: UtensilsCrossed, count: 1, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop' },
    { name: 'Office', icon: Briefcase, count: 2, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop' },
    { name: 'Outdoor', icon: TreePine, count: 2, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop' },
    { name: 'Lighting', icon: Lamp, count: 0, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=300&fit=crop' },
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
  const [flashTimeLeft, setFlashTimeLeft] = useState({ hours: 5, minutes: 32, seconds: 18 });

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
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 5, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="bg-gray-100">
      {/* JUMIA-STYLE HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 pt-4 pb-2">
        <div className="flex gap-4">
          {/* Category Sidebar */}
          <div className="hidden lg:block w-56 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-orange-500 text-white px-4 py-3 font-bold text-sm uppercase tracking-wide">
                Shop by Category
              </div>
              <nav className="py-1">
                {categoryList.map((cat) => {
                  const IconComp = cat.icon;
                  return (
                    <Link
                      key={cat.name}
                      to="/shop"
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors border-b border-gray-50 last:border-0 group"
                    >
                      <IconComp size={18} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                      <span className="font-medium">{cat.name}</span>
                      <ChevronRight size={14} className="ml-auto text-gray-300 group-hover:text-orange-400" />
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Carousel */}
          <div className="flex-1 min-w-0">
            <div className="relative rounded-lg overflow-hidden shadow-sm h-[300px] md:h-[380px] lg:h-[400px]">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="px-8 md:px-12 max-w-lg">
                      <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded mb-3 animate-pulse">
                        {slide.badge}
                      </span>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {slide.title}
                      </h2>
                      <p className="text-orange-300 font-semibold text-lg mb-1">{slide.subtitle}</p>
                      <p className="text-gray-200 text-sm md:text-base mb-6">{slide.description}</p>
                      <Link
                        to={slide.ctaLink}
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-lg"
                      >
                        {slide.cta} <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all">
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all">
                <ChevronRight size={20} className="text-gray-700" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-8 h-2.5 bg-orange-500' : 'w-2.5 h-2.5 bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Promo Banners */}
          <div className="hidden xl:flex flex-col gap-3 w-56 flex-shrink-0">
            <Link to="/shop" className="flex-1 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-4 text-white relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <Gift size={24} className="mb-2" />
                <p className="font-bold text-sm">Free Delivery</p>
                <p className="text-xs text-orange-100 mt-1">On orders over KSh 50,000</p>
              </div>
              <ArrowRight size={16} className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/shop" className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 text-white relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <Percent size={24} className="mb-2 text-orange-400" />
                <p className="font-bold text-sm">Monthly Deals</p>
                <p className="text-xs text-gray-400 mt-1">Up to 50% off select items</p>
              </div>
              <ArrowRight size={16} className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link to="/shop" className="flex-1 bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-4 text-white relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <Shield size={24} className="mb-2" />
                <p className="font-bold text-sm">Quality Guarantee</p>
                <p className="text-xs text-green-100 mt-1">Premium materials only</p>
              </div>
              <ArrowRight size={16} className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE FEATURES STRIP */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/track-order" className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors group">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <Truck size={20} className="text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Free Delivery</p>
                <p className="text-xs text-gray-500">Orders over KSh 50,000</p>
              </div>
            </Link>
            <Link to="/warranty" className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors group">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <Shield size={20} className="text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Quality Guarantee</p>
                <p className="text-xs text-gray-500">Premium materials</p>
              </div>
            </Link>
            <Link to="/help-center" className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors group">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <Headphones size={20} className="text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">24/7 Support</p>
                <p className="text-xs text-gray-500">Always here to help</p>
              </div>
            </Link>
            <Link to="/furniture-care" className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors group">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <Timer size={20} className="text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Fast Assembly</p>
                <p className="text-xs text-gray-500">Professional setup</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FLASH SALES SECTION */}
      {flashSales.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Flame size={24} className="text-yellow-300 animate-pulse" />
                <h2 className="text-xl md:text-2xl font-bold text-white">Flash Sales</h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/80 text-sm font-medium">Time Left:</span>
                <div className="flex items-center gap-1.5">
                  <span className="bg-gray-900 text-white font-mono font-bold text-sm px-2.5 py-1.5 rounded min-w-[36px] text-center">{formatTime(flashTimeLeft.hours)}</span>
                  <span className="text-white font-bold">:</span>
                  <span className="bg-gray-900 text-white font-mono font-bold text-sm px-2.5 py-1.5 rounded min-w-[36px] text-center">{formatTime(flashTimeLeft.minutes)}</span>
                  <span className="text-white font-bold">:</span>
                  <span className="bg-gray-900 text-white font-mono font-bold text-sm px-2.5 py-1.5 rounded min-w-[36px] text-center">{formatTime(flashTimeLeft.seconds)}</span>
                </div>
              </div>
              <Link to="/shop" className="hidden sm:flex items-center gap-1 text-white font-semibold text-sm hover:underline">
                SEE ALL <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {flashSales.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
            <div className="text-center pb-4 sm:hidden">
              <Link to="/shop" className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm">
                View All Flash Sales <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CATEGORY CARDS */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Top Categories</h2>
            <Link to="/shop" className="text-orange-600 font-semibold text-sm hover:underline flex items-center gap-1">
              SEE ALL <ArrowRight size={14} />
            </Link>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {categoryList.map(cat => (
                <Link
                  key={cat.name}
                  to="/shop"
                  className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-orange-50 transition-colors group text-center"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-orange-400 transition-colors">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MONTHLY OFFERS */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Tag size={20} className="text-orange-500" />
              <h2 className="text-lg font-bold text-gray-900">Monthly Offers & Discounts</h2>
            </div>
            <Link to="/shop" className="text-orange-600 font-semibold text-sm hover:underline flex items-center gap-1">
              SEE ALL <ArrowRight size={14} />
            </Link>
          </div>

          <div className="m-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="flex-1">
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                  March 2026 Special
                </span>
                <h3 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Up to 25% OFF
                </h3>
                <p className="text-orange-100 mt-4 max-w-md mb-8 text-lg">
                  Enjoy massive discounts on selected premium furniture this month.
                </p>
                <Link
                  to="/shop"
                  className="inline-block bg-white text-orange-600 px-8 py-3.5 rounded-lg font-bold hover:bg-orange-50 transition-colors shadow-lg"
                >
                  View All Offers
                </Link>
              </div>
              <div className="flex-1 flex justify-center md:justify-end w-full">
                <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                  <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />
                  <div className="relative w-full h-full animate-float">
                    {promoImages.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`Special Offer Furniture ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/20 transition-all duration-1000 ease-in-out ${
                          index === currentPromoImage
                            ? 'opacity-100 scale-100 z-10'
                            : 'opacity-0 scale-95 z-0'
                        }`}
                      />
                    ))}
                    <div className="absolute top-4 -right-4 md:top-6 md:-right-5 bg-orange-500 text-white font-black text-sm w-14 h-14 flex items-center justify-center rounded-full shadow-2xl border-4 border-white transform rotate-12 animate-pulse z-20">
                      SALE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {monthlyOffers.slice(0, 6).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Star size={20} className="text-orange-500 fill-orange-500" />
              <h2 className="text-lg font-bold text-gray-900">Featured Products</h2>
            </div>
            <Link to="/shop" className="text-orange-600 font-semibold text-sm hover:underline flex items-center gap-1">
              SEE ALL <ArrowRight size={14} />
            </Link>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="text-center pb-4 sm:hidden">
            <Link to="/shop" className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE OFFERS */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-gray-900 rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="text-orange-400" />
              <h2 className="text-lg font-bold text-white">Exclusive Offers</h2>
            </div>
            <Link to="/shop" className="text-orange-400 font-semibold text-sm hover:underline flex items-center gap-1">
              SEE ALL <ArrowRight size={14} />
            </Link>
          </div>

          <div className="p-4 md:p-6">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
                {exclusiveProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`transition-all duration-700 ease-in-out ${
                      index === activeExclusive
                        ? 'opacity-100 relative'
                        : 'opacity-0 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10">
                      <div className="flex-1 w-full md:w-auto">
                        <div className="relative group">
                          <div className="absolute inset-0 bg-orange-500/20 rounded-xl blur-2xl group-hover:bg-orange-500/30 transition-all" />
                          <Link to={`/product/${product.id}`}>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="relative w-full h-56 md:h-72 object-cover rounded-xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
                            />
                          </Link>
                          {product.discount && (
                            <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1.5 rounded-lg font-bold text-sm animate-glow-pulse">
                              -{product.discount}% OFF
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest">{product.category}</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {product.name}
                        </h3>
                        <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
                          <span className="text-2xl md:text-3xl font-bold text-orange-500">{formatPrice(product.price)}</span>
                          {product.originalPrice && (
                            <span className="text-base text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                          )}
                        </div>
                        <Link
                          to={`/product/${product.id}`}
                          className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all hover:shadow-lg hover:shadow-orange-500/25"
                        >
                          View Deal <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                {exclusiveProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveExclusive(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeExclusive
                        ? 'w-8 h-2 bg-orange-500'
                        : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="px-4 pb-4">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-10" />
              <div className="flex animate-slide-left" style={{ width: `${exclusiveProducts.length * 2 * 280}px` }}>
                {[...exclusiveProducts, ...exclusiveProducts].map((product, index) => (
                  <Link
                    key={`${product.id}-${index}`}
                    to={`/product/${product.id}`}
                    className="flex-shrink-0 w-[260px] mx-2 group"
                  >
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-700/50 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                      <div className="relative overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500" />
                        {product.discount && (
                          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                            -{product.discount}%
                          </div>
                        )}
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-orange-400 font-medium uppercase mb-1">{product.category}</p>
                        <h4 className="font-semibold text-white text-sm mb-1.5 group-hover:text-orange-400 transition-colors">{product.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-500 font-bold">{formatPrice(product.price)}</span>
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
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-4 py-4 pb-8">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-sm p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Tag size={18} className="text-orange-200" />
                <span className="text-orange-100 text-xs font-semibold uppercase tracking-widest">Never Miss a Deal</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Subscribe for Exclusive Offers
              </h3>
              <p className="text-orange-100 mt-2 max-w-md text-sm">
                Be the first to know about new arrivals, flash sales, and members-only discounts.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-orange-200/60 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
              />
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors shrink-0 shadow-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
