import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Star } from 'lucide-react';

const stores = [
  {
    id: 1,
    name: 'Morara Home - Westlands Showroom',
    address: 'Westlands Road, Nairobi',
    phone: '+254 700 000 001',
    hours: 'Mon-Sat: 8AM-6PM, Sun: 10AM-4PM',
    lat: -1.2635,
    lng: 36.8025,
    rating: 4.8,
    featured: true,
  },
  {
    id: 2,
    name: 'Morara Home - CBD Branch',
    address: 'Kenyatta Avenue, Nairobi CBD',
    phone: '+254 700 000 002',
    hours: 'Mon-Sat: 8AM-7PM',
    lat: -1.2864,
    lng: 36.8172,
    rating: 4.6,
    featured: false,
  },
  {
    id: 3,
    name: 'Morara Home - Karen Showroom',
    address: 'Karen Road, Nairobi',
    phone: '+254 700 000 003',
    hours: 'Mon-Sat: 9AM-6PM, Sun: 10AM-4PM',
    lat: -1.3184,
    lng: 36.7111,
    rating: 4.9,
    featured: false,
  },
];

export default function StoreLocatorPage() {
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Find Us</span>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Our <span className="text-red-600">Showrooms</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
          Visit our showrooms in Nairobi to experience our furniture in person. Our team is ready to help you find the perfect pieces.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Store List */}
        <div className="space-y-4">
          {stores.map(store => (
            <button
              key={store.id}
              onClick={() => setSelectedStore(store)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                selectedStore.id === store.id
                  ? 'border-red-600 bg-red-50 dark:bg-red-900/20 shadow-md'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {store.featured && (
                <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded font-medium mb-2 inline-block">Flagship Store</span>
              )}
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{store.name}</h3>
              <div className="space-y-1.5 text-sm">
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin size={14} className="text-red-600 shrink-0" /> {store.address}
                </p>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Phone size={14} className="text-red-600 shrink-0" /> {store.phone}
                </p>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Clock size={14} className="text-red-600 shrink-0" /> {store.hours}
                </p>
                <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Star size={14} className="text-yellow-400 fill-yellow-400 shrink-0" /> {store.rating} / 5.0
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Map */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-[500px] relative">
            {/* OpenStreetMap iframe */}
            <iframe
              title="Store Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedStore.lng - 0.02}%2C${selectedStore.lat - 0.015}%2C${selectedStore.lng + 0.02}%2C${selectedStore.lat + 0.015}&layer=mapnik&marker=${selectedStore.lat}%2C${selectedStore.lng}`}
              allowFullScreen
            />

            {/* Store Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border dark:border-gray-700">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{selectedStore.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{selectedStore.address}</p>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${selectedStore.lat},${selectedStore.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center gap-2 shrink-0"
                >
                  <Navigation size={14} /> Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
