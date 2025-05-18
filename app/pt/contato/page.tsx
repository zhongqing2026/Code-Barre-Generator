import type { Metadata } from "next"
import { Mail, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Contate-nos | CodeBarreGenerator.com",
  description:
    "Precisa de ajuda com nosso gerador codigo de barras? Entre em contato com a equipe do CodeBarreGenerator.com para qualquer dúvida ou sugestão.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 font-heading">Contate-nos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <p className="text-lg">
            Ficamos felizes em receber seus comentários, perguntas ou sugestões sobre nosso gerador codigo de barras.
            Nossa equipe está aqui para ajudar e responder a todas as suas solicitações.
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
                <p className="text-sm text-gray-500 mt-1">Geralmente respondemos dentro de 24 a 48 horas.</p>
              </div>
            </div>

            <div className="flex items-start">
              <Globe className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Site</h3>
                <p className="text-gray-700">
                  <a href="https://codebarregenerator.com" className="hover:underline">
                    https://codebarregenerator.com
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Visite nosso gerador codigo de barras online para criar códigos de barras gratuitamente.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 font-heading">Quando nos contatar</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Você tem dúvidas sobre como usar nosso gerador codigo de barras</li>
              <li>Você está enfrentando dificuldades técnicas com nosso gerador de codigo de barras gratuito</li>
              <li>Você tem sugestões para melhorar nosso serviço</li>
              <li>Você deseja relatar um bug ou problema</li>
              <li>Você tem perguntas sobre nossas políticas</li>
              <li>Você está interessado em uma colaboração ou parceria</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6 font-heading">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium">O gerador codigo de barras é realmente gratuito?</h3>
              <p className="text-gray-700 mt-1">
                Sim, nosso gerador codigo de barras é totalmente gratuito e sem limitações. Você pode criar quantos
                códigos de barras desejar sem custos.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Posso usar os códigos de barras gerados para fins comerciais?</h3>
              <p className="text-gray-700 mt-1">
                Absolutamente. Os códigos de barras criados com nosso gerador de codigo de barras gratuito podem ser
                usados para qualquer tipo de projeto, incluindo comercial.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Meus dados estão seguros?</h3>
              <p className="text-gray-700 mt-1">
                Sim. Nosso gerador codigo de barras funciona inteiramente em seu navegador. Seus dados nunca são
                enviados aos nossos servidores ou armazenados.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Como posso relatar um problema técnico?</h3>
              <p className="text-gray-700 mt-1">
                Envie-nos um email para info@codebarregenerator.com com uma descrição detalhada do problema encontrado
                com nosso gerador codigo de barras, e ajudaremos o mais rápido possível.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Valorizamos seus comentários e nos esforçamos para melhorar continuamente nosso gerador de codigo de barras
            gratuito para melhor atender às suas necessidades.
          </p>
        </div>
      </div>
    </div>
  )
}
