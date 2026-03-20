import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1 - Need Help */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">Need Help?</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-600">›</span> Chat with Us</Link></li>
              <li><Link to="/help-center" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-600">›</span> Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-600">›</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">Useful Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/track-order" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-600">›</span> Track Order</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-600">›</span> Returns & Refunds</Link></li>
              <li><Link to="/warranty" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-600">›</span> Warranty</Link></li>
              <li><Link to="/furniture-care" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-600">›</span> Furniture Care</Link></li>
            </ul>
          </div>

          {/* Column 3 - About Morara */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">About Morara</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-600">›</span> About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-600">›</span> Careers</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-600">›</span> Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-600">›</span> Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4 - Delivery Zones */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">Delivery Zones</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm font-medium text-gray-400">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Nairobi</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Mombasa</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Kisumu</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Nakuru</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Eldoret</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Thika</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Malindi</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span> Naivasha</span>
            </div>
          </div>

          {/* Column 5 - Contact Us */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">+254 700 000 000</p>
                  <p className="text-xs text-gray-500">Mon - Sat: 8AM - 6PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">info@morara.co.ke</p>
                  <p className="text-xs text-gray-500">Email us anytime</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Nairobi, Kenya</p>
                  <p className="text-xs text-gray-500">Visit our showroom</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Social & Payment Row */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side: Follow Us */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">Follow Us</p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-white hover:text-[#0a0f1c] transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-white hover:text-[#0a0f1c] transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-white hover:text-[#0a0f1c] transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-white hover:text-[#0a0f1c] transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-white hover:text-[#0a0f1c] transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Right side: Payment Methods */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3 text-right">Payment Methods</p>
            <div className="flex items-center gap-3">
              <div className="bg-[#4CAF50] text-white px-4 py-2 rounded-md flex items-center justify-center h-9 min-w-[70px] shadow-sm hover:opacity-90 transition-opacity cursor-pointer">
                <span className="font-bold text-xs uppercase tracking-wider">M-Pesa</span>
              </div>
              <div className="bg-[#1A1F71] text-white px-4 py-2 rounded-md flex items-center justify-center h-9 min-w-[70px] shadow-sm hover:opacity-90 transition-opacity cursor-pointer">
                <span className="font-bold text-sm italic tracking-tighter">VISA</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-md flex items-center justify-center h-9 min-w-[70px] shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex relative w-8 h-5 mx-auto -translate-x-1.5 translate-y-0.5">
                  <div className="w-5 h-5 rounded-full bg-[#EB001B] absolute left-0 opacity-90 mix-blend-multiply"></div>
                  <div className="w-5 h-5 rounded-full bg-[#F79E1B] absolute left-3 opacity-90 mix-blend-multiply"></div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#B58500] text-[#0a0f1c] px-4 py-2 rounded-md flex items-center justify-center h-9 min-w-[100px] shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all cursor-pointer">
                <span className="font-bold text-[11px] uppercase tracking-[0.15em] whitespace-nowrap">Morara Pay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partners & Brands */}
        <div className="border-t border-gray-800/70 pt-6 pb-2">
          <p className="text-center text-xs text-gray-600 uppercase tracking-widest mb-4">Our Partners & Brands</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
            <span className="hover:text-gray-300 transition-colors cursor-default">Ashley Furniture</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-gray-300 transition-colors cursor-default">Ikea Style</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-gray-300 transition-colors cursor-default">Herman Miller</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-gray-300 transition-colors cursor-default">Steelcase</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-gray-300 transition-colors cursor-default">West Elm Inspired</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-gray-300 transition-colors cursor-default">Morara Exclusive</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/50 mt-6 pt-6 text-center">
          <p className="text-xs text-gray-600">&copy; 2026 Morara Home Furniture. All rights reserved. | Designed with care in Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
