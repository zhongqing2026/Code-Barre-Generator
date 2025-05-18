import type { Metadata } from "next"
import { Mail, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Contactez-nous | CodeBarreGenerator.com",
  description:
    "Besoin d'aide avec notre générateur code barre? Contactez l'équipe de CodeBarreGenerator.com pour toute question ou suggestion.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 font-heading">Contactez-nous</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg">
            Nous sommes ravis de recevoir vos commentaires, questions ou suggestions concernant notre générateur code
            barre. Notre équipe est là pour vous aider et répondre à toutes vos demandes.
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-700">
                  <a href="mailto:info@codebarregenerator.com" className="hover:underline">
                    info@codebarregenerator.com
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Nous répondons généralement dans un délai de 24 à 48 heures.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Globe className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Site Web</h3>
                <p className="text-gray-700">
                  <a href="https://codebarregenerator.com" className="hover:underline">
                    https://codebarregenerator.com
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Visitez notre générateur code barre en ligne pour créer des codes-barres gratuitement.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 font-heading">Quand nous contacter</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vous avez des questions sur l'utilisation de notre générateur code barre</li>
              <li>Vous rencontrez des difficultés techniques avec notre générateur code barre en ligne</li>
              <li>Vous avez des suggestions pour améliorer notre service</li>
              <li>Vous souhaitez signaler un bug ou un problème</li>
              <li>Vous avez des questions concernant nos politiques</li>
              <li>Vous êtes intéressé par une collaboration ou un partenariat</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6 font-heading">Foire Aux Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium">Le générateur code barre est-il vraiment gratuit ?</h3>
              <p className="text-gray-700 mt-1">
                Oui, notre générateur code barre est entièrement gratuit et sans limitations. Vous pouvez créer autant
                de codes-barres que vous le souhaitez sans frais.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Puis-je utiliser les codes-barres générés à des fins commerciales ?</h3>
              <p className="text-gray-700 mt-1">
                Absolument. Les codes-barres créés avec notre générateur code barre en ligne peuvent être utilisés pour
                tout type de projet, y compris commercial.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Mes données sont-elles sécurisées ?</h3>
              <p className="text-gray-700 mt-1">
                Oui. Notre générateur code barre fonctionne entièrement dans votre navigateur. Vos données ne sont
                jamais envoyées à nos serveurs ni stockées.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Comment puis-je signaler un problème technique ?</h3>
              <p className="text-gray-700 mt-1">
                Envoyez-nous un email à info@codebarregenerator.com avec une description détaillée du problème rencontré
                avec notre générateur code barre, et nous vous aiderons dans les plus brefs délais.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Nous apprécions vos commentaires et nous nous efforçons d'améliorer continuellement notre générateur code
            barre pour mieux répondre à vos besoins.
          </p>
        </div>
      </div>
    </div>
  )
}
