import { Link } from 'react-router-dom';
// lucide-react icons removed - not used in redesigned footer

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Need Help? */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Need Help?</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Chat with us</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Help Center</span></li>
              <li><Link to="/contact" className="hover:text-red-400 transition-colors">Contact Us</Link></li>
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-4 uppercase tracking-wider text-sm">Useful Links</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Track Your Order</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Delivery & Assembly</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Showroom Locations</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Return Policy</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">How to Order</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Warranty Claims</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Bulk & Corporate Orders</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Interior Design Advice</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Furniture Care Guide</span></li>
              <li><Link to="/flash-sales" className="hover:text-red-400 transition-colors">Flash Sales</Link></li>
            </ul>
          </div>

          {/* About Morara */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">About Morara</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Returns & Refunds Policy</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Morara Careers</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Morara Express Delivery</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Terms & Conditions</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Store Credit Terms</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Privacy Notice</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Cookie Notice</span></li>
              <li><Link to="/flash-sales" className="hover:text-red-400 transition-colors">Flash Sales</Link></li>
            </ul>
          </div>

          {/* Earn With Morara */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Earn With Morara</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Sell on Morara</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Vendor Hub</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Become a Design Consultant</span></li>
              <li><span className="hover:text-red-400 transition-colors cursor-pointer">Morara Affiliate Program</span></li>
            </ul>
          </div>

          {/* Morara Delivery Zones */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Morara Delivery Zones</h4>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-2 text-sm">
                <li>Nairobi</li>
                <li>Mombasa</li>
                <li>Kisumu</li>
                <li>Nyeri</li>
                <li>Nanyuki</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>Nakuru</li>
                <li>Eldoret</li>
                <li>Thika</li>
                <li>Malindi</li>
                <li>Machakos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social & Payment */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-sm">Join Us On</h4>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer text-sm">f</span>
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer text-sm">in</span>
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer text-sm">tw</span>
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer text-sm">yt</span>
                <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer text-sm">li</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-sm">Payment Methods</h4>
              <div className="flex items-center gap-2">
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded">M-PESA</span>
                <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded">VISA</span>
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">MASTERCARD</span>
                <span className="bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded">MORARA PAY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Partners */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
            {['Ashley', 'Artisan', 'Zuari', 'IKEA Style', 'Cedar & Oak', 'Godrej', 'La-Z-Boy', 'Nilkamal', 'Stanley', 'Vittoria', 'Heritage', 'Featherlite', 'Mobel', 'Royal Oak', 'HomeTown', 'Furnicraft', 'Durian', 'Evok', 'Woodmark', 'Urban Ladder', 'WoodenStreet', 'Homestyle', 'Pepperfry', 'CasaCraft'].map(brand => (
              <span key={brand} className="hover:text-gray-300 transition-colors cursor-pointer">{brand}</span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Morara Home Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
