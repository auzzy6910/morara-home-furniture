import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, formatPrice } from '../data/products';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.length >= 2
    ? products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1.5 gap-2">
        <Search size={16} className="text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search furniture..."
          value={query}
          onChange={e => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          className="bg-transparent outline-none text-sm w-32 md:w-48 text-gray-700 dark:text-gray-200 placeholder-gray-400"
        />
        {query && (
          <button onClick={() => { setQuery(''); setIsOpen(false); }}>
            <X size={14} className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700 overflow-hidden z-50 min-w-[280px]">
          {results.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={() => { setQuery(''); setIsOpen(false); }}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover" loading="lazy" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{product.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{product.category}</p>
              </div>
              <span className="text-sm font-bold text-red-600 whitespace-nowrap">{formatPrice(product.price)}</span>
            </Link>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700 p-4 z-50 min-w-[280px]">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">No products found for "{query}"</p>
        </div>
      )}
    </div>
  );
}
