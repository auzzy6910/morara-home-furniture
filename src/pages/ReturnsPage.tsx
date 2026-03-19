import { Link } from 'react-router-dom';
import { RotateCcw, CheckCircle, XCircle, Clock, AlertTriangle } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Returns & <span className="text-red-200">Exchanges</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            We want you to love your furniture. If you're not completely satisfied, we're here to help.
          </p>
        </div>
      </section>

      {/* Return Policy Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Our Policy</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Easy Returns Process
            </h2>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { step: '1', title: 'Request a Return', desc: 'Contact us within 7 days of delivery via phone, email, or our contact form.' },
              { step: '2', title: 'Schedule Pickup', desc: 'Our team will arrange a convenient pickup time from your location.' },
              { step: '3', title: 'Get Your Refund', desc: 'Once we receive and inspect the item, your refund will be processed within 5-10 business days.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Policy Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg shrink-0">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Eligible for Return</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Items in original condition with all tags and packaging intact</li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Products returned within 7 days of delivery</li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Items that arrived damaged or defective</li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Wrong items received</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg shrink-0">
                  <XCircle className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Not Eligible for Return</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><XCircle className="text-red-500 shrink-0 mt-0.5" size={16} /> Custom-made or personalized furniture</li>
                    <li className="flex items-start gap-2"><XCircle className="text-red-500 shrink-0 mt-0.5" size={16} /> Items showing signs of use, stains, or damage by the customer</li>
                    <li className="flex items-start gap-2"><XCircle className="text-red-500 shrink-0 mt-0.5" size={16} /> Items returned after the 7-day return window</li>
                    <li className="flex items-start gap-2"><XCircle className="text-red-500 shrink-0 mt-0.5" size={16} /> Clearance or final sale items</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg shrink-0">
                  <AlertTriangle className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Important Notes</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><Clock className="text-yellow-500 shrink-0 mt-0.5" size={16} /> Refunds are processed to the original payment method</li>
                    <li className="flex items-start gap-2"><Clock className="text-yellow-500 shrink-0 mt-0.5" size={16} /> A pickup fee of KSh 1,500 applies for returns within Nairobi; rates vary for other regions</li>
                    <li className="flex items-start gap-2"><RotateCcw className="text-yellow-500 shrink-0 mt-0.5" size={16} /> Exchanges are subject to product availability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need to start a return?</p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
