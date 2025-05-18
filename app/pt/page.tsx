"use client"
import BarcodeGenerator from "@/components/barcode-generator"
import HowToUse from "@/components/how-to-use"
import WhyChooseUs from "@/components/why-choose-us"
import FAQSection from "@/components/faq-section"
import { translations } from "@/lib/translations"
import HeroSection from "@/components/hero-section"
import Header from "@/components/header-pt"
import Footer from "@/components/footer-pt"
import SEOHead from "@/components/seo-head-optimized"
import { WebApplicationSchema, FAQSchema, HowToSchema } from "@/components/structured-data"

export default function Home() {
  const locale = "pt"
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

  // 葡萄牙语关键词
  const ptKeywords = [
    "gerador codigo de barras",
    "código de barras gerador",
    "gerador de codigo de barras gratuito",
    "criar código de barras online",
    "gerador de código de barras online",
    "ferramenta de código de barras grátis",
    "código de barras EAN",
    "código de barras UPC",
    "gerador de QR code",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Gerador Codigo de Barras Gratuito Online | Código de Barras Gerador"
        description="Use nosso gerador codigo de barras online gratuito para criar códigos de barras profissionais. Código de barras gerador simples e rápido para todos os formatos: EAN, UPC, QR e mais."
        canonicalPath="/pt"
        locale={locale}
        keywords={ptKeywords}
      />

      <WebApplicationSchema
        name="Gerador Codigo de Barras"
        description="Gerador codigo de barras online gratuito e fácil de usar. Crie códigos de barras de alta qualidade em poucos cliques."
        url="https://codebarregenerator.com/pt"
      />

      <FAQSchema questions={faqItems} />

      <HowToSchema
        name="Como criar um código de barras online"
        description="Guia passo a passo para criar códigos de barras profissionais com nosso gerador codigo de barras online gratuito."
        steps={howToSteps}
      />

      <Header />
      <main className="flex-grow">
        <HeroSection locale={locale} />

        <div className="container mx-auto px-4 py-16">
          <BarcodeGenerator locale={locale} />

          <section className="mt-20 max-w-3xl mx-auto" id="about-barcode-generator">
            <h2 className="text-2xl font-bold mb-6 text-center font-heading">
              Gerador Codigo de Barras Online Gratuito e Profissional
            </h2>
            <div className="section-divider"></div>
            <div className="space-y-4 text-gray-700">
              <p>
                Bem-vindo ao <strong>CodeBarreGenerator.com</strong>, sua solução completa para criar códigos de barras
                de qualidade profissional. Nosso <strong>gerador codigo de barras</strong> online permite que você crie
                facilmente diferentes tipos de códigos de barras para suas necessidades pessoais ou profissionais, sem
                nenhum custo.
              </p>
              <p>
                Seja você um varejista precisando de códigos EAN para seus produtos, uma empresa necessitando de códigos
                QR para seu marketing, ou um indivíduo procurando organizar seu inventário pessoal, nosso
                <strong> código de barras gerador</strong> atende a todas as suas necessidades com precisão e
                simplicidade.
              </p>
              <p>
                Nossa ferramenta <strong>gerador de codigo de barras gratuito</strong> suporta muitos formatos
                populares, incluindo códigos EAN-13, EAN-8, UPC-A, Código 128, Código 39 e códigos QR. Você pode
                personalizar cada aspecto de seus códigos de barras, das cores às dimensões, para obter exatamente o que
                você precisa.
              </p>
            </div>
          </section>
        </div>

        <HowToUse locale={locale} />
        <WhyChooseUs locale={locale} />
        <FAQSection locale={locale} />

        <section className="py-16 bg-gray-50" id="barcode-types">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center font-heading">Tipos de Códigos de Barras Disponíveis</h2>
            <div className="section-divider"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">EAN-13</h3>
                <p className="text-gray-600 mb-4">
                  O código EAN-13 é usado mundialmente para identificação de produtos de varejo. Crie facilmente este
                  formato com nosso <strong>gerador codigo de barras</strong> online.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Criar um código EAN-13 com nosso gerador
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">UPC-A</h3>
                <p className="text-gray-600 mb-4">
                  O código UPC-A é usado principalmente nos Estados Unidos e Canadá. Nosso{" "}
                  <strong>código de barras gerador</strong> permite criar este formato rapidamente.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Criar um código UPC-A com nosso gerador
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Código 128</h3>
                <p className="text-gray-600 mb-4">
                  O Código 128 é um código de barras de alta densidade para caracteres alfanuméricos. Use nosso{" "}
                  <strong>gerador codigo de barras</strong> para criar este formato versátil.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Criar um Código 128 com nosso gerador
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Código 39</h3>
                <p className="text-gray-600 mb-4">
                  O Código 39 é amplamente utilizado na indústria. Nosso{" "}
                  <strong>gerador de codigo de barras gratuito</strong> facilita a criação deste formato padrão.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Criar um Código 39 com nosso gerador
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Código QR</h3>
                <p className="text-gray-600 mb-4">
                  Os códigos QR são perfeitos para compartilhar informações rapidamente. Nosso{" "}
                  <strong>código de barras gerador</strong> permite criar QR codes personalizados.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Criar um Código QR com nosso gerador
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">EAN-8</h3>
                <p className="text-gray-600 mb-4">
                  O código EAN-8 é ideal para produtos pequenos. Use nosso <strong>gerador codigo de barras</strong>{" "}
                  online para criar este formato compacto.
                </p>
                <a href="#barcode-generator" className="text-primary hover:underline font-medium">
                  Criar um código EAN-8 com nosso gerador
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
