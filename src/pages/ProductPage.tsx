import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, ChevronRight, Minus, Plus, Truck, ShieldCheck, PackageCheck } from 'lucide-react';
import { useState } from 'react';
import { products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <Link to="/shop" className="text-red-600 hover:underline mt-4 inline-block">Back to shop</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8 flex items-center gap-1">
        <Link to="/" className="hover:text-red-600">Home</Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-red-600">Shop</Link>
        <ChevronRight size={14} />
        <span className="text-red-600 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Product Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 md:h-full object-cover"
          />
          {product.discount && (
            <span className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-lg">
              -{product.discount}% OFF
            </span>
          )}
          {product.isMonthlyOffer && (
            <span className="absolute top-4 right-4 bg-white text-red-600 text-sm font-bold px-4 py-2 rounded-lg border-2 border-red-600">
              MONTHLY OFFER
            </span>
          )}
        </div>

        {/* Product Details */}
        <div>
          <p className="text-red-600 text-sm font-semibold uppercase tracking-wide mb-2">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-gray-600 text-sm">({product.reviews} reviews)</span>
          </div>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-red-600">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

          {/* Quantity selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold text-gray-700">Quantity:</span>
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="px-4 py-2 font-semibold min-w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-3 mb-8"
          >
            <ShoppingCart size={22} />
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          {/* Features - Real delivery & service signs */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1">
                <Truck size={20} className="text-green-600" />
              </div>
              <p className="text-xs font-semibold text-gray-800">Nationwide Delivery</p>
              <p className="text-[10px] text-gray-500">3-7 business days</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1">
                <ShieldCheck size={20} className="text-blue-600" />
              </div>
              <p className="text-xs font-semibold text-gray-800">2-Year Warranty</p>
              <p className="text-[10px] text-gray-500">Manufacturer backed</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="bg-orange-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-1">
                <PackageCheck size={20} className="text-orange-600" />
              </div>
              <p className="text-xs font-semibold text-gray-800">14-Day Returns</p>
              <p className="text-[10px] text-gray-500">Hassle-free policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
