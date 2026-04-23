import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Calendar, Users, Clock, Utensils } from 'lucide-react';

export const ReservationSystem = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Reservation request sent! We will confirm your table shortly.');
  };

  return (
    <section id="reservations" className="py-24 bg-amber-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold tracking-widest uppercase text-sm block mb-4">Book Your Experience</span>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
                Reserved for the <span className="italic">Discerning Palate</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Whether it's an intimate dinner for two or a celebratory feast with friends, we ensure every detail is perfection. Please note our weekend tables are highly sought after.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Clock, title: 'Opening Hours', desc: 'Mon-Sun: 12:00 PM - 11:00 PM' },
                  { icon: Utensils, title: 'Fine Dining Attire', desc: 'Smart casual dress code recommended' },
                  { icon: Users, title: 'Group Bookings', desc: 'For parties larger than 12, please call us' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-amber-100 flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl overflow-hidden glass-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="date" type="date" className="pl-10 h-12 bg-white/50" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Select required>
                          <SelectTrigger className="pl-10 h-12 bg-white/50">
                            <SelectValue placeholder="Select Time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="13:00">01:00 PM</SelectItem>
                            <SelectItem value="18:00">06:00 PM</SelectItem>
                            <SelectItem value="19:00">07:00 PM</SelectItem>
                            <SelectItem value="20:00">08:00 PM</SelectItem>
                            <SelectItem value="21:00">09:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Select required defaultValue="2">
                          <SelectTrigger className="pl-10 h-12 bg-white/50">
                            <SelectValue placeholder="Guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                              <SelectItem key={n} value={n.toString()}>{n} {n === 1 ? 'Guest' : 'Guests'}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="h-12 bg-white/50" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="special">Special Requests (Optional)</Label>
                    <Input id="special" placeholder="Allergies, birthday surprise, etc." className="h-12 bg-white/50" />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg">
                    Confirm Reservation
                  </Button>
                  <p className="text-center text-[10px] text-muted-foreground">
                    By booking, you agree to our terms of service and cancellation policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};