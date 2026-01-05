"use client"

import { PartyPopper, Users, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import Link from "next/link"

const iconMap: { [key: string]: React.ElementType } = {
  PartyPopper: PartyPopper,
  ShieldCheck: ShieldCheck,
  Users: Users,
}

export function Formulas({ dict }: { dict: any }) {

  const formulas = [
    {
      icon: 'PartyPopper',
      title: dict.brunch.title,
      shortDescription: dict.brunch.short,
      longDescription: dict.brunch.long,
      imageId: "formula-brunch"
    },
    {
      icon: 'ShieldCheck',
      title: dict.private.title,
      shortDescription: dict.private.short,
      longDescription: dict.private.long,
      imageId: "formula-private"
    },
    {
      icon: 'Users',
      title: dict.buffet.title,
      shortDescription: dict.buffet.short,
      longDescription: dict.buffet.long,
      imageId: "formula-buffet"
    },
  ];

  return (
    <section id="formulas" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            {dict.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {formulas.map((formula, index) => {
            const Icon = iconMap[formula.icon]
            const image = PlaceHolderImages.find(img => img.id === formula.imageId)
            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="text-center cursor-pointer transition-transform hover:scale-105 hover:shadow-xl">
                    <CardHeader>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="mt-4 font-headline text-xl">{formula.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{formula.shortDescription}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-background p-0 max-w-md">
                   {image && (
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={image.imageUrl}
                        alt={formula.title}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <DialogHeader>
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4 -mt-14 bg-background z-10 relative border-4 border-background">
                        <Icon className="h-8 w-8" />
                      </div>
                      <DialogTitle className="text-center font-headline text-2xl text-primary -mt-2">{formula.title}</DialogTitle>
                      <CardDescription className="text-center pt-2">
                        {formula.longDescription}
                      </CardDescription>
                    </DialogHeader>
                    <div className="flex justify-center pt-4">
                      <DialogClose asChild>
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="#quote">{dict.makeReservation}</Link>
                        </Button>
                      </DialogClose>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </div>
    </section>
  )
}
