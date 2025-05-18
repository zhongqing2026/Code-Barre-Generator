import Link from "next/link"
import Image from "next/image"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LanguageSelector from "@/components/language-selector"

export default function Header() {
  const t = translations.fr

  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/icon.png" alt="Code Barre Generator Logo" width={32} height={32} className="mr-2" priority />
          <span className="text-xl font-bold text-black font-heading">CodeBarreGenerator.com</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/generateur-code-barre"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Générateur Code Barre
            </Link>
            <Link href="#how-to-use" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Comment utiliser
            </Link>
            <Link
              href="#why-choose-us"
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Pourquoi nous choisir
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              FAQ
            </Link>
          </nav>

          <LanguageSelector />

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex items-center mb-6">
                <Image src="/icon.png" alt="Code Barre Generator Logo" width={24} height={24} className="mr-2" />
                <span className="text-lg font-bold">CodeBarreGenerator</span>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/generateur-code-barre"
                  className="text-base font-medium py-2 hover:text-black transition-colors"
                >
                  Générateur Code Barre
                </Link>
                <Link href="#how-to-use" className="text-base font-medium py-2 hover:text-black transition-colors">
                  Comment utiliser
                </Link>
                <Link href="#why-choose-us" className="text-base font-medium py-2 hover:text-black transition-colors">
                  Pourquoi nous choisir
                </Link>
                <Link href="#faq" className="text-base font-medium py-2 hover:text-black transition-colors">
                  FAQ
                </Link>

                <div className="border-t border-gray-100 my-2 pt-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Langue / Idioma</h3>
                  <Link
                    href="/"
                    className="flex items-center gap-2 py-2 text-base font-medium hover:text-black transition-colors"
                  >
                    <span>🇫🇷</span> Français
                  </Link>
                  <Link
                    href="/pt"
                    className="flex items-center gap-2 py-2 text-base font-medium hover:text-black transition-colors"
                  >
                    <span>🇧🇷</span> Português
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
