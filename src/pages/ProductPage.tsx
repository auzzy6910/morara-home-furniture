import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, ChevronRight, Minus, Plus, Truck, Shield, RotateCcw } from 'lucide-react';
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
        <Link to="/shop" className="text-[#E31837] hover:underline mt-4 inline-block">Back to shop</Link>
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
        <Link to="/" className="hover:text-[#E31837]">Home</Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-[#E31837]">Shop</Link>
        <ChevronRight size={14} />
        <span className="text-[#E31837] font-medium">{product.name}</span>
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
            <span className="absolute top-4 left-4 bg-[#E31837] text-white text-sm font-bold px-4 py-2 rounded-lg">
              -{product.discount}% OFF
            </span>
          )}
          {product.isMonthlyOffer && (
            <span className="absolute top-4 right-4 bg-white text-[#E31837] text-sm font-bold px-4 py-2 rounded-lg border-2 border-[#E31837]">
              MONTHLY OFFER
            </span>
          )}
        </div>

        {/* Product Details */}
        <div>
          <p className="text-[#E31837] text-sm font-semibold uppercase tracking-wide mb-2">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" >
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
            <span className="text-3xl font-bold text-[#E31837]">{formatPrice(product.price)}</span>
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
            className="w-full bg-[#E31837] text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-3 mb-8"
          >
            <ShoppingCart size={22} />
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Truck size={22} className="mx-auto               text-[#E31837] mb-1" />
                            <p className="text-xs text-gray-600">Free Delivery</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Shield size={22} className="mx-auto               text-[#E31837] mb-1" />
                            <p className="text-xs text-gray-600">2 Year Warranty</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <RotateCcw size={22} className="mx-auto               text-[#E31837] mb-1" />
                            <p className="text-xs text-gray-600">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6"           >
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
