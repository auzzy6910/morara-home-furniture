import { LayoutDashboard, Package, BarChart3, Headphones } from 'lucide-react';

export default function VendorHubPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Vendor <span className="text-red-200">Hub</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Your central dashboard for managing your Morara seller account.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: LayoutDashboard, title: 'Dashboard', desc: 'View your sales overview, pending orders, and account summary at a glance.' },
            { icon: Package, title: 'Product Management', desc: 'Add, edit, and manage your product listings. Upload photos and set pricing.' },
            { icon: BarChart3, title: 'Analytics', desc: 'Track your sales performance, customer insights, and revenue trends.' },
            { icon: Headphones, title: 'Seller Support', desc: 'Get dedicated support from our seller success team whenever you need help.' },
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-red-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Vendor Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Seller Guidelines', desc: 'Learn about our quality standards, product photography requirements, and listing best practices.' },
              { title: 'Shipping & Logistics', desc: 'Understand our delivery process, packaging requirements, and how to prepare orders for dispatch.' },
              { title: 'Payment & Payouts', desc: 'Weekly payouts via M-Pesa or bank transfer. View your earnings and transaction history.' },
              { title: 'Marketing Tools', desc: 'Access promotional tools, featured listing options, and seasonal campaign opportunities.' },
            ].map((resource, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                <p className="text-sm text-gray-600">{resource.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Already a vendor? Log in to access your dashboard.</p>
          <a href="mailto:vendors@morarahome.co.ke" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Contact Vendor Support
          </a>
        </div>
      </section>
    </div>
  );
}
