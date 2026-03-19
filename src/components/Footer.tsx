import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Need Help?</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="#" className="hover:text-white transition-colors">Chat</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Useful Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="#" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Warranty</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Furniture Care</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">About Morara</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Delivery Zones</h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm font-medium text-gray-400">
              <span className="hover:text-white cursor-pointer transition-colors">Nairobi</span>
              <span className="hover:text-white cursor-pointer transition-colors">Mombasa</span>
              <span className="hover:text-white cursor-pointer transition-colors">Kisumu</span>
              <span className="hover:text-white cursor-pointer transition-colors">Nakuru</span>
              <span className="hover:text-white cursor-pointer transition-colors">Eldoret</span>
              <span className="hover:text-white cursor-pointer transition-colors">Thika</span>
              <span className="hover:text-white cursor-pointer transition-colors">Malindi</span>
              <span className="hover:text-white cursor-pointer transition-colors">Naivasha</span>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side: Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-white hover:text-[#0a0f1c] transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-white hover:text-[#0a0f1c] transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-white hover:text-[#0a0f1c] transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-white hover:text-[#0a0f1c] transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-white hover:text-[#0a0f1c] transition-all">
              <Youtube size={18} />
            </a>
          </div>

          {/* Right side: Payment Badges */}
          <div className="flex items-center gap-3">
            <div className="bg-[#4CAF50] text-white px-4 py-2 rounded-md flex items-center justify-center h-10 min-w-[80px] shadow-sm hover:opacity-90 transition-opacity cursor-pointer">
              <span className="font-bold text-xs uppercase tracking-wider">M-Pesa</span>
            </div>
            <div className="bg-[#1A1F71] text-white px-4 py-2 rounded-md flex items-center justify-center h-10 min-w-[80px] shadow-sm hover:opacity-90 transition-opacity cursor-pointer">
              <span className="font-bold text-base italic tracking-tighter">VISA</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-md flex items-center justify-center h-10 min-w-[80px] shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
               <div className="flex relative w-8 h-5 mx-auto -translate-x-1.5 translate-y-0.5">
                 <div className="w-5 h-5 rounded-full bg-[#EB001B] absolute left-0 opacity-90 mix-blend-multiply"></div>
                 <div className="w-5 h-5 rounded-full bg-[#F79E1B] absolute left-3 opacity-90 mix-blend-multiply"></div>
               </div>
            </div>
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#B58500] text-[#0a0f1c] px-4 py-2 rounded-md flex items-center justify-center h-10 min-w-[110px] shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all cursor-pointer">
              <span className="font-bold text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">Morara Pay</span>
            </div>
          </div>
        </div>

        {/* Sub-footer (Brands) */}
        <div className="border-t border-gray-800/70 pt-8 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs font-semibold text-gray-500 uppercase tracking-[0.25em]">
            <span className="hover:text-gray-300 transition-colors cursor-default">Ashley Furniture</span>
            <span className="hover:text-gray-300 transition-colors cursor-default">Ikea Style</span>
            <span className="hover:text-gray-300 transition-colors cursor-default">Herman Miller</span>
            <span className="hover:text-gray-300 transition-colors cursor-default">Steelcase</span>
            <span className="hover:text-gray-300 transition-colors cursor-default">West Elm Inspired</span>
            <span className="hover:text-gray-300 transition-colors cursor-default">Morara Exclusive</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
