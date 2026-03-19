export default function TermsOfServicePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Terms of <span className="text-red-200">Service</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the Morara Home Furniture website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                2. Products and Pricing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                All product descriptions, images, and prices are provided as accurately as possible. However, we reserve the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                <li>Modify prices without prior notice</li>
                <li>Correct any errors in product listings</li>
                <li>Limit the quantity of items available for purchase</li>
                <li>Discontinue any product at any time</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Prices are listed in Kenyan Shillings (KSh) and are inclusive of applicable taxes unless otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                3. Orders and Payment
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                When you place an order through our website, it constitutes an offer to purchase. We reserve the right to accept or decline your order. Payment must be made in full before order processing begins.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We accept payment via M-Pesa, Visa, Mastercard, and Morara Pay. All payment information is processed securely and we do not store your payment details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                4. Delivery
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We deliver to major towns across Kenya. Delivery timelines are estimates and may vary depending on your location and product availability.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
                <li>Nairobi: 1-3 business days</li>
                <li>Major towns: 3-7 business days</li>
                <li>Other areas: 5-14 business days</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Free delivery is offered on orders exceeding KSh 50,000 within Nairobi. Standard delivery fees apply for other orders and locations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                5. Returns and Refunds
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Items may be returned within 7 days of delivery subject to our Return Policy. Please refer to our <a href="/returns" className="text-red-600 hover:underline">Returns page</a> for complete details on eligibility, process, and refund timelines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                6. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content on this website, including text, images, logos, and design, is the property of Morara Home Furniture and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                7. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Morara Home Furniture shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the purchase price of the product in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                8. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to update these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">Last Updated:</span> March 2026
              </p>
              <p className="text-sm text-gray-500 mt-1">
                For questions about these terms, please <a href="/contact" className="text-red-600 hover:underline">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
