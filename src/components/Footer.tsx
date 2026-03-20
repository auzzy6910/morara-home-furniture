import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#E31837] text-white font-bold text-lg px-2.5 py-1 rounded">M</div>
              <div>
                <p className="text-white font-bold text-sm">Morara Home</p>
                <p className="text-[10px] text-[#E31837] font-semibold tracking-wider">FURNITURE</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">Premium quality furniture for every room in your home. Comfort, style, and durability.</p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E31837] hover:text-white transition-all text-gray-400">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E31837] hover:text-white transition-all text-gray-400">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E31837] hover:text-white transition-all text-gray-400">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E31837] hover:text-white transition-all text-gray-400">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#E31837] hover:text-white transition-all text-gray-400">
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Need Help?</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="hover:text-[#E31837] transition-colors">Chat with Us</Link></li>
              <li><Link to="/help-center" className="hover:text-[#E31837] transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-[#E31837] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Useful Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/track-order" className="hover:text-[#E31837] transition-colors">Track Order</Link></li>
              <li><Link to="/returns" className="hover:text-[#E31837] transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/warranty" className="hover:text-[#E31837] transition-colors">Warranty</Link></li>
              <li><Link to="/furniture-care" className="hover:text-[#E31837] transition-colors">Furniture Care</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">About Morara</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-[#E31837] transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-[#E31837] transition-colors">Careers</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-[#E31837] transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#E31837] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Payment methods */}
        <div className="border-t border-gray-800 pt-6 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">Payment Methods</p>
            <div className="flex items-center gap-3">
              <div className="bg-[#4CAF50] text-white px-3 py-1.5 rounded flex items-center justify-center h-8 min-w-[70px] shadow-sm">
                <span className="font-bold text-xs uppercase tracking-wider">M-Pesa</span>
              </div>
              <div className="bg-[#1A1F71] text-white px-3 py-1.5 rounded flex items-center justify-center h-8 min-w-[70px] shadow-sm">
                <span className="font-bold text-sm italic tracking-tighter">VISA</span>
              </div>
              <div className="bg-white px-3 py-1.5 rounded flex items-center justify-center h-8 min-w-[70px] shadow-sm">
                <div className="flex relative w-7 h-4 mx-auto -translate-x-1">
                  <div className="w-4 h-4 rounded-full bg-[#EB001B] absolute left-0 opacity-90 mix-blend-multiply"></div>
                  <div className="w-4 h-4 rounded-full bg-[#F79E1B] absolute left-2.5 opacity-90 mix-blend-multiply"></div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#B58500] text-gray-900 px-3 py-1.5 rounded flex items-center justify-center h-8 min-w-[90px] shadow-sm">
                <span className="font-bold text-[10px] uppercase tracking-[0.15em] whitespace-nowrap">Morara Pay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-xs text-gray-600">&copy; {new Date().getFullYear()} Morara Home Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
