import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Headphones, Timer } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function HomePage() {
  const monthlyOffers = products.filter(p => p.isMonthlyOffer);
  const featuredProducts = products.slice(0, 4);

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
          <div className="flex items-center gap-3">
            <Truck size={28} className="shrink-0" />
            <div>
              <p className="font-semibold text-sm">Free Delivery</p>
              <p className="text-red-200 text-xs">Orders over KSh 50,000</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield size={28} className="shrink-0" />
            <div>
              <p className="font-semibold text-sm">Quality Guarantee</p>
              <p className="text-red-200 text-xs">Premium materials</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Headphones size={28} className="shrink-0" />
            <div>
              <p className="font-semibold text-sm">24/7 Support</p>
              <p className="text-red-200 text-xs">Always here to help</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Timer size={28} className="shrink-0" />
            <div>
              <p className="font-semibold text-sm">Fast Assembly</p>
              <p className="text-red-200 text-xs">Professional setup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Limited Time</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Monthly Offers & <span className="text-red-600">Discounts</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Don't miss out on our exclusive monthly deals. Save big on premium furniture pieces for a limited time only!
            </p>
          </div>

          {/* Promo banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 mb-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-red-200 font-medium text-sm uppercase tracking-widest">March 2026 Special</p>
                <h3 className="text-3xl md:text-4xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Up to 25% OFF
                </h3>
                <p className="text-red-100 mt-2 max-w-md">
                  Enjoy massive discounts on selected furniture this month. Refresh your home without breaking the bank.
                </p>
              </div>
              <Link
                to="/shop"
                className="bg-white text-red-600 px-8 py-3.5 rounded-lg font-bold hover:bg-red-50 transition-colors shrink-0"
              >
                View All Offers
              </Link>
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

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get Exclusive <span className="text-red-500">Offers</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals and monthly discounts.
          </p>
          <form className="max-w-md mx-auto flex gap-2" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
