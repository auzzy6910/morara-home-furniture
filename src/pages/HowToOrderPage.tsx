import { UserPlus, Search, ShoppingCart, CreditCard, Truck } from 'lucide-react';

export default function HowToOrderPage() {
  const steps = [
    { icon: Search, title: 'Browse Our Collection', desc: 'Explore our wide range of furniture by category, style, or room. Use filters to find exactly what you need.' },
    { icon: ShoppingCart, title: 'Add to Cart', desc: 'Found something you love? Click "Add to Cart" to save it. You can add multiple items before checking out.' },
    { icon: UserPlus, title: 'Create an Account', desc: 'Sign up or log in to your Morara account to save your details and track your orders easily.' },
    { icon: CreditCard, title: 'Checkout & Pay', desc: 'Review your cart, enter your delivery address, and choose your preferred payment method: M-Pesa, Visa, Mastercard, or Morara Pay.' },
    { icon: Truck, title: 'Delivery & Assembly', desc: 'Sit back and relax! We will deliver and assemble your furniture at your doorstep.' },
  ];

  return (
    <div>
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            How to <span className="text-red-200">Order</span>
          </h1>
          <p className="text-red-100 mt-3 max-w-lg mx-auto">
            Ordering furniture from Morara Home is simple. Follow these easy steps.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-6 bg-white rounded-xl shadow p-6">
              <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
