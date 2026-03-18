import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/products';

export default function CustomerTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            What Our <span className="text-red-600">Customers</span> Say
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Join thousands of happy homeowners who trust Morara Home Furniture for quality and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-6 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote size={32} className="text-red-100 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>

        {/* Trust stats bar */}
        <div className="mt-12 bg-red-50 rounded-2xl p-6 md:p-8 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-3xl font-bold text-red-600">10,000+</p>
            <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-600">4.8/5</p>
            <p className="text-sm text-gray-600 mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-600">15+</p>
            <p className="text-sm text-gray-600 mt-1">Years in Business</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-600">98%</p>
            <p className="text-sm text-gray-600 mt-1">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
}
