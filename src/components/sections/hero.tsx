"use client"

import { PlaceHolderImages } from "@/lib/placeholder-images"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import { useState } from "react"
import "@/app/carousel-fixes.css"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function HeroImage({ image, priority }: { image: (typeof PlaceHolderImages)[number], priority: boolean }) {
  const [imageSrc, setImageSrc] = useState(image.imageUrl);

  return (
    <img
      src={imageSrc}
      alt={image.description}
      data-ai-hint={image.imageHint}
      className="w-full h-full object-cover"
      loading={priority ? "eager" : "lazy"}
      onError={() => {
        console.warn(`Erreur de chargement de l'image principale : ${image.imageUrl}.
Utilisation de l'image de secours.`);
        setImageSrc(`https://placehold.co/1200x800?text=Image+Indisponible`);
      }}
    />
  )
}

export function Hero({ dict }: { dict: any }) {
  const heroImages = PlaceHolderImages.filter((img) => img.id.startsWith("hero-"));
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full relative">
      <Carousel 
        className="w-full hero-carousel"
        plugins={[plugin.current]}
        opts={{ 
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={image.id}>
              {/* Container relatif pour positionner l'overlay et le texte */}
              <div className="w-full relative h-[75vh] md:h-auto">
                <HeroImage image={image} priority={index === 0} />
                
                {/* Overlay gradient pour le contraste du texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                
                {/* Texte centré par-dessus l'image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
                  <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)]">
                    {dict.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                    {dict.subtitle}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Boutons de navigation */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/40 text-white border-white/40 backdrop-blur-sm transition-all duration-200" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/40 text-white border-white/40 backdrop-blur-sm transition-all duration-200" />
      </Carousel>
    </section>
  )
}
