import { Settings, BarChart3, Shield, Info } from 'lucide-react';

export default function CookieNoticePage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Cookie <span className="text-red-200">Notice</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4 space-y-8">
        {[
          { icon: Info, title: 'What Are Cookies?', desc: 'Cookies are small text files stored on your device when you visit our website. They help us provide a better shopping experience by remembering your preferences and cart items.' },
          { icon: Settings, title: 'Essential Cookies', desc: 'These cookies are necessary for the website to function properly. They enable core features like shopping cart, user authentication, and secure checkout. These cannot be disabled.' },
          { icon: BarChart3, title: 'Analytics Cookies', desc: 'We use analytics cookies to understand how visitors interact with our website. This helps us improve the user experience. All data is anonymized and used for statistical purposes only.' },
          { icon: Shield, title: 'Managing Cookies', desc: 'You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that disabling essential cookies may affect website functionality.' },
        ].map((section, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <section.icon className="text-red-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600">{section.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
