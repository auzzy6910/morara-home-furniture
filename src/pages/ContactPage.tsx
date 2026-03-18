import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            We'd love to hear from you. Reach out to us for any inquiries, orders, or feedback.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Send us a Message
            </h2>
            <form onSubmit={e => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  placeholder="+254 700 000 000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Visit our showroom or contact us through any of the channels below. Our team is ready to assist you with your furniture needs.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="bg-red-100 p-3 rounded-lg">
                  <MapPin className="text-red-600" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Our Showroom</h4>
                  <p className="text-sm text-gray-600 mt-1">Nairobi, Kenya<br />Mombasa Road, next to City Mall</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Phone className="text-red-600" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-sm text-gray-600 mt-1">+254 700 000 000<br />+254 711 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Mail className="text-red-600" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-sm text-gray-600 mt-1">info@morarahome.co.ke<br />sales@morarahome.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Clock className="text-red-600" size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Business Hours</h4>
                  <p className="text-sm text-gray-600 mt-1">Monday - Saturday: 8AM - 6PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
