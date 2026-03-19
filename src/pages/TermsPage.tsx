export default function TermsPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Terms & <span className="text-red-200">Conditions</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        {[
          { title: '1. General Terms', content: 'By accessing and using the Morara Home Furniture website and services, you agree to be bound by these Terms and Conditions. These terms apply to all visitors, users, and customers of our website and showrooms.' },
          { title: '2. Products & Pricing', content: 'All prices are listed in Kenyan Shillings (KSh) and include VAT where applicable. We reserve the right to change prices without prior notice. Product images are for illustration purposes and actual products may vary slightly in color and appearance.' },
          { title: '3. Orders & Payment', content: 'Orders are confirmed once payment is received. We accept M-Pesa, Visa, Mastercard, and Morara Pay. Full payment is required before delivery unless otherwise agreed for corporate accounts.' },
          { title: '4. Delivery', content: 'Delivery timelines are estimates and may vary depending on location and product availability. Morara Home is not liable for delays caused by factors beyond our control including weather, traffic, and public holidays.' },
          { title: '5. Returns & Refunds', content: 'Items may be returned within 7 days of delivery in original condition. Custom-made furniture is non-returnable. Refunds are processed within 5-10 business days to the original payment method.' },
          { title: '6. Warranty', content: 'All products come with a minimum 1-year warranty against manufacturing defects. The warranty does not cover damage caused by misuse, negligence, or normal wear and tear.' },
          { title: '7. Limitation of Liability', content: 'Morara Home Furniture shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.' },
          { title: '8. Intellectual Property', content: 'All content on this website including text, images, logos, and designs are the property of Morara Home Furniture and are protected by copyright laws.' },
          { title: '9. Contact', content: 'For questions about these terms, contact us at legal@morarahome.co.ke or call +254 700 000 000.' },
        ].map((section, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
