
"use client"
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

export function Gallery({ dict }: { dict: any }) {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.description}
          </p>
        </div>

        <Dialog>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
            {galleryImages.map((image) => (
              <DialogTrigger key={image.id} asChild onClick={() => setSelectedImage(image.imageUrl)}>
                <div className="relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-105">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </DialogTrigger>
            ))}
          </div>
          {selectedImage && (
            <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                <Image
                    src={selectedImage}
                    alt="Image en gros plan"
                    width={1200}
                    height={800}
                    className="rounded-lg object-contain w-full h-auto"
                />
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
