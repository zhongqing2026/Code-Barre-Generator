import Link from "next/link"
import { translations } from "@/lib/translations"

export default function Footer() {
  const t = translations.fr
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <img src="/android-chrome-192x192.png" alt="Code Barre Generator Logo" className="h-10 w-10 mr-2" />
              <h3 className="text-xl font-bold font-heading">CodeBarreGenerator.com</h3>
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Générateur de code barre en ligne gratuit et facile à utiliser. Créez des codes-barres de haute qualité en
              quelques clics.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-heading">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/generateur-code-barre" className="text-gray-300 hover:text-white transition-colors">
                  Générateur Code Barre
                </Link>
              </li>
              <li>
                <Link href="#how-to-use" className="text-gray-300 hover:text-white transition-colors">
                  Comment utiliser
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="text-gray-300 hover:text-white transition-colors">
                  Pourquoi nous choisir
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-heading">Pages</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="text-gray-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/conditions-dutilisation" className="text-gray-300 hover:text-white transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="text-sm text-gray-400">© {currentYear} CodeBarreGenerator.com - Tous droits réservés</div>
        </div>
      </div>
    </footer>
  )
}
