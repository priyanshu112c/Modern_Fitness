import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Dumbbell, Send, ChevronRight } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube, FaXTwitter } from 'react-icons/fa6';

interface FooterProps {
  isHindi: boolean;
}

const Footer: React.FC<FooterProps> = ({ isHindi }) => {
  const [email, setEmail] = useState('');

  const quickLinks = [
    { label: 'About Us', labelHi: 'हमारे बारे में', path: '/about' },
    { label: 'Services', labelHi: 'सेवाएं', path: '/services' },
    { label: 'Membership Plans', labelHi: 'सदस्यता योजनाएं', path: '/plans' },
    { label: 'Gallery', labelHi: 'गैलरी', path: '/gallery' },
    { label: 'Reviews', labelHi: 'समीक्षाएं', path: '/reviews' },
    { label: 'Contact', labelHi: 'संपर्क', path: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0F0F0F] to-black border-t border-orange-500/20 pt-16 pb-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-black text-xl text-white" style={{ fontFamily: 'Montserrat' }}>
                  Modern <span className="text-orange-500">Fitness</span>
                </div>
                <div className="text-[10px] text-gray-500 tracking-widest uppercase">Premium Gym</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {isHindi
                ? 'नोएडा सेक्टर 22 का प्रीमियम जिम। प्रमाणित ट्रेनर, आधुनिक उपकरण और गारंटीड परिणाम।'
                : 'Transform your body and life at Noida\'s premium fitness destination. Certified trainers, modern equipment, guaranteed results.'}
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">★</span>
              ))}
              <span className="text-gray-400 text-sm ml-2">4.9/5 (103 Reviews)</span>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: FaInstagram, color: 'hover:text-pink-500', href: '#' },
                { icon: FaFacebook, color: 'hover:text-blue-500', href: '#' },
                { icon: FaYoutube, color: 'hover:text-red-500', href: '#' },
                { icon: FaXTwitter, color: 'hover:text-sky-500', href: '#' },
              ].map(({ icon: Icon, color, href }) => (
                <a
                  key={color}
                  href={href}
                  className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${color} transition-all duration-300 hover:border-current hover:scale-110`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-base" style={{ fontFamily: 'Montserrat' }}>
              {isHindi ? 'त्वरित लिंक' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300 text-orange-500" />
                    {isHindi ? link.labelHi : link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-2">
              <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-xs transition-colors">
                <ChevronRight className="w-3 h-3" /> Privacy Policy
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-xs transition-colors">
                <ChevronRight className="w-3 h-3" /> Terms & Conditions
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-5 text-base" style={{ fontFamily: 'Montserrat' }}>
              {isHindi ? 'संपर्क जानकारी' : 'Contact Info'}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Shiv Om Market, near Dharam Public School, Raghunathpur, Sector 22, Noida, UP 201307
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="tel:+919999999999" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="mailto:info@modernfitness.com" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                  info@modernfitness.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <div className="text-sm">
                  <div className="text-gray-300 font-medium">Open Daily</div>
                  <div className="text-gray-500">Closes at 10:30 PM</div>
                  <div className="text-orange-400 text-xs mt-1">⚡ Peak: 6 PM – 9 PM</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white mb-5 text-base" style={{ fontFamily: 'Montserrat' }}>
              {isHindi ? 'अपडेट रहें' : 'Stay Updated'}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {isHindi
                ? 'हमारे न्यूज़लेटर की सदस्यता लें और नवीनतम ऑफर प्राप्त करें।'
                : 'Subscribe to get the latest offers, tips, and fitness updates.'}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={isHindi ? 'आपका ईमेल' : 'Your email'}
                className="form-input text-sm flex-1 min-w-0"
              />
              <button className="p-3 bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors shrink-0">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Free Trial */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
              <div className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">🎯 Free Trial</div>
              <div className="text-white font-bold">3 Days FREE Trial</div>
              <div className="text-gray-400 text-xs mt-1">No credit card required</div>
              <Link
                to="/plans"
                className="mt-3 block text-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 rounded-lg transition-colors"
              >
                Claim Free Trial →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-gray-500 text-xs text-center sm:text-left">
            © 2024 Modern Fitness. All Rights Reserved.
          </div>
          <div className="text-gray-600 text-xs">
            Developed with ❤️ for <span className="text-orange-500">Modern Fitness, Noida</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
