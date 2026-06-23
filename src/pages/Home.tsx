import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Star, ArrowRight, CheckCircle, Flame } from 'lucide-react';
import { fadeUp, stagger } from '../utils/animations';

interface HomeProps {
  isHindi: boolean;
}

const stats = [
  { value: 500, suffix: '+', label: 'Happy Members', labelHi: 'खुश सदस्य', icon: '😊', color: 'from-orange-500 to-red-600' },
  { value: 15, suffix: '+', label: 'Certified Trainers', labelHi: 'प्रमाणित ट्रेनर', icon: '🏋️', color: 'from-yellow-500 to-orange-500' },
  { value: 4.9, suffix: '★', label: '103 Reviews', labelHi: '103 समीक्षाएं', icon: '⭐', color: 'from-yellow-400 to-yellow-600', decimals: 1 },
  { value: 50, suffix: '+', label: 'Modern Equipment', labelHi: 'आधुनिक उपकरण', icon: '⚙️', color: 'from-green-500 to-emerald-600' },
];

const reasons = [
  {
    icon: '🏋️',
    title: 'Certified Trainers',
    titleHi: 'प्रमाणित ट्रेनर',
    desc: 'All our trainers hold professional certifications. Expert guidance ensures safe, effective workouts tailored to your goals.',
    descHi: 'हमारे सभी ट्रेनर पेशेवर प्रमाणपत्र धारक हैं।',
    back: 'Our trainers specialize in weight loss, muscle building, rehabilitation, and sports performance.',
  },
  {
    icon: '💪',
    title: 'Modern Equipment',
    titleHi: 'आधुनिक उपकरण',
    desc: 'State-of-the-art cardio and strength training equipment. 50+ machines from top brands for the perfect workout.',
    descHi: 'अत्याधुनिक कार्डियो और स्ट्रेंथ ट्रेनिंग उपकरण।',
    back: 'Treadmills, cross-trainers, free weights, cable machines, and specialized equipment.',
  },
  {
    icon: '🎯',
    title: 'Personalized Plans',
    titleHi: 'व्यक्तिगत योजनाएं',
    desc: 'Custom workout and diet plans crafted for your specific body type and fitness goals.',
    descHi: 'आपके विशिष्ट शरीर प्रकार के लिए अनुकूलित योजनाएं।',
    back: 'Regular assessments and plan adjustments to ensure consistent progress toward your goals.',
  },
  {
    icon: '🌟',
    title: 'Positive Environment',
    titleHi: 'सकारात्मक माहौल',
    desc: 'A motivating, friendly atmosphere where every member is supported in their fitness journey.',
    descHi: 'प्रेरक, मैत्रीपूर्ण वातावरण जहाँ हर सदस्य का समर्थन किया जाता है।',
    back: 'Community events, friendly challenges, and supportive coaches make fitness enjoyable.',
  },
];

const services = [
  { icon: '💪', title: 'Personal Training', titleHi: 'व्यक्तिगत प्रशिक्षण', desc: 'One-on-one sessions with certified trainers', path: '/services' },
  { icon: '👥', title: 'Group Classes', titleHi: 'समूह कक्षाएं', desc: 'Zumba, Aerobics, and Yoga sessions', path: '/services' },
  { icon: '🏃', title: 'Cardio Zone', titleHi: 'कार्डियो क्षेत्र', desc: 'Modern treadmills and cardio machines', path: '/services' },
  { icon: '🏋️', title: 'Strength Training', titleHi: 'स्ट्रेंथ ट्रेनिंग', desc: 'Free weights and strength machines', path: '/services' },
  { icon: '🧘', title: 'Yoga & Zumba', titleHi: 'योगा और जुम्बा', desc: 'Morning and evening batches available', path: '/services' },
  { icon: '🥗', title: 'Diet Consultation', titleHi: 'डाइट परामर्श', desc: 'Personalized nutrition plans', path: '/services' },
];

const testimonials = [
  { name: 'Rahul S.', initials: 'RS', text: 'Really cool place to workout! The equipment is top-notch and the trainers are so professional. Been coming here for 3 months now.', rating: 5, time: '3 months ago' },
  { name: 'Priya M.', initials: 'PM', text: 'Nice experience, modern equipment, certified trainer, nice environment. Highly recommend to anyone looking for a quality gym in Noida.', rating: 5, time: '5 months ago' },
  { name: 'Amit K.', initials: 'AK', text: 'Friendly nature, good vibes, positive ambience. The trainers really motivate you to push your limits. Best gym in Sector 22!', rating: 5, time: '2 months ago' },
  { name: 'Sneha R.', initials: 'SR', text: 'Excellent gym with all modern facilities. The staff is very supportive and the environment is clean and motivating.', rating: 5, time: '1 month ago' },
  { name: 'Vikram J.', initials: 'VJ', text: 'Kind and supportive coaches. I lost 12kg in 4 months with their personalized plan. Life-changing experience!', rating: 5, time: '4 months ago' },
];

const Particles: React.FC = () => (
  <div className="particles-bg">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full opacity-20"
        style={{
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          background: i % 2 === 0 ? '#FF4500' : '#FFD700',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `particle-float ${Math.random() * 10 + 8}s ${Math.random() * 5}s linear infinite`,
        }}
      />
    ))}
  </div>
);

const Home: React.FC<HomeProps> = ({ isHindi }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 w-full h-full">
          <img src="/images/hero-bg.jpg" alt="Modern Fitness Gym" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </motion.div>

        <Particles />

        {/* Floating 3D Elements */}
        <motion.div
          className="absolute top-32 left-10 text-5xl"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 20px rgba(255,69,0,0.5))' }}
        >🏋️</motion.div>
        <motion.div
          className="absolute top-40 right-16 text-4xl"
          animate={{ y: [0, -15, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ filter: 'drop-shadow(0 0 15px rgba(255,215,0,0.5))' }}
        >⚡</motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-3xl hidden md:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >💪</motion.div>
        <motion.div
          className="absolute bottom-60 right-20 text-3xl hidden md:block"
          animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >🔥</motion.div>

        {/* Hero Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/40 bg-orange-500/10 mb-6"
          >
            <span className="text-yellow-500 text-xs">★★★★★</span>
            <span className="text-gray-300 text-xs font-medium">4.9 Rating | 103 Google Reviews</span>
            <span className="text-orange-500 text-xs">| Noida Sector 22</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 text-3d leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {isHindi ? 'मॉडर्न फिटनेस में' : 'Welcome to'}
            <br />
            <span className="gradient-text">
              {isHindi ? 'आपका स्वागत है' : 'Modern Fitness'}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl font-bold text-orange-400 mb-3 tracking-wide"
            style={{ fontFamily: 'Montserrat' }}
          >
            {isHindi ? 'अपने शरीर को बदलें, अपनी जिंदगी बदलें' : 'Transform Your Body, Transform Your Life'}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto"
          >
            {isHindi
              ? 'प्रमाणित ट्रेनर | आधुनिक उपकरण | गारंटीड परिणाम'
              : 'Certified Trainers | Modern Equipment | Results Guaranteed'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/plans" className="btn-primary pulse-glow flex items-center gap-2">
              <Flame className="w-4 h-4" />
              {isHindi ? 'फ्री ट्रायल शुरू करें' : 'Start Free Trial'}
            </Link>
            <Link to="/plans" className="btn-secondary flex items-center gap-2">
              {isHindi ? 'योजनाएं देखें' : 'View Plans'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
          >
            {['No joining fees', 'Free diet plan', '3 day trial'].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="scroll-indicator w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-orange-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section ref={statsRef} className="relative py-16 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="card-3d glass-dark rounded-2xl p-6 text-center group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`stat-number text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {statsInView ? (
                    <CountUp end={stat.value} duration={2} decimals={stat.decimals || 0} suffix={stat.suffix} />
                  ) : '0'}
                </div>
                <div className="text-gray-400 text-sm mt-1 font-medium">
                  {isHindi ? stat.labelHi : stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#0F0F0F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <div className="badge-premium inline-block mb-4">{isHindi ? 'हमें क्यों चुनें' : 'Why Choose Us'}</div>
            <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
              {isHindi ? 'हमारी खासियतें' : 'What Sets Us'}<span className="gradient-text"> Apart</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {reasons.map((reason) => (
              <motion.div key={reason.title} variants={fadeUp} className="flip-card h-64 cursor-pointer">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front glass-dark p-6 flex flex-col items-center justify-center text-center">
                    <div className="text-5xl mb-4">{reason.icon}</div>
                    <h3 className="font-black text-white text-lg mb-3" style={{ fontFamily: 'Montserrat' }}>
                      {isHindi ? reason.titleHi : reason.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {isHindi ? reason.descHi : reason.desc}
                    </p>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-orange-500 to-red-700 p-6 flex flex-col items-center justify-center text-center">
                    <div className="text-5xl mb-4">{reason.icon}</div>
                    <p className="text-white text-sm leading-relaxed font-medium">{reason.back}</p>
                    <Link to="/about" className="mt-4 px-4 py-2 bg-white/20 rounded-lg text-white text-xs font-bold border border-white/30 hover:bg-white/30 transition-colors">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <div className="badge-premium inline-block mb-4">{isHindi ? 'हमारी सेवाएं' : 'Our Services'}</div>
            <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
              {isHindi ? 'क्या है हमारे पास' : 'Everything You'}<span className="gradient-text"> Need</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Link to={service.path}>
                  <div className="service-card rounded-2xl p-7 group cursor-pointer">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <h3 className="font-black text-white text-lg mb-2" style={{ fontFamily: 'Montserrat' }}>
                      {isHindi ? service.titleHi : service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{service.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-orange-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
              {isHindi ? 'सभी सेवाएं देखें' : 'View All Services'} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#0F0F0F] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-yellow-500/5" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-14"
          >
            <div className="badge-premium inline-block mb-4">{isHindi ? 'समीक्षाएं' : 'Reviews'}</div>
            <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
              {isHindi ? 'हमारे सदस्य क्या कहते हैं' : 'What Members'}<span className="gradient-text"> Say</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          {/* Featured Testimonial */}
          <div className="max-w-3xl mx-auto mb-12">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card rounded-2xl p-8 text-center relative"
            >
              <div className="text-5xl mb-4 opacity-30 absolute top-4 left-6">"</div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500 star" />
                ))}
              </div>
              <p className="text-gray-200 text-lg mb-6 italic leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center font-bold text-white">
                  {testimonials[activeTestimonial].initials}
                </div>
                <div className="text-left">
                  <div className="text-white font-bold">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-500 text-xs">{testimonials[activeTestimonial].time}</div>
                </div>
              </div>
            </motion.div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'bg-orange-500 w-6' : 'bg-gray-600 w-2'}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="review-card rounded-xl p-5"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic mb-3">"{t.text.substring(0, 80)}..."</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <span className="text-white text-sm font-semibold">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/reviews" className="btn-secondary inline-flex items-center gap-2">
              {isHindi ? 'सभी समीक्षाएं देखें' : 'View All Reviews'} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-orange-800" />
        <div className="absolute inset-0 opacity-20">
          <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
        <Particles />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-3 rounded-full bg-yellow-500 text-black font-black text-sm shadow-2xl shadow-yellow-500/30">
              🎯 LIMITED TIME OFFER • 3 DAYS FREE TRIAL
            </div>
          </motion.div>

          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-white mb-4 text-3d"
            style={{ fontFamily: 'Montserrat' }}
          >
            {isHindi ? 'आज ही जुड़ें!' : 'Ready to Transform?'}
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-white/80 text-xl mb-8"
          >
            {isHindi ? 'आज ही मॉडर्न फिटनेस परिवार का हिस्सा बनें!' : 'Join the Modern Fitness family today and start your transformation!'}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/plans"
              className="bg-white text-orange-600 font-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-2xl"
              style={{ fontFamily: 'Montserrat' }}
            >
              {isHindi ? 'अभी जुड़ें →' : 'Join Now →'}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              style={{ fontFamily: 'Montserrat' }}
            >
              {isHindi ? 'संपर्क करें' : 'Contact Us'}
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[{ label: 'No Hidden Fees', icon: '✅' }, { label: 'Certified Trainers', icon: '🏆' }, { label: 'Money-back Guarantee', icon: '💰' }].map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2 text-white/80 text-sm">
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
