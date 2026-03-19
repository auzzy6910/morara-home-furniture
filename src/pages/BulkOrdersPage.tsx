import { CheckCircle } from 'lucide-react';

export default function BulkOrdersPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Bulk & Corporate <span className="text-red-200">Orders</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Special pricing and dedicated service for businesses, hotels, offices, and institutions.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Furnishing Businesses Across Kenya
            </h2>
            <p className="text-gray-600 mb-6">Whether you're setting up a new office, furnishing a hotel, or outfitting a school, Morara Home provides tailored solutions with competitive bulk pricing.</p>
            <ul className="space-y-3">
              {['Volume discounts up to 30% off retail prices', 'Dedicated account manager for your project', 'Custom furniture options available', 'Priority delivery and installation', 'Flexible payment terms for businesses', 'After-sales support and warranty'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 shrink-0" size={18} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Request a Quote</h3>
            <form onSubmit={e => e.preventDefault()} className="space-y-4">
              <input type="text" placeholder="Company Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-red-500" />
              <input type="text" placeholder="Contact Person" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-red-500" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-red-500" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-red-500" />
              <textarea rows={4} placeholder="Describe your furniture needs..." className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-red-500 resize-none" />
              <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Hotels & Hospitality', 'Offices & Co-working', 'Schools & Universities', 'Hospitals & Clinics', 'Restaurants & Cafes', 'Government Institutions', 'Real Estate Developers', 'Retail Stores'].map((industry, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 shadow">{industry}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
