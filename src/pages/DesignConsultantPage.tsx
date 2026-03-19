import { Palette, Award, Clock, CheckCircle } from 'lucide-react';

export default function DesignConsultantPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Become a Design <span className="text-red-200">Consultant</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Turn your passion for interior design into income. Join our consultant network.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Palette, title: 'Share Your Expertise', desc: 'Help customers design their dream spaces using Morara furniture. Provide consultations in-person or virtually.' },
            { icon: Award, title: 'Earn Commissions', desc: 'Earn competitive commissions on every sale you facilitate. Top consultants earn KSh 100,000+ per month.' },
            { icon: Clock, title: 'Flexible Schedule', desc: 'Work on your own terms. Set your own hours and take on as many clients as you want.' },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Requirements</h2>
            <ul className="space-y-3">
              {[
                'Background in interior design, architecture, or related field',
                'Strong communication and customer service skills',
                'Knowledge of current furniture and design trends',
                'Ability to create mood boards and design proposals',
                'Smartphone or laptop for virtual consultations',
                'Based in Kenya (remote consultants welcome)',
              ].map((req, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 shrink-0" size={18} />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What You Get</h2>
            <ul className="space-y-3">
              {[
                '10-15% commission on all referred sales',
                'Access to exclusive Morara product catalog',
                'Training and certification program',
                'Marketing materials and brand support',
                'Priority access to new product launches',
                'Monthly bonus incentives for top performers',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-red-600 shrink-0" size={18} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 bg-red-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join?</h3>
          <p className="text-gray-600 mb-6">Apply today and start earning as a Morara Design Consultant.</p>
          <a href="mailto:consultants@morarahome.co.ke" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
