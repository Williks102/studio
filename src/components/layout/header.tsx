"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Menu as MenuIcon, Globe } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { BookingModal } from "@/components/modals/booking-modal"
import { i18n, type Locale } from "@/i18n-config"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"

function LanguageSwitcher({ dict }: { dict: any }) {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  const currentLocale = pathName.split("/")[1] as Locale

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Changer de langue</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{dict.language}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => router.push(redirectedPathName(locale))}
            className={cn("cursor-pointer", currentLocale === locale && "font-bold")}
          >
            {locale.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Header({ dict }: { dict: any }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: dict.about },
    { href: "#menu", label: dict.menu },
    { href: "#formulas", label: dict.formulas },
    { href: "#updates", label: dict.updates },
    { href: "#vibes", label: dict.vibes },
    { href: "#quote", label: dict.contact },
  ]

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
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8 lg:px-12 gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
            <Image 
                src="https://res.cloudinary.com/db4hmbdv3/image/upload/v1761669062/image_ae6017a6-4978-4511-9ea7-7accf2bf4834_dfksuz.png" 
                alt="Le Lof Logo" 
                width={100} 
                height={50}
                className="h-12 w-auto object-contain"
                priority
            />
        </Link>

        {/* Navigation Desktop - avec plus d'espace */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden lg:flex items-center gap-2">
          <SocialIcons />
          <LanguageSwitcher dict={dict} />
          <BookingModal dict={dict.bookingModal} />
        </div>

        {/* Menu Mobile */}
        <div className="lg:hidden flex items-center gap-2">
           <LanguageSwitcher dict={dict} />
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
                    <Link href="/" className="mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image 
                            src="https://res.cloudinary.com/db4hmbdv3/image/upload/v1761669062/image_ae6017a6-4978-4511-9ea7-7accf2bf4834_dfksuz.png" 
                            alt="Le Lof Logo" 
                            width={120} 
                            height={60}
                            className="h-14 w-auto object-contain"
                        />
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
                    <div className="mt-8 flex flex-col items-center gap-6 w-full px-8">
                        <BookingModal onOpenChange={setIsMobileMenuOpen} dict={dict.bookingModal} />
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
      <Link href="https://www.instagram.com/restaurantlof?igsh=YWZ6ZTFlbjl2M3Fm" aria-label="Instagram">
        <Instagram className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
      </Link>
      <Link href="https://www.facebook.com/share/17hdPuU8Bu/" aria-label="Facebook">
        <Facebook className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
      </Link>
    </div>
  )
}
