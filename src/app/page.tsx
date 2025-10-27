import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Menu } from '@/components/sections/menu';
import { Formulas } from '@/components/sections/formulas';
import { AfricanVibes } from '@/components/sections/african-vibes';
import { Quote } from '@/components/sections/quote';
import { BookingModal } from '@/components/modals/booking-modal';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Formulas />
        <AfricanVibes />
        <Quote />
      </main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <BookingModal />
      </div>
    </div>
  );
}
