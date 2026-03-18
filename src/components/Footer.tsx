import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Need Help? */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase mb-4">Need Help?</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-red-400 transition-colors">Chat with us</Link></li>
              <li><Link to="/contact" className="hover:text-red-400 transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-red-400 transition-colors">Contact Us</Link></li>
            </ul>
            <h4 className="text-white font-semibold text-sm uppercase mt-6 mb-4">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Track Your Order</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Delivery & Assembly</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Showroom Locations</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Return Policy</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">How to Order</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Warranty Claims</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Bulk & Corporate Orders</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Interior Design Advice</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Furniture Care Guide</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Flash Sales</Link></li>
            </ul>
          </div>

          {/* About Morara */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase mb-4">About Morara</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Returns & Refunds Policy</Link></li>
              <li><Link to="/about" className="hover:text-red-400 transition-colors">Morara Careers</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Morara Express Delivery</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Store Credit Terms</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Privacy Notice</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Cookie Notice</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Flash Sales</Link></li>
            </ul>
          </div>

          {/* Earn With Morara */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase mb-4">Earn With Morara</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Sell on Morara</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Vendor Hub</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Become a Design Consultant</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Morara Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Morara Delivery Zones */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase mb-4">Morara Delivery Zones</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <span className="hover:text-red-400 cursor-pointer transition-colors">Nairobi</span>
              <span className="hover:text-red-400 cursor-pointer transition-colors">Nakuru</span>
              <span className="hover:text-red-400 cursor-pointer transition-colors">Mombasa</span>
              <span className="hover:text-red-400 cursor-pointer transition-colors">Eldoret</span>
              <span className="hover:text-red-400 cursor-pointer transition-colors">Kisumu</span>
              <span className="hover:text-red-400 cursor-pointer transition-colors">Thika</span>
              <span className="hover:text-red-400 cursor-pointer transition-colors">Nyeri</span>
              <span className="hover:text-red-400 cursor-pointer transition-colors">Malindi</span>
              <span className="hover:text-red-400 cursor-pointer transition-colors">Nanyuki</span>
              <span className="hover:text-red-400 cursor-pointer transition-colors">Machakos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Payment Methods */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Join Us On */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase mb-3">Join Us On</h4>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={22} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={22} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={22} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube size={22} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase mb-3">Payment Methods</h4>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">M-PESA</span>
                <span className="bg-blue-700 text-white text-[10px] font-bold px-2.5 py-1 rounded">VISA</span>
                <span className="bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded">MASTERCARD</span>
                <span className="bg-yellow-500 text-gray-900 text-[10px] font-bold px-2.5 py-1 rounded">MORARA PAY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Furniture Brands */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-2 text-xs">
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Ashley</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">IKEA Style</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">La-Z-Boy</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Vittoria</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Mobel</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Furnicraft</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Woodmark</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Homestyle</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Artisan</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Cedar & Oak</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Nilkamal</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Heritage</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Royal Oak</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Durian</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Urban Ladder</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Pepperfry</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Zuari</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Godrej</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Stanley</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Featherlite</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">HomeTown</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">Evok</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">WoodenStreet</span>
            <span className="text-gray-500 hover:text-red-400 cursor-pointer transition-colors">CasaCraft</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Morara Home Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
