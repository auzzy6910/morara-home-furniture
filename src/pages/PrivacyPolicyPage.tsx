export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Privacy <span className="text-red-200">Policy</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                <li>Name, email address, phone number, and delivery address when you place an order</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Communication preferences and correspondence with us</li>
                <li>Account information when you create an account on our website</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                We also automatically collect certain information when you visit our website, including your IP address, browser type, and browsing behavior through cookies and similar technologies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations, shipping updates, and delivery notifications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send promotional offers and newsletters (with your consent)</li>
                <li>Improve our website, products, and services</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                3. Information Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                <li>Delivery partners to fulfill your orders</li>
                <li>Payment processors to process transactions securely</li>
                <li>Service providers who assist us in operating our business</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                4. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                5. Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website uses cookies to enhance your browsing experience. Cookies help us remember your preferences, keep items in your shopping cart, and understand how you interact with our website. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                6. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                7. Third-Party Links
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any linked websites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                8. Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">Last Updated:</span> March 2026
              </p>
              <p className="text-sm text-gray-500 mt-1">
                For privacy-related inquiries, please email us at{' '}
                <a href="mailto:privacy@morarahome.co.ke" className="text-red-600 hover:underline">privacy@morarahome.co.ke</a>{' '}
                or visit our <a href="/contact" className="text-red-600 hover:underline">Contact page</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
