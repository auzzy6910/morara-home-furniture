import { Store, TrendingUp, Users, CheckCircle } from 'lucide-react';

export default function SellOnMoraraPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sell on <span className="text-red-200">Morara</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Join Kenya's fastest-growing furniture marketplace and reach thousands of customers.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Store, title: 'Your Online Store', desc: 'Get your own branded storefront on the Morara marketplace. List unlimited products with photos and descriptions.' },
            { icon: TrendingUp, title: 'Grow Your Sales', desc: 'Access our marketing tools, analytics dashboard, and customer base to grow your furniture business.' },
            { icon: Users, title: 'Reach More Customers', desc: 'Tap into our network of thousands of furniture buyers across Kenya looking for quality pieces.' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-red-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>How It Works</h2>
            <div className="space-y-4">
              {[
                'Register as a vendor on Morara Home.',
                'Set up your store profile and upload your products.',
                'Receive orders directly through the platform.',
                'We handle delivery logistics for you.',
                'Get paid weekly via M-Pesa or bank transfer.',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Seller Benefits</h2>
            <ul className="space-y-3">
              {[
                'No upfront fees — pay only when you sell',
                'Competitive commission rates starting at 10%',
                'Free product photography for top sellers',
                'Dedicated seller support team',
                'Marketing and promotion opportunities',
                'Access to seller analytics and insights',
                'Flexible payout options',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 shrink-0" size={18} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 bg-red-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Selling?</h3>
          <p className="text-gray-600 mb-6">Join hundreds of furniture makers and sellers on the Morara marketplace.</p>
          <a href="mailto:sellers@morarahome.co.ke" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Apply to Sell
          </a>
        </div>
      </section>
    </div>
  );
}
