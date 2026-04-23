import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Eleanor Thorne',
    role: 'Food Critic',
    text: "The Truffle Ribeye was a revelation. L'Ambroisie balances traditional techniques with modern flair in a way that feels both timeless and exciting.",
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Local Patron',
    text: "Favorite spot for anniversary dinners. The atmosphere is warm, the service is impeccable, and the wine list is surprisingly extensive.",
    rating: 5,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Gastronomy Enthusiast',
    text: "The attention to detail in the dessert menu is astounding. The chocolate lava fondant is arguably the best I've ever had.",
    rating: 5,
  },
];

export const Reviews = () => {
  return (
    <section className="py-24 bg-amber-950 text-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
            <span className="text-amber-300 font-semibold tracking-widest uppercase text-sm">Guest Testimonials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Voices of Our Patrons
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-8 h-12 w-12 text-white/10" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg italic mb-8 font-serif leading-relaxed text-amber-50/80">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/40 border border-primary flex items-center justify-center text-sm font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-amber-50">{review.name}</h4>
                  <p className="text-xs text-amber-300/60 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};