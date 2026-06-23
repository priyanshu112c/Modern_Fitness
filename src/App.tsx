import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Plans from './pages/Plans';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

// Loading screen
const LoadingScreen: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  useEffect(() => {
    const timer = setTimeout(onDone, 2200);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] bg-[#0F0F0F] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-7xl mb-6"
      >
        🏋️
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center"
      >
        <div
          className="text-4xl font-black text-white mb-1"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Modern <span className="gradient-text">Fitness</span>
        </div>
        <div className="text-gray-500 text-sm tracking-widest uppercase">
          Premium Gym • Noida Sector 22
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 w-48"
      >
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, delay: 0.8, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-gray-500 text-xs text-center mt-2"
        >
          Loading...
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

const AppContent: React.FC<{ isHindi: boolean; setIsHindi: (v: boolean) => void }> = ({
  isHindi,
  setIsHindi,
}) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#0F0F0F]">
      <ScrollToTop />
      <Navbar isHindi={isHindi} setIsHindi={setIsHindi} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home isHindi={isHindi} />} />
              <Route path="/about" element={<About isHindi={isHindi} />} />
              <Route path="/services" element={<Services isHindi={isHindi} />} />
              <Route path="/plans" element={<Plans isHindi={isHindi} />} />
              <Route path="/gallery" element={<Gallery isHindi={isHindi} />} />
              <Route path="/reviews" element={<Reviews isHindi={isHindi} />} />
              <Route path="/contact" element={<Contact isHindi={isHindi} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer isHindi={isHindi} />
      <FloatingWidgets />
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isHindi, setIsHindi] = useState(false);

  return (
    <Router>
      <AnimatePresence>{loading && <LoadingScreen onDone={() => setLoading(false)} />}</AnimatePresence>
      {!loading && <AppContent isHindi={isHindi} setIsHindi={setIsHindi} />}
    </Router>
  );
};

export default App;
