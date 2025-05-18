"use client"
import BarcodeGenerator from "@/components/barcode-generator"
import HowToUse from "@/components/how-to-use"
import WhyChooseUs from "@/components/why-choose-us"
import FAQSection from "@/components/faq-section"
import { translations } from "@/lib/translations"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import SEOHead from "@/components/seo-head-optimized"
import { WebApplicationSchema, FAQSchema, HowToSchema } from "@/components/structured-data"

export default function Home() {
  const locale = "fr"
  const t = translations[locale]

  // 为FAQ结构化数据准备数据
  const faqItems = t.faq.questions.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))

  // 为HowTo结构化数据准备数据
  const howToSteps = t.howToUse.steps.map((step) => ({
    name: step.title,
    text: step.description,
  }))

  // 法语关键词
  const frKeywords = [
    "générateur code barre",
    "code barre generator",
    "générateur de code barre gratuit",
    "créer code barre en ligne",
    "générateur code barre en ligne",
    "outil code barre gratuit",
    "code barre EAN",
    "code barre UPC",
    "QR code générateur",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Générateur Code Barre Gratuit en Ligne | Code Barre Generator"
        description="Utilisez notre générateur code barre en ligne gratuit pour créer des codes-barres professionnels. Code barre generator simple et rapide pour tous formats: EAN, UPC, QR et plus."
        canonicalPath="/"
        locale={locale}
        keywords={frKeywords}
      />

      <WebApplicationSchema
        name="Générateur Code Barre"
        description="Générateur code barre en ligne gratuit et facile à utiliser. Créez des codes-barres de haute qualité en quelques clics."
        url="https://codebarregenerator.com"
      />

      <FAQSchema questions={faqItems} />

      <HowToSchema
        name="Comment créer un code-barre en ligne"
        description="Guide étape par étape pour créer des codes-barres professionnels avec notre générateur code barre en ligne gratuit."
        steps={howToSteps}
      />

      <Header />
      <main className="flex-grow">
        <HeroSection locale={locale} />

        <div className="container mx-auto px-4 py-16">
          <BarcodeGenerator locale={locale} />

          <section className="mt-20 max-w-3xl mx-auto" id="about-barcode-generator">
            <h2 className="text-2xl font-bold mb-6 text-center font-heading">
              Générateur Code Barre en Ligne Gratuit et Professionnel
            </h2>
            <div className="section-divider"></div>
            <div className="space-y-4 text-gray-700">
              <p>
                Bienvenue sur <strong>CodeBarreGenerator.com</strong>, votre solution complète pour créer des
                codes-barres de qualité professionnelle. Notre <strong>générateur code barre</strong> en ligne vous
                permet de créer facilement différents types de codes-barres pour vos besoins personnels ou
                professionnels, sans aucun coût.
              </p>
              <p>
                Que vous soyez un détaillant ayant besoin de codes EAN pour vos produits, une entreprise nécessitant des
                codes QR pour votre marketing, ou un particulier cherchant à organiser votre inventaire personnel, notre
                <strong> générateur code barre</strong> répond à tous vos besoins avec précision et simplicité.
              </p>
              <p>
                Notre <strong>code barre generator</strong> prend en charge de nombreux formats populaires, notamment
                les codes EAN-13, EAN-8, UPC-A, Code 128, Code 39 et les codes QR. Vous pouvez personnaliser chaque
                aspect de vos codes-barres, des couleurs aux dimensions, pour obtenir exactement ce dont vous avez
                besoin avec notre <strong>générateur code barre</strong> gratuit.
              </p>
            </div>
          </section>
        </div>

        <HowToUse locale={locale} />
        <WhyChooseUs locale={locale} />
        <FAQSection locale={locale} />

        <section className="py-16 bg-gray-50" id="barcode-types">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center font-heading">Types de Codes-Barres Disponibles</h2>
            <div className="section-divider"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">EAN-13</h3>
                <p className="text-gray-600 mb-4">
                  Le code EAN-13 est utilisé mondialement pour l'identification des produits de détail. Créez facilement
                  ce format avec notre <strong>générateur code barre</strong> en ligne.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Créer un code EAN-13 avec notre générateur
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">UPC-A</h3>
                <p className="text-gray-600 mb-4">
                  Le code UPC-A est principalement utilisé aux États-Unis et au Canada. Notre{" "}
                  <strong>code barre generator</strong> vous permet de créer ce format rapidement.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Créer un code UPC-A avec notre générateur
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Code 128</h3>
                <p className="text-gray-600 mb-4">
                  Le Code 128 est un code-barres haute densité pour caractères alphanumériques. Utilisez notre{" "}
                  <strong>générateur code barre</strong> pour créer ce format polyvalent.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Créer un Code 128 avec notre générateur
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Code 39</h3>
                <p className="text-gray-600 mb-4">
                  Le Code 39 est largement utilisé dans l'industrie. Notre <strong>générateur code barre</strong>{" "}
                  gratuit facilite la création de ce format standard.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Créer un Code 39 avec notre générateur
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">QR Code</h3>
                <p className="text-gray-600 mb-4">
                  Les codes QR sont parfaits pour partager des informations rapidement. Notre{" "}
                  <strong>code barre generator</strong> vous permet de créer des QR codes personnalisés.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Créer un QR Code avec notre générateur
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">EAN-8</h3>
                <p className="text-gray-600 mb-4">
                  Le code EAN-8 est idéal pour les petits produits. Utilisez notre{" "}
                  <strong>générateur code barre</strong> en ligne pour créer ce format compact.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Créer un code EAN-8 avec notre générateur
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
