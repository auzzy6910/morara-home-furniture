import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Truck, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const furnitureBrands = ['All Brands', 'Morara', 'HomeStyle', 'WoodCraft', 'ComfortPlus', 'UrbanLiving'];

const discountRanges = [
  { label: '10% or more', value: 10 },
  { label: '15% or more', value: 15 },
  { label: '20% or more', value: 20 },
  { label: '25% or more', value: 25 },
];

const materialTypes = ['Wood', 'Metal', 'Fabric', 'Leather', 'Glass'];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [showOffersOnly, setShowOffersOnly] = useState(false);
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [selectedDiscount, setSelectedDiscount] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [deliveryOption, setDeliveryOption] = useState('all');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [warrantyFilter, setWarrantyFilter] = useState(false);

  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev =>
      prev.includes(material) ? prev.filter(m => m !== material) : [...prev, material]
    );
  };

  let filtered = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (showOffersOnly) {
    filtered = filtered.filter(p => p.isMonthlyOffer);
  }

  if (priceMin) {
    filtered = filtered.filter(p => p.price >= Number(priceMin) * 100);
  }
  if (priceMax) {
    filtered = filtered.filter(p => p.price <= Number(priceMax) * 100);
  }

  if (selectedDiscount > 0) {
    filtered = filtered.filter(p => p.discount && p.discount >= selectedDiscount);
  }

  if (warrantyFilter) {
    filtered = filtered.filter(p => p.price >= 50000);
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
        <span>Home</span> <span className="mx-2">/</span> <span className="text-red-600 font-medium">
          {searchQuery ? `Search: "${searchQuery}"` : 'Shop'}
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar - Jumia-style filter panel */}
        <aside className="md:w-64 shrink-0">
          <div className="bg-white rounded-xl shadow divide-y divide-gray-100 sticky top-20 overflow-y-auto max-h-[calc(100vh-6rem)]">

            {/* Category */}
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Category</h4>
              <div className="space-y-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-red-50 text-red-600 font-semibold'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Express Delivery */}
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Express Delivery</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input
                    type="radio"
                    name="delivery"
                    checked={deliveryOption === 'all'}
                    onChange={() => setDeliveryOption('all')}
                    className="w-3.5 h-3.5 text-red-600 focus:ring-red-500"
                  />
                  <span className="flex items-center gap-1.5">
                    <Package size={14} className="text-gray-500" />
                    All items
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input
                    type="radio"
                    name="delivery"
                    checked={deliveryOption === 'local'}
                    onChange={() => setDeliveryOption('local')}
                    className="w-3.5 h-3.5 text-red-600 focus:ring-red-500"
                  />
                  <span className="flex items-center gap-1.5">
                    <Truck size={14} className="text-green-600" />
                    Shipped from Kenya
                  </span>
                </label>
              </div>
            </div>

            {/* Price Range */}
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Price (KSh)</h4>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceMin}
                  onChange={e => setPriceMin(e.target.value)}
                  className="w-full px-2 py-1.5 border rounded text-sm text-gray-700 focus:outline-none focus:border-red-500"
                />
                <span className="text-gray-400 text-sm">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceMax}
                  onChange={e => setPriceMax(e.target.value)}
                  className="w-full px-2 py-1.5 border rounded text-sm text-gray-700 focus:outline-none focus:border-red-500"
                />
              </div>
              <button
                onClick={() => { setPriceMin(''); setPriceMax(''); }}
                className="text-red-600 text-xs mt-2 hover:underline"
              >
                Clear price
              </button>
            </div>

            {/* Discount Percentage */}
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Discount Percentage</h4>
              <div className="space-y-2">
                {discountRanges.map(range => (
                  <label key={range.value} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                    <input
                      type="radio"
                      name="discount"
                      checked={selectedDiscount === range.value}
                      onChange={() => setSelectedDiscount(range.value)}
                      className="w-3.5 h-3.5 text-red-600 focus:ring-red-500"
                    />
                    {range.label}
                  </label>
                ))}
                {selectedDiscount > 0 && (
                  <button
                    onClick={() => setSelectedDiscount(0)}
                    className="text-red-600 text-xs hover:underline"
                  >
                    Clear discount filter
                  </button>
                )}
              </div>
            </div>

            {/* Brand */}
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Brand</h4>
              <div className="space-y-2">
                {furnitureBrands.map(brand => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                      className="w-3.5 h-3.5 text-red-600 focus:ring-red-500"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Material</h4>
              <div className="space-y-2">
                {materialTypes.map(material => (
                  <label key={material} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(material)}
                      onChange={() => toggleMaterial(material)}
                      className="w-3.5 h-3.5 text-red-600 rounded focus:ring-red-500"
                    />
                    {material}
                  </label>
                ))}
              </div>
            </div>

            {/* Warranty */}
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Warranty</h4>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={warrantyFilter}
                  onChange={e => setWarrantyFilter(e.target.checked)}
                  className="w-3.5 h-3.5 text-red-600 rounded focus:ring-red-500"
                />
                With warranty (2+ years)
              </label>
            </div>

            {/* Offers Toggle */}
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Offers</h4>
              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={showOffersOnly}
                  onChange={e => setShowOffersOnly(e.target.checked)}
                  className="w-3.5 h-3.5 text-red-600 rounded focus:ring-red-500"
                />
                Monthly offers only
              </label>
            </div>

            {/* Sort */}
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Sort By</h4>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border rounded text-sm text-gray-700 focus:outline-none focus:border-red-500"
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
              {searchQuery ? `Results for "${searchQuery}"` : selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h1>
            <p className="text-sm text-gray-500">{filtered.length} products</p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
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
