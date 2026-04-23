import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';

const CHEFS = [
  {
    name: 'Julian Vane',
    role: 'Executive Chef',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/executive-chef-b2931745-1776971783336.webp',
    bio: '2 Michelin stars background, passion for seasonal foraging.',
  },
  {
    name: 'Elena Rossi',
    role: 'Head of Pastry',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/executive-chef-b2931745-1776971783536.webp',
    bio: 'Artisan chocolatier specializing in avant-garde dessert design.',
  }
];

export const Chefs = () => {
  return (
    <section id="chefs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-4">The Culinary Artists</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Masters of the Kitchen</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {CHEFS.map((chef, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="border-none shadow-none group">
                <div className="relative h-[400px] overflow-hidden rounded-2xl mb-6">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-4">
                      <Instagram className="h-6 w-6 text-white cursor-pointer hover:text-amber-400" />
                      <Twitter className="h-6 w-6 text-white cursor-pointer hover:text-amber-400" />
                      <Facebook className="h-6 w-6 text-white cursor-pointer hover:text-amber-400" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-0 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{chef.name}</h3>
                  <p className="text-primary font-medium mb-4 uppercase text-xs tracking-tighter">{chef.role}</p>
                  <p className="text-muted-foreground italic leading-relaxed px-4">"{chef.bio}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Location = () => {
  return (
    <section id="location" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-8">Visit Us</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Our Address</h4>
                  <p className="text-muted-foreground">123 Culinary Avenue, Gourmet District<br />London, EC1A 4JQ</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Reservations</h4>
                  <p className="text-muted-foreground">+44 (0) 20 7946 0123</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">General Inquiries</h4>
                  <p className="text-muted-foreground">hello@lambroisie.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">Hours</h4>
                  <p className="text-muted-foreground">Lunch: 12:00 PM - 3:00 PM<br />Dinner: 6:00 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[450px] rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-amber-100 flex items-center justify-center">
              <img
                 src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d6801274-db5b-445f-9213-0c2726eb06af/restaurant-interior-e6c670d3-1776971783835.webp"
                 className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                 alt="Map background"
              />
              <div className="relative text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-amber-200 mx-4">
                <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                <p className="text-sm text-muted-foreground mb-4">Click below to open directions in Google Maps</p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};