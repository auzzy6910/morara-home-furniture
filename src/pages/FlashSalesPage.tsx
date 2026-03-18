import { useState, useEffect } from 'react';
import { Flame, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

export default function FlashSalesPage() {
  const flashProducts = products.filter(p => p.isFlashSale);
  const { addToCart } = useCart();

  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay.getTime() - now.getTime();
      return {
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    };
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame size={32} />
            <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Flash Sales
            </h1>
            <Flame size={32} />
          </div>
          <p className="text-orange-100 max-w-lg mx-auto mb-6">
            Incredible deals on premium furniture. These prices won't last — grab yours before they're gone!
          </p>
          {/* Countdown */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-orange-200">Ends in</span>
            <div className="flex items-center gap-1">
              <span className="bg-white text-gray-900 text-lg font-bold px-3 py-1.5 rounded">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-xs text-orange-200">Hours</span>
              <span className="font-bold">:</span>
              <span className="bg-white text-gray-900 text-lg font-bold px-3 py-1.5 rounded">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-xs text-orange-200">Minutes</span>
              <span className="font-bold">:</span>
              <span className="bg-white text-gray-900 text-lg font-bold px-3 py-1.5 rounded">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-xs text-orange-200">Seconds</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashProducts.map(product => (
            <div key={product.id} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/product/${product.id}`} className="block relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded">
                    -{product.discount}%
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1">
                  <Flame size={12} /> FLASH SALE
                </span>
              </Link>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-red-600">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-red-600 text-white py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
