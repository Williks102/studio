import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { vibes } from "@/lib/vibes"

export function AfricanVibes() {
  const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id)

  return (
    <section id="vibes" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            African Vibes
          </h2>
        </div>
        <div className="space-y-16">
          {vibes.map((vibe, index) => {
            const image = getImage(vibe.imageId)
            return (
              <div key={index} className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
                <div className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
                  <h3 className="font-headline text-2xl font-semibold text-primary">{vibe.title}</h3>
                  <p className="mt-4 text-foreground/80">{vibe.description}</p>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-2 md:order-1"}>
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={vibe.title}
                      data-ai-hint={image.imageHint}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover shadow-lg"
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
