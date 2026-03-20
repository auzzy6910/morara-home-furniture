import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Grace Wanjiku',
    location: 'Nairobi',
    avatar: 'GW',
    rating: 5,
    text: 'Morara Home completely transformed our living room. The quality of the velvet sofa exceeded all expectations. Delivery was swift and the assembly team was incredibly professional.',
  },
  {
    id: 2,
    name: 'Peter Ochieng',
    location: 'Kisumu',
    avatar: 'PO',
    rating: 5,
    text: 'Best furniture shopping experience in Kenya. The prices are very fair for the quality you get. My office setup from Morara gets compliments from every client who visits.',
  },
  {
    id: 3,
    name: 'Amina Hassan',
    location: 'Mombasa',
    avatar: 'AH',
    rating: 4,
    text: 'I was hesitant buying furniture online but Morara exceeded my expectations. The dining set is beautiful and sturdy. Customer service was responsive throughout the process.',
  },
  {
    id: 4,
    name: 'Brian Kimani',
    location: 'Nakuru',
    avatar: 'BK',
    rating: 5,
    text: 'The bedroom set I ordered is absolutely gorgeous. Premium materials and attention to detail. Morara Home is now my go-to for all home furnishing needs.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our Customers <span className="text-red-600">Say</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Join thousands of happy customers who have transformed their homes with Morara furniture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(t => (
            <div key={t.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 relative hover:shadow-lg transition-shadow">
              <Quote size={32} className="text-red-100 dark:text-red-900 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.location}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={14} className={i < t.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
