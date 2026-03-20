import { useState } from 'react';
import { SlidersHorizontal, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories, formatPrice } from '../data/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [showOffersOnly, setShowOffersOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [minRating, setMinRating] = useState(0);

  const maxPrice = 200000; // KSh 200,000 (price in cents / 100)

  let filtered = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  if (showOffersOnly) {
    filtered = filtered.filter(p => p.isMonthlyOffer);
  }

  // Price range filter (convert from display KSh to cents)
  filtered = filtered.filter(p => {
    const priceInKsh = p.price / 100;
    return priceInKsh >= priceRange[0] && priceInKsh <= priceRange[1];
  });

  // Rating filter
  if (minRating > 0) {
    filtered = filtered.filter(p => p.rating >= minRating);
  }

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'name-az') {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }

  const clearFilters = () => {
    setSelectedCategory('All');
    setSortBy('default');
    setShowOffersOnly(false);
    setPriceRange([0, maxPrice]);
    setMinRating(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        <span>Home</span> <span className="mx-2">/</span> <span className="text-red-600 font-medium">Shop</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 sticky top-28">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-red-600" />
                Filters
              </h3>
              <button onClick={clearFilters} className="text-xs text-red-600 hover:underline">Clear All</button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-red-600 text-white font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-gray-700 hover:text-red-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-3">Price Range</h4>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-500 dark:text-gray-400">Min: {formatPrice(priceRange[0] * 100)}</label>
                  <input
                    type="range"
                    min={0}
                    max={maxPrice}
                    step={5000}
                    value={priceRange[0]}
                    onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full accent-red-600"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 dark:text-gray-400">Max: {formatPrice(priceRange[1] * 100)}</label>
                  <input
                    type="range"
                    min={0}
                    max={maxPrice}
                    step={5000}
                    value={priceRange[1]}
                    onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full accent-red-600"
                  />
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-3">Minimum Rating</h4>
              <div className="space-y-2">
                {[0, 3, 3.5, 4, 4.5].map(rating => (
                  <button
                    key={rating}
                    onClick={() => setMinRating(rating)}
                    className={`flex items-center gap-2 w-full px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      minRating === rating
                        ? 'bg-red-50 dark:bg-red-900/20 text-red-600 font-medium'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {rating === 0 ? (
                      'All Ratings'
                    ) : (
                      <>
                        <div className="flex">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star key={i} size={12} className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                          ))}
                        </div>
                        <span>{rating}+</span>
                      </>
                    )}
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
                <span className="text-sm text-gray-700 dark:text-gray-300">Monthly offers only</span>
              </label>
            </div>

            {/* Sort */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase mb-3">Sort By</h4>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 focus:outline-none focus:border-red-500"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name-az">Name: A to Z</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{filtered.length} products</p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No products found matching your criteria.</p>
              <button onClick={clearFilters} className="mt-4 text-red-600 hover:underline text-sm">Clear all filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
