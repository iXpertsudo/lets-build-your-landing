import React from 'react';
import { UtensilsCrossed, Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-amber-950 text-amber-50/80 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
              <span className="text-2xl font-serif font-bold text-white">L'Ambroisie</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Redefining the art of gastronomy through sustainable sourcing, artisanal techniques, and a commitment to seasonal excellence since 1994.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">The Menu</a></li>
              <li><a href="#offers" className="hover:text-amber-400 transition-colors">Special Offers</a></li>
              <li><a href="#reservations" className="hover:text-amber-400 transition-colors">Book a Table</a></li>
              <li><a href="#events" className="hover:text-amber-400 transition-colors">Private Events</a></li>
              <li><a href="#chefs" className="hover:text-amber-400 transition-colors">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Dining Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Thu</span>
                <span className="text-white">12 PM - 10 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Fri - Sat</span>
                <span className="text-white">12 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span className="text-white">11 AM - 9 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Holiday Hours</span>
                <span className="text-white italic">See Events</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-sm mb-6">Join our culinary circle for exclusive offers and seasonal menu previews.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs">© 2024 L'Ambroisie Gastronomy Group. All rights reserved.</p>
          <div className="flex gap-8 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute right-8 bottom-8 h-12 w-12 bg-primary rounded-full flex items-center justify-center text-white shadow-xl hover:-translate-y-1 transition-all"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
};