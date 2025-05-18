import Link from "next/link"
import Image from "next/image"
import { translations } from "@/lib/translations"

export default function Footer() {
  const t = translations.pt
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/pt" className="flex items-center mb-4">
              <Image
                src="/icon.png"
                alt="Code Barre Generator Logo"
                width={40}
                height={40}
                className="mr-2 invert" // 在黑色背景上反转颜色
              />
              <h3 className="text-xl font-bold font-heading">CodeBarreGenerator.com</h3>
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Gerador de código de barras online gratuito e fácil de usar. Crie códigos de barras de alta qualidade em
              poucos cliques.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 font-heading">Links rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/pt/gerador-codigo-de-barras" className="text-gray-300 hover:text-white transition-colors">
                  Gerador Codigo de Barras
                </Link>
              </li>
              <li>
                <Link href="#how-to-use" className="text-gray-300 hover:text-white transition-colors">
                  Como usar
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="text-gray-300 hover:text-white transition-colors">
                  Por que nos escolher
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
            <h3 className="text-lg font-semibold mb-6 font-heading">Páginas</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/pt/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/pt/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contate-nos
                </Link>
              </li>
              <li>
                <Link href="/pt/politica-de-privacidade" className="text-gray-300 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/pt/termos-de-servico" className="text-gray-300 hover:text-white transition-colors">
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="text-sm text-gray-400">
            © {currentYear} CodeBarreGenerator.com - Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  )
}
