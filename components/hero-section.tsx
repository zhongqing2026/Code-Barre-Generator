"use client"

import { ArrowRight } from "lucide-react"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  locale: string
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = translations[locale]

  return (
    <section className="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading">
                {locale === "fr" ? (
                  <>
                    Générateur de <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      Code Barre
                    </span>
                  </>
                ) : (
                  <>
                    Gerador de <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      Código de Barras
                    </span>
                  </>
                )}
              </h1>
              <div className="h-1 w-20 bg-white mt-6"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">{t.hero.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 transition-colors text-base font-medium"
                onClick={() => {
                  const generatorSection = document.getElementById("barcode-generator")
                  if (generatorSection) {
                    generatorSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {t.hero.primaryButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 text-base font-medium"
                onClick={() => {
                  const howToSection = document.getElementById("how-to-use")
                  if (howToSection) {
                    howToSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {t.hero.secondaryButton}
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="glass-card rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4">
                  {["EAN-13", "QR Code", "CODE128", "UPC-A", "EAN-8", "CODE39"].map((type, index) => (
                    <div
                      key={index}
                      className="glass-card rounded-md p-3 text-center hover:bg-white/20 transition-colors"
                    >
                      <p className="text-sm font-medium">{type}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 glass-card rounded-md p-4 flex items-center justify-center">
                  <div className="w-full h-16 bg-white/10 rounded flex items-center justify-center">
                    <svg width="200" height="40" viewBox="0 0 200 40" className="opacity-70">
                      <rect x="10" y="5" width="2" height="30" fill="white" />
                      <rect x="15" y="5" width="1" height="30" fill="white" />
                      <rect x="20" y="5" width="3" height="30" fill="white" />
                      <rect x="25" y="5" width="2" height="30" fill="white" />
                      <rect x="30" y="5" width="4" height="30" fill="white" />
                      <rect x="37" y="5" width="1" height="30" fill="white" />
                      <rect x="42" y="5" width="3" height="30" fill="white" />
                      <rect x="48" y="5" width="2" height="30" fill="white" />
                      <rect x="53" y="5" width="1" height="30" fill="white" />
                      <rect x="58" y="5" width="4" height="30" fill="white" />
                      <rect x="65" y="5" width="2" height="30" fill="white" />
                      <rect x="70" y="5" width="3" height="30" fill="white" />
                      <rect x="76" y="5" width="1" height="30" fill="white" />
                      <rect x="80" y="5" width="2" height="30" fill="white" />
                      <rect x="85" y="5" width="4" height="30" fill="white" />
                      <rect x="92" y="5" width="1" height="30" fill="white" />
                      <rect x="97" y="5" width="3" height="30" fill="white" />
                      <rect x="103" y="5" width="2" height="30" fill="white" />
                      <rect x="108" y="5" width="1" height="30" fill="white" />
                      <rect x="113" y="5" width="4" height="30" fill="white" />
                      <rect x="120" y="5" width="2" height="30" fill="white" />
                      <rect x="125" y="5" width="3" height="30" fill="white" />
                      <rect x="131" y="5" width="1" height="30" fill="white" />
                      <rect x="135" y="5" width="2" height="30" fill="white" />
                      <rect x="140" y="5" width="4" height="30" fill="white" />
                      <rect x="147" y="5" width="1" height="30" fill="white" />
                      <rect x="152" y="5" width="3" height="30" fill="white" />
                      <rect x="158" y="5" width="2" height="30" fill="white" />
                      <rect x="163" y="5" width="1" height="30" fill="white" />
                      <rect x="168" y="5" width="4" height="30" fill="white" />
                      <rect x="175" y="5" width="2" height="30" fill="white" />
                      <rect x="180" y="5" width="3" height="30" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
