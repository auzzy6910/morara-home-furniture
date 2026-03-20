import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Youtube, Instagram, Smartphone, Mail, MapPin, Phone, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1c] text-gray-400">
      {/* Top Section - App Download & Newsletter */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Smartphone size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Get the Morara App</h4>
                <p className="text-orange-100 text-sm">Shop smarter with exclusive app-only deals</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] leading-tight opacity-80">Download on</p>
                  <p className="text-sm font-semibold leading-tight">App Store</p>
                </div>
              </a>
              <a href="#" className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] leading-tight opacity-80">Get it on</p>
                  <p className="text-sm font-semibold leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">

          {/* Column 1 - Need Help */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm flex items-center gap-2">
              Need Help?
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  Chat with Us
                </Link>
              </li>
              <li>
                <Link to="/help-center" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">Useful Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/track-order" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/furniture-care" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  Furniture Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - About Morara */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">About Morara</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Delivery Zones */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">Delivery Zones</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm">
              <span className="hover:text-orange-400 cursor-pointer transition-colors flex items-center gap-1">
                <MapPin size={10} className="text-orange-500/50" /> Nairobi
              </span>
              <span className="hover:text-orange-400 cursor-pointer transition-colors flex items-center gap-1">
                <MapPin size={10} className="text-orange-500/50" /> Mombasa
              </span>
              <span className="hover:text-orange-400 cursor-pointer transition-colors flex items-center gap-1">
                <MapPin size={10} className="text-orange-500/50" /> Kisumu
              </span>
              <span className="hover:text-orange-400 cursor-pointer transition-colors flex items-center gap-1">
                <MapPin size={10} className="text-orange-500/50" /> Nakuru
              </span>
              <span className="hover:text-orange-400 cursor-pointer transition-colors flex items-center gap-1">
                <MapPin size={10} className="text-orange-500/50" /> Eldoret
              </span>
              <span className="hover:text-orange-400 cursor-pointer transition-colors flex items-center gap-1">
                <MapPin size={10} className="text-orange-500/50" /> Thika
              </span>
              <span className="hover:text-orange-400 cursor-pointer transition-colors flex items-center gap-1">
                <MapPin size={10} className="text-orange-500/50" /> Malindi
              </span>
              <span className="hover:text-orange-400 cursor-pointer transition-colors flex items-center gap-1">
                <MapPin size={10} className="text-orange-500/50" /> Naivasha
              </span>
            </div>
          </div>

          {/* Column 5 - Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-5 text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">+254 700 000 000</p>
                  <p className="text-xs text-gray-500">Mon - Sat: 8AM - 6PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">info@morara.co.ke</p>
                  <p className="text-xs text-gray-500">Email us anytime</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Nairobi, Kenya</p>
                  <p className="text-xs text-gray-500">Visit our showroom</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Payment & Social Section */}
        <div className="border-t border-gray-800 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3 text-center lg:text-left">Follow Us</p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-gray-400">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-gray-400">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-gray-400">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-gray-400">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-gray-400">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3 text-center">Payment Methods</p>
            <div className="flex items-center gap-2.5">
              <div className="bg-[#4CAF50] text-white px-4 py-2 rounded-md flex items-center justify-center h-9 min-w-[72px] shadow-sm hover:opacity-90 transition-opacity cursor-pointer">
                <span className="font-bold text-xs uppercase tracking-wider">M-Pesa</span>
              </div>
              <div className="bg-[#1A1F71] text-white px-4 py-2 rounded-md flex items-center justify-center h-9 min-w-[72px] shadow-sm hover:opacity-90 transition-opacity cursor-pointer">
                <span className="font-bold text-sm italic tracking-tighter">VISA</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-md flex items-center justify-center h-9 min-w-[72px] shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex relative w-8 h-5 mx-auto -translate-x-1.5 translate-y-0.5">
                  <div className="w-5 h-5 rounded-full bg-[#EB001B] absolute left-0 opacity-90 mix-blend-multiply"></div>
                  <div className="w-5 h-5 rounded-full bg-[#F79E1B] absolute left-3 opacity-90 mix-blend-multiply"></div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#B58500] text-[#0a0f1c] px-4 py-2 rounded-md flex items-center justify-center h-9 min-w-[100px] shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all cursor-pointer">
                <span className="font-bold text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">Morara Pay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Partners */}
        <div className="border-t border-gray-800/70 pt-6 pb-4">
          <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-4 text-center">Our Partners & Brands</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
            <span className="hover:text-orange-400 transition-colors cursor-default">Ashley Furniture</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-orange-400 transition-colors cursor-default">Ikea Style</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-orange-400 transition-colors cursor-default">Herman Miller</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-orange-400 transition-colors cursor-default">Steelcase</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-orange-400 transition-colors cursor-default">West Elm Inspired</span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-orange-400 transition-colors cursor-default">Morara Exclusive</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/50 pt-6 text-center">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Morara Home Furniture. All rights reserved. | Designed with care in Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}
