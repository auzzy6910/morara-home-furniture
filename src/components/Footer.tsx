import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-600 text-white font-bold text-xl px-3 py-1.5 rounded">M</div>
              <div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Morara Home
                </h3>
                <p className="text-xs text-red-400 font-medium -mt-0.5">FURNITURE</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Quality furniture for every home. We bring comfort, style, and durability to your living spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Shop</Link></li>
              <li><Link to="/about" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-red-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Living Room</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Bedroom</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Dining Room</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Office</Link></li>
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">Outdoor</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-red-400 mt-0.5 shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-red-400 shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-red-400 shrink-0" />
                <span>info@morarahome.co.ke</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-red-400 shrink-0" />
                <span>Mon - Sat: 8AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Morara Home Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
