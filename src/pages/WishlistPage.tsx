import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../data/products';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleAddToCart = (product: typeof wishlist[0]) => {
    addToCart(product);
    addToast(`${product.name} added to cart!`);
  };

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <Heart size={64} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Your wishlist is empty
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">Save items you love to your wishlist and come back to them later.</p>
        <Link to="/shop" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
          <ArrowLeft size={18} /> Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
          My Wishlist ({wishlist.length})
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map(product => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              {product.discount && (
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">-{product.discount}% OFF</span>
              )}
            </Link>
            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <p className="text-xs text-red-500 font-medium uppercase mb-1">{product.category}</p>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 hover:text-red-600 transition-colors">{product.name}</h3>
              </Link>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-lg font-bold text-red-600">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={16} /> Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  title="Remove from wishlist"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
