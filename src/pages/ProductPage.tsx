import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, ChevronRight, Minus, Plus, Truck, Shield, RotateCcw, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { products, formatPrice } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import { useToast } from '../context/ToastContext';
import ProductCard from '../components/ProductCard';
import ImageGallery from '../components/ImageGallery';
import CustomerReviews from '../components/CustomerReviews';
import RecentlyViewedCarousel from '../components/RecentlyViewedCarousel';

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToRecentlyViewed } = useRecentlyViewed();
  const { addToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === Number(id));

  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
    }
  }, [product?.id]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Product not found</h2>
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
    addToast(`${product.name} added to cart!`);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-8 flex items-center gap-1">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop" className="hover:text-red-600">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-red-600 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Product Image Gallery */}
          <ImageGallery mainImage={product.image} productName={product.name} />

          {/* Product Details */}
          <div>
            <p className="text-red-600 text-sm font-semibold uppercase tracking-wide mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
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
              <span className="text-gray-600 dark:text-gray-400 text-sm">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-red-600">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">{product.description}</p>

            {/* Quantity selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Quantity:</span>
              <div className="flex items-center border dark:border-gray-600 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                >
                  <Minus size={18} />
                </button>
                <span className="px-4 py-2 font-semibold min-w-12 text-center text-gray-900 dark:text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-3"
              >
                <ShoppingCart size={22} />
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
              <button
                onClick={() => {
                  toggleWishlist(product);
                  addToast(isInWishlist(product.id) ? 'Removed from wishlist' : 'Added to wishlist!', 'info');
                }}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  isInWishlist(product.id)
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-600 text-red-600'
                    : 'border-gray-300 dark:border-gray-600 text-gray-400 hover:border-red-600 hover:text-red-600'
                }`}
                title={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart size={22} className={isInWishlist(product.id) ? 'fill-red-600' : ''} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Truck size={22} className="mx-auto text-red-600 mb-1" />
                <p className="text-xs text-gray-600 dark:text-gray-400">Free Delivery</p>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Shield size={22} className="mx-auto text-red-600 mb-1" />
                <p className="text-xs text-gray-600 dark:text-gray-400">2 Year Warranty</p>
              </div>
              <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <RotateCcw size={22} className="mx-auto text-red-600 mb-1" />
                <p className="text-xs text-gray-600 dark:text-gray-400">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <CustomerReviews productId={product.id} productRating={product.rating} reviewCount={product.reviews} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
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

      {/* Recently Viewed */}
      <RecentlyViewedCarousel />
    </div>
  );
}
