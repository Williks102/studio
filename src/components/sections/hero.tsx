"use client"

import Image from "next/image"
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

export function Hero({ dict }: { dict: any }) {
  const heroImages = PlaceHolderImages.filter((img) => img.id.startsWith("hero-"))
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  return (
    <section className="relative h-[60vh] w-full md:h-[80vh]">
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
            <CarouselItem key={index} className="h-full relative">
              <div className="relative w-full h-full bg-gray-800">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                  quality={85}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 pointer-events-none">
          <h1 className="font-headline text-4xl font-bold text-white drop-shadow-lg md:text-6xl">
              {dict.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
            {dict.subtitle}
          </p>
        </div>
        
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white border-white/30" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white border-white/30" />
      </Carousel>
    </section>
  )
}
