import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0f1724] text-gray-300 text-sm">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Need Help? + Useful Links */}
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wide text-sm">Need Help?</h4>
            <ul className="space-y-1.5">
              <li><Link to="/help-center" className="hover:text-red-400 transition-colors">Chat with us</Link></li>
              <li><Link to="/help-center" className="hover:text-red-400 transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-red-400 transition-colors">Contact Us</Link></li>
            </ul>
            <h4 className="text-white font-bold mt-5 mb-3 uppercase tracking-wide text-sm">Useful Links</h4>
            <ul className="space-y-1.5">
              <li><Link to="/track-order" className="hover:text-red-400 transition-colors">Track Your Order</Link></li>
              <li><Link to="/delivery-assembly" className="hover:text-red-400 transition-colors">Delivery &amp; Assembly</Link></li>
              <li><Link to="/showroom-locations" className="hover:text-red-400 transition-colors">Showroom Locations</Link></li>
              <li><Link to="/return-policy" className="hover:text-red-400 transition-colors">Return Policy</Link></li>
              <li><Link to="/how-to-order" className="hover:text-red-400 transition-colors">How to Order</Link></li>
              <li><Link to="/warranty-claims" className="hover:text-red-400 transition-colors">Warranty Claims</Link></li>
              <li><Link to="/bulk-orders" className="hover:text-red-400 transition-colors">Bulk &amp; Corporate Orders</Link></li>
              <li><Link to="/interior-design" className="hover:text-red-400 transition-colors">Interior Design Advice</Link></li>
              <li><Link to="/furniture-care" className="hover:text-red-400 transition-colors">Furniture Care Guide</Link></li>
              <li><Link to="/flash-sales" className="hover:text-red-400 transition-colors">Flash Sales</Link></li>
            </ul>
          </div>

          {/* About Morara */}
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wide text-sm">About Morara</h4>
            <ul className="space-y-1.5">
              <li><Link to="/about" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link to="/returns-refunds" className="hover:text-red-400 transition-colors">Returns &amp; Refunds Policy</Link></li>
              <li><Link to="/careers" className="hover:text-red-400 transition-colors">Morara Careers</Link></li>
              <li><Link to="/express-delivery" className="hover:text-red-400 transition-colors">Morara Express Delivery</Link></li>
              <li><Link to="/terms" className="hover:text-red-400 transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link to="/store-credit" className="hover:text-red-400 transition-colors">Store Credit Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-red-400 transition-colors">Privacy Notice</Link></li>
              <li><Link to="/cookie-notice" className="hover:text-red-400 transition-colors">Cookie Notice</Link></li>
              <li><Link to="/flash-sales" className="hover:text-red-400 transition-colors">Flash Sales</Link></li>
            </ul>
          </div>

          {/* Earn With Morara */}
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wide text-sm">Earn With Morara</h4>
            <ul className="space-y-1.5">
              <li><Link to="/sell-on-morara" className="hover:text-red-400 transition-colors">Sell on Morara</Link></li>
              <li><Link to="/vendor-hub" className="hover:text-red-400 transition-colors">Vendor Hub</Link></li>
              <li><Link to="/design-consultant" className="hover:text-red-400 transition-colors">Become a Design Consultant</Link></li>
              <li><Link to="/affiliate-program" className="hover:text-red-400 transition-colors">Morara Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Morara Delivery Zones */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-3 uppercase tracking-wide text-sm">Morara Delivery Zones</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
              <Link to="/delivery-zones" className="hover:text-red-400 transition-colors">Nairobi</Link>
              <Link to="/delivery-zones" className="hover:text-red-400 transition-colors">Nakuru</Link>
              <Link to="/delivery-zones" className="hover:text-red-400 transition-colors">Mombasa</Link>
              <Link to="/delivery-zones" className="hover:text-red-400 transition-colors">Eldoret</Link>
              <Link to="/delivery-zones" className="hover:text-red-400 transition-colors">Kisumu</Link>
              <Link to="/delivery-zones" className="hover:text-red-400 transition-colors">Thika</Link>
              <Link to="/delivery-zones" className="hover:text-red-400 transition-colors">Nyeri</Link>
              <Link to="/delivery-zones" className="hover:text-red-400 transition-colors">Malindi</Link>
              <Link to="/delivery-zones" className="hover:text-red-400 transition-colors">Nanyuki</Link>
              <Link to="/delivery-zones" className="hover:text-red-400 transition-colors">Machakos</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Payment Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Join Us On */}
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wide text-sm">Join Us On</h4>
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:border-red-400 hover:text-red-400 transition-colors" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:border-red-400 hover:text-red-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:border-red-400 hover:text-red-400 transition-colors" aria-label="Twitter">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:border-red-400 hover:text-red-400 transition-colors" aria-label="YouTube">
                <Youtube size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:border-red-400 hover:text-red-400 transition-colors" aria-label="Instagram">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="text-right">
            <h4 className="text-white font-bold mb-3 uppercase tracking-wide text-sm">Payment Methods</h4>
            <div className="flex items-center gap-2">
              <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded">M-PESA</span>
              <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded">VISA</span>
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">MASTERCARD</span>
              <span className="bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded">MORARA PAY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Furniture Brands */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-xs text-gray-400 leading-relaxed">
            Ashley &middot; Artisan &middot; Zuari &middot; IKEA Style &middot; Cedar &amp; Oak &middot; Godrej &middot; La-Z-Boy &middot; Nilkamal &middot; Stanley &middot; Vittoria &middot; Heritage &middot; Featherlite &middot; Mobel &middot; Royal Oak &middot; HomeTown &middot; Furnicraft &middot; Durian &middot; Evok &middot; Woodmark &middot; Urban Ladder &middot; WoodenStreet &middot; Homestyle &middot; Pepperfry &middot; CasaCraft
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Morara Home Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
