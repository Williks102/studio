import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Coffee, Utensils, Wine, Sandwich } from "lucide-react"

const menuData = {
  breakfast: [
    { name: "Symphonie Matinale", imageId: "menu-breakfast-1" },
    { name: "Douceur Exotique", imageId: "menu-breakfast-2" },
  ],
  lunch: [
    { name: "Poisson Braisé Signature", imageId: "menu-lunch-1" },
    { name: "Riz Jolof Royal", imageId: "menu-lunch-2" },
  ],
  dinner: [
    { name: "Tagine d'Agneau Confie", imageId: "menu-dinner-1" },
    { name: "Brochettes de Boeuf Épicées", imageId: "menu-dinner-2" },
  ],
  drinks: [
    { name: "Cocktail 'Le Coucher du Soleil'", imageId: "menu-drinks-1" },
    { name: "Thé à la Menthe Traditionnel", imageId: "menu-drinks-2" },
  ],
}

export function Menu() {
  const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id)

  return (
    <section id="menu" className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Découvrez Notre Menu
          </h2>
        </div>
        <Tabs defaultValue="lunch" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="breakfast" className="py-3 text-sm flex gap-2"><Coffee size={16}/>Petit Déjeuner</TabsTrigger>
            <TabsTrigger value="lunch" className="py-3 text-sm flex gap-2"><Utensils size={16}/>Déjeuner</TabsTrigger>
            <TabsTrigger value="dinner" className="py-3 text-sm flex gap-2"><Sandwich size={16}/>Dîner</TabsTrigger>
            <TabsTrigger value="drinks" className="py-3 text-sm flex gap-2"><Wine size={16}/>Boissons</TabsTrigger>
          </TabsList>
          
          <TabsContent value="breakfast" className="mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {menuData.breakfast.map((item, index) => {
                const image = getImage(item.imageId)
                return (
                  <Card key={index} className="overflow-hidden transition-transform hover:scale-105">
                    <CardHeader className="p-0">
                      {image && (
                         <div className="aspect-w-4 aspect-h-3">
                            <Image
                            src={image.imageUrl}
                            alt={item.name}
                            data-ai-hint={image.imageHint}
                            width={400}
                            height={300}
                            className="object-cover w-full h-full"
                            />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{item.name}</h3>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="lunch" className="mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {menuData.lunch.map((item, index) => {
                const image = getImage(item.imageId)
                return (
                  <Card key={index} className="overflow-hidden transition-transform hover:scale-105">
                    <CardHeader className="p-0">
                      {image && (
                         <div className="aspect-w-4 aspect-h-3">
                            <Image
                            src={image.imageUrl}
                            alt={item.name}
                            data-ai-hint={image.imageHint}
                            width={400}
                            height={300}
                            className="object-cover w-full h-full"
                            />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{item.name}</h3>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="dinner" className="mt-8">
             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {menuData.dinner.map((item, index) => {
                const image = getImage(item.imageId)
                return (
                  <Card key={index} className="overflow-hidden transition-transform hover:scale-105">
                    <CardHeader className="p-0">
                      {image && (
                         <div className="aspect-w-4 aspect-h-3">
                            <Image
                            src={image.imageUrl}
                            alt={item.name}
                            data-ai-hint={image.imageHint}
                            width={400}
                            height={300}
                            className="object-cover w-full h-full"
                            />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{item.name}</h3>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="drinks" className="mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {menuData.drinks.map((item, index) => {
                const image = getImage(item.imageId)
                return (
                  <Card key={index} className="overflow-hidden transition-transform hover:scale-105">
                    <CardHeader className="p-0">
                      {image && (
                        <div className="aspect-w-4 aspect-h-3">
                            <Image
                            src={image.imageUrl}
                            alt={item.name}
                            data-ai-hint={image.imageHint}
                            width={400}
                            height={300}
                            className="object-cover w-full h-full"
                            />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{item.name}</h3>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  )
}
