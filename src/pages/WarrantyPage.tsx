import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Clock, FileText, AlertTriangle } from 'lucide-react';

export default function WarrantyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Warranty <span className="text-red-200">Policy</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            We stand behind the quality of our furniture with comprehensive warranty coverage.
          </p>
        </div>
      </section>

      {/* Warranty Coverage */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-widest">Coverage</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Warranty Coverage
            </h2>
          </div>

          {/* Warranty Tiers */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { years: '1 Year', category: 'Accessories & Decor', items: ['Decorative pillows', 'Lamps & lighting', 'Wall art & mirrors', 'Rugs & carpets'] },
              { years: '3 Years', category: 'Upholstered Furniture', items: ['Sofas & couches', 'Armchairs', 'Dining chairs', 'Bed frames with fabric'] },
              { years: '5 Years', category: 'Solid Wood Furniture', items: ['Dining tables', 'Wooden cabinets', 'Bookshelves', 'Hardwood bed frames'] },
            ].map((tier) => (
              <div key={tier.years} className="bg-white rounded-xl p-6 shadow border border-gray-100 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-red-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{tier.years}</h3>
                <p className="text-red-600 font-semibold text-sm mb-4">{tier.category}</p>
                <ul className="space-y-2 text-sm text-gray-600 text-left">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 shrink-0" size={14} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* What's Covered */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg shrink-0">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What's Covered</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Manufacturing defects in materials and workmanship</li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Structural failures under normal use</li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Hardware malfunctions (hinges, drawer slides, etc.)</li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} /> Fabric or upholstery defects (seam separation, abnormal pilling)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-lg shrink-0">
                  <AlertTriangle className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What's Not Covered</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2"><AlertTriangle className="text-yellow-500 shrink-0 mt-0.5" size={16} /> Damage from misuse, abuse, or accidents</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="text-yellow-500 shrink-0 mt-0.5" size={16} /> Normal wear and tear, including fading from sunlight</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="text-yellow-500 shrink-0 mt-0.5" size={16} /> Damage caused by improper assembly or modifications</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="text-yellow-500 shrink-0 mt-0.5" size={16} /> Stains, scratches, or damage from pets or spills</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Claim */}
            <div className="bg-white rounded-xl p-8 shadow border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-lg shrink-0">
                  <FileText className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How to Make a Warranty Claim</h3>
                  <ol className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">1</span>
                      Contact our support team with your order number and a description of the issue.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">2</span>
                      Provide photos or videos of the defect for assessment.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">3</span>
                      Our team will review your claim within 2-3 business days.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">4</span>
                      If approved, we will repair, replace, or refund the item as appropriate.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 bg-gray-50 rounded-xl p-8">
            <Clock className="text-red-600 mx-auto mb-3" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Keep Your Receipt</h3>
            <p className="text-sm text-gray-600 mb-4 max-w-md mx-auto">
              A valid proof of purchase is required for all warranty claims. Keep your order confirmation email or receipt in a safe place.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
