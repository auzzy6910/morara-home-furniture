import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, Timer, ChevronLeft, ChevronRight, Zap, Star as StarIcon, Tag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=600&fit=crop',
    title: 'Premium Living Room Furniture',
    subtitle: 'Up to 50% OFF on selected sofas',
    cta: 'Shop Sofas',
  },
  {
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1200&h=600&fit=crop',
    title: 'Bedroom Essentials',
    subtitle: 'Transform your sleeping space',
    cta: 'Shop Bedroom',
  },
  {
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&h=600&fit=crop',
    title: 'Dining Room Collection',
    subtitle: 'Elegant dining sets for every home',
    cta: 'Shop Dining',
  },
  {
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop',
    title: 'New Arrivals This Month',
    subtitle: 'Discover fresh designs and exclusive deals',
    cta: 'View New Arrivals',
  },
];

const quickLinks = [
  { label: 'Flash Sales', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { label: 'Top Brands', icon: StarIcon, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'New Arrivals', icon: Tag, color: 'text-green-500', bg: 'bg-green-50' },
  { label: 'Free Delivery', icon: Truck, color: 'text-purple-500', bg: 'bg-purple-50' },
];

export default function HomePage() {
  const flashSales = products.filter(p => p.isFlashSale);
  const featuredProducts = products.slice(0, 8);
  const monthlyOffers = products.filter(p => p.isMonthlyOffer);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div>
      {/* Hero Section: Slider + Quick Links Sidebar */}
      <section className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-4">
          {/* Main Slider */}
          <div className="flex-1 relative rounded-xl overflow-hidden h-[320px] md:h-[400px]">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center px-8 md:px-12">
                  <div className="max-w-md">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">{slide.title}</h2>
                    <p className="text-gray-200 text-sm md:text-base mb-6">{slide.subtitle}</p>
                    <Link to="/shop" className="bg-[#E31837] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-700 transition-colors inline-flex items-center gap-2">
                      {slide.cta} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Slider controls */}
            <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow transition-colors">
              <ChevronRight size={18} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-[#E31837] w-6' : 'bg-white/60'}`} />
              ))}
            </div>
          </div>

          {/* Quick Links Sidebar */}
          <div className="hidden lg:flex flex-col gap-3 w-[200px] shrink-0">
            {quickLinks.map((link, i) => (
              <Link key={i} to="/shop" className={`${link.bg} rounded-xl p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-all flex-1`}>
                <link.icon size={24} className={link.color} />
                <span className="text-xs font-semibold text-gray-700 mt-2">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-[#F4F4F4] py-5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/track-order" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-[#E31837]"><Truck size={20} /></div>
            <div><p className="font-semibold text-sm text-gray-900">Free Delivery</p><p className="text-gray-500 text-xs">Orders over KSh 50,000</p></div>
          </Link>
          <Link to="/warranty" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-[#E31837]"><Shield size={20} /></div>
            <div><p className="font-semibold text-sm text-gray-900">Quality Guarantee</p><p className="text-gray-500 text-xs">Premium materials</p></div>
          </Link>
          <Link to="/help-center" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-[#E31837]"><Headphones size={20} /></div>
            <div><p className="font-semibold text-sm text-gray-900">24/7 Support</p><p className="text-gray-500 text-xs">Always here to help</p></div>
          </Link>
          <Link to="/furniture-care" className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-[#E31837]"><Timer size={20} /></div>
            <div><p className="font-semibold text-sm text-gray-900">Fast Assembly</p><p className="text-gray-500 text-xs">Professional setup</p></div>
          </Link>
        </div>
      </section>

      {/* Flash Sales Section */}
      {flashSales.length > 0 && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-[#E31837] text-white px-3 py-1.5 rounded-lg font-bold text-sm flex items-center gap-1.5">
                  <Zap size={16} className="fill-yellow-300 text-yellow-300" /> Flash Sales
                </div>
                <p className="text-gray-500 text-sm hidden sm:block">Ending soon - grab these deals!</p>
              </div>
              <Link to="/shop" className="flex items-center gap-1 text-[#E31837] font-semibold text-sm hover:underline">
                See All <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {flashSales.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="py-10 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Shop by Category</h2>
            <Link to="/shop" className="text-[#E31837] text-sm font-semibold hover:underline flex items-center gap-1">See All <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Living Room', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop', count: 4 },
              { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop', count: 3 },
              { name: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop', count: 1 },
              { name: 'Office', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop', count: 2 },
            ].map(cat => (
              <Link key={cat.name} to="/shop" className="relative rounded-xl overflow-hidden group h-40 md:h-52">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="font-bold text-base">{cat.name}</h3>
                  <p className="text-xs text-gray-300">{cat.count} items</p>
                </div>
                <div className="absolute top-3 right-3 bg-[#E31837] text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  SHOP NOW
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - 4 column grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Featured Products</h2>
            <Link to="/shop" className="text-[#E31837] text-sm font-semibold hover:underline flex items-center gap-1">View All <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Offers Banner */}
      <section className="py-10 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Promo banner */}
          <div className="bg-[#E31837] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white/70 font-medium text-xs uppercase tracking-widest">March 2026 Special</p>
                <h3 className="text-3xl md:text-4xl font-bold mt-1">Up to 25% OFF</h3>
                <p className="text-white/80 mt-2 max-w-md text-sm">Enjoy massive discounts on selected premium furniture this month.</p>
              </div>
              <Link to="/shop" className="bg-white text-[#E31837] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg shrink-0">
                View All Offers
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Monthly Offers</h2>
            <Link to="/shop" className="text-[#E31837] text-sm font-semibold hover:underline flex items-center gap-1">See All <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {monthlyOffers.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#E31837] to-primary-700 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Subscribe for Exclusive Offers</h3>
                <p className="text-white/70 mt-2 max-w-md text-sm">Be the first to know about new arrivals, flash sales, and members-only discounts.</p>
              </div>
              <form className="flex gap-2 w-full md:w-auto" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/20 transition-all text-sm"
                />
                <button className="bg-white text-[#E31837] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shrink-0 text-sm">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
