import { Shield, CreditCard, Truck, Award, CheckCircle } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-900">Trusted by thousands of Kenyan homeowners</h3>
          <p className="text-sm text-gray-500 mt-1">Shop with confidence — secure payments, quality guaranteed</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
          {/* Payment Methods */}
          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border">
            <div className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded">M-PESA</div>
            <span className="text-xs text-gray-600 font-medium">Accepted</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border">
            <div className="bg-blue-700 text-white text-[10px] font-bold px-2 py-1 rounded">VISA</div>
            <span className="text-xs text-gray-600 font-medium">Accepted</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border">
            <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">MASTERCARD</div>
            <span className="text-xs text-gray-600 font-medium">Accepted</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border">
            <CreditCard size={18} className="text-gray-600" />
            <span className="text-xs text-gray-600 font-medium">Pay on Delivery</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border">
            <div className="bg-green-100 p-2 rounded-lg">
              <Shield size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Secure Checkout</p>
              <p className="text-xs text-gray-500">SSL Encrypted</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Truck size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Nationwide Delivery</p>
              <p className="text-xs text-gray-500">All 47 counties</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <Award size={20} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">2-Year Warranty</p>
              <p className="text-xs text-gray-500">On all products</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border">
            <div className="bg-red-100 p-2 rounded-lg">
              <CheckCircle size={20} className="text-red-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Verified Business</p>
              <p className="text-xs text-gray-500">KRA Registered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
