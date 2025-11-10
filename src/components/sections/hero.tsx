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

export function Hero() {
  const heroImages = PlaceHolderImages.filter((img) => img.id.startsWith("hero-"))
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section className="relative w-full h-[calc(100vh-5rem)] max-h-[800px]">
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
                <img
                  src={image.imageUrl}
                  alt={image.description}
                  className="w-full h-full object-cover"
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
           Restaurant Lelof
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-lg">
            African vibes
          </p>
        </div>
        
        {/* Navigation améliorée */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-200" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-200" />
      </Carousel>
    </section>
  )
}