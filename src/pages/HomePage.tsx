import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, Timer, Sparkles, Tag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, formatPrice } from '../data/products';

export default function HomePage() {
  const monthlyOffers = products.filter(p => p.isMonthlyOffer);
  const flashSales = products.filter(p => p.isFlashSale);
  const featuredProducts = products.slice(0, 4);
  const exclusiveProducts = products.filter(p => p.discount);

  // Array of special furniture images for the swap animation
  const promoImages = [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop', // Luxe Velvet Sofa
    'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&h=600&fit=crop', // Modern Coffee Table
    'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&h=600&fit=crop', // Bookshelf Cabinet
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop', // Accent Armchair
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop', // Dining Table
  ];
  
  const [currentPromoImage, setCurrentPromoImage] = useState(0);
  const [activeExclusive, setActiveExclusive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromoImage((prev) => (prev + 1) % promoImages.length);
    }, 4000); // changes every 4 seconds
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveExclusive((prev) => (prev + 1) % exclusiveProducts.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [exclusiveProducts.length]);

  return (
    <div>
      {/* Hero Section with provided image */}
      <section className="relative h-screen max-h-[700px] overflow-hidden">
        <img
          src="/morara-home-furniture.jpg"
          alt="Morara Home Furniture Store"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-xl">
              <p className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-3">Welcome to</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Morara Home <span className="text-red-500">Furniture</span>
              </h1>
              <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                Transform your living spaces with our premium quality furniture. 
                Comfort, style, and durability — all under one roof.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="bg-red-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  Shop Now <ArrowRight size={18} />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link to="/track-order" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <Truck size={28} className="shrink-0" />
            <div>
              <p className="font-semibold text-sm">Free Delivery</p>
              <p className="text-red-200 text-xs">Orders over KSh 50,000</p>
            </div>
          </Link>
          <Link to="/warranty" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <Shield size={28} className="shrink-0" />
            <div>
              <p className="font-semibold text-sm">Quality Guarantee</p>
              <p className="text-red-200 text-xs">Premium materials</p>
            </div>
          </Link>
          <Link to="/help-center" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <Headphones size={28} className="shrink-0" />
            <div>
              <p className="font-semibold text-sm">24/7 Support</p>
              <p className="text-red-200 text-xs">Always here to help</p>
            </div>
          </Link>
          <Link to="/furniture-care" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <Timer size={28} className="shrink-0" />
            <div>
              <p className="font-semibold text-sm">Fast Assembly</p>
              <p className="text-red-200 text-xs">Professional setup</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Flash Sales Section */}
      {flashSales.length > 0 && (
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-red-500 font-semibold text-sm uppercase tracking-widest flex items-center gap-2">
                  <span className="animate-pulse text-lg">⚡</span> Ending Soon
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Flash <span className="text-red-500">Sales</span>
                </h2>
                <p className="text-gray-400 mt-2 max-w-2xl">
                  Hurry up! Grab these premium pieces at huge discounts before the timer runs out.
                </p>
              </div>
              <Link
                to="/shop"
                className="hidden sm:flex items-center gap-2 text-red-500 font-semibold hover:text-red-400 transition-colors"
              >
                View All <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flashSales.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-8 sm:hidden">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-red-500 font-semibold"
              >
                View All Flash Sales <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Monthly Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Limited Time</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Monthly Offers and <span className="text-red-600">Discounts</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Don't miss out on our exclusive monthly deals. Save big on premium furniture pieces for a limited time only!
            </p>
          </div>

          {/* Promo banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 mb-10 text-white relative overflow-hidden mt-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="flex-1">
                <p className="text-red-200 font-medium text-sm uppercase tracking-widest">March 2026 Special</p>
                <h3 className="text-3xl md:text-5xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Up to 25% OFF
                </h3>
                <p className="text-red-100 mt-4 max-w-md mb-8 text-lg">
                  Enjoy massive discounts on selected premium furniture this month. Refresh your home without breaking the bank.
                </p>
                <Link
                  to="/shop"
                  className="inline-block bg-white text-red-600 px-8 py-3.5 rounded-lg font-bold hover:bg-red-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  View All Offers
                </Link>
              </div>
              
              <div className="flex-1 flex justify-center md:justify-end w-full">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Decorative ambient glow */}
                  <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full" />
                  
                  {/* Animated element via smooth custom CSS float animation and image swapping */}
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
                    
                    {/* Floating badge sticking to the furniture */}
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Our Collection</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Featured Products
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden sm:flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-red-600 font-semibold"
            >
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Browse</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Living Room', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop', count: 4 },
              { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop', count: 3 },
              { name: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop', count: 1 },
              { name: 'Office', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop', count: 2 },
            ].map(cat => (
              <Link
                key={cat.name}
                to="/shop"
                className="relative rounded-xl overflow-hidden group h-48 md:h-64"
              >
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{cat.name}</h3>
                  <p className="text-sm text-gray-300">{cat.count} items</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get Exclusive Offers — Animated Showcase */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-4">
              <Sparkles size={14} className="text-red-400" />
              <span className="text-red-400 font-semibold text-xs uppercase tracking-widest">Exclusive Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get Exclusive <span className="text-red-500">Offers</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              Hand-picked premium furniture at unbeatable prices. Limited stock — grab yours before they're gone.
            </p>
          </div>

          {/* Featured Exclusive Product — Animated Spotlight */}
          <div className="relative mb-14">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden">
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
                    {/* Product Image */}
                    <div className="flex-1 w-full md:w-auto">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-red-600/20 rounded-2xl blur-2xl group-hover:bg-red-600/30 transition-all" />
                        <Link to={`/product/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="relative w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </Link>
                        {product.discount && (
                          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 rounded-lg font-bold text-sm animate-glow-pulse">
                            -{product.discount}% OFF
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Product Info */}
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

          {/* Scrolling Ticker of Exclusive Items */}
          <div className="relative mb-14 overflow-hidden">
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
    </div>
  );
}
