"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

export default function LanguageBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [suggestedLanguage, setSuggestedLanguage] = useState<{ code: string; name: string; path: string } | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Check if we've already dismissed the banner
    const dismissed = localStorage.getItem("languageBannerDismissed")
    if (dismissed) return

    // Detect browser language
    const browserLang = navigator.language.substring(0, 2).toLowerCase()

    // If user is on French pages but browser suggests Portuguese
    if (!pathname.startsWith("/pt") && browserLang === "pt") {
      setSuggestedLanguage({
        code: "pt",
        name: "Português",
        path: "/pt",
      })
      setIsVisible(true)
    }

    // If user is on Portuguese pages but browser suggests French
    if (pathname.startsWith("/pt") && browserLang === "fr") {
      setSuggestedLanguage({
        code: "fr",
        name: "Français",
        path: "/",
      })
      setIsVisible(true)
    }
  }, [pathname])

  const dismissBanner = () => {
    setIsVisible(false)
    localStorage.setItem("languageBannerDismissed", "true")
  }

  if (!isVisible || !suggestedLanguage) return null

  return (
    <div className="bg-black text-white py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {pathname.startsWith("/pt") ? (
            <span>
              Preferir o site em{" "}
              <Link href={suggestedLanguage.path} className="underline font-medium">
                {suggestedLanguage.name}
              </Link>
              ?
            </span>
          ) : (
            <span>
              Préférez-vous le site en{" "}
              <Link href={suggestedLanguage.path} className="underline font-medium">
                {suggestedLanguage.name}
              </Link>
              ?
            </span>
          )}
        </div>
        <button onClick={dismissBanner} className="text-white hover:text-gray-300">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
