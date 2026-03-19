import { Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function FlashSalesPage() {
  const saleProducts = products.filter(p => p.isMonthlyOffer);

  return (
    <div>
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-yellow-400" size={32} />
            <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Flash <span className="text-yellow-400">Sales</span>
            </h1>
            <Zap className="text-yellow-400" size={32} />
          </div>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Limited-time offers on premium furniture. Don't miss out on these incredible deals!
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-yellow-400">
            <Clock size={18} />
            <span className="font-semibold">Offers updated monthly</span>
          </div>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        {saleProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {saleProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Zap className="text-gray-300 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Flash Sales Right Now</h3>
            <p className="text-gray-600 mb-6">Check back soon for amazing deals on furniture!</p>
            <Link to="/shop" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Browse All Products
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
