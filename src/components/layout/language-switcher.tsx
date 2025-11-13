"use client"

import { Globe } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { i18n, type Locale } from "@/i18n-config"
import { cn } from "@/lib/utils"

// Mapping des codes de langue vers leurs noms complets
const languageNames: Record<Locale, string> = {
  en: "English",
  fr: "Français"
}

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
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-9 gap-2 px-3 hover:bg-accent hover:text-accent-foreground"
        >
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{currentLocale.toUpperCase()}</span>
          <span className="sr-only">Changer de langue</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuLabel>{dict.language}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => router.push(redirectedPathName(locale))}
            className={cn(
              "cursor-pointer flex items-center justify-between",
              currentLocale === locale && "bg-accent font-semibold"
            )}
          >
            <span>{languageNames[locale]}</span>
            <span className="text-xs text-muted-foreground ml-2">{locale.toUpperCase()}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { LanguageSwitcher }