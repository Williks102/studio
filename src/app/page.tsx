import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Menu } from '@/components/sections/menu';
import { Formulas } from '@/components/sections/formulas';
import { Updates } from '@/components/sections/updates';
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
        <Updates />
        <AfricanVibes />
        <Quote />
      </main>
      <Footer />
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-sm md:hidden">
        <BookingModal />
      </div>
    </div>
  );
}
