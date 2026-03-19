export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Privacy <span className="text-red-200">Notice</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">Last updated: March 2026</p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        {[
          { title: 'Information We Collect', content: 'We collect information you provide directly: name, email, phone number, delivery address, and payment details when you make a purchase. We also collect browsing data, device information, and cookies automatically.' },
          { title: 'How We Use Your Information', content: 'Your information is used to process orders, deliver furniture, communicate about your purchases, send promotional offers (with your consent), improve our website and services, and prevent fraud.' },
          { title: 'Information Sharing', content: 'We do not sell your personal information. We share data only with delivery partners (to fulfill orders), payment processors (to process transactions), and as required by Kenyan law.' },
          { title: 'Data Security', content: 'We implement industry-standard security measures including SSL encryption, secure payment processing, and regular security audits to protect your personal information.' },
          { title: 'Your Rights', content: 'Under the Kenya Data Protection Act 2019, you have the right to access, correct, or delete your personal data. You can also opt out of marketing communications at any time.' },
          { title: 'Cookies', content: 'We use cookies to improve your browsing experience, remember your preferences, and analyze website traffic. You can manage cookie preferences in your browser settings.' },
          { title: 'Contact Us', content: 'For privacy-related inquiries, contact our Data Protection Officer at privacy@morarahome.co.ke or call +254 700 000 000.' },
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
