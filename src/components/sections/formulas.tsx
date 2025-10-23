import { PartyPopper, Users, ShieldCheck } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const formulas = [
  {
    icon: PartyPopper,
    title: "Brunch",
    description: "Un moment de partage gourmand et convivial pour vos week-ends.",
  },
  {
    icon: ShieldCheck,
    title: "Expérience culinaire privée",
    description: "Un chef à votre disposition pour une soirée exclusive et mémorable.",
  },
  {
    icon: Users,
    title: "Buffet",
    description: "Une abondance de saveurs pour vos événements et célébrations.",
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
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <formula.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 font-headline text-xl">{formula.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{formula.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
