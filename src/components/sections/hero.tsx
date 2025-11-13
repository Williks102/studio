"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Autoplay from "embla-carousel-autoplay"
import * as React from "react"
import { useState, useEffect } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Hero({ dict }: { dict: any }) {
  // State pour suivre les images chargées
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [heroImages, setHeroImages] = useState<typeof PlaceHolderImages>([]);
  const [hasError, setHasError] = useState(false);
  
  // Valeurs de secours en cas d'erreur avec les images Cloudinary
  const fallbackImages = [
    {
      id: "fallback-1",
      description: "Image de secours pour le restaurant",
      imageUrl: "https://placehold.co/1200x800?text=Restaurant+Le+Lof",
      imageHint: "restaurant placeholder"
    },
    {
      id: "fallback-2",
      description: "Image de secours pour le restaurant",
      imageUrl: "https://placehold.co/1200x800?text=Cuisine+Africaine",
      imageHint: "restaurant placeholder"
    }
  ];
  
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  // Effet pour charger et vérifier les images
  useEffect(() => {
    // Filtrer les images héro
    const filteredImages = PlaceHolderImages.filter((img) => img.id.startsWith("hero-"));
    
    // Si aucune image n'est trouvée, utiliser les images de secours
    if (filteredImages.length === 0) {
      console.warn("Aucune image hero trouvée, utilisation des images de secours");
      setHeroImages(fallbackImages);
      setHasError(true);
      setImagesLoaded(true);
      return;
    }
    
    // Vérifier que toutes les images peuvent être chargées
    let loadedCount = 0;
    let errorCount = 0;
    
    filteredImages.forEach(image => {
      // Correction: créer l'élément image avec document.createElement
      const img = document.createElement("img");
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount + errorCount === filteredImages.length) {
          setImagesLoaded(true);
        }
      };
      
      img.onerror = () => {
        console.error(`Erreur de chargement d'image: ${image.id}, URL: ${image.imageUrl}`);
        errorCount++;
        if (loadedCount + errorCount === filteredImages.length) {
          if (errorCount === loadedCount + errorCount) { // Check if all images failed
            // Toutes les images ont échoué, utiliser les images de secours
            setHeroImages(fallbackImages);
            setHasError(true);
          }
          setImagesLoaded(true);
        }
      };
      
      img.src = image.imageUrl;
    });
    
    // Définir les images héro
    if (errorCount < filteredImages.length) {
      setHeroImages(filteredImages);
    }
  }, []);

  // Afficher un état de chargement si les images ne sont pas encore prêtes
  if (!imagesLoaded) {
    return (
      <section className="relative w-full h-[calc(100vh-5rem)] max-h-[800px] bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-white border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] mb-4"></div>
          <p className="text-lg">Chargement des images...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[calc(100vh-5rem)] max-h-[800px]">
      {hasError && (
        <div className="absolute top-0 left-0 z-10 bg-yellow-500/80 text-white px-4 py-2 text-sm">
          Attention: Certaines images n'ont pas pu être chargées. Images de secours affichées.
        </div>
      )}
      
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
            <CarouselItem key={image.id} className="h-full p-0">
              <div className="relative w-full h-full bg-gray-900">
                <Image
                  fill
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                  onError={(e) => {
                    console.error(`Erreur d'affichage Next.js Image: ${image.id}`);
                    // If an image fails, we could swap it for a fallback, but the initial check should prevent this.
                  }}
                />
                {/* Overlay avec gradient pour une meilleure visibilité du texte */}
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
