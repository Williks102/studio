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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
           <Image
            src="https://res.cloudinary.com/db4hmbdv3/image/upload/v1761669062/image_ae6017a6-4978-4511-9ea7-7accf2bf4834_dfksuz.png"
            alt="Le Lof Logo"
            width={240}
            height={120}
            className="h-28 w-auto object-contain drop-shadow-lg md:h-32"
            priority
          />
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
            Goût, Élégance, Raffinement
          </p>
          <Button asChild size="lg" className="mt-6 bg-green-500 hover:bg-green-600 text-white">
            <a href="https://wa.me/2250102030405" target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="mr-2 h-6 w-6" />
              Contactez-nous sur WhatsApp
            </a>
          </Button>
        </div>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white" />
      </Carousel>
    </section>
  )
}
