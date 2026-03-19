import { Shield, FileText, Phone } from 'lucide-react';

export default function WarrantyClaimsPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Warranty <span className="text-red-200">Claims</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            All Morara furniture is backed by our quality warranty.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow p-8">
            <div className="flex items-start gap-4">
              <Shield className="text-red-600 mt-1 shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Warranty Coverage</h3>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li><strong>Standard Warranty (1 Year):</strong> Covers manufacturing defects in materials and workmanship.</li>
                  <li><strong>Extended Warranty (3-5 Years):</strong> Available on premium collections, covering structural integrity and frame defects.</li>
                  <li><strong>Upholstery Warranty (2 Years):</strong> Covers fabric tearing, stitching issues, and foam deterioration under normal use.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-8">
            <div className="flex items-start gap-4">
              <FileText className="text-red-600 mt-1 shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">How to File a Claim</h3>
                <ol className="text-gray-600 space-y-2 list-decimal list-inside">
                  <li>Gather your order number and purchase receipt.</li>
                  <li>Take clear photos of the defect or issue.</li>
                  <li>Contact our warranty team via email at <a href="mailto:warranty@morarahome.co.ke" className="text-red-600">warranty@morarahome.co.ke</a> or call <a href="tel:+254700000000" className="text-red-600">+254 700 000 000</a>.</li>
                  <li>Our team will review your claim within 2-3 business days.</li>
                  <li>If approved, we will arrange repair, replacement, or refund as applicable.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="bg-red-50 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <Phone className="text-red-600 mt-1 shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Need Help?</h3>
                <p className="text-gray-600">Our warranty support team is available Monday-Saturday, 8AM-6PM. Call us at <a href="tel:+254700000000" className="text-red-600 font-semibold">+254 700 000 000</a> or email <a href="mailto:warranty@morarahome.co.ke" className="text-red-600 font-semibold">warranty@morarahome.co.ke</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
