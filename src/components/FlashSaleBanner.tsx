import { useState, useEffect } from 'react';
import { Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products, formatPrice, getFlashSaleEndTime } from '../data/products';
import { useCart } from '../context/CartContext';

export default function FlashSaleBanner() {
  const { addToCart } = useCart();
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [endTime] = useState(() => getFlashSaleEndTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const flashSaleProducts = products.filter(p => p.isFlashSale);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section className="py-12 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4 animate-pulse">
            <Zap size={16} className="fill-yellow-400 text-yellow-400" />
            FLASH SALE — TODAY ONLY
            <Zap size={16} className="fill-yellow-400 text-yellow-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Lightning <span className="text-red-500">Deals</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-6">
            Grab these incredible deals before time runs out. Limited stock available!
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <Clock size={20} className="text-red-400" />
            <span className="text-red-400 text-sm font-semibold uppercase tracking-wide">Ends in</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="bg-red-600 text-white px-4 py-3 rounded-lg min-w-[60px]">
              <span className="text-2xl font-bold font-mono">{pad(timeLeft.hours)}</span>
              <p className="text-[10px] uppercase text-red-200 mt-0.5">Hours</p>
            </div>
            <span className="text-red-500 text-2xl font-bold">:</span>
            <div className="bg-red-600 text-white px-4 py-3 rounded-lg min-w-[60px]">
              <span className="text-2xl font-bold font-mono">{pad(timeLeft.minutes)}</span>
              <p className="text-[10px] uppercase text-red-200 mt-0.5">Minutes</p>
            </div>
            <span className="text-red-500 text-2xl font-bold">:</span>
            <div className="bg-red-600 text-white px-4 py-3 rounded-lg min-w-[60px]">
              <span className="text-2xl font-bold font-mono">{pad(timeLeft.seconds)}</span>
              <p className="text-[10px] uppercase text-red-200 mt-0.5">Seconds</p>
            </div>
          </div>
        </div>

        {/* Flash Sale Products */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {flashSaleProducts.slice(0, 4).map(product => (
            <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden group border border-gray-700 hover:border-red-500 transition-colors">
              <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                  <Zap size={10} className="fill-yellow-400 text-yellow-400" />
                  -{product.discount}%
                </div>
              </Link>
              <div className="p-3">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-white text-sm font-semibold mb-1 hover:text-red-400 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-red-400 font-bold text-sm">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 text-xs line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-red-600 text-white text-xs py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border-2 border-red-500 text-red-400 px-6 py-2.5 rounded-lg font-semibold hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
          >
            View All Flash Deals
          </Link>
        </div>
      </div>
    </section>
  );
}
