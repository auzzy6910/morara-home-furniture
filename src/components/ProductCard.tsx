import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Product, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  const stockPercent = product.stock && product.totalStock
    ? Math.round((product.stock / product.totalStock) * 100)
    : 100;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Discount badge - top right */}
        {product.discount && (
          <span className="absolute top-3 right-3 bg-[#E31837] text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}

        {/* Wishlist heart button */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
          className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
            wishlisted ? 'bg-[#E31837] text-white' : 'bg-white/90 text-gray-500 hover:text-[#E31837]'
          }`}
        >
          <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
        </button>

        {/* Hover overlay with quick add */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
            className="bg-[#E31837] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-700"
          >
            <ShoppingCart size={16} /> Add to Cart
          </button>
        </div>
      </Link>

      <div className="p-3">
        <Link to={`/product/${product.id}`}>
          <p className="text-[10px] text-[#E31837] font-semibold uppercase tracking-wider mb-0.5">{product.category}</p>
          <h3 className="font-semibold text-gray-900 text-sm mb-1.5 hover:text-[#E31837] transition-colors line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Rating stars */}
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map(star => (
            <Star
              key={star}
              size={12}
              className={star <= Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}
            />
          ))}
          <span className="text-[11px] text-gray-500 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base font-bold text-[#E31837]">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {/* Stock/scarcity progress bar */}
        {product.stock !== undefined && product.totalStock !== undefined && (
          <div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
              <div
                className={`h-1.5 rounded-full transition-all ${
                  stockPercent <= 20 ? 'bg-[#E31837]' : stockPercent <= 50 ? 'bg-orange-400' : 'bg-green-500'
                }`}
                style={{ width: `${stockPercent}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-500">
              {product.stock <= 5 ? (
                <span className="text-[#E31837] font-semibold">Only {product.stock} left!</span>
              ) : (
                <span>{product.stock} items left</span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
