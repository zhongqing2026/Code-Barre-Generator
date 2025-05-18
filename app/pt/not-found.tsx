import Link from "next/link"
import type { Metadata } from "next"
import SEO from "@/components/seo"

export const metadata: Metadata = {
  title: "Página não encontrada | CodeBarreGenerator.com",
  description: "A página que você está procurando não existe ou foi movida.",
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Página não encontrada | CodeBarreGenerator.com"
        description="A página que você está procurando não existe ou foi movida."
        canonicalPath="/pt/404"
        locale="pt"
        noindex={true}
      />

      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Esta página não pôde ser encontrada.</p>
        <Link href="/pt" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}
