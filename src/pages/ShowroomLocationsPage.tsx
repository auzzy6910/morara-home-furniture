import { MapPin, Phone, Clock } from 'lucide-react';

const showrooms = [
  { city: 'Nairobi', address: 'Mombasa Road, next to City Mall', phone: '+254 700 000 001', hours: 'Mon-Sat: 8AM-6PM' },
  { city: 'Mombasa', address: 'Nyali Road, Nyali Centre', phone: '+254 700 000 002', hours: 'Mon-Sat: 8AM-6PM' },
  { city: 'Kisumu', address: 'Oginga Odinga Street, Mega Plaza', phone: '+254 700 000 003', hours: 'Mon-Sat: 8AM-5PM' },
  { city: 'Nakuru', address: 'Kenyatta Avenue, Westside Mall', phone: '+254 700 000 004', hours: 'Mon-Sat: 8AM-5PM' },
  { city: 'Eldoret', address: 'Uganda Road, Zion Mall', phone: '+254 700 000 005', hours: 'Mon-Sat: 8AM-5PM' },
  { city: 'Thika', address: 'Thika Superhighway, Thika Mall', phone: '+254 700 000 006', hours: 'Mon-Sat: 9AM-5PM' },
];

export default function ShowroomLocationsPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Showroom <span className="text-red-200">Locations</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Visit any of our showrooms across Kenya to experience our furniture in person.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showrooms.map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {s.city}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="text-red-600 mt-0.5 shrink-0" size={18} />
                  <p className="text-sm text-gray-600">{s.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-red-600 shrink-0" size={18} />
                  <p className="text-sm text-gray-600">{s.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-red-600 shrink-0" size={18} />
                  <p className="text-sm text-gray-600">{s.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
