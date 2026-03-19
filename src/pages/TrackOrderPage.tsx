import { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber.trim()) {
      setSearched(true);
    }
  };

  return (
    <div>
      {/* Hero */}
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

      {/* Search Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Enter Order Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order Number</label>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="e.g. MOR-2026-001234"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <Search size={18} />
                Track Order
              </button>
            </form>
          </div>

          {/* Sample Tracking Result */}
          {searched && (
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <p className="text-sm text-gray-500">Order Number</p>
                <p className="text-lg font-bold text-gray-900">{orderNumber}</p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: CheckCircle, label: 'Order Confirmed', detail: 'Your order has been placed successfully.', active: true },
                  { icon: Package, label: 'Processing', detail: 'Your order is being prepared for shipment.', active: true },
                  { icon: Truck, label: 'In Transit', detail: 'Your order is on its way to you.', active: false },
                  { icon: CheckCircle, label: 'Delivered', detail: 'Your order has been delivered.', active: false },
                ].map((step, index) => (
                  <div key={step.label} className="flex items-start gap-4">
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.active ? 'bg-green-100' : 'bg-gray-100'}`}>
                        <step.icon className={step.active ? 'text-green-600' : 'text-gray-400'} size={20} />
                      </div>
                      {index < 3 && (
                        <div className={`absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-6 ${step.active ? 'bg-green-300' : 'bg-gray-200'}`} />
                      )}
                    </div>
                    <div>
                      <h4 className={`font-semibold ${step.active ? 'text-gray-900' : 'text-gray-400'}`}>{step.label}</h4>
                      <p className={`text-sm ${step.active ? 'text-gray-600' : 'text-gray-400'}`}>{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-yellow-50 rounded-lg flex items-start gap-3">
                <Clock className="text-yellow-600 shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">Estimated Delivery:</span> Within 3-5 business days. You will receive an SMS notification when your order is out for delivery.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
