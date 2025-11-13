"use client"

import { PlaceHolderImages } from "@/lib/placeholder-images"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import { useState } from "react"

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
    <section className="relative w-full h-[calc(100vh-5rem)] max-h-[800px] bg-[#F2E7D5] overflow-hidden">
      <Carousel
        className="h-full w-full"
        plugins={[plugin.current]}
        opts={{ 
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        {/* Suppression TOTALE des marges négatives - pas de ml-4 ou pl-4 */}
        <CarouselContent className="h-full !ml-0">
          {heroImages.map((image, index) => (
            <CarouselItem key={image.id} className="h-full !pl-0 basis-full">
              <div className="relative w-full h-full">
                <HeroImage image={image} priority={index === 0} />
                {/* Overlay gradient plus foncé pour meilleur contraste du texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Texte avec meilleur contraste et ombres renforcées */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 pointer-events-none z-10">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_20px_rgb(0_0_0_/_80%),_0_0_40px_rgb(0_0_0_/_60%)]">
           {dict.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_15px_rgb(0_0_0_/_80%),_0_0_30px_rgb(0_0_0_/_60%)]">
            {dict.subtitle}
          </p>
        </div>
        
        {/* Boutons de navigation avec meilleur contraste */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/40 text-white border-white/40 backdrop-blur-sm transition-all duration-200 z-20" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/40 text-white border-white/40 backdrop-blur-sm transition-all duration-200 z-20" />
      </Carousel>
    </section>
  )
}
