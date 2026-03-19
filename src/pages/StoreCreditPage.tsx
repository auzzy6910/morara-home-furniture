import { CreditCard, Gift, ShoppingBag } from 'lucide-react';

export default function StoreCreditPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Store Credit <span className="text-red-200">Terms</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Learn about Morara Home store credits, gift cards, and how to use them.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4 space-y-8">
        <div className="bg-white rounded-xl shadow p-8">
          <div className="flex items-start gap-4">
            <CreditCard className="text-red-600 mt-1 shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What is Store Credit?</h3>
              <p className="text-gray-600">Store credit is a monetary value added to your Morara account that can be used towards future purchases. It works like a digital wallet for Morara Home Furniture.</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-8">
          <div className="flex items-start gap-4">
            <Gift className="text-red-600 mt-1 shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">How to Earn Store Credit</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li>Product returns processed as store credit (instant availability)</li>
                <li>Referral rewards when friends make their first purchase</li>
                <li>Promotional campaigns and special events</li>
                <li>Loyalty program rewards for repeat customers</li>
                <li>Gift cards purchased by others for you</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-8">
          <div className="flex items-start gap-4">
            <ShoppingBag className="text-red-600 mt-1 shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Terms of Use</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li>Store credit is valid for <strong>12 months</strong> from the date of issue.</li>
                <li>Store credit can be combined with other payment methods.</li>
                <li>Store credit is non-transferable and cannot be exchanged for cash.</li>
                <li>Store credit applies to all products including sale items.</li>
                <li>Minimum purchase of KSh 1,000 required to use store credit.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
