import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, MapPin, CreditCard, Printer } from 'lucide-react';
import { formatPrice } from '../data/products';

interface OrderData {
  orderId: string;
  items: { name: string; qty: number; price: number }[];
  shipping: { firstName: string; lastName: string; address: string; city: string; county: string; phone: string; email: string };
  payment: string;
  total: number;
  date: string;
}

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('morara-last-order');
    if (saved) setOrder(JSON.parse(saved));
  }, []);

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">No order found</h2>
        <Link to="/shop" className="text-red-600 hover:underline mt-4 inline-block">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Success Header */}
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={40} className="text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Order Confirmed!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Thank you for your purchase. Your order <span className="font-bold text-red-600">{order.orderId}</span> has been placed successfully.
        </p>
      </div>

      {/* Order Receipt */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Order Header */}
        <div className="bg-red-600 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-lg">Order Receipt</h2>
            <p className="text-red-200 text-sm">{new Date(order.date).toLocaleDateString('en-KE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <button onClick={() => window.print()} className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-sm transition-colors">
            <Printer size={14} /> Print
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Items */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Package size={16} className="text-red-600" /> Items Ordered
            </h3>
            <div className="space-y-2">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between text-sm py-2 border-b dark:border-gray-700 last:border-0">
                  <span className="text-gray-700 dark:text-gray-300">{item.name} <span className="text-gray-400">x{item.qty}</span></span>
                  <span className="font-medium text-gray-900 dark:text-white">{formatPrice(item.price * item.qty)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2">
              <MapPin size={14} className="text-red-600" /> Delivery Address
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{order.shipping.firstName} {order.shipping.lastName}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{order.shipping.address}, {order.shipping.city}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{order.shipping.county}</p>
          </div>

          {/* Payment Info */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2">
              <CreditCard size={14} className="text-red-600" /> Payment Method
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">{order.payment.replace('-', ' ')}</p>
          </div>

          {/* Total */}
          <div className="border-t dark:border-gray-700 pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span className="text-gray-900 dark:text-white">Total Paid</span>
              <span className="text-red-600">{formatPrice(order.total)}</span>
            </div>
          </div>

          {/* Delivery Estimate */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-center gap-3">
            <Truck size={20} className="text-blue-600 shrink-0" />
            <div>
              <p className="text-sm font-medium text-blue-900 dark:text-blue-200">Estimated Delivery</p>
              <p className="text-xs text-blue-700 dark:text-blue-300">3-5 business days within Nairobi, 5-7 days for other regions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/track-order" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-red-700 transition-colors">
          Track Order
        </Link>
        <Link to="/shop" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
