import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Target, Eye, ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import { fadeUp, fadeLeft, fadeRight, stagger } from '../utils/animations';

interface AboutProps { isHindi: boolean; }

const trainers = [
  { name: 'Rajesh Kumar', role: 'Head Trainer', roleHi: 'मुख्य ट्रेनर', exp: '8+ years', spec: 'Strength & Conditioning', img: '/images/trainer1.jpg', initials: 'RK' },
  { name: 'Priya Singh', role: 'Yoga & Zumba', roleHi: 'योगा और जुम्बा', exp: '6+ years', spec: 'Yoga & Dance Fitness', img: '/images/trainer2.jpg', initials: 'PS' },
  { name: 'Amit Sharma', role: 'Cardio Specialist', roleHi: 'कार्डियो विशेषज्ञ', exp: '5+ years', spec: 'Cardio & HIIT', img: '/images/trainer3.jpg', initials: 'AS' },
];

const facilities = [
  { icon: '🏃', title: 'Cardio Zone', titleHi: 'कार्डियो क्षेत्र', desc: 'Modern treadmills, cross-trainers, and cycles' },
  { icon: '🏋️', title: 'Weight Training', titleHi: 'वेट ट्रेनिंग', desc: 'Complete free weights and machine section' },
  { icon: '🧘', title: 'Group Studio', titleHi: 'समूह स्टूडियो', desc: 'Spacious studio for yoga and group classes' },
  { icon: '🚿', title: 'Changing Rooms', titleHi: 'बदलने का कमरा', desc: 'Clean shower and changing facilities' },
  { icon: '🗝️', title: 'Locker Area', titleHi: 'लॉकर क्षेत्र', desc: 'Secure personal storage lockers' },
  { icon: '🎯', title: 'Functional Zone', titleHi: 'फंक्शनल क्षेत्र', desc: 'CrossFit and functional training area' },
];

const achievements = [
  { icon: '🏆', title: '4.9★ Rating', sub: '103 Google Reviews' },
  { icon: '🥇', title: 'Best Gym', sub: 'Noida Sector 22, 2024' },
  { icon: '📜', title: 'ISO Certified', sub: 'Quality Training' },
  { icon: '💪', title: '500+ Members', sub: 'Active Members' },
];

const About: React.FC<AboutProps> = ({ isHindi }) => {
  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-gym.jpg" alt="About Modern Fitness" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#0F0F0F]/80 to-[#0F0F0F]" />
        </div>

        {/* Floating shapes */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-32 h-32 border border-orange-500/20 rounded-full hidden lg:block"
        />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-20 w-48 h-48 border border-orange-500/10 rounded-full hidden lg:block"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-premium inline-block mb-6">
              {isHindi ? 'हमारे बारे में' : 'About Us'}
            </div>
            <h1 className="section-title text-5xl md:text-7xl text-white mb-4 text-3d">
              About <span className="gradient-text">Modern Fitness</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {isHindi
                ? 'नोएडा सेक्टर 22 में प्रीमियम फिटनेस सेंटर, जहाँ आपकी फिटनेस यात्रा शुरू होती है।'
                : 'Noida\'s premier fitness destination in Sector 22, where transformations begin and goals are achieved.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/10">
                <img src="/images/about-gym.jpg" alt="Modern Fitness Gym" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-[#0F0F0F] shadow-xl hidden md:block">
                <img src="/images/gym-weights.jpg" alt="Gym Equipment" className="w-full h-full object-cover" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-6 left-6 glass-dark rounded-xl p-4"
              >
                <div className="text-2xl font-black text-orange-500" style={{ fontFamily: 'Bebas Neue' }}>4.9★</div>
                <div className="text-xs text-gray-400">Google Rating</div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              className="space-y-6"
            >
              <div className="badge-premium inline-block">{isHindi ? 'हमारी कहानी' : 'Our Story'}</div>
              <h2 className="section-title text-4xl md:text-5xl text-white">
                {isHindi ? 'एक' : 'A'} <span className="gradient-text">{isHindi ? 'प्रेरणादायक' : 'Transformative'}</span> {isHindi ? 'यात्रा' : 'Journey'}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {isHindi
                  ? 'मॉडर्न फिटनेस नोएडा सेक्टर 22 के दिल में स्थित है। हम फिटनेस उत्साही लोगों को उनके लक्ष्य प्राप्त करने में मदद करने के लिए प्रतिबद्ध हैं।'
                  : 'Located in the heart of Noida Sector 22, Modern Fitness was established with a clear mission: to provide world-class fitness training to the community. We are committed to helping fitness enthusiasts achieve their goals through certified training and modern facilities.'}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {isHindi
                  ? 'आधुनिक उपकरणों और प्रमाणित ट्रेनरों के साथ, हम आपकी फिटनेस यात्रा को एक अद्भुत अनुभव बनाते हैं।'
                  : 'Equipped with the latest modern facilities and certified trainers, we create a positive and motivating environment where every member feels supported in their fitness journey.'}
              </p>
              <div className="space-y-3">
                {[
                  isHindi ? 'नोएडा सेक्टर 22, शिव ओम मार्केट में स्थित' : 'Located at Shiv Om Market, Sector 22, Noida',
                  isHindi ? 'सभी स्तरों के लिए उपयुक्त' : 'Suitable for all fitness levels',
                  isHindi ? '500+ खुश सदस्य' : '500+ happy members and counting',
                  isHindi ? 'प्रमाणित पेशेवर ट्रेनर' : 'Certified professional trainers',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-gray-400 text-sm">Shiv Om Market, near Dharam Public School, Raghunathpur, Sector 22, Noida, UP 201307</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
              {isHindi ? 'हमारा' : 'Our'} <span className="gradient-text">{isHindi ? 'उद्देश्य और दृष्टि' : 'Mission & Vision'}</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}
              className="card-3d glass-dark rounded-2xl p-8 border border-orange-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
                {isHindi ? 'हमारा उद्देश्य' : 'Our Mission'}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {isHindi
                  ? 'प्रमाणित पेशेवरों के साथ विश्व स्तरीय फिटनेस प्रशिक्षण प्रदान करना और हर सदस्य के जीवन को सकारात्मक रूप से बदलना।'
                  : 'To provide world-class fitness training with certified professionals, making health and wellness accessible to everyone in our community. We strive to transform lives through dedication, expertise, and modern facilities.'}
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              className="card-3d glass-dark rounded-2xl p-8 border border-yellow-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4" style={{ fontFamily: 'Montserrat' }}>
                {isHindi ? 'हमारी दृष्टि' : 'Our Vision'}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {isHindi
                  ? 'नोएडा का सबसे विश्वसनीय फिटनेस गंतव्य बनना जहाँ हर व्यक्ति अपने फिटनेस लक्ष्यों को प्राप्त कर सके।'
                  : 'To become Noida\'s most trusted and preferred fitness destination, known for excellence in training, state-of-the-art facilities, and a community that uplifts and inspires every member to achieve their best.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FACILITY HIGHLIGHTS */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="badge-premium inline-block mb-4">{isHindi ? 'हमारी सुविधाएं' : 'Our Facilities'}</div>
            <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
              {isHindi ? 'विश्व स्तरीय' : 'World-Class'} <span className="gradient-text">{isHindi ? 'सुविधाएं' : 'Facilities'}</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {facilities.map((facility, i) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="service-card rounded-2xl p-6 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{facility.icon}</div>
                <h3 className="font-black text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
                  {isHindi ? facility.titleHi : facility.title}
                </h3>
                <p className="text-gray-400 text-sm">{facility.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Gym images grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/gym-cardio.jpg', label: 'Cardio Zone' },
              { src: '/images/gym-weights.jpg', label: 'Weight Training' },
              { src: '/images/yoga-class.jpg', label: 'Yoga Studio' },
            ].map((img) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="gallery-card h-48 md:h-64"
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                <div className="gallery-card-overlay">
                  <span className="text-white font-bold text-sm">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]" />
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{ach.icon}</div>
                <div className="text-white font-black text-xl" style={{ fontFamily: 'Montserrat' }}>{ach.title}</div>
                <div className="text-white/70 text-sm">{ach.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINERS PREVIEW */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="badge-premium inline-block mb-4">{isHindi ? 'हमारी टीम' : 'Our Team'}</div>
            <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
              {isHindi ? 'हमारे' : 'Meet Our'} <span className="gradient-text">{isHindi ? 'ट्रेनर' : 'Trainers'}</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {trainers.map((trainer) => (
              <motion.div key={trainer.name} variants={fadeUp} className="card-3d glass-dark rounded-2xl overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img src={trainer.img} alt={trainer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="badge-premium text-xs">{trainer.exp}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-white text-xl mb-1" style={{ fontFamily: 'Montserrat' }}>{trainer.name}</h3>
                  <div className="text-orange-500 font-semibold text-sm mb-2">
                    {isHindi ? trainer.roleHi : trainer.role}
                  </div>
                  <div className="text-gray-400 text-sm flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    {trainer.spec}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              {isHindi ? 'ट्रेनर से मिलें' : 'Train with Our Experts'} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
