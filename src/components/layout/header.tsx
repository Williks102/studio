"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Menu as MenuIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { BookingModal } from "@/components/modals/booking-modal"
import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { TiktokIcon } from "@/components/icons/tiktok-icon"

function SocialIcons() {
  return (
    <div className="flex items-center gap-2">
      <Link 
        href="https://www.facebook.com/profile.php?id=61571002723074" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-foreground/60 transition-colors hover:text-primary"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link 
        href="https://www.instagram.com/lelofabidjan/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-foreground/60 transition-colors hover:text-primary"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://www.tiktok.com/@lelofabidjan?_r=1&_t=ZN-92u7HnGnYYw"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground/60 transition-colors hover:text-primary"
        aria-label="TikTok"
      >
        <TiktokIcon className="h-5 w-5" />
        <span className="sr-only">TikTok</span>
      </Link>
    </div>
  )
}

export function Header({ dict }: { dict: any }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#about", label: dict.about },
    { href: "/menu", label: dict.menuPage },
    { href: "/#formulas", label: dict.formulas },
    { href: "/#updates", label: dict.updates },
    { href: "/#vibes", label: dict.vibes },
    { href: "/#quote", label: dict.contact },
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
        isScrolled ?
        "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8 lg:px-12 gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
            <Image 
                src="https://res.cloudinary.com/db4hmbdv3/image/upload/v1761669062/image_ae6017a6-4978-4511-9ea7-7accf2bf4834_dfksuz.png" 
                alt="Le LOF Logo" 
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
                            alt="Le LOF Logo" 
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
                    <div className="mt-8 flex flex-col items-center gap-4 w-full px-8">
                        <SocialIcons />
                        <BookingModal dict={dict.bookingModal} />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  )
}
