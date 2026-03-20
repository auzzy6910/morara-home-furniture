import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Product, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToast } = useToast();
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    addToast(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        {!imgLoaded && (
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 ${imgLoaded ? '' : 'hidden'}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">
            -{product.discount}% OFF
          </span>
        )}
        {product.isMonthlyOffer && (
          <span className="absolute top-3 right-3 bg-white text-red-600 text-xs font-bold px-2.5 py-1 rounded border border-red-600">
            MONTHLY OFFER
          </span>
        )}
      </Link>

      {/* Wishlist button */}
      <button
        onClick={() => {
          toggleWishlist(product);
          addToast(isInWishlist(product.id) ? 'Removed from wishlist' : 'Added to wishlist!', 'info');
        }}
        className="absolute top-3 right-3 p-1.5 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors z-10"
        title={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <Heart size={16} className={isInWishlist(product.id) ? 'fill-red-600 text-red-600' : 'text-gray-500'} />
      </button>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <p className="text-xs text-red-500 font-medium uppercase mb-1">{product.category}</p>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 hover:text-red-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-2">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600 dark:text-gray-400">{product.rating} ({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-red-600">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
            title="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
