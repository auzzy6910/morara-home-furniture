import { MapPin, Truck, Clock } from 'lucide-react';

const zones = [
  { city: 'Nairobi', region: 'Central', delivery: '1-3 days', desc: 'Full coverage including CBD, Westlands, Karen, Langata, Eastleigh, and all suburbs.' },
  { city: 'Mombasa', region: 'Coast', delivery: '3-5 days', desc: 'Covering Nyali, Bamburi, Likoni, Changamwe, Kisauni, and surrounding areas.' },
  { city: 'Kisumu', region: 'Western', delivery: '4-6 days', desc: 'Covering Kisumu CBD, Mamboleo, Kondele, Nyalenda, and nearby towns.' },
  { city: 'Nakuru', region: 'Rift Valley', delivery: '3-5 days', desc: 'Including Nakuru CBD, Milimani, Lanet, Njoro, and environs.' },
  { city: 'Eldoret', region: 'Rift Valley', delivery: '4-6 days', desc: 'Covering Eldoret CBD, Langas, Huruma, and surrounding areas.' },
  { city: 'Thika', region: 'Central', delivery: '2-4 days', desc: 'Including Thika CBD, Makongeni, Landless, and neighboring areas.' },
  { city: 'Nyeri', region: 'Central', delivery: '3-5 days', desc: 'Covering Nyeri town, Karatina, Othaya, and surrounding areas.' },
  { city: 'Meru', region: 'Eastern', delivery: '4-6 days', desc: 'Including Meru town, Nkubu, Maua, and surrounding areas.' },
  { city: 'Naivasha', region: 'Rift Valley', delivery: '3-5 days', desc: 'Covering Naivasha town, Mai Mahiu, and surrounding areas.' },
  { city: 'Malindi', region: 'Coast', delivery: '5-7 days', desc: 'Including Malindi town, Watamu, and surrounding areas.' },
];

export default function DeliveryZonesPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Delivery <span className="text-red-200">Zones</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            We deliver quality furniture across Kenya. Check delivery times for your area.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {zones.map((zone, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="text-red-600" size={20} />
                  <h3 className="text-lg font-bold text-gray-900">{zone.city}</h3>
                </div>
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">{zone.region}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{zone.desc}</p>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="text-gray-400" size={14} />
                <span className="text-gray-500">Estimated delivery: <strong className="text-gray-700">{zone.delivery}</strong></span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-red-50 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Truck className="text-red-600 mt-1 shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Don't See Your Area?</h3>
              <p className="text-gray-600 mb-2">We're constantly expanding our delivery network. Even if your town isn't listed above, we may still be able to deliver to you.</p>
              <p className="text-gray-600">Contact us at <a href="tel:+254700000000" className="text-red-600 font-semibold">+254 700 000 000</a> or email <a href="mailto:delivery@morarahome.co.ke" className="text-red-600 font-semibold">delivery@morarahome.co.ke</a> for delivery inquiries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
