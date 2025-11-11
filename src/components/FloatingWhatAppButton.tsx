"use client";

import { Button } from "@/components/ui/button";

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    )
  }
  

export function FloatingWhatsAppButton() {
  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-4 right-4 h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg z-50 flex items-center justify-center"
    >
      <a
        href="https://wa.me/2250704353535"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsappIcon className="h-8 w-8" />
      </a>
    </Button>
  );
}
