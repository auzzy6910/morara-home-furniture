import { Search, Package, Truck, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');

  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Track Your <span className="text-red-200">Order</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Enter your order number to check the status of your delivery.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              value={orderNumber}
              onChange={e => setOrderNumber(e.target.value)}
              placeholder="Enter your order number (e.g., MOR-2026-12345)"
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
              <Search size={18} />
              Track
            </button>
          </div>

          <div className="border-t pt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Order Status Timeline</h3>
            <div className="space-y-6">
              {[
                { icon: CheckCircle, label: 'Order Confirmed', desc: 'Your order has been placed and confirmed.', color: 'text-green-600 bg-green-100' },
                { icon: Package, label: 'Processing', desc: 'Your items are being prepared and packaged.', color: 'text-blue-600 bg-blue-100' },
                { icon: Truck, label: 'Out for Delivery', desc: 'Your order is on its way to you.', color: 'text-yellow-600 bg-yellow-100' },
                { icon: CheckCircle, label: 'Delivered', desc: 'Your order has been delivered successfully.', color: 'text-gray-400 bg-gray-100' },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${step.color}`}>
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{step.label}</h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 rounded-xl p-6 text-center">
          <p className="text-gray-600 text-sm">
            Can't find your order? Contact our support team at{' '}
            <a href="tel:+254700000000" className="text-red-600 font-semibold">+254 700 000 000</a>{' '}
            or email us at{' '}
            <a href="mailto:info@morarahome.co.ke" className="text-red-600 font-semibold">info@morarahome.co.ke</a>
          </p>
        </div>
      </section>
    </div>
  );
}
