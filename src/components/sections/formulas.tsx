import { PartyPopper, Users, ShieldCheck } from "lucide-react"
import { formulas } from "@/lib/formulas"
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

const iconMap = {
  PartyPopper: PartyPopper,
  ShieldCheck: ShieldCheck,
  Users: Users,
}

export function Formulas() {
  return (
    <section id="formulas" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Découvrez nos formules
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {formulas.map((formula, index) => {
            const Icon = iconMap[formula.icon]
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
                <DialogContent className="bg-background">
                  <DialogHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <DialogTitle className="text-center font-headline text-2xl text-primary">{formula.title}</DialogTitle>
                    <CardDescription className="text-center pt-2">
                      {formula.longDescription}
                    </CardDescription>
                  </DialogHeader>
                  <div className="flex justify-center pt-4">
                    <DialogClose asChild>
                      <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="#quote">Faire ma Réservation</Link>
                      </Button>
                    </DialogClose>
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
