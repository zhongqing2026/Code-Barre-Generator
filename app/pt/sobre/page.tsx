import type { Metadata } from "next"
import SEOHead from "@/components/seo-head"
import { BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Sobre Nós | CodeBarreGenerator.com",
  description:
    "Conheça a história e a missão do CodeBarreGenerator.com, seu gerador codigo de barras online gratuito e confiável desde 2020.",
}

export default function AboutPage() {
  const breadcrumbItems = [
    {
      name: "Início",
      item: "https://codebarregenerator.com/pt",
    },
    {
      name: "Sobre Nós",
      item: "https://codebarregenerator.com/pt/sobre",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SEOHead
        title="Sobre o CodeBarreGenerator.com | Nossa História e Missão"
        description="Conheça a história, missão e valores por trás do CodeBarreGenerator.com, seu gerador de código de barras online gratuito e confiável desde 2020."
        canonicalPath="/pt/sobre"
        locale="pt"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <h1 className="text-3xl font-bold mb-8 font-heading">Sobre o CodeBarreGenerator.com</h1>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Nossa História</h2>
        <p>
          Bem-vindo ao CodeBarreGenerator.com, seu destino confiável para geração de códigos de barras online. Fundado
          em 2020, nosso gerador codigo de barras nasceu de uma visão simples: tornar a criação de códigos de barras
          acessível a todos, sem exigir habilidades técnicas ou software caro.
        </p>

        <p>
          Nossa equipe de desenvolvedores apaixonados criou este gerador codigo de barras online com o objetivo de
          combinar simplicidade de uso e recursos profissionais. Ao longo dos anos, melhoramos continuamente nossa
          plataforma com base no feedback dos usuários, tornando o CodeBarreGenerator.com uma das ferramentas de geração
          de códigos de barras mais apreciadas na internet.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Nossa Missão</h2>
        <p>
          No CodeBarreGenerator.com, nossa missão é fornecer um gerador de codigo de barras gratuito, confiável e fácil
          de usar para indivíduos e profissionais em todo o mundo. Acreditamos que ferramentas de qualidade profissional
          devem ser acessíveis a todos, independentemente de seu orçamento ou habilidades técnicas.
        </p>

        <p>
          Nosso gerador codigo de barras online é projetado para atender às diversas necessidades de nossos usuários,
          sejam pequenas empresas que buscam etiquetar seus produtos, organizações gerenciando seu inventário ou
          indivíduos trabalhando em projetos pessoais.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Nossos Valores</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Acessibilidade</strong>: Nosso gerador codigo de barras permanece totalmente gratuito, sem
            limitações ocultas ou recursos premium.
          </li>
          <li>
            <strong>Qualidade</strong>: Comprometemo-nos a fornecer códigos de barras de alta qualidade que funcionem
            perfeitamente em todos os ambientes.
          </li>
          <li>
            <strong>Privacidade</strong>: Sua privacidade é importante. Nosso gerador de codigo de barras gratuito
            processa todos os dados localmente em seu navegador, sem nunca enviá-los aos nossos servidores.
          </li>
          <li>
            <strong>Inovação</strong>: Melhoramos constantemente nosso gerador codigo de barras online para incorporar
            as mais recentes tecnologias e atender às necessidades em evolução de nossos usuários.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Nossa Tecnologia</h2>
        <p>
          O CodeBarreGenerator.com utiliza as mais recentes tecnologias web para oferecer uma experiência de usuário
          fluida e responsiva. Nosso gerador codigo de barras suporta uma ampla gama de formatos de códigos de barras,
          incluindo EAN-13, EAN-8, UPC-A, Código 128, Código 39 e códigos QR, com opções extensas de personalização para
          atender a todas as suas necessidades.
        </p>

        <p>
          Diferentemente de outros serviços, nosso gerador de codigo de barras gratuito funciona inteiramente em seu
          navegador, garantindo tempos de geração rápidos e total privacidade de seus dados.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Contate-nos</h2>
        <p>
          Estamos sempre abertos a seus comentários e sugestões para melhorar nosso gerador codigo de barras. Se você
          tiver dúvidas, ideias ou preocupações, não hesite em nos contatar em
          <a href="mailto:info@codebarregenerator.com" className="text-primary hover:underline mx-1">
            info@codebarregenerator.com
          </a>
          .
        </p>

        <p className="mt-8 text-sm text-gray-500">Última atualização: 18 de maio de 2025</p>
      </div>
    </div>
  )
}
