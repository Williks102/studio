import type {Metadata} from 'next';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster"
import { i18n, type Locale } from "@/i18n-config"
import { FloatingWhatsAppButton } from '@/components/FloatingWhatAppButton';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: 'Restaurant Le LOF',
  description: 'African vibe',
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: { lang: Locale };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/db4hmbdv3/image/upload/v1761669062/image_ae6017a6-4978-4511-9ea7-7accf2bf48_dfksuz.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
