import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, ChevronDown, ChevronUp } from 'lucide-react';
import { FaInstagram, FaFacebook, FaYoutube, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { fadeUp, fadeLeft, fadeRight, stagger } from '../utils/animations';

interface ContactProps { isHindi: boolean; }

const faqs = [
  {
    q: 'Do you offer a free trial?',
    qHi: 'क्या आप फ्री ट्रायल देते हैं?',
    a: 'Yes! We offer a 3-day free trial for new members. No credit card required. Just walk in or contact us to book your trial.',
    aHi: 'हाँ! हम नए सदस्यों के लिए 3 दिन का फ्री ट्रायल प्रदान करते हैं।'
  },
  {
    q: 'What membership options are available?',
    qHi: 'कौन से सदस्यता विकल्प उपलब्ध हैं?',
    a: 'We offer three plans: Basic (₹2,999/month), Premium (₹4,999/month), and Platinum (₹7,999/month). Quarterly, half-yearly, and yearly discounts available.',
    aHi: 'हम तीन योजनाएं प्रदान करते हैं: बेसिक, प्रीमियम और प्लेटिनम।'
  },
  {
    q: 'Are the trainers certified?',
    qHi: 'क्या ट्रेनर प्रमाणित हैं?',
    a: 'Absolutely! All our trainers hold professional certifications and have extensive experience in fitness training, nutrition, and wellness.',
    aHi: 'बिल्कुल! हमारे सभी ट्रेनर पेशेवर प्रमाणपत्र धारक हैं।'
  },
  {
    q: 'What equipment is available?',
    qHi: 'कौन से उपकरण उपलब्ध हैं?',
    a: 'We have 50+ pieces of modern equipment including treadmills, cross-trainers, cycles, free weights (2.5kg-50kg), cable machines, smith machine, and functional training equipment.',
    aHi: 'हमारे पास 50+ आधुनिक उपकरण हैं।'
  },
  {
    q: 'Do you provide diet consultation?',
    qHi: 'क्या आप डाइट परामर्श देते हैं?',
    a: 'Yes, diet and nutrition consultation is included with Premium and Platinum membership plans. Basic members can avail it as an add-on service.',
    aHi: 'हाँ, प्रीमियम और प्लेटिनम सदस्यों के लिए डाइट परामर्श शामिल है।'
  },
  {
    q: 'What are your working hours?',
    qHi: 'आपके काम के घंटे क्या हैं?',
    a: 'We are open daily (Monday to Sunday). The gym closes at 10:30 PM. Peak hours are 6 PM to 9 PM. We recommend visiting during off-peak hours for the best experience.',
    aHi: 'हम प्रतिदिन सुबह से रात 10:30 बजे तक खुले हैं।'
  },
];

const quickActions = [
  { icon: FaWhatsapp, label: 'WhatsApp', labelHi: 'व्हाट्सएप', color: 'from-green-500 to-green-600', href: 'https://wa.me/919999999999?text=Hi! I want to join Modern Fitness' },
  { icon: Phone, label: 'Call Now', labelHi: 'कॉल करें', color: 'from-blue-500 to-blue-600', href: 'tel:+919999999999' },
  { icon: Navigation, label: 'Directions', labelHi: 'दिशा-निर्देश', color: 'from-red-500 to-red-600', href: 'https://maps.google.com/?q=Modern+Fitness+Noida+Sector+22' },
  { icon: Mail, label: 'Email Us', labelHi: 'ईमेल', color: 'from-orange-500 to-orange-600', href: 'mailto:info@modernfitness.com' },
];

const Contact: React.FC<ContactProps> = ({ isHindi }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', time: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-32 h-32 border border-orange-500/20 rounded-full hidden lg:block"
        />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 left-10 w-48 h-48 border border-orange-500/10 rounded-full hidden lg:block"
        />

        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-premium inline-block mb-6">{isHindi ? 'संपर्क करें' : 'Contact Us'}</div>
            <h1 className="section-title text-5xl md:text-7xl text-white mb-4 text-3d">
              {isHindi ? 'संपर्क' : 'Get In'} <span className="gradient-text">{isHindi ? 'करें' : 'Touch'}</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {isHindi
                ? 'हमसे संपर्क करें और अपनी फिटनेस यात्रा शुरू करें।'
                : 'Have questions? Ready to start? Reach out to us and our team will help you begin your transformation journey.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="py-10 bg-[#0F0F0F]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map(({ icon: Icon, label, labelHi, color, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm font-bold" style={{ fontFamily: 'Montserrat' }}>
                  {isHindi ? labelHi : label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CARDS + FORM */}
      <section className="py-16 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}
              className="lg:col-span-2 space-y-5"
            >
              <h2 className="section-title text-3xl text-white mb-6">
                {isHindi ? 'संपर्क' : 'Contact'} <span className="gradient-text">{isHindi ? 'जानकारी' : 'Information'}</span>
              </h2>

              {[
                {
                  icon: MapPin, title: isHindi ? 'पता' : 'Address', color: 'from-orange-500 to-red-600',
                  content: 'Shiv Om Market, near Dharam Public School, Raghunathpur, Sector 22, Noida, Uttar Pradesh 201307'
                },
                {
                  icon: Phone, title: isHindi ? 'फ़ोन' : 'Phone', color: 'from-blue-500 to-blue-700',
                  content: '+91 99999 99999', href: 'tel:+919999999999'
                },
                {
                  icon: Mail, title: isHindi ? 'ईमेल' : 'Email', color: 'from-purple-500 to-purple-700',
                  content: 'info@modernfitness.com', href: 'mailto:info@modernfitness.com'
                },
                {
                  icon: Clock, title: isHindi ? 'समय' : 'Working Hours', color: 'from-green-500 to-green-700',
                  content: 'Open Daily • Closes 10:30 PM\nPeak Hours: 6 PM – 9 PM'
                },
              ].map(({ icon: Icon, title, color, content, href }) => (
                <div key={title} className="glass-dark rounded-2xl p-5 flex items-start gap-4 border border-white/5 hover:border-orange-500/20 transition-colors group">
                  <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-orange-500 font-bold text-xs uppercase tracking-wider mb-1">{title}</div>
                    {href ? (
                      <a href={href} className="text-gray-300 text-sm group-hover:text-orange-500 transition-colors">{content}</a>
                    ) : (
                      <div className="text-gray-300 text-sm whitespace-pre-line">{content}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="glass-dark rounded-2xl p-5 border border-white/5">
                <div className="text-orange-500 font-bold text-xs uppercase tracking-wider mb-3">{isHindi ? 'सोशल मीडिया' : 'Follow Us'}</div>
                <div className="flex items-center gap-3">
                  {[
                    { icon: FaInstagram, href: '#', color: 'hover:text-pink-500' },
                    { icon: FaFacebook, href: '#', color: 'hover:text-blue-500' },
                    { icon: FaYoutube, href: '#', color: 'hover:text-red-500' },
                    { icon: FaXTwitter, href: '#', color: 'hover:text-sky-400' },
                  ].map(({ icon: Icon, href, color }, i) => (
                    <a key={i} href={href}
                      className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 ${color} transition-all duration-300 border border-white/5 hover:border-current hover:scale-110`}>
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              className="lg:col-span-3"
            >
              {!submitted ? (
                <div className="glass-dark rounded-2xl p-8 border border-orange-500/20">
                  <h3 className="font-black text-white text-2xl mb-6" style={{ fontFamily: 'Montserrat' }}>
                    {isHindi ? 'संदेश भेजें' : 'Send Message'}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">
                          {isHindi ? 'नाम' : 'Name'} *
                        </label>
                        <input type="text" required
                          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder={isHindi ? 'आपका नाम' : 'Your name'} className="form-input" />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">
                          {isHindi ? 'ईमेल' : 'Email'} *
                        </label>
                        <input type="email" required
                          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="email@example.com" className="form-input" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">
                          {isHindi ? 'फ़ोन' : 'Phone'}
                        </label>
                        <input type="tel"
                          value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX" className="form-input" />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">
                          {isHindi ? 'सेवा में रुचि' : 'Service Interest'}
                        </label>
                        <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="form-input bg-[#1A1A1A]">
                          <option value="">Select service</option>
                          <option>Personal Training</option>
                          <option>Group Classes</option>
                          <option>Membership</option>
                          <option>Diet Consultation</option>
                          <option>Free Trial</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">
                        {isHindi ? 'पसंदीदा समय' : 'Preferred Time'}
                      </label>
                      <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="form-input bg-[#1A1A1A]">
                        <option value="">Select time</option>
                        <option>Morning (6 AM – 10 AM)</option>
                        <option>Afternoon (10 AM – 4 PM)</option>
                        <option>Evening (4 PM – 8 PM)</option>
                        <option>Night (8 PM – 10:30 PM)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">
                        {isHindi ? 'संदेश' : 'Message'} *
                      </label>
                      <textarea required rows={4}
                        value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder={isHindi ? 'अपना संदेश लिखें...' : 'Tell us about your fitness goals or any questions you have...'}
                        className="form-input resize-none" />
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      {isHindi ? 'संदेश भेजें' : 'Send Message'}
                    </button>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-dark rounded-2xl p-12 text-center border border-green-500/30 h-full flex flex-col items-center justify-center"
                >
                  <div className="text-7xl mb-6">🎉</div>
                  <h3 className="text-3xl font-black text-white mb-3" style={{ fontFamily: 'Montserrat' }}>
                    {isHindi ? 'धन्यवाद!' : 'Message Sent!'}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {isHindi
                      ? 'हम 24 घंटे के भीतर आपसे संपर्क करेंगे।'
                      : 'We\'ll get back to you within 24 hours. Ready to start your fitness journey!'}
                  </p>
                  <div className="text-green-500 font-bold">✓ {isHindi ? 'संदेश प्राप्त हुआ' : 'Message Received'}</div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-4 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="rounded-2xl overflow-hidden border border-orange-500/20 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7788896986376!2d77.3601!3d28.6243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzI3LjYiTiA3N8KwMjEnMzYuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Modern Fitness Location"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3 justify-center">
              <a
                href="https://maps.google.com/?q=Sector+22+Noida+Gym"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-3"
              >
                <Navigation className="w-4 h-4" />
                {isHindi ? 'दिशा-निर्देश पाएं' : 'Get Directions'}
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-bold text-sm hover:bg-green-600 transition-colors"
                style={{ fontFamily: 'Montserrat' }}
              >
                <FaWhatsapp className="w-4 h-4" />
                {isHindi ? 'व्हाट्सएप' : 'WhatsApp Us'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="section-title text-4xl text-white mb-4">
              {isHindi ? 'अक्सर पूछे जाने वाले' : 'Frequently Asked'} <span className="gradient-text">{isHindi ? 'प्रश्न' : 'Questions'}</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-dark rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/20 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold text-sm pr-4" style={{ fontFamily: 'Montserrat' }}>
                    {isHindi ? faq.qHi : faq.q}
                  </span>
                  <div className="shrink-0">
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-orange-500" />
                      : <ChevronDown className="w-5 h-5 text-gray-400" />
                    }
                  </div>
                </button>
                <div className={`accordion-content ${openFaq === i ? 'open' : ''}`}>
                  <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                    {isHindi ? faq.aHi : faq.a}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
