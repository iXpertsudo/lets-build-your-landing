import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/Menu';
import { ReservationSystem } from './components/ReservationSystem';
import { SpecialOffers, EventBooking } from './components/SpecialOffers';
import { Chefs, Location } from './components/Chefs';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-950 font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <SpecialOffers />
        <MenuSection />
        <ReservationSystem />
        <Reviews />
        <Chefs />
        <EventBooking />
        <Location />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;