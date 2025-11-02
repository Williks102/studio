"use client"

import { PlaceHolderImages } from "@/lib/placeholder-images"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"

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

export function Hero() {
  const heroImages = PlaceHolderImages.filter((img) => img.id.startsWith("hero-"))
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section className="relative w-full">
      {/* SOLUTION 2: Utiliser aspect-ratio pour maintenir les proportions */}
      {/* Ratio 16:9 pour un format cinématographique */}
      <div className="w-full aspect-[16/9] max-h-[80vh]">
        <Carousel
          className="h-full w-full"
          plugins={[plugin.current]}
          opts={{ 
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full p-0">
                <div className="relative w-full h-full bg-gray-900">
                  {/* object-cover: remplit le conteneur en coupant si nécessaire */}
                  {/* object-contain: affiche l'image entière avec des barres noires si nécessaire */}
                  <img
                    src={image.imageUrl}
                    alt={image.description}
                    className="w-full h-full object-cover" // ou object-contain selon votre préférence
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  
                  {/* Overlay sombre pour améliorer la lisibilité */}
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Contenu superposé */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 pointer-events-none">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl">
              Le Lof
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-lg">
              Goût, élégance, raffinement.
            </p>
            <Button asChild size="lg" className="mt-6 bg-green-500 hover:bg-green-600 text-white pointer-events-auto shadow-xl">
              <a href="https://wa.me/2250704353535" target="_blank" rel="noopener noreferrer">
                <WhatsappIcon className="mr-2 h-6 w-6" />
                Contactez-nous sur WhatsApp
              </a>
            </Button>
          </div>
          
          {/* Navigation améliorée */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-200" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-200" />
        </Carousel>
      </div>
    </section>
  )
}
