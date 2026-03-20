import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img
          src={`${product.image}&fm=webp`}
          alt={product.name}
          loading="lazy"
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <p className="text-xs text-red-500 font-medium uppercase mb-1">{product.category}</p>
          <h3 className="font-semibold text-gray-900 mb-2 hover:text-red-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-2">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
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
            onClick={() => addToCart(product)}
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
