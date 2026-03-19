import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, FileText, Truck, RotateCcw, Shield, HelpCircle } from 'lucide-react';

export default function HelpCenterPage() {
  const topics = [
    {
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'Learn about our delivery zones, shipping times, and tracking your order.',
      links: [
        { label: 'Track Your Order', to: '/track-order' },
        { label: 'Delivery Zones', to: '/contact' },
      ],
    },
    {
      icon: RotateCcw,
      title: 'Returns & Exchanges',
      description: 'Find out how to return or exchange items and our refund process.',
      links: [
        { label: 'Return Policy', to: '/returns' },
        { label: 'Contact Support', to: '/contact' },
      ],
    },
    {
      icon: Shield,
      title: 'Warranty Information',
      description: 'Details on product warranties and how to make a warranty claim.',
      links: [
        { label: 'Warranty Policy', to: '/warranty' },
      ],
    },
    {
      icon: FileText,
      title: 'Furniture Care',
      description: 'Tips and guides on how to maintain and care for your furniture.',
      links: [
        { label: 'Care Guide', to: '/furniture-care' },
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Help <span className="text-red-200">Center</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Find answers to your questions and get the support you need.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/contact" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow text-center group">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <MessageCircle className="text-red-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Live Chat</h3>
              <p className="text-sm text-gray-600">Chat with our support team for instant help.</p>
            </Link>
            <Link to="/contact" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow text-center group">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Phone className="text-red-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
              <p className="text-sm text-gray-600">+254 700 000 000 (Mon-Sat, 8AM-6PM)</p>
            </Link>
            <Link to="/contact" className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow text-center group">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Mail className="text-red-600" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
              <p className="text-sm text-gray-600">info@morarahome.co.ke</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Help Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Browse Topics</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              How Can We Help?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {topics.map((topic) => (
              <div key={topic.title} className="bg-white rounded-xl p-8 shadow border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg shrink-0">
                    <topic.icon className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{topic.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {topic.links.map((link) => (
                        <Link
                          key={link.label}
                          to={link.to}
                          className="text-red-600 text-sm font-semibold hover:text-red-700 hover:underline transition-colors"
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'How long does delivery take?', a: 'Delivery within Nairobi takes 1-3 business days. Other regions may take 3-7 business days depending on location.' },
              { q: 'Do you offer assembly services?', a: 'Yes, we offer professional assembly services for all furniture purchases. This service is included for orders over KSh 50,000.' },
              { q: 'What payment methods do you accept?', a: 'We accept M-Pesa, Visa, Mastercard, and Morara Pay. Cash on delivery is also available for orders within Nairobi.' },
              { q: 'Can I return a product if I\'m not satisfied?', a: 'Yes, we offer a 7-day return policy for most items. Please visit our Returns page for full details and conditions.' },
              { q: 'Do your products come with a warranty?', a: 'Yes, all our furniture comes with a warranty ranging from 1 to 5 years depending on the product. See our Warranty page for details.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <HelpCircle className="text-red-600 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
