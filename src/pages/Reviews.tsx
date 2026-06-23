import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Award, Shield, Users } from 'lucide-react';
import { fadeUp, stagger } from '../utils/animations';

interface ReviewsProps { isHindi: boolean; }

const reviews = [
  { name: 'Rahul S.', initials: 'RS', rating: 5, text: 'Really cool place to workout! The equipment is top-notch and the trainers are so professional and motivating. Been coming here for 3 months and already seeing amazing results!', time: '3 months ago', tags: ['Great Equipment', 'Professional Trainers'] },
  { name: 'Priya M.', initials: 'PM', rating: 5, text: 'Nice experience, modern equipment, certified trainer, nice environment. The gym is always clean and well-maintained. Highly recommend to anyone looking for a quality gym in Noida.', time: '5 months ago', tags: ['Certified Trainers', 'Modern Equipment'] },
  { name: 'Amit K.', initials: 'AK', rating: 5, text: 'Friendly nature, good vibes, positive ambience. The trainers really motivate you to push your limits. Best gym in Sector 22! The staff is very welcoming and supportive.', time: '2 months ago', tags: ['Good Environment', 'Friendly Staff'] },
  { name: 'Sneha R.', initials: 'SR', rating: 5, text: 'Excellent gym with all modern facilities. The staff is very supportive and the environment is clean and motivating. Lost 8kg in just 3 months with their personalized plan!', time: '1 month ago', tags: ['Supportive Coach', 'Clean Facility'] },
  { name: 'Vikram J.', initials: 'VJ', rating: 5, text: 'Kind and supportive coaches. I lost 12kg in 4 months with their personalized plan. Truly life-changing experience! The trainers are very knowledgeable and certified.', time: '4 months ago', tags: ['Kind Trainer', 'Weight Loss'] },
  { name: 'Anita P.', initials: 'AP', rating: 5, text: 'The yoga classes here are amazing! The instructor is very patient and professional. Great positive energy throughout the gym. Definitely worth the membership!', time: '6 months ago', tags: ['Great Classes', 'Positive Vibes'] },
  { name: 'Deepak M.', initials: 'DM', rating: 5, text: 'Modern equipment, great trainers, and a wonderful atmosphere. The certified trainer helped me create a customized workout plan that actually works!', time: '2 months ago', tags: ['Certified Trainer', 'Customized Plan'] },
  { name: 'Kavya S.', initials: 'KS', rating: 4, text: 'Really good gym with excellent facilities. The cardio zone has great equipment. Trainers are knowledgeable and helpful. Would definitely recommend!', time: '3 months ago', tags: ['Good Facilities', 'Knowledgeable'] },
  { name: 'Rohit B.', initials: 'RB', rating: 5, text: 'Best gym in Noida Sector 22! The trainers are certified professionals who really understand fitness. Great equipment, clean environment, and amazing staff!', time: '5 months ago', tags: ['Best Gym', 'Certified'] },
];

const ratingBreakdown = [
  { stars: 5, count: 89, percentage: 86 },
  { stars: 4, count: 10, percentage: 10 },
  { stars: 3, count: 3, percentage: 3 },
  { stars: 2, count: 1, percentage: 1 },
  { stars: 1, count: 0, percentage: 0 },
];

const highlights = [
  { tag: 'Modern Equipment', count: 7, color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  { tag: 'Certified Trainer', count: 4, color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { tag: 'Good Environment', count: 5, color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  { tag: 'Kind Trainer', count: 2, color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { tag: 'Supportive Coach', count: 2, color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  { tag: 'Friendly Staff', count: 4, color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
  { tag: 'Clean Facility', count: 3, color: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
  { tag: 'Positive Vibes', count: 5, color: 'bg-red-500/20 text-red-400 border-red-500/30' },
];

const trustBadges = [
  { icon: <Shield className="w-6 h-6" />, label: 'Google Verified', sub: 'Reviews' },
  { icon: <Star className="w-6 h-6" />, label: '4.9★ Rating', sub: 'Average Score' },
  { icon: <Users className="w-6 h-6" />, label: '500+ Members', sub: 'Active Members' },
  { icon: <Award className="w-6 h-6" />, label: '100% Certified', sub: 'Trainers' },
];

const Reviews: React.FC<ReviewsProps> = ({ isHindi }) => {
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 0, text: '' });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewForm.rating > 0 && reviewForm.text && reviewForm.name) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] overflow-hidden">
        {/* Star particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-500"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, fontSize: `${Math.random() * 16 + 8}px`, opacity: 0.3 }}
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2 }}
            >★</motion.div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="badge-premium inline-block mb-6">{isHindi ? 'समीक्षाएं' : 'Reviews'}</div>
            <h1 className="section-title text-5xl md:text-6xl text-white mb-4 text-3d">
              {isHindi ? 'हमारे सदस्य क्या' : 'What Our Members'}
              <br />
              <span className="gradient-text">{isHindi ? 'कहते हैं' : 'Say'}</span>
            </h1>
            <div className="section-divider mb-8" />

            {/* Overall Rating */}
            <div className="inline-flex items-center gap-6 glass-dark rounded-2xl px-10 py-6 border border-yellow-500/20">
              <div>
                <div className="text-7xl font-black text-white" style={{ fontFamily: 'Bebas Neue' }}>4.9</div>
                <div className="flex items-center gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <div className="text-gray-400 text-sm mt-1">103 Google Reviews</div>
              </div>
              <div className="w-px h-20 bg-white/10" />
              <div className="text-left space-y-1">
                {ratingBreakdown.slice(0, 3).map((r) => (
                  <div key={r.stars} className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xs">{r.stars}★</span>
                    <div className="w-28 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${r.percentage}%` }} />
                    </div>
                    <span className="text-gray-400 text-xs">{r.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS TAG CLOUD */}
      <section className="py-12 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-8">
            <h2 className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat' }}>
              {isHindi ? 'अक्सर उल्लेखित' : 'Frequently Mentioned'}
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`px-4 py-2 rounded-full border text-sm font-semibold ${h.color} flex items-center gap-2`}
              >
                {h.tag}
                <span className="text-xs opacity-70">×{h.count}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RATING BREAKDOWN */}
      <section className="py-12 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="section-title text-3xl text-white mb-4">
              {isHindi ? 'रेटिंग' : 'Rating'} <span className="gradient-text">{isHindi ? 'विवरण' : 'Breakdown'}</span>
            </h2>
          </motion.div>
          <div className="max-w-xl mx-auto space-y-4">
            {ratingBreakdown.map((r, i) => (
              <motion.div
                key={r.stars}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-1 w-16 shrink-0">
                  <span className="text-white font-bold">{r.stars}</span>
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </div>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${r.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                  />
                </div>
                <div className="w-16 text-right">
                  <span className="text-gray-400 text-sm">{r.count}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="section-title text-4xl text-white mb-4">
              {isHindi ? 'फीचर्ड' : 'Featured'} <span className="gradient-text">{isHindi ? 'समीक्षाएं' : 'Reviews'}</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review, i) => (
              <motion.div key={i} variants={fadeUp} className="review-card rounded-2xl p-6 relative group">
                <div className="absolute top-4 right-4 opacity-20 text-4xl">"</div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{review.text}"</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {review.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-xs border border-orange-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center font-bold text-white text-sm">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{review.name}</div>
                    <div className="text-gray-500 text-xs">{review.time}</div>
                  </div>
                  <div className="ml-auto">
                    <ThumbsUp className="w-4 h-4 text-gray-600 group-hover:text-orange-500 transition-colors cursor-pointer" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-12 bg-gradient-to-r from-orange-600/20 via-[#1A1A1A] to-orange-600/20 border-y border-orange-500/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 glow-orange">
                  {badge.icon}
                </div>
                <div className="text-white font-bold" style={{ fontFamily: 'Montserrat' }}>{badge.label}</div>
                <div className="text-gray-400 text-xs">{badge.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WRITE A REVIEW */}
      <section className="py-20 bg-[#0F0F0F]">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="section-title text-3xl md:text-4xl text-white mb-3">
              {isHindi ? 'समीक्षा लिखें' : 'Write a'} <span className="gradient-text">{isHindi ? '' : 'Review'}</span>
            </h2>
            <p className="text-gray-400">{isHindi ? 'अपना अनुभव साझा करें।' : 'Share your Modern Fitness experience with others.'}</p>
            <div className="section-divider mt-4" />
          </motion.div>

          {!submitted ? (
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="glass-dark rounded-2xl p-8 border border-orange-500/20"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">
                    {isHindi ? 'आपका नाम' : 'Your Name'} *
                  </label>
                  <input
                    type="text" required
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    placeholder={isHindi ? 'नाम दर्ज करें' : 'Enter your name'}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-2 block">
                    {isHindi ? 'रेटिंग' : 'Rating'} *
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                        className="text-3xl transition-transform hover:scale-110"
                      >
                        <Star className={`w-8 h-8 transition-colors ${
                          star <= (hoverRating || reviewForm.rating)
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-600'
                        }`} />
                      </button>
                    ))}
                    {reviewForm.rating > 0 && (
                      <span className="text-yellow-500 font-bold ml-2">{reviewForm.rating}/5</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-wider mb-1 block">
                    {isHindi ? 'आपकी समीक्षा' : 'Your Review'} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={reviewForm.text}
                    onChange={(e) => setReviewForm({ ...reviewForm, text: e.target.value })}
                    placeholder={isHindi ? 'अपना अनुभव साझा करें...' : 'Share your experience at Modern Fitness...'}
                    className="form-input resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  ⭐ {isHindi ? 'समीक्षा सबमिट करें' : 'Submit Review'}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-dark rounded-2xl p-8 text-center border border-green-500/30"
            >
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'Montserrat' }}>
                {isHindi ? 'धन्यवाद!' : 'Thank You!'}
              </h3>
              <p className="text-gray-400">
                {isHindi ? 'आपकी समीक्षा सबमिट हो गई है!' : 'Your review has been submitted successfully!'}
              </p>
              <div className="flex justify-center gap-1 mt-4">
                {[...Array(reviewForm.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
