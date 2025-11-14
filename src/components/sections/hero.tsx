"use client"

import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import { PlaceHolderImages } from "@/lib/placeholder-images"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Hero({ dict }: { dict: any }) {
  const heroImages = PlaceHolderImages.filter((img) => img.id.startsWith("hero-"));
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="relative w-full h-[calc(100vh-5rem)] max-h-[800px] bg-[#F2E7D5] overflow-hidden">
      <Carousel
        className="w-full h-full hero-carousel"
        plugins={[plugin.current]}
        opts={{ 
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-full !ml-0" data-carousel-content>
          {heroImages.map((image, index) => (
            <CarouselItem key={image.id} className="h-full !pl-0 basis-full" data-carousel-item>
              <div className="relative w-full h-full">
                <img
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 pointer-events-none z-10">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]" style={{textShadow: '0 2px 20px rgb(0 0 0 / 80%), 0 0 40px rgb(0 0 0 / 60%)'}}>
            {dict.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" style={{textShadow: '0 2px 15px rgb(0 0 0 / 80%), 0 0 30px rgb(0 0 0 / 60%)'}}>
            {dict.subtitle}
            </p>
        </div>
        
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/40 text-white border-white/40 backdrop-blur-sm transition-all duration-200 z-20" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/40 text-white border-white/40 backdrop-blur-sm transition-all duration-200 z-20" />
      </Carousel>
    </section>
  )
}
