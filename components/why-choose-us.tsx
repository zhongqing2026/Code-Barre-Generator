import { CheckCircle } from "lucide-react"
import { translations } from "@/lib/translations"
import { Card, CardContent } from "@/components/ui/card"

interface WhyChooseUsProps {
  locale: string
}

export default function WhyChooseUs({ locale }: WhyChooseUsProps) {
  const t = translations[locale]

  return (
    <section className="py-20 bg-gray-50" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-heading">
            {locale === "fr"
              ? "Pourquoi choisir notre générateur code barre"
              : "Por que escolher nosso gerador codigo de barras"}
          </h2>
          <div className="section-divider"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "fr"
              ? "Notre générateur code barre se distingue par sa simplicité, sa rapidité et sa fiabilité. Découvrez pourquoi des milliers d'utilisateurs font confiance à notre générateur code barre en ligne."
              : "Nosso gerador codigo de barras se destaca pela simplicidade, rapidez e confiabilidade. Descubra por que milhares de usuários confiam em nosso gerador de codigo de barras gratuito."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.whyChooseUs.benefits.map((benefit, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm feature-card">
              <CardContent className="p-5 flex items-start">
                <CheckCircle className="h-5 w-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700">
                    {locale === "fr"
                      ? `${benefit} Notre générateur code barre répond à tous vos besoins.`
                      : `${benefit} Nosso gerador codigo de barras atende a todas as suas necessidades.`}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 font-heading text-center">
            {locale === "fr"
              ? "Le meilleur générateur code barre pour tous vos projets"
              : "O melhor gerador codigo de barras para todos os seus projetos"}
          </h3>
          <p className="text-gray-700">
            {locale === "fr"
              ? "Notre générateur code barre en ligne est utilisé par des professionnels de divers secteurs pour créer des étiquettes de produits, gérer des inventaires, suivre des actifs et bien plus encore. Avec notre générateur code barre gratuit, vous pouvez personnaliser chaque aspect de vos codes-barres, les télécharger dans différents formats et les utiliser immédiatement dans vos projets. Essayez notre générateur code barre dès aujourd'hui et découvrez pourquoi il est considéré comme l'un des meilleurs outils disponibles en ligne."
              : "Nosso gerador codigo de barras online é usado por profissionais de diversos setores para criar etiquetas de produtos, gerenciar inventários, rastrear ativos e muito mais. Com nosso gerador de codigo de barras gratuito, você pode personalizar cada aspecto de seus códigos de barras, baixá-los em diferentes formatos e usá-los imediatamente em seus projetos. Experimente nosso gerador codigo de barras hoje e descubra por que ele é considerado uma das melhores ferramentas disponíveis online."}
          </p>
        </div>
      </div>
    </section>
  )
}
