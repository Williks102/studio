import Link from "next/link"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="text-3xl font-bold font-headline text-primary">
              Le Lof
            </Link>
            <p className="text-sm text-muted-foreground">
              Goût, élégance, raffinement.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold tracking-wider text-foreground">CONTACT</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+225 01 02 03 04 05</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@lelof.com</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold tracking-wider text-foreground">HORAIRES</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Journée : 11H - 15H</li>
              <li>Soir : 18H - 00H</li>
              <li>Fermé le Lundi</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Le Lof. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
