import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, MapPin, CreditCard, CheckCircle, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

type Step = 'shipping' | 'payment' | 'review';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('shipping');
  const [shipping, setShipping] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', county: '', postalCode: '',
  });
  const [payment, setPayment] = useState<'mpesa' | 'card' | 'morara-pay'>('mpesa');
  const [mpesaPhone, setMpesaPhone] = useState('');

  const deliveryFee = totalPrice >= 5000000 ? 0 : 50000;
  const total = totalPrice + deliveryFee;

  const steps: { key: Step; label: string; icon: typeof MapPin }[] = [
    { key: 'shipping', label: 'Shipping', icon: MapPin },
    { key: 'payment', label: 'Payment', icon: CreditCard },
    { key: 'review', label: 'Review', icon: CheckCircle },
  ];

  const handlePlaceOrder = () => {
    const orderId = 'MHF-' + Date.now().toString(36).toUpperCase();
    const orderData = {
      orderId,
      items: items.map(i => ({ name: i.product.name, qty: i.quantity, price: i.product.price })),
      shipping,
      payment,
      total,
      date: new Date().toISOString(),
    };
    localStorage.setItem('morara-last-order', JSON.stringify(orderData));
    clearCart();
    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your cart is empty</h2>
        <button onClick={() => navigate('/shop')} className="mt-4 text-red-600 hover:underline">Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-10">
        {steps.map((s, i) => (
          <div key={s.key} className="flex items-center">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              step === s.key ? 'bg-red-600 text-white' :
              steps.findIndex(st => st.key === step) > i ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
              'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
            }`}>
              <s.icon size={16} />
              <span className="hidden sm:inline">{s.label}</span>
            </div>
            {i < steps.length - 1 && <ChevronRight size={18} className="mx-2 text-gray-300 dark:text-gray-600" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          {/* Shipping Step */}
          {step === 'shipping' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <MapPin size={20} className="text-red-600" /> Shipping Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                  <input type="text" value={shipping.firstName} onChange={e => setShipping(p => ({...p, firstName: e.target.value}))}
                    className="w-full px-4 py-2.5 border dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                  <input type="text" value={shipping.lastName} onChange={e => setShipping(p => ({...p, lastName: e.target.value}))}
                    className="w-full px-4 py-2.5 border dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input type="email" value={shipping.email} onChange={e => setShipping(p => ({...p, email: e.target.value}))}
                    className="w-full px-4 py-2.5 border dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                  <input type="tel" value={shipping.phone} onChange={e => setShipping(p => ({...p, phone: e.target.value}))} placeholder="+254 7XX XXX XXX"
                    className="w-full px-4 py-2.5 border dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500" required />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Street Address</label>
                  <input type="text" value={shipping.address} onChange={e => setShipping(p => ({...p, address: e.target.value}))}
                    className="w-full px-4 py-2.5 border dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City</label>
                  <input type="text" value={shipping.city} onChange={e => setShipping(p => ({...p, city: e.target.value}))}
                    className="w-full px-4 py-2.5 border dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">County</label>
                  <select value={shipping.county} onChange={e => setShipping(p => ({...p, county: e.target.value}))}
                    className="w-full px-4 py-2.5 border dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">Select County</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Kisumu">Kisumu</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Eldoret">Uasin Gishu (Eldoret)</option>
                    <option value="Kiambu">Kiambu</option>
                    <option value="Machakos">Machakos</option>
                  </select>
                </div>
              </div>
              <button onClick={() => setStep('payment')}
                className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Continue to Payment
              </button>
            </div>
          )}

          {/* Payment Step */}
          {step === 'payment' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <CreditCard size={20} className="text-red-600" /> Payment Method
              </h2>
              <div className="space-y-3">
                {[
                  { value: 'mpesa' as const, label: 'M-Pesa', desc: 'Pay via M-Pesa mobile money', color: 'bg-green-500' },
                  { value: 'card' as const, label: 'Credit/Debit Card', desc: 'Visa, Mastercard accepted', color: 'bg-blue-900' },
                  { value: 'morara-pay' as const, label: 'Morara Pay', desc: 'Buy now, pay later in installments', color: 'bg-gradient-to-r from-yellow-500 to-yellow-600' },
                ].map(opt => (
                  <label key={opt.value} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                    payment === opt.value ? 'border-red-600 bg-red-50 dark:bg-red-900/20' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}>
                    <input type="radio" name="payment" value={opt.value} checked={payment === opt.value} onChange={() => setPayment(opt.value)} className="accent-red-600" />
                    <div className={`${opt.color} text-white px-3 py-1.5 rounded text-xs font-bold uppercase`}>{opt.label}</div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</span>
                  </label>
                ))}
              </div>

              {payment === 'mpesa' && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">M-Pesa Phone Number</label>
                  <input type="tel" value={mpesaPhone} onChange={e => setMpesaPhone(e.target.value)} placeholder="e.g. 0712345678"
                    className="w-full px-4 py-2.5 border dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
              )}

              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep('shipping')} className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Back
                </button>
                <button onClick={() => setStep('review')} className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Review Order
                </button>
              </div>
            </div>
          )}

          {/* Review Step */}
          {step === 'review' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <CheckCircle size={20} className="text-red-600" /> Review Your Order
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2"><MapPin size={14} /> Shipping To</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{shipping.firstName} {shipping.lastName}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{shipping.address}, {shipping.city}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{shipping.county}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{shipping.phone}</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2"><CreditCard size={14} /> Payment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">{payment.replace('-', ' ')}</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">Items ({items.length})</h3>
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center gap-3 mb-2">
                      <img src={product.image} alt={product.name} className="w-12 h-12 rounded object-cover" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Qty: {quantity}</p>
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{formatPrice(product.price * quantity)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setStep('payment')} className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Back
                </button>
                <button onClick={handlePlaceOrder} className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Place Order — {formatPrice(total)}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 h-fit sticky top-28">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Order Summary</h3>
          <div className="space-y-2 mb-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400 truncate max-w-[60%]">{product.name} x{quantity}</span>
                <span className="text-gray-900 dark:text-white font-medium">{formatPrice(product.price * quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t dark:border-gray-700 pt-3 space-y-2 text-sm">
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Delivery</span>
              <span className={deliveryFee === 0 ? 'text-green-600 font-medium' : ''}>{deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}</span>
            </div>
            <div className="border-t dark:border-gray-700 pt-2 flex justify-between font-bold text-lg text-gray-900 dark:text-white">
              <span>Total</span>
              <span className="text-red-600">{formatPrice(total)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <Shield size={14} className="text-green-600" /> Secure checkout
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <Truck size={14} className="text-green-600" /> Free delivery over KSh 50,000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
