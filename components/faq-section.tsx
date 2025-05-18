import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { translations } from "@/lib/translations"
import { Card, CardContent } from "@/components/ui/card"

interface FAQSectionProps {
  locale: string
}

export default function FAQSection({ locale }: FAQSectionProps) {
  const t = translations[locale]

  // 添加额外的FAQ项目，增加关键词密度
  const additionalFaqs =
    locale === "fr"
      ? [
          {
            question: "Votre générateur code barre est-il compatible avec tous les systèmes?",
            answer:
              "Oui, notre générateur code barre fonctionne sur tous les systèmes d'exploitation et navigateurs modernes. Vous pouvez utiliser notre générateur code barre sur Windows, Mac, Linux, ainsi que sur les appareils mobiles. Notre générateur code barre en ligne ne nécessite aucune installation et est accessible partout.",
          },
          {
            question: "Puis-je intégrer les codes-barres créés avec votre générateur code barre dans mes documents?",
            answer:
              "Absolument! Les codes-barres créés avec notre générateur code barre peuvent être facilement intégrés dans vos documents Word, Excel, PowerPoint, ou tout autre logiciel. Notre générateur code barre vous permet de télécharger les images dans différents formats pour une intégration facile.",
          },
        ]
      : [
          {
            question: "Seu gerador codigo de barras é compatível com todos os sistemas?",
            answer:
              "Sim, nosso gerador codigo de barras funciona em todos os sistemas operacionais e navegadores modernos. Você pode usar nosso gerador codigo de barras no Windows, Mac, Linux, bem como em dispositivos móveis. Nosso gerador de codigo de barras gratuito não requer instalação e é acessível de qualquer lugar.",
          },
          {
            question:
              "Posso integrar os códigos de barras criados com seu gerador codigo de barras em meus documentos?",
            answer:
              "Absolutamente! Os códigos de barras criados com nosso gerador codigo de barras podem ser facilmente integrados em seus documentos Word, Excel, PowerPoint ou qualquer outro software. Nosso gerador de codigo de barras gratuito permite que você baixe as imagens em diferentes formatos para fácil integração.",
          },
        ]

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-heading">
            {locale === "fr"
              ? "Questions fréquentes sur notre générateur code barre"
              : "Perguntas frequentes sobre nosso gerador codigo de barras"}
          </h2>
          <div className="section-divider"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "fr"
              ? "Trouvez des réponses aux questions les plus courantes sur notre générateur code barre en ligne. Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter."
              : "Encontre respostas para as perguntas mais comuns sobre nosso gerador codigo de barras online. Se você não encontrar o que está procurando, não hesite em nos contatar."}
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-0 shadow-lg">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {[...t.faq.questions, ...additionalFaqs].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left py-4 text-gray-800 hover:text-black font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="py-4 text-gray-600 accordion-content">
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-700">
            {locale === "fr"
              ? "Notre générateur code barre est constamment amélioré pour répondre aux besoins de nos utilisateurs. Si vous avez des suggestions pour améliorer notre générateur code barre ou si vous rencontrez des difficultés, n'hésitez pas à nous contacter. Nous sommes déterminés à offrir le meilleur générateur code barre gratuit disponible en ligne."
              : "Nosso gerador codigo de barras está constantemente sendo aprimorado para atender às necessidades de nossos usuários. Se você tiver sugestões para melhorar nosso gerador codigo de barras ou se estiver enfrentando dificuldades, não hesite em nos contatar. Estamos comprometidos em oferecer o melhor gerador de codigo de barras gratuito disponível online."}
          </p>
        </div>
      </div>
    </section>
  )
}
