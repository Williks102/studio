"use client"

import Image from "next/image"
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
    <Image
      fill
      src={imageSrc}
      alt={image.description}
      data-ai-hint={image.imageHint}
      className="w-full h-full object-cover"
      priority={priority}
      onError={() => {
        console.warn(`Erreur de chargement de l'image principale : ${image.imageUrl}. Utilisation de l'image de secours.`);
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
    <section className="relative w-full h-[calc(100vh-5rem)] max-h-[800px] bg-background">
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
            <CarouselItem key={image.id} className="h-full">
              <div className="relative w-full h-full">
                <HeroImage image={image} priority={index === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 pointer-events-none">
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_10px_rgb(0_0_0_/_40%)]">
           {dict.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_5px_rgb(0_0_0_/_40%)]">
            {dict.subtitle}
          </p>
        </div>
        
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-200" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-200" />
      </Carousel>
    </section>
  )
}
