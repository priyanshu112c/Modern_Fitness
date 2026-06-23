import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { fadeUp, stagger } from '../utils/animations';

interface ServicesProps { isHindi: boolean; }

const services = [
  {
    icon: '💪', title: 'Personal Training', titleHi: 'व्यक्तिगत प्रशिक्षण',
    color: 'from-orange-500 to-red-600',
    desc: 'One-on-one sessions with our certified trainers, customized to your specific goals and fitness level.',
    descHi: 'प्रमाणित ट्रेनरों के साथ एक-एक सत्र।',
    features: ['Customized workout plans', 'Progress tracking', 'Form correction & guidance', 'Nutritional advice', 'Goal-specific training'],
    img: '/images/trainer1.jpg',
    duration: '45-60 min/session',
  },
  {
    icon: '👥', title: 'Group Fitness Classes', titleHi: 'समूह फिटनेस कक्षाएं',
    color: 'from-purple-500 to-pink-600',
    desc: 'Energetic group classes including Zumba, Aerobics, and Yoga, led by expert instructors.',
    descHi: 'जुम्बा, एरोबिक्स और योगा सहित ऊर्जावान समूह कक्षाएं।',
    features: ['Zumba dance fitness', 'Aerobics classes', 'Core & flexibility', 'Fun motivating environment', 'Morning & evening batches'],
    img: '/images/yoga-class.jpg',
    duration: '45-60 min/class',
  },
  {
    icon: '🏃', title: 'Cardio Zone', titleHi: 'कार्डियो क्षेत्र',
    color: 'from-blue-500 to-cyan-600',
    desc: 'State-of-the-art cardio equipment including treadmills, cross-trainers, and stationary bikes.',
    descHi: 'आधुनिक कार्डियो उपकरण।',
    features: ['Modern treadmills', 'Elliptical cross-trainers', 'Stationary cycles', 'Heart rate monitoring', 'Cool-down stretching area'],
    img: '/images/gym-cardio.jpg',
    duration: 'Open all day',
  },
  {
    icon: '🏋️', title: 'Strength Training', titleHi: 'स्ट्रेंथ ट्रेनिंग',
    color: 'from-green-500 to-emerald-600',
    desc: 'Comprehensive free weights and machine section for muscle building and strength development.',
    descHi: 'मांसपेशी निर्माण के लिए व्यापक वेट सेक्शन।',
    features: ['Free weights (2.5kg - 50kg)', 'Cable machines', 'Bench press stations', 'Expert supervision', 'Muscle building programs'],
    img: '/images/gym-weights.jpg',
    duration: 'Open all day',
  },
  {
    icon: '🧘', title: 'Yoga & Flexibility', titleHi: 'योगा और लचीलापन',
    color: 'from-yellow-500 to-orange-500',
    desc: 'Certified yoga instructors guide you through poses for stress relief, flexibility, and mental wellness.',
    descHi: 'प्रमाणित योगा प्रशिक्षक तनाव राहत और लचीलेपन के लिए मार्गदर्शन करते हैं।',
    features: ['Morning & evening batches', 'All levels welcome', 'Stress relief sessions', 'Meditation guidance', 'Flexibility improvement'],
    img: '/images/yoga-class.jpg',
    duration: '60 min/session',
  },
  {
    icon: '🥗', title: 'Diet Consultation', titleHi: 'डाइट परामर्श',
    color: 'from-teal-500 to-green-600',
    desc: 'Expert nutritionists create personalized diet plans aligned with your fitness goals.',
    descHi: 'विशेषज्ञ पोषण विशेषज्ञ व्यक्तिगत डाइट योजनाएं बनाते हैं।',
    features: ['Body composition analysis', 'Custom meal plans', 'Supplement guidance', 'Regular check-ins', 'Progress monitoring'],
    img: '/images/about-gym.jpg',
    duration: '30-45 min/session',
  },
  {
    icon: '🎯', title: 'Functional Training', titleHi: 'फंक्शनल ट्रेनिंग',
    color: 'from-red-500 to-orange-600',
    desc: 'CrossFit-style functional training for athletic performance, agility, and overall strength.',
    descHi: 'एथलेटिक प्रदर्शन के लिए क्रॉसफिट शैली का प्रशिक्षण।',
    features: ['HIIT workouts', 'Agility training', 'Core strengthening', 'Athletic performance', 'Circuit training'],
    img: '/images/gym-weights.jpg',
    duration: '45 min/session',
  },
];

const schedule = [
  { day: 'Monday', classes: ['6:00 AM - Yoga', '8:00 AM - Cardio HIIT', '6:30 PM - Zumba', '8:00 PM - Strength'] },
  { day: 'Tuesday', classes: ['6:00 AM - Aerobics', '7:00 AM - Functional', '5:30 PM - Yoga', '7:30 PM - Cardio'] },
  { day: 'Wednesday', classes: ['6:00 AM - Yoga', '9:00 AM - Strength', '6:00 PM - Zumba', '8:00 PM - HIIT'] },
  { day: 'Thursday', classes: ['6:00 AM - Aerobics', '7:30 AM - Yoga', '6:30 PM - Functional', '8:00 PM - Strength'] },
  { day: 'Friday', classes: ['6:00 AM - Yoga', '8:00 AM - Cardio', '5:30 PM - Zumba', '7:30 PM - Strength'] },
  { day: 'Saturday', classes: ['7:00 AM - Full Body', '9:00 AM - Yoga', '5:00 PM - Zumba', '7:00 PM - Cardio'] },
  { day: 'Sunday', classes: ['8:00 AM - Yoga', '10:00 AM - Aerobics', '5:00 PM - Functional', 'Open Gym All Day'] },
];

const Services: React.FC<ServicesProps> = ({ isHindi }) => {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-40 h-40 border border-orange-500/10 rounded-full"
        />
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-premium inline-block mb-6">{isHindi ? 'हमारी सेवाएं' : 'Our Services'}</div>
            <h1 className="section-title text-5xl md:text-7xl text-white mb-4 text-3d">
              {isHindi ? 'हमारी' : 'Our'} <span className="gradient-text">{isHindi ? 'सेवाएं' : 'Services'}</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {isHindi
                ? 'हम विविध फिटनेस सेवाएं प्रदान करते हैं जो आपके लक्ष्यों को प्राप्त करने में मदद करती हैं।'
                : 'Comprehensive fitness services designed to help you achieve your goals, from personal training to group classes and nutrition guidance.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className={`service-card rounded-2xl overflow-hidden cursor-pointer ${selectedService === index ? 'border-orange-500/50' : ''}`}
                onClick={() => setSelectedService(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {service.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-white text-xl mb-2" style={{ fontFamily: 'Montserrat' }}>
                    {isHindi ? service.titleHi : service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {isHindi ? service.descHi : service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link to="/plans" className="mt-4 flex items-center gap-1 text-orange-500 text-sm font-semibold group">
                    Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EQUIPMENT SHOWCASE */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
              {isHindi ? 'हमारे' : 'Premium'} <span className="gradient-text">{isHindi ? 'आधुनिक उपकरण' : 'Equipment'}</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: '🏃', name: 'Treadmills', count: '8+', cat: 'Cardio' },
              { icon: '🚴', name: 'Cycles', count: '6+', cat: 'Cardio' },
              { icon: '⚙️', name: 'Cable Machines', count: '5+', cat: 'Strength' },
              { icon: '🏋️', name: 'Free Weights', count: '50+', cat: 'Weights' },
              { icon: '🔗', name: 'Resistance Bands', count: '20+', cat: 'Functional' },
              { icon: '💪', name: 'Dumbbells', count: '40+', cat: 'Weights' },
              { icon: '🏆', name: 'Smith Machine', count: '2', cat: 'Strength' },
              { icon: '🎯', name: 'Functional Kit', count: '1 Zone', cat: 'Functional' },
            ].map((equip, i) => (
              <motion.div
                key={equip.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-dark rounded-xl p-4 text-center group hover:border-orange-500/30 border border-transparent transition-colors"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{equip.icon}</div>
                <div className="text-orange-500 font-black text-lg" style={{ fontFamily: 'Bebas Neue', letterSpacing: '1px' }}>{equip.count}</div>
                <div className="text-white text-xs font-semibold">{equip.name}</div>
                <div className="text-gray-500 text-xs mt-0.5">{equip.cat}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/gym-cardio.jpg', label: 'Cardio Equipment' },
              { src: '/images/gym-weights.jpg', label: 'Free Weights' },
              { src: '/images/about-gym.jpg', label: 'Full Gym View' },
            ].map((img) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="gallery-card h-56 rounded-2xl"
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover rounded-2xl" />
                <div className="gallery-card-overlay rounded-2xl">
                  <span className="text-white font-bold">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
              {isHindi ? 'साप्ताहिक' : 'Weekly'} <span className="gradient-text">{isHindi ? 'कार्यक्रम' : 'Schedule'}</span>
            </h2>
            <div className="section-divider mb-4" />
            <p className="text-gray-400">Open Daily | Closes at 10:30 PM | Peak Hours: 6 PM – 9 PM</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {schedule.slice(0, 7).map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-dark rounded-xl p-4"
              >
                <div className="font-black text-orange-500 text-sm mb-3 uppercase tracking-wider" style={{ fontFamily: 'Montserrat' }}>
                  {day.day}
                </div>
                <ul className="space-y-1.5">
                  {day.classes.map((cls, j) => (
                    <li key={j} className="text-xs text-gray-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      {cls}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm">
              ⚡ Peak Hours 6 PM – 9 PM | Book your slot in advance
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
            {isHindi ? 'आज ही शुरू करें!' : 'Start Your Fitness Journey Today!'}
          </h2>
          <p className="text-white/80 mb-8">{isHindi ? '3 दिन का फ्री ट्रायल उपलब्ध है।' : '3 days free trial available for new members.'}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plans" className="bg-white text-orange-600 font-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors" style={{ fontFamily: 'Montserrat' }}>
              {isHindi ? 'योजनाएं देखें' : 'View Plans'}
            </Link>
            <Link to="/contact" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors" style={{ fontFamily: 'Montserrat' }}>
              {isHindi ? 'फ्री ट्रायल बुक करें' : 'Book Free Trial'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
