import Link from "next/link"
import type { Metadata } from "next"
import SEO from "@/components/seo"

export const metadata: Metadata = {
  title: "Page non trouvée | CodeBarreGenerator.com",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Page non trouvée | CodeBarreGenerator.com"
        description="La page que vous recherchez n'existe pas ou a été déplacée."
        canonicalPath="/404"
        noindex={true}
      />

      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Cette page n'a pas pu être trouvée.</p>
        <Link href="/" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
