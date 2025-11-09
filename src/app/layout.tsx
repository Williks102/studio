import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { FloatingWhatsAppButton } from "@/components/FloatingWhatAppButton"

export const metadata: Metadata = {
  title: 'Restaurant LeLof',
  description: 'African vibe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        {/* Bouton WhatsApp flottant visible sur toutes les pages */}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
