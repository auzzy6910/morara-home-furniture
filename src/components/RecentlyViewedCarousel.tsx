import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import { formatPrice } from '../data/products';

export default function RecentlyViewedCarousel() {
  const { recentlyViewed } = useRecentlyViewed();
  const scrollRef = useRef<HTMLDivElement>(null);

  if (recentlyViewed.length === 0) return null;

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 260;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-red-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Recently Viewed
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronLeft size={18} className="text-gray-600 dark:text-gray-300" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronRight size={18} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2" style={{ scrollbarWidth: 'none' }}>
          {recentlyViewed.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="shrink-0 w-56 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">{product.category}</p>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate mt-1">{product.name}</h3>
                <p className="text-sm font-bold text-red-600 mt-1">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
