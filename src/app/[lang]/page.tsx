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
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

type HomePageProps = {
  params: { lang: Locale };
};

export default async function Home(props: HomePageProps) {
  const { params } = props;
  const { lang } = params;
  const dict = await getDictionary(lang);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header dict={{...dict.header, bookingModal: dict.bookingModal}} />
      <main className="flex-1">
        <Hero dict={dict.hero} />
        <About dict={dict.about} />
        <Menu dict={dict.menu} />
        <Formulas dict={dict.formulas} />
        <Updates dict={dict.updates} />
        <AfricanVibes dict={dict.africanVibes} />
        <Quote dict={dict.quote} />
      </main>
      <Footer dict={dict.footer} />
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-sm md:hidden">
        <BookingModal dict={dict.bookingModal} />
      </div>
    </div>
  );
}
