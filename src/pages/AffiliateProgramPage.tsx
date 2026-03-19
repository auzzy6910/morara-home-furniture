import { Share2, DollarSign, BarChart3, CheckCircle } from 'lucide-react';

export default function AffiliateProgramPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Affiliate <span className="text-red-200">Program</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Earn money by sharing Morara Home furniture with your audience.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Share2, title: 'Share & Earn', desc: 'Share your unique referral link on social media, blogs, or with friends. Earn commission on every sale.' },
            { icon: DollarSign, title: 'Up to 8% Commission', desc: 'Earn up to 8% commission on every confirmed sale made through your referral link.' },
            { icon: BarChart3, title: 'Track Performance', desc: 'Access your affiliate dashboard to track clicks, conversions, and earnings in real time.' },
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
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>How It Works</h2>
            <div className="space-y-4">
              {[
                'Sign up for the Morara Affiliate Program.',
                'Get your unique referral link and marketing materials.',
                'Share the link on your platform — blog, social media, email.',
                'When someone purchases through your link, you earn a commission.',
                'Get paid monthly via M-Pesa or bank transfer.',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Program Benefits</h2>
            <ul className="space-y-3">
              {[
                'No signup fees or minimum requirements',
                'Commission rates from 5% to 8%',
                '30-day cookie tracking period',
                'Real-time analytics dashboard',
                'Dedicated affiliate support team',
                'Exclusive promotions for your audience',
                'Monthly payouts with no minimum threshold',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 shrink-0" size={18} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-red-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Affiliate Program</h3>
          <p className="text-gray-600 mb-6">Start earning today by promoting quality furniture to your audience.</p>
          <a href="mailto:affiliates@morarahome.co.ke" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  );
}
