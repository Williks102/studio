"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Menu as MenuIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { BookingModal } from "@/components/modals/booking-modal"

const navLinks = [
  { href: "#about", label: "A Propos" },
  { href: "#menu", label: "Menu" },
  { href: "#formulas", label: "Formules" },
  { href: "#vibes", label: "African vibes" },
  { href: "#quote", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-3xl font-bold font-headline text-primary">
          Le Lof
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <SocialIcons />
          <BookingModal />
        </div>
        <div className="md:hidden">
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold font-headline text-primary sr-only">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center justify-center h-full">
                    <Link href="/" className="mb-8 text-4xl font-bold font-headline text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        Le Lof
                    </Link>
                    <nav className="flex flex-col items-center gap-6 text-center">
                        {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                        ))}
                    </nav>
                    <div className="mt-8 flex flex-col items-center gap-6">
                        <div className="hidden">
                          <BookingModal onOpenChange={setIsMobileMenuOpen} />
                        </div>
                        <SocialIcons />
                    </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      <Link href="#" aria-label="LinkedIn">
        <Linkedin className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
      </Link>
      <Link href="#" aria-label="Instagram">
        <Instagram className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
      </Link>
      <Link href="#" aria-label="Facebook">
        <Facebook className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
      </Link>
    </div>
  )
}
