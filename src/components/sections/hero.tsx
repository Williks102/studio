"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Hero() {
  const heroImages = PlaceHolderImages.filter((img) => img.id.startsWith("hero-"))

  return (
    <section className="relative h-[60vh] w-full md:h-[80vh]">
      <Carousel
        className="h-full w-full"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl">
            Le Lof
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Goût, Élégance, Raffinement
          </p>
        </div>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white" />
      </Carousel>
    </section>
  )
}
