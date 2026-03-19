import { RotateCcw, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function ReturnPolicyPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Return <span className="text-red-200">Policy</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            We want you to love your furniture. If something isn't right, we're here to help.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow p-8">
            <div className="flex items-start gap-4">
              <RotateCcw className="text-red-600 mt-1 shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Return Window</h3>
                <p className="text-gray-600">Items can be returned within <strong>7 days</strong> of delivery. Items must be in their original condition, unused, and in original packaging.</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="flex items-start gap-4">
              <Clock className="text-red-600 mt-1 shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Refund Process</h3>
                <p className="text-gray-600">Once we receive and inspect the returned item, refunds are processed within <strong>5-10 business days</strong>. Refunds are issued to the original payment method.</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-600 mt-1 shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eligible for Return</h3>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Factory-made furniture in original condition</li>
                  <li>Items with manufacturing defects</li>
                  <li>Wrong items delivered</li>
                  <li>Damaged items (reported within 24 hours of delivery)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-yellow-600 mt-1 shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Not Eligible for Return</h3>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Custom-made or personalized furniture</li>
                  <li>Items that have been assembled and used</li>
                  <li>Items without original packaging</li>
                  <li>Mattresses (for hygiene reasons, unless defective)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
