import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [showOffersOnly, setShowOffersOnly] = useState(false);

  let filtered = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  if (showOffersOnly) {
    filtered = filtered.filter(p => p.isMonthlyOffer);
  }

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <span>Home</span> <span className="mx-2">/</span> <span className="text-red-600 font-medium">Shop</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0">
          <div className="bg-white rounded-xl shadow p-6 sticky top-28">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <SlidersHorizontal size={18} className="text-red-600" />
              Filters
            </h3>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-red-600 text-white font-medium'
                        : 'text-gray-600 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Offers toggle */}
            <div className="mb-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showOffersOnly}
                  onChange={e => setShowOffersOnly(e.target.checked)}
                  className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">Monthly offers only</span>
              </label>
            </div>

            {/* Sort */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">Sort By</h4>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm text-gray-700 focus:outline-none focus:border-red-500"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h1>
            <p className="text-sm text-gray-500">{filtered.length} products</p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
