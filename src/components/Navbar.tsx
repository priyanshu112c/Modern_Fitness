import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, Languages } from 'lucide-react';

const navItems = [
  { label: 'Home', labelHi: 'होम', path: '/' },
  { label: 'About', labelHi: 'हमारे बारे में', path: '/about' },
  { label: 'Services', labelHi: 'सेवाएं', path: '/services' },
  { label: 'Plans', labelHi: 'योजनाएं', path: '/plans' },
  { label: 'Gallery', labelHi: 'गैलरी', path: '/gallery' },
  { label: 'Reviews', labelHi: 'समीक्षाएं', path: '/reviews' },
  { label: 'Contact', labelHi: 'संपर्क', path: '/contact' },
];

interface NavbarProps {
  isHindi: boolean;
  setIsHindi: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isHindi, setIsHindi }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl shadow-lg shadow-black/50 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-shadow duration-300">
                  <Dumbbell className="w-5 h-5 text-white" />
                </div>
                <div className="absolute inset-0 bg-orange-500 rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              <div>
                <span className="font-black text-xl text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Modern <span className="text-orange-500">Fitness</span>
                </span>
                <div className="text-[10px] text-gray-400 -mt-1 tracking-widest uppercase">
                  {isHindi ? 'नोएडा सेक्टर 22' : 'Noida Sector 22'}
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link animated-underline px-3 py-2 rounded-lg text-sm transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-orange-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {isHindi ? item.labelHi : item.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={() => setIsHindi(!isHindi)}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 text-sm font-semibold transition-all duration-300 hover:bg-orange-500/10"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <Languages className="w-3.5 h-3.5 text-orange-500" />
                <span className={`text-xs ${!isHindi ? 'text-orange-500' : 'text-gray-400'}`}>EN</span>
                <span className="text-gray-600">|</span>
                <span className={`text-xs ${isHindi ? 'text-orange-500' : 'text-gray-400'}`}>हि</span>
              </button>

              {/* Join Now */}
              <Link
                to="/plans"
                className="hidden sm:block btn-primary text-sm px-5 py-2.5"
              >
                {isHindi ? 'अभी जुड़ें' : 'Join Now'}
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white transition-colors"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 z-40 w-72 mobile-nav lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-6 px-6">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-orange-500/20 text-orange-500 border border-orange-500/30'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                      style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '15px' }}
                    >
                      {isHindi ? item.labelHi : item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <button
                  onClick={() => setIsHindi(!isHindi)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-orange-500/30 text-sm w-full"
                >
                  <Languages className="w-4 h-4 text-orange-500" />
                  <span className={`font-semibold ${!isHindi ? 'text-orange-500' : 'text-gray-400'}`}>EN</span>
                  <span className="text-gray-600">|</span>
                  <span className={`font-semibold ${isHindi ? 'text-orange-500' : 'text-gray-400'}`}>हिंदी</span>
                </button>
                <Link to="/plans" className="btn-primary block text-center">
                  {isHindi ? 'अभी जुड़ें' : 'Join Now'}
                </Link>
              </div>

              <div className="mt-auto text-center text-xs text-gray-600">
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                  {'⭐'.repeat(5)}
                </div>
                <span>4.9★ (103 Reviews)</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
