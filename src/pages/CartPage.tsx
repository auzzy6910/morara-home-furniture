import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2" >
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added any furniture to your cart yet.</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-[#E31837] text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8" >
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="bg-white rounded-xl shadow p-4 flex gap-4">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
                />
              </Link>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-gray-900                     hover:text-[#E31837] transition-colors">
                                          {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="p-1.5 hover:bg-gray-100 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-sm font-semibold">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="p-1.5 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="font-bold text-[#E31837]">{formatPrice(product.price * quantity)}</span>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-gray-400 hover:text-[#E31837] transition-colors p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow p-6 h-fit sticky top-28">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Order Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery</span>
              <span className={totalPrice >= 5000000 ? 'text-green-600 font-medium' : ''}>
                {totalPrice >= 5000000 ? 'FREE' : formatPrice(50000)}
              </span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg text-gray-900">
              <span>Total</span>
              <span className="              text-[#E31837]">
                              {formatPrice(totalPrice + (totalPrice >= 5000000 ? 0 : 50000))}
              </span>
            </div>
          </div>
          <button
            className="w-full bg-[#E31837] text-white py-3.5 rounded-lg font-semibold mt-6 hover:bg-primary-700 transition-colors"
            onClick={() => alert('Checkout functionality coming soon!')}
          >
            Proceed to Checkout
          </button>
          <button
            onClick={clearCart}
            className="w-full text-gray-500 text-sm mt-3           hover:text-[#E31837] transition-colors"
                    >
            Clear Cart
          </button>
          <Link
            to="/shop"
            className="block text-center text-[#E31837] text-sm font-medium mt-4 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
