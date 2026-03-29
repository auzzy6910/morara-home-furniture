import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Product, formatPrice } from '../data/products';
import { Link } from 'react-router-dom';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => {
        const wishlisted = isInWishlist(product.id);
        const stockPercent = product.stock && product.totalStock
          ? Math.round((product.stock / product.totalStock) * 100)
          : 100;

        return (
          <div
            key={product.id}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[4/5]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Discount badge top-right */}
              {product.discount && (
                <span className="absolute top-3 right-3 bg-[#E31837] text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded">
                  -{product.discount}%
                </span>
              )}

              {/* Wishlist heart */}
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
                className={`absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center transition-all shadow ${
                  wishlisted ? 'bg-[#E31837] text-white' : 'bg-white/90 text-gray-500 hover:text-[#E31837]'
                }`}
              >
                <Heart size={14} fill={wishlisted ? 'currentColor' : 'none'} />
              </button>

              {/* Hover quick add */}
              <div className="hidden lg:flex absolute inset-0 items-end justify-center pb-4 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={(e) => { e.preventDefault(); addToCart(product); }}
                  className="flex items-center gap-2 bg-[#E31837] text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-primary-700 shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  <ShoppingCart size={14} /> Add to Cart
                </button>
              </div>
            </Link>

            <div className="p-3 space-y-1.5">
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{product.category}</p>
              <Link to={`/product/${product.id}`}>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-[#E31837] transition-colors line-clamp-2">
                  {product.name}
                </h3>
              </Link>

              {/* Rating stars */}
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={10} className={s <= Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'} />
                ))}
                <span className="text-[10px] text-gray-500 ml-1">({product.reviews})</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-sm md:text-base font-bold text-[#E31837]">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-[10px] md:text-xs text-gray-400 line-through ml-1">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="lg:hidden bg-[#E31837] text-white p-1.5 rounded hover:bg-primary-700 transition-colors"
                  title="Add to cart"
                >
                  <ShoppingCart size={14} />
                </button>
              </div>

              {/* Scarcity bar */}
              {product.stock !== undefined && product.totalStock !== undefined && (
                <div>
                  <div className="w-full bg-gray-100 rounded-full h-1">
                    <div
                      className={`h-1 rounded-full ${stockPercent <= 20 ? 'bg-[#E31837]' : stockPercent <= 50 ? 'bg-orange-400' : 'bg-green-500'}`}
                      style={{ width: `${stockPercent}%` }}
                    />
                  </div>
                  <p className="text-[9px] text-gray-500 mt-0.5">
                    {product.stock <= 5 ? <span className="text-[#E31837] font-semibold">Only {product.stock} left!</span> : <span>{product.stock} items left</span>}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
