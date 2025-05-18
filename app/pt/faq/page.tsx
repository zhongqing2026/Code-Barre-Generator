import { translations } from "@/lib/translations"
import { FAQSchema } from "@/components/structured-data"
import SEOHead from "@/components/seo-head"

export const metadata = {
  title: "FAQ | Gerador de Código de Barras",
  description: "Perguntas frequentes sobre nosso gerador de código de barras online gratuito.",
}

export default function FAQPage() {
  const t = translations.pt

  // 为FAQ结构化数据准备数据
  const faqItems = t.faq.questions.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))

  return (
    <div className="container mx-auto px-4 py-8">
      <SEOHead
        title="FAQ - Perguntas Frequentes | Gerador de Código de Barras"
        description="Encontre respostas para perguntas frequentes sobre nosso gerador de código de barras online gratuito. Aprenda como criar, personalizar e usar códigos de barras para suas necessidades."
        canonicalPath="/pt/faq"
        locale="pt"
      />

      <FAQSchema questions={faqItems} />

      <h1 className="text-3xl font-bold mb-8">Perguntas Frequentes (FAQ)</h1>

      <div className="max-w-3xl mx-auto space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Como usar este gerador de código de barras?</h2>
          <p className="mb-2">Usar nosso gerador de código de barras é simples:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Selecione o tipo de código de barras que deseja criar no menu suspenso.</li>
            <li>Insira os dados que deseja codificar no campo fornecido.</li>
            <li>
              Personalize a aparência do seu código de barras de acordo com suas preferências (cores, tamanho, etc.).
            </li>
            <li>Visualize a pré-visualização em tempo real do seu código de barras.</li>
            <li>Baixe seu código de barras no formato desejado (PNG, JPEG).</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Este gerador de código de barras é gratuito?</h2>
          <p>
            Sim, nosso gerador de código de barras é completamente gratuito. Você pode criar e baixar quantos códigos de
            barras desejar sem nenhum custo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Quais tipos de códigos de barras posso criar?</h2>
          <p className="mb-2">Nosso gerador suporta vários formatos populares de códigos de barras, incluindo:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>EAN-13 (usado globalmente para produtos de varejo)</li>
            <li>EAN-8 (versão curta do EAN para produtos pequenos)</li>
            <li>UPC-A (usado principalmente nos EUA e Canadá)</li>
            <li>Código 128 (código de barras alfanumérico de alta densidade)</li>
            <li>Código 39 (código de barras alfanumérico mais antigo)</li>
            <li>Código QR (código de barras 2D que pode armazenar uma grande quantidade de informações)</li>
            <li>E outros formatos...</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Posso personalizar a aparência dos meus códigos de barras?</h2>
          <p>
            Sim, você pode personalizar vários aspectos dos seus códigos de barras, incluindo a cor do código, a cor de
            fundo (ou optar por um fundo transparente), a altura, a largura e escolher exibir ou não o texto sob o
            código de barras.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Em quais formatos posso baixar meus códigos de barras?</h2>
          <p>
            Você pode baixar seus códigos de barras nos formatos PNG e JPEG. O suporte para o formato SVG será
            adicionado em breve.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Meus dados estão seguros?</h2>
          <p>
            Sim, todas as operações de geração de códigos de barras são realizadas localmente em seu navegador. Seus
            dados nunca são enviados para nossos servidores ou armazenados de qualquer forma.
          </p>
        </section>
      </div>
    </div>
  )
}
