import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product, formatPrice } from '../data/products';
import { Link } from 'react-router-dom';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white border border-gray-100 rounded-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
        >
          {/* Image Container */}
          <Link
            to={`/product/${product.id}`}
            className="block relative overflow-hidden aspect-[4/5]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Desktop: Quick Add to Cart overlay on hover */}
            <div className="hidden lg:flex absolute inset-0 items-end justify-center pb-6 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product);
                }}
                className="flex items-center gap-2 bg-white text-gray-900 px-6 py-2.5 rounded font-medium text-sm tracking-wide hover:bg-gray-100 transition-colors shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                <ShoppingCart size={16} />
                Quick Add to Cart
              </button>
            </div>

            {/* Discount badge */}
            {product.discount && (
              <span className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] md:text-xs font-semibold tracking-wider uppercase px-2 py-1 rounded-sm">
                {product.discount}% Off
              </span>
            )}
          </Link>

          {/* Product Info */}
          <div className="p-3 md:p-5 space-y-1 md:space-y-2">
            <p className="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-widest">
              {product.category}
            </p>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors">
                {product.name}
              </h3>
            </Link>

            <div className="flex items-center justify-between pt-1 md:pt-2">
              <div>
                <span className="text-sm md:text-lg font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs md:text-sm text-gray-400 line-through ml-1.5">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Mobile: always-visible cart button */}
              <button
                onClick={() => addToCart(product)}
                className="lg:hidden bg-gray-900 text-white p-2 rounded hover:bg-gray-700 transition-colors"
                title="Add to cart"
              >
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
