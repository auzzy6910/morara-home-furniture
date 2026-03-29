import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('morara_newsletter_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('morara_newsletter_dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-up">
        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-700" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift size={28} className="text-primary" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Get 10% Off Your First Order!
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Subscribe to our newsletter for exclusive deals, new arrivals, and insider-only discounts.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
            >
              Subscribe & Get 10% Off
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
            <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full" />
            Use code <span className="font-bold text-primary">WELCOME10</span> at checkout
          </div>
        </div>
      </div>
    </div>
  );
}
