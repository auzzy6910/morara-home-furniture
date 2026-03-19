import { MessageCircle, Phone, Mail, HelpCircle, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenterPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Help <span className="text-red-200">Center</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Find answers to your questions or get in touch with our support team.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link to="/contact" className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-red-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Chat With Us</h3>
            <p className="text-gray-600 text-sm">Get instant help from our support team via live chat.</p>
          </Link>
          <Link to="/contact" className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-red-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm">Speak directly with our team at +254 700 000 000.</p>
          </Link>
          <Link to="/contact" className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-red-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">Send us a message at info@morarahome.co.ke.</p>
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'How long does delivery take?', a: 'Standard delivery takes 3-7 business days within Nairobi. For other regions, delivery may take 5-14 business days depending on your location.' },
            { q: 'Do you offer assembly services?', a: 'Yes! We offer professional assembly services for all furniture items. Assembly is included free for orders above KSh 50,000.' },
            { q: 'What is your return policy?', a: 'We accept returns within 7 days of delivery for items in their original condition. Custom-made furniture is non-returnable.' },
            { q: 'Do you offer warranties?', a: 'Yes, all our furniture comes with a minimum 1-year warranty against manufacturing defects. Premium items come with extended warranties up to 5 years.' },
            { q: 'Can I track my order?', a: 'Yes, once your order is dispatched, you will receive a tracking number via SMS and email to monitor your delivery.' },
            { q: 'Do you offer bulk discounts?', a: 'Yes! We offer special pricing for bulk and corporate orders. Contact our sales team for custom quotes.' },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6">
              <div className="flex items-start gap-3">
                <HelpCircle className="text-red-600 mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Link to="/how-to-order" className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
            <BookOpen className="text-red-600 shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-gray-900">How to Order</h4>
              <p className="text-sm text-gray-600">Step-by-step guide to placing your order.</p>
            </div>
          </Link>
          <Link to="/furniture-care" className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
            <FileText className="text-red-600 shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-gray-900">Furniture Care Guide</h4>
              <p className="text-sm text-gray-600">Tips to keep your furniture looking new.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
