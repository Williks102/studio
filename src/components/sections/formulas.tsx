import { PartyPopper, Users, ShieldCheck } from "lucide-react"
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

const formulas = [
  {
    icon: PartyPopper,
    title: "Brunch",
    shortDescription: "Un moment de partage gourmand et convivial pour vos week-ends.",
    longDescription: "Notre formule brunch est une invitation à la détente et à la gourmandise. Chaque week-end, découvrez un buffet varié avec des saveurs sucrées et salées, des plats chauds, des viennoiseries, des jus frais et des spécialités africaines revisitées. C'est l'occasion parfaite de se retrouver en famille ou entre amis dans une ambiance chaleureuse."
  },
  {
    icon: ShieldCheck,
    title: "Expérience culinaire privée",
    shortDescription: "Un chef à votre disposition pour une soirée exclusive et mémorable.",
    longDescription: "Vivez une soirée d'exception avec notre expérience culinaire privée. Un de nos chefs se consacre entièrement à votre table pour créer un menu sur mesure selon vos envies. C'est la formule idéale pour une occasion spéciale, un dîner romantique ou une célébration intime, où chaque plat est une œuvre d'art."
  },
  {
    icon: Users,
    title: "Buffet",
    shortDescription: "Une abondance de saveurs pour vos événements et célébrations.",
    longDescription: "Pour vos événements, nous proposons une formule buffet généreuse et variée. Un large éventail de nos meilleures créations, des entrées aux desserts, est présenté pour ravir tous vos convives. Idéal pour les anniversaires, les réceptions professionnelles ou toute autre grande célébration."
  },
]

export function Formulas() {
  return (
    <section id="formulas" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Découvrez Nos Formules
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {formulas.map((formula, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="text-center cursor-pointer transition-transform hover:scale-105 hover:shadow-xl">
                  <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <formula.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 font-headline text-xl">{formula.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{formula.shortDescription}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-background">
                <DialogHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <formula.icon className="h-8 w-8" />
                  </div>
                  <DialogTitle className="text-center font-headline text-2xl text-primary">{formula.title}</DialogTitle>
                  <CardDescription className="text-center pt-2">
                    {formula.longDescription}
                  </CardDescription>
                </DialogHeader>
                <div className="flex justify-center pt-4">
                  <DialogClose asChild>
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="#quote">Faire ma Reservation</Link>
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
