import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Zap, ArrowRight, CreditCard, Smartphone, IndianRupee } from 'lucide-react';
import { fadeUp, stagger } from '../utils/animations';

interface PlansProps { isHindi: boolean; }

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    nameHi: 'बेसिक',
    medal: '🥉',
    price: 2999,
    period: 'month',
    featured: false,
    color: 'from-gray-500 to-gray-700',
    borderColor: 'border-gray-600/30',
    features: [
      { text: 'Gym access (6 AM – 10 PM)', included: true },
      { text: 'Basic equipment usage', included: true },
      { text: 'Locker facility', included: true },
      { text: 'Shower & changing room', included: true },
      { text: 'Personal trainer sessions', included: false },
      { text: 'Group classes access', included: false },
      { text: 'Diet consultation', included: false },
      { text: 'Fitness assessment', included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    nameHi: 'प्रीमियम',
    medal: '🥈',
    price: 4999,
    period: 'month',
    featured: true,
    color: 'from-orange-500 to-red-600',
    borderColor: 'border-orange-500',
    features: [
      { text: 'All Basic features', included: true },
      { text: '12 Personal training sessions', included: true },
      { text: 'Group classes access', included: true },
      { text: 'Basic diet plan', included: true },
      { text: 'Fitness assessment', included: true },
      { text: 'Steam & sauna access', included: true },
      { text: 'Advanced diet consultation', included: false },
      { text: 'Exclusive trainer assignment', included: false },
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum',
    nameHi: 'प्लेटिनम',
    medal: '🥇',
    price: 7999,
    period: 'month',
    featured: false,
    color: 'from-yellow-500 to-orange-500',
    borderColor: 'border-yellow-500/40',
    features: [
      { text: 'All Premium features', included: true },
      { text: 'Unlimited personal training', included: true },
      { text: 'Advanced diet consultation', included: true },
      { text: 'Body composition analysis', included: true },
      { text: 'Exclusive trainer assignment', included: true },
      { text: 'Supplement guidance', included: true },
      { text: 'Priority support & booking', included: true },
      { text: 'Wellness assessments', included: true },
    ],
  },
];

const durations = [
  { label: 'Monthly', labelHi: 'मासिक', value: 1, discount: 0 },
  { label: 'Quarterly', labelHi: 'त्रैमासिक', value: 3, discount: 10 },
  { label: 'Half-Yearly', labelHi: 'छमाही', value: 6, discount: 15 },
  { label: 'Yearly', labelHi: 'वार्षिक', value: 12, discount: 20 },
];

const corporateFeatures = [
  'Minimum 5 members',
  '20% group discount',
  'Flexible timing options',
  'Corporate wellness programs',
  'Monthly progress reports',
  'Priority customer support',
];

const paymentMethods = [
  { icon: <IndianRupee className="w-5 h-5" />, label: 'Cash' },
  { icon: <CreditCard className="w-5 h-5" />, label: 'Card' },
  { icon: <Smartphone className="w-5 h-5" />, label: 'UPI' },
  { icon: <Zap className="w-5 h-5" />, label: 'Online' },
];

const Plans: React.FC<PlansProps> = ({ isHindi }) => {
  const [selectedDuration, setSelectedDuration] = useState(0);
  const [trialForm, setTrialForm] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const getPrice = (basePrice: number) => {
    const dur = durations[selectedDuration];
    const total = basePrice * dur.value;
    const discounted = total * (1 - dur.discount / 100);
    return { total, discounted, savings: total - discounted };
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] overflow-hidden">
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-20 text-6xl opacity-20">💎</motion.div>
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-20 text-5xl opacity-20">🏆</motion.div>

        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-premium inline-block mb-6">{isHindi ? 'सदस्यता योजनाएं' : 'Membership Plans'}</div>
            <h1 className="section-title text-5xl md:text-7xl text-white mb-4 text-3d">
              {isHindi ? 'अपनी योजना' : 'Choose Your'} <span className="gradient-text">{isHindi ? 'चुनें' : 'Plan'}</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {isHindi
                ? 'हमारे लचीले सदस्यता योजनाओं में से वह चुनें जो आपकी जरूरतों और बजट के अनुकूल हो।'
                : 'Flexible membership options designed to fit your lifestyle, goals, and budget. Start with a free trial!'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* DURATION SELECTOR */}
      <section className="py-10 bg-[#0F0F0F]">
        <div className="max-w-xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {durations.map((dur, i) => (
              <button
                key={dur.value}
                onClick={() => setSelectedDuration(i)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedDuration === i
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'glass-dark text-gray-400 hover:text-white'
                }`}
                style={{ fontFamily: 'Montserrat' }}
              >
                {isHindi ? dur.labelHi : dur.label}
                {dur.discount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full font-black">
                    -{dur.discount}%
                  </span>
                )}
              </button>
            ))}
          </div>
          {selectedDuration > 0 && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-400 text-sm mt-3"
            >
              🎉 You save {durations[selectedDuration].discount}% with this plan!
            </motion.p>
          )}
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-20 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan) => {
              const pricing = getPrice(plan.price);
              return (
                <motion.div
                  key={plan.id}
                  variants={fadeUp}
                  className={`plan-card rounded-2xl p-8 relative ${plan.featured ? 'featured' : ''}`}
                >
                  {plan.featured && (
                    <div className="ribbon">⭐ Most Popular</div>
                  )}

                  <div className="mb-6">
                    <div className="text-4xl mb-3">{plan.medal}</div>
                    <h3 className={`text-2xl font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-1`}
                      style={{ fontFamily: 'Montserrat' }}>
                      {isHindi ? plan.nameHi : plan.name}
                    </h3>
                    <div className="flex items-end gap-2 mt-3">
                      {selectedDuration > 0 && (
                        <div className="text-gray-500 line-through text-lg">₹{pricing.total.toLocaleString()}</div>
                      )}
                      <div>
                        <span className="text-4xl font-black text-white" style={{ fontFamily: 'Bebas Neue' }}>
                          ₹{Math.round(pricing.discounted).toLocaleString()}
                        </span>
                        <span className="text-gray-400 text-sm ml-1">
                          / {durations[selectedDuration].value > 1 ? `${durations[selectedDuration].value} months` : 'month'}
                        </span>
                      </div>
                    </div>
                    {selectedDuration > 0 && pricing.savings > 0 && (
                      <div className="text-green-400 text-sm font-bold mt-1">
                        Save ₹{Math.round(pricing.savings).toLocaleString()}!
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        {feature.included ? (
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-gray-600 shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-200' : 'text-gray-600 line-through'}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block text-center font-black py-3 rounded-xl transition-all duration-300 ${
                      plan.featured
                        ? 'btn-primary pulse-glow'
                        : 'border border-orange-500/50 text-orange-500 hover:bg-orange-500/10'
                    }`}
                    style={{ fontFamily: 'Montserrat', textDecoration: 'none', padding: '14px' }}
                  >
                    {isHindi ? 'अभी जुड़ें' : 'Join Now'}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CORPORATE PACKAGES */}
      <section className="py-16 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="glass-dark rounded-2xl p-8 md:p-12 border border-orange-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="badge-premium inline-block mb-4">{isHindi ? 'कॉर्पोरेट' : 'Corporate'}</div>
                <h2 className="section-title text-3xl md:text-4xl text-white mb-4">
                  {isHindi ? 'कॉर्पोरेट' : 'Corporate'} <span className="gradient-text">{isHindi ? 'पैकेज' : 'Package'}</span>
                </h2>
                <p className="text-gray-400 mb-6">
                  {isHindi
                    ? 'अपनी टीम के लिए विशेष छूट और लाभ के साथ कॉर्पोरेट सदस्यता।'
                    : 'Special bulk membership packages for companies with exclusive discounts and benefits for your team.'}
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  {isHindi ? 'संपर्क करें' : 'Get a Quote'} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div>
                <ul className="space-y-3">
                  {corporateFeatures.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 shrink-0" />
                      <span className="text-gray-300">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FREE TRIAL FORM */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-lg mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-6xl mb-4">🎯</motion.div>
            <h2 className="section-title text-4xl text-white mb-3">
              {isHindi ? '3 दिन' : '3 Days'} <span className="gradient-text">{isHindi ? 'फ्री ट्रायल' : 'FREE Trial'}</span>
            </h2>
            <p className="text-gray-400">{isHindi ? 'कोई क्रेडिट कार्ड नहीं। कोई छिपी फीस नहीं।' : 'No credit card required. No hidden fees.'}</p>
          </motion.div>

          {!submitted ? (
            <motion.form
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              onSubmit={handleTrialSubmit}
              className="glass-dark rounded-2xl p-8 space-y-4 border border-orange-500/20"
            >
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">
                  {isHindi ? 'आपका नाम' : 'Your Name'} *
                </label>
                <input
                  type="text" required
                  value={trialForm.name}
                  onChange={(e) => setTrialForm({ ...trialForm, name: e.target.value })}
                  placeholder={isHindi ? 'पूरा नाम दर्ज करें' : 'Enter your full name'}
                  className="form-input"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">
                  {isHindi ? 'फ़ोन नंबर' : 'Phone Number'} *
                </label>
                <input
                  type="tel" required
                  value={trialForm.phone}
                  onChange={(e) => setTrialForm({ ...trialForm, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="form-input"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">
                  {isHindi ? 'ईमेल' : 'Email Address'}
                </label>
                <input
                  type="email"
                  value={trialForm.email}
                  onChange={(e) => setTrialForm({ ...trialForm, email: e.target.value })}
                  placeholder="email@example.com"
                  className="form-input"
                />
              </div>
              <button type="submit" className="btn-primary w-full mt-2">
                🎯 {isHindi ? 'फ्री ट्रायल क्लेम करें' : 'Claim Free Trial'}
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-dark rounded-2xl p-8 text-center border border-green-500/30"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
                {isHindi ? 'धन्यवाद!' : 'Thank You!'}
              </h3>
              <p className="text-gray-400">
                {isHindi
                  ? 'हम जल्द ही आपसे संपर्क करेंगे। आपका फ्री ट्रायल कन्फर्म हो गया है!'
                  : 'We\'ll contact you shortly to confirm your free trial. Welcome to Modern Fitness!'}
              </p>
              <div className="mt-4 text-green-500 font-semibold">✓ {isHindi ? 'आवेदन प्राप्त हुआ' : 'Application Received'}</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* PAYMENT OPTIONS */}
      <section className="py-12 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-black text-white" style={{ fontFamily: 'Montserrat' }}>
              {isHindi ? 'भुगतान विकल्प' : 'Payment Options'}
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {paymentMethods.map((method) => (
              <div key={method.label} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 glass-dark rounded-xl flex items-center justify-center text-orange-500 border border-orange-500/20">
                  {method.icon}
                </div>
                <span className="text-gray-400 text-sm">{method.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
              💳 EMI options available | No extra charges
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
