import { Card, CardContent } from "@/components/ui/card"
import { translations } from "@/lib/translations"
import { MousePointerClick, Keyboard, Download } from "lucide-react"

interface HowToUseProps {
  locale: string
}

export default function HowToUse({ locale }: HowToUseProps) {
  const t = translations[locale]

  const icons = [
    <MousePointerClick key="icon-1" className="h-12 w-12 text-black" />,
    <Keyboard key="icon-2" className="h-12 w-12 text-black" />,
    <Download key="icon-3" className="h-12 w-12 text-black" />,
  ]

  return (
    <section className="py-20 bg-white barcode-pattern" id="how-to-use">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-heading">
            {locale === "fr"
              ? "Comment utiliser notre générateur code barre"
              : "Como usar nosso gerador codigo de barras"}
          </h2>
          <div className="section-divider"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "fr"
              ? "Notre générateur code barre en ligne vous permet de créer des codes-barres professionnels en quelques étapes simples. Utilisez ce générateur code barre gratuit pour tous vos besoins d'étiquetage."
              : "Nosso gerador codigo de barras online permite criar códigos de barras profissionais em poucos passos simples. Use este gerador de codigo de barras gratuito para todas as suas necessidades de etiquetagem."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.howToUse.steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-md feature-card overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="bg-gray-50 p-6 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 shadow-sm">{icons[index]}</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 font-heading">{step.title}</h3>
                  <p className="text-gray-600">
                    {locale === "fr"
                      ? `${step.description} Notre générateur code barre facilite cette étape.`
                      : `${step.description} Nosso gerador codigo de barras facilita este passo.`}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-3xl mx-auto">
            {locale === "fr"
              ? "Le générateur code barre que nous proposons est conçu pour être intuitif et efficace. Que vous ayez besoin d'un code EAN, QR ou tout autre format, notre générateur code barre en ligne est la solution idéale pour créer rapidement des codes-barres de qualité professionnelle."
              : "O gerador codigo de barras que oferecemos é projetado para ser intuitivo e eficiente. Seja você precisando de um código EAN, QR ou qualquer outro formato, nosso gerador de codigo de barras gratuito é a solução ideal para criar rapidamente códigos de barras de qualidade profissional."}
          </p>
        </div>
      </div>
    </section>
  )
}
