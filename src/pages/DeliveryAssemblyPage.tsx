import { Truck, Clock, MapPin, Wrench, CheckCircle } from 'lucide-react';

export default function DeliveryAssemblyPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Delivery & <span className="text-red-200">Assembly</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            We deliver and assemble your furniture so you can sit back and relax.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Delivery</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fast & Reliable Delivery
            </h2>
            <div className="space-y-4">
              {[
                { icon: Truck, title: 'Free Delivery', desc: 'Free delivery on all orders above KSh 50,000 within Nairobi.' },
                { icon: Clock, title: 'Delivery Timeline', desc: 'Nairobi: 3-7 business days. Other regions: 5-14 business days.' },
                { icon: MapPin, title: 'Nationwide Coverage', desc: 'We deliver to all major towns across Kenya including Mombasa, Kisumu, Nakuru, Eldoret, and more.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <item.icon className="text-red-600" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Assembly</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Professional Assembly
            </h2>
            <div className="space-y-4">
              {[
                { icon: Wrench, title: 'Expert Technicians', desc: 'Our skilled team ensures every piece is assembled perfectly and securely.' },
                { icon: CheckCircle, title: 'Free Assembly', desc: 'Complimentary assembly service for orders above KSh 50,000.' },
                { icon: Clock, title: 'Same-Day Assembly', desc: 'Assembly is done on the day of delivery for most furniture items.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <item.icon className="text-red-600" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Delivery Rates</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Location</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Standard Delivery</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Express Delivery</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { loc: 'Nairobi (Within City)', std: 'KSh 500', exp: 'KSh 1,500' },
                  { loc: 'Nairobi (Greater Area)', std: 'KSh 1,000', exp: 'KSh 2,500' },
                  { loc: 'Mombasa / Kisumu', std: 'KSh 3,000', exp: 'KSh 5,000' },
                  { loc: 'Nakuru / Eldoret', std: 'KSh 2,500', exp: 'KSh 4,500' },
                  { loc: 'Other Regions', std: 'KSh 3,500', exp: 'KSh 6,000' },
                ].map((row, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-3 px-4 text-gray-700">{row.loc}</td>
                    <td className="py-3 px-4 text-gray-700">{row.std}</td>
                    <td className="py-3 px-4 text-gray-700">{row.exp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">* Free delivery on orders above KSh 50,000. Express delivery available in select areas.</p>
        </div>
      </section>
    </div>
  );
}
