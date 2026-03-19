import { Zap, Clock, MapPin, CheckCircle } from 'lucide-react';

export default function ExpressDeliveryPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Morara Express <span className="text-red-200">Delivery</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Need your furniture fast? Our express delivery service gets it to you in no time.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Zap, title: 'Same-Day Delivery', desc: 'Order before 10AM and receive your furniture the same day within Nairobi.' },
            { icon: Clock, title: 'Next-Day Delivery', desc: 'Available for all major towns. Order today, delivered tomorrow.' },
            { icon: MapPin, title: '48-Hour Delivery', desc: 'Reach even remote locations within 48 hours through our express network.' },
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
        <div className="bg-red-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Express Delivery Coverage</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { zone: 'Same-Day (Nairobi CBD & Suburbs)', price: 'KSh 1,500' },
              { zone: 'Next-Day (Greater Nairobi, Thika, Kiambu)', price: 'KSh 2,500' },
              { zone: 'Next-Day (Nakuru, Naivasha)', price: 'KSh 4,500' },
              { zone: 'Next-Day (Mombasa, Kisumu, Eldoret)', price: 'KSh 5,000' },
              { zone: '48-Hour (All Other Towns)', price: 'KSh 6,000' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-white p-4 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600 shrink-0" size={16} />
                  <span className="text-sm text-gray-700">{item.zone}</span>
                </div>
                <span className="font-bold text-red-600">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
