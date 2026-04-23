import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PartyPopper, Gift, CalendarCheck } from 'lucide-react';

export const SpecialOffers = () => {
  return (
    <section id="offers" className="py-24 bg-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-4">Limited Experiences</span>
            <h2 className="text-4xl font-serif text-foreground">Exquisite Special Offers</h2>
          </div>
          <Button variant="link" className="text-primary font-bold">View all events & offers</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/event-dining-6b6f2420-1776971787652.webp"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Wine Tasting"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 flex flex-col justify-end">
              <Badge className="w-fit bg-amber-400 text-amber-950 mb-4">Tasting Event</Badge>
              <h3 className="text-3xl font-serif text-white mb-4">Summer Solstice Wine Pairing</h3>
              <p className="text-white/80 mb-6">Join us for an exclusive 7-course tasting menu paired with rare vintages from the Loire Valley.</p>
              <Button className="w-fit bg-white text-primary hover:bg-primary hover:text-white">Reserve Your Spot</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/restaurant-interior-e6c670d3-1776971783835.webp"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Midweek Lunch"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 flex flex-col justify-end">
              <Badge className="w-fit bg-accent text-white mb-4">Limited Offer</Badge>
              <h3 className="text-3xl font-serif text-white mb-4">Midweek Gastronomy Lunch</h3>
              <p className="text-white/80 mb-6">Experience a refined 3-course business lunch for a special price. Available Tue-Thu.</p>
              <Button className="w-fit bg-white text-primary hover:bg-primary hover:text-white">Learn More</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const EventBooking = () => {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 rounded-[40px] p-8 md:p-16 border border-primary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <PartyPopper className="h-48 w-48 text-primary" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-4">Private Affairs</span>
              <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-8">Unforgettable Moments, <span className="italic">Perfectly Hosted</span></h2>
              <div className="space-y-6">
                {[
                  { icon: Gift, title: 'Corporate Events', desc: 'Impress clients and colleagues with a tailored culinary experience.' },
                  { icon: CalendarCheck, title: 'Private Celebrations', desc: 'From weddings to milestone birthdays, we make it legendary.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-10 bg-primary hover:bg-primary/90 px-10 h-16 text-lg">Inquire About Events</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/event-dining-6b6f2420-1776971787652.webp"
                className="rounded-3xl h-64 w-full object-cover shadow-lg translate-y-8"
                alt="Event 1"
              />
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/restaurant-interior-e6c670d3-1776971783835.webp"
                className="rounded-3xl h-64 w-full object-cover shadow-lg"
                alt="Event 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};