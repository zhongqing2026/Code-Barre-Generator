"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

interface Language {
  code: string
  name: string
  flag: string
  path: string
}

export default function LanguageSelector() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Define available languages
  const languages: Language[] = [
    { code: "fr", name: "Français", flag: "🇫🇷", path: "/" },
    { code: "pt", name: "Português", flag: "🇧🇷", path: "/pt" },
  ]

  // Determine current language
  const currentLanguage = pathname.startsWith("/pt") ? languages[1] : languages[0]

  // Function to get equivalent path in another language
  const getEquivalentPath = (targetLang: Language): string => {
    // If we're on the homepage or a language root
    if (pathname === "/" || pathname === "/pt") {
      return targetLang.path
    }

    // For French to Portuguese
    if (currentLanguage.code === "fr" && targetLang.code === "pt") {
      // Special case mappings
      const pathMappings: Record<string, string> = {
        "/generateur-code-barre": "/pt/gerador-codigo-de-barras",
        "/a-propos": "/pt/sobre",
        "/contact": "/pt/contato",
        "/politique-de-confidentialite": "/pt/politica-de-privacidade",
        "/conditions-dutilisation": "/pt/termos-de-servico",
        "/faq": "/pt/faq",
      }

      return pathMappings[pathname] || "/pt"
    }

    // For Portuguese to French
    if (currentLanguage.code === "pt" && targetLang.code === "fr") {
      // Special case mappings
      const pathMappings: Record<string, string> = {
        "/pt/gerador-codigo-de-barras": "/generateur-code-barre",
        "/pt/sobre": "/a-propos",
        "/pt/contato": "/contact",
        "/pt/politica-de-privacidade": "/politique-de-confidentialite",
        "/pt/termos-de-servico": "/conditions-dutilisation",
        "/pt/faq": "/faq",
      }

      return pathMappings[pathname] || "/"
    }

    return targetLang.path
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 gap-1 px-2.5">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">
            {currentLanguage.flag} {currentLanguage.name}
          </span>
          <span className="sm:hidden">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} asChild>
            <Link
              href={getEquivalentPath(lang)}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
