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
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span>Home</span> <span className="mx-2">/</span> <span className="text-[#E31837] font-medium">Shop</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="md:w-56 shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-40">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-sm">
              <SlidersHorizontal size={16} className="text-[#E31837]" />
              Filters
            </h3>

            {/* Categories */}
            <div className="mb-5">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Category</h4>
              <div className="space-y-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-[#E31837] text-white font-medium'
                        : 'text-gray-600 hover:bg-primary-50 hover:text-[#E31837]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Offers toggle */}
            <div className="mb-5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showOffersOnly}
                  onChange={e => setShowOffersOnly(e.target.checked)}
                  className="w-4 h-4 text-[#E31837] rounded focus:ring-primary-500 accent-[#E31837]"
                />
                <span className="text-sm text-gray-700">Monthly offers only</span>
              </label>
            </div>

            {/* Sort */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Sort By</h4>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-[#E31837]"
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
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h1>
            <p className="text-sm text-gray-500">{filtered.length} products</p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
