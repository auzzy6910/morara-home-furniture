import { RotateCcw, CreditCard, Clock, CheckCircle } from 'lucide-react';

export default function ReturnsRefundsPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Returns & <span className="text-red-200">Refunds</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Our hassle-free returns and refunds policy ensures your satisfaction.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4 space-y-8">
        <div className="bg-white rounded-xl shadow p-8">
          <div className="flex items-start gap-4">
            <RotateCcw className="text-red-600 mt-1 shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Return Policy</h3>
              <p className="text-gray-600 mb-4">You may return most items within <strong>7 days</strong> of delivery for a full refund. Items must be in original, unused condition with all tags and packaging intact.</p>
              <p className="text-gray-600">To initiate a return, contact our customer service team with your order number and reason for return.</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-8">
          <div className="flex items-start gap-4">
            <CreditCard className="text-red-600 mt-1 shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Refund Methods</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li><strong>M-Pesa:</strong> Refund sent directly to your M-Pesa number within 24-48 hours.</li>
                <li><strong>Credit/Debit Card:</strong> Refund processed to original card within 5-10 business days.</li>
                <li><strong>Morara Pay:</strong> Instant refund to your Morara Pay wallet.</li>
                <li><strong>Store Credit:</strong> Available immediately for future purchases.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-8">
          <div className="flex items-start gap-4">
            <Clock className="text-red-600 mt-1 shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exchange Policy</h3>
              <p className="text-gray-600">We offer free exchanges within 14 days if you'd like a different size, color, or style. Exchanges are subject to availability. Contact us to arrange an exchange.</p>
            </div>
          </div>
        </div>
        <div className="bg-red-50 rounded-xl p-8 text-center">
          <CheckCircle className="text-green-600 mx-auto mb-4" size={32} />
          <h3 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction Guaranteed</h3>
          <p className="text-gray-600">If you're not completely satisfied with your purchase, we'll make it right. Contact us at <a href="mailto:returns@morarahome.co.ke" className="text-red-600 font-semibold">returns@morarahome.co.ke</a></p>
        </div>
      </section>
    </div>
  );
}
