import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { fadeUp, stagger } from '../utils/animations';

interface GalleryProps { isHindi: boolean; }

const categories = [
  { id: 'all', label: 'All', labelHi: 'सभी' },
  { id: 'equipment', label: 'Equipment', labelHi: 'उपकरण' },
  { id: 'training', label: 'Training', labelHi: 'प्रशिक्षण' },
  { id: 'classes', label: 'Group Classes', labelHi: 'समूह कक्षाएं' },
  { id: 'trainers', label: 'Trainers', labelHi: 'ट्रेनर' },
];

const galleryItems = [
  { id: 1, src: '/images/hero-bg.jpg', category: 'equipment', title: 'Main Gym Floor', titleHi: 'मुख्य जिम फ्लोर', size: 'large' },
  { id: 2, src: '/images/gym-cardio.jpg', category: 'equipment', title: 'Cardio Zone', titleHi: 'कार्डियो क्षेत्र', size: 'medium' },
  { id: 3, src: '/images/gym-weights.jpg', category: 'equipment', title: 'Weight Training Area', titleHi: 'वेट ट्रेनिंग क्षेत्र', size: 'medium' },
  { id: 4, src: '/images/trainer1.jpg', category: 'trainers', title: 'Head Trainer', titleHi: 'मुख्य ट्रेनर', size: 'small' },
  { id: 5, src: '/images/trainer2.jpg', category: 'trainers', title: 'Yoga Instructor', titleHi: 'योगा प्रशिक्षक', size: 'small' },
  { id: 6, src: '/images/yoga-class.jpg', category: 'classes', title: 'Yoga Session', titleHi: 'योगा सत्र', size: 'large' },
  { id: 7, src: '/images/about-gym.jpg', category: 'training', title: 'Gym Interior', titleHi: 'जिम इंटीरियर', size: 'medium' },
  { id: 8, src: '/images/trainer3.jpg', category: 'trainers', title: 'Cardio Specialist', titleHi: 'कार्डियो विशेषज्ञ', size: 'small' },
  { id: 9, src: '/images/gym-cardio.jpg', category: 'training', title: 'Cardio Training', titleHi: 'कार्डियो ट्रेनिंग', size: 'medium' },
  { id: 10, src: '/images/hero-bg.jpg', category: 'equipment', title: 'Premium Equipment', titleHi: 'प्रीमियम उपकरण', size: 'small' },
  { id: 11, src: '/images/yoga-class.jpg', category: 'classes', title: 'Group Fitness', titleHi: 'समूह फिटनेस', size: 'medium' },
  { id: 12, src: '/images/gym-weights.jpg', category: 'training', title: 'Strength Zone', titleHi: 'स्ट्रेंथ क्षेत्र', size: 'small' },
];

const transformations = [
  { before: 'Before: 92 kg', after: 'After: 74 kg', duration: '4 months', name: 'Amit K.' },
  { before: 'Before: 85 kg', after: 'After: 68 kg', duration: '6 months', name: 'Priya M.' },
  { before: 'Before: 110 kg', after: 'After: 88 kg', duration: '8 months', name: 'Rohit S.' },
];

const Gallery: React.FC<GalleryProps> = ({ isHindi }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null);
  const nextImage = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % filteredItems.length : null);

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 left-10 w-36 h-36 border border-orange-500/10 rounded-full hidden lg:block"
        />
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-premium inline-block mb-6">{isHindi ? 'हमारी गैलरी' : 'Gallery'}</div>
            <h1 className="section-title text-5xl md:text-7xl text-white mb-4 text-3d">
              {isHindi ? 'हमारी' : 'Our'} <span className="gradient-text">{isHindi ? 'सुविधाएं' : 'Facility'}</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {isHindi
                ? 'हमारी विश्व स्तरीय सुविधाओं और प्रशिक्षण सत्रों की झलक देखें।'
                : 'Take a virtual tour of our world-class facilities, equipment, and training sessions.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="py-8 bg-[#0F0F0F] sticky top-16 z-30 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'glass-dark text-gray-400 hover:text-white'
                }`}
                style={{ fontFamily: 'Montserrat' }}
              >
                {isHindi ? cat.labelHi : cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="gallery-card break-inside-avoid mb-4 rounded-2xl cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`w-full object-cover rounded-2xl ${
                      item.size === 'large' ? 'h-72' : item.size === 'medium' ? 'h-56' : 'h-44'
                    }`}
                  />
                  <div className="gallery-card-overlay rounded-2xl">
                    <div>
                      <div className="text-white font-bold text-sm">{isHindi ? item.titleHi : item.title}</div>
                      <div className="text-orange-400 text-xs mt-1 capitalize">{item.category}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* VIRTUAL TOUR */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="section-title text-3xl md:text-4xl text-white mb-4">
              {isHindi ? 'वर्चुअल' : 'Virtual'} <span className="gradient-text">{isHindi ? 'टूर' : 'Gym Tour'}</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🏃', label: 'Cardio Area', src: '/images/gym-cardio.jpg' },
              { icon: '🏋️', label: 'Weight Zone', src: '/images/gym-weights.jpg' },
              { icon: '🧘', label: 'Yoga Studio', src: '/images/yoga-class.jpg' },
              { icon: '🏆', label: 'Reception', src: '/images/about-gym.jpg' },
            ].map((zone) => (
              <motion.div
                key={zone.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="gallery-card h-48 rounded-xl relative cursor-pointer group"
              >
                <img src={zone.src} alt={zone.label} className="w-full h-full object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black/50 rounded-xl flex flex-col items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="text-4xl mb-2">{zone.icon}</div>
                  <div className="text-white font-bold text-sm">{zone.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-16 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="section-title text-3xl md:text-4xl text-white mb-4">
              {isHindi ? 'वीडियो' : 'Video'} <span className="gradient-text">{isHindi ? 'शोकेस' : 'Showcase'}</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Gym Introduction', duration: '2:30', thumb: '/images/hero-bg.jpg' },
              { title: 'Workout Tutorial', duration: '4:15', thumb: '/images/gym-weights.jpg' },
              { title: 'Member Story', duration: '3:00', thumb: '/images/trainer1.jpg' },
            ].map((video) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="gallery-card rounded-2xl relative group h-48 cursor-pointer"
              >
                <img src={video.thumb} alt={video.title} className="w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 bg-black/60 rounded-2xl flex flex-col items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center pulse-glow mb-3">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                  <div className="text-white font-bold text-sm">{video.title}</div>
                  <div className="text-gray-400 text-xs mt-1">{video.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION WALL */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="section-title text-3xl md:text-4xl text-white mb-4">
              {isHindi ? 'परिवर्तन' : 'Transformation'} <span className="gradient-text">{isHindi ? 'दीवार' : 'Wall'}</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {transformations.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-dark rounded-2xl p-6 border border-orange-500/20 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-2xl font-black text-white mx-auto mb-4"
                  style={{ fontFamily: 'Montserrat' }}>
                  {t.name.split(' ')[0][0]}{t.name.split(' ')[1][0]}
                </div>
                <div className="font-black text-white text-lg mb-2" style={{ fontFamily: 'Montserrat' }}>{t.name}</div>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="text-gray-500 text-sm">{t.before}</div>
                  <div className="text-orange-500">→</div>
                  <div className="text-green-400 font-bold text-sm">{t.after}</div>
                </div>
                <div className="text-orange-500 text-sm font-semibold">in {t.duration}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={closeLightbox} className="absolute -top-10 right-0 text-white hover:text-orange-500 transition-colors">
                <X className="w-6 h-6" />
              </button>
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="text-center mt-4 text-white font-bold">{filteredItems[lightboxIndex].title}</div>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-500/80 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-500/80 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
                {lightboxIndex + 1} / {filteredItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
