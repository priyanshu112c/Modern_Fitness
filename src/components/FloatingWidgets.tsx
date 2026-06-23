import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingWidgets: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showBMI, setShowBMI] = useState(false);
  const [bmi, setBmi] = useState<number | null>(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h && w) setBmi(parseFloat((w / (h * h)).toFixed(1)));
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: 'Underweight', color: 'text-blue-400' };
    if (bmi < 25) return { label: 'Normal', color: 'text-green-400' };
    if (bmi < 30) return { label: 'Overweight', color: 'text-yellow-400' };
    return { label: 'Obese', color: 'text-red-400' };
  };

  return (
    <>
      {/* Fixed floating buttons - bottom right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Scroll to top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="w-11 h-11 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors"
              title="Scroll to top"
            >
              <ChevronUp className="w-5 h-5 text-white" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* BMI Calculator */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowBMI(true)}
          className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br from-purple-600 to-purple-800 text-white text-xs font-bold border border-purple-500/30"
          title="BMI Calculator"
        >
          BMI
        </motion.button>

        {/* Call */}
        <motion.a
          href="tel:+919999999999"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
          title="Call Now"
        >
          <Phone className="w-5 h-5 text-white" />
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/919999999999?text=Hi! I'm interested in joining Modern Fitness gym."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 whatsapp-btn rounded-full flex items-center justify-center shadow-lg transition-transform"
          title="WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.a>
      </div>

      {/* Free Trial CTA - bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="fixed bottom-6 left-6 z-50 hidden md:block"
      >
        <Link
          to="/plans"
          className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold shadow-xl pulse-glow"
          style={{ fontFamily: 'Montserrat' }}
        >
          <span>🎯</span>
          <div>
            <div className="text-xs opacity-80">Limited Offer</div>
            <div>3 Days FREE Trial</div>
          </div>
        </Link>
      </motion.div>

      {/* BMI Calculator Modal */}
      <AnimatePresence>
        {showBMI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => { setShowBMI(false); setBmi(null); }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm glass-dark rounded-2xl p-6 border border-orange-500/30"
            >
              <h3 className="text-xl font-black text-white mb-1" style={{ fontFamily: 'Montserrat' }}>
                BMI Calculator
              </h3>
              <p className="text-gray-400 text-sm mb-5">Check your Body Mass Index</p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider">Height (cm)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 170"
                    className="form-input mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider">Weight (kg)</label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 70"
                    className="form-input mt-1"
                  />
                </div>
                <button onClick={calculateBMI} className="btn-primary w-full">
                  Calculate BMI
                </button>
              </div>

              {bmi !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <div className="text-5xl font-black text-white mb-1" style={{ fontFamily: 'Bebas Neue' }}>
                    {bmi}
                  </div>
                  <div className={`text-lg font-bold ${getBMICategory(bmi).color}`}>
                    {getBMICategory(bmi).label}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {bmi < 25 ? 'Keep it up! Maintain your fitness.' : 'Time to start your fitness journey!'}
                  </p>
                  <Link
                    to="/plans"
                    onClick={() => setShowBMI(false)}
                    className="mt-3 inline-block text-orange-500 text-sm font-semibold hover:underline"
                  >
                    Start Free Trial →
                  </Link>
                </motion.div>
              )}

              <button
                onClick={() => { setShowBMI(false); setBmi(null); }}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-lg"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingWidgets;
