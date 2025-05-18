import type { Metadata } from "next"
import Link from "next/link"
import SEOHead from "@/components/seo-head-optimized"
import { BreadcrumbSchema, WebApplicationSchema } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Générateur Code Barre - Outil en Ligne Gratuit | CodeBarreGenerator.com",
  description:
    "Utilisez notre générateur code barre en ligne gratuit pour créer des codes-barres professionnels. Simple, rapide et sans installation. Idéal pour tous vos projets.",
}

export default function GenerateurCodeBarrePage() {
  const breadcrumbItems = [
    {
      name: "Accueil",
      item: "https://codebarregenerator.com/",
    },
    {
      name: "Générateur Code Barre",
      item: "https://codebarregenerator.com/generateur-code-barre",
    },
  ]

  // 法语关键词
  const frKeywords = [
    "générateur code barre",
    "code barre generator",
    "générateur de code barre gratuit",
    "créer code barre en ligne",
    "générateur code barre en ligne",
    "outil code barre gratuit",
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SEOHead
        title="Générateur Code Barre - Outil en Ligne Gratuit | CodeBarreGenerator.com"
        description="Utilisez notre générateur code barre en ligne gratuit pour créer des codes-barres professionnels. Simple, rapide et sans installation. Idéal pour tous vos projets."
        canonicalPath="/generateur-code-barre"
        locale="fr"
        keywords={frKeywords}
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <WebApplicationSchema
        name="Générateur Code Barre"
        description="Générateur code barre en ligne gratuit et facile à utiliser. Créez des codes-barres de haute qualité en quelques clics."
        url="https://codebarregenerator.com/generateur-code-barre"
      />

      <h1 className="text-4xl font-bold mb-6 font-heading">Générateur Code Barre en Ligne Gratuit</h1>

      <div className="prose prose-lg max-w-none">
        <p className="lead text-xl">
          Bienvenue sur notre page dédiée au <strong>générateur code barre</strong> en ligne. Créez facilement et
          gratuitement des codes-barres professionnels pour tous vos besoins.
        </p>

        <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Pourquoi utiliser notre générateur code barre ?</h2>
          <ul className="space-y-2">
            <li>
              ✓ <strong>Entièrement gratuit</strong> - Notre générateur code barre est 100% gratuit, sans limitations
              cachées
            </li>
            <li>
              ✓ <strong>Facile à utiliser</strong> - Interface intuitive, aucune compétence technique requise
            </li>
            <li>
              ✓ <strong>Multiples formats</strong> - Créez des codes EAN, UPC, Code 128, Code 39, QR et plus
            </li>
            <li>
              ✓ <strong>Personnalisation complète</strong> - Ajustez les couleurs, dimensions et autres paramètres
            </li>
            <li>
              ✓ <strong>Téléchargement instantané</strong> - Obtenez vos codes-barres en PNG, JPEG ou SVG
            </li>
            <li>
              ✓ <strong>Sécurité des données</strong> - Traitement local dans votre navigateur, aucune donnée stockée
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Comment fonctionne notre générateur code barre</h2>
        <p>
          Notre <strong>code barre generator</strong> est conçu pour être aussi simple que possible. Voici comment
          l'utiliser en quelques étapes faciles :
        </p>

        <ol className="list-decimal pl-6 space-y-4 my-6">
          <li>
            <strong>Sélectionnez le type de code-barres</strong> - Choisissez parmi une variété de formats selon vos
            besoins (EAN-13, UPC-A, Code 128, etc.)
          </li>
          <li>
            <strong>Entrez vos données</strong> - Saisissez les informations que vous souhaitez encoder dans votre
            code-barre
          </li>
          <li>
            <strong>Personnalisez l'apparence</strong> - Ajustez les couleurs, dimensions et autres options selon vos
            préférences
          </li>
          <li>
            <strong>Prévisualisez le résultat</strong> - Vérifiez que votre code-barre correspond à vos attentes
          </li>
          <li>
            <strong>Téléchargez votre code-barre</strong> - Enregistrez-le dans le format de votre choix (PNG, JPEG,
            SVG)
          </li>
        </ol>

        <div className="my-8 text-center">
          <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
            <Link href="/#barcode-generator">
              Essayer notre générateur code barre maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Applications de notre générateur code barre</h2>
        <p>
          Notre <strong>générateur code barre</strong> est utilisé dans de nombreux secteurs et pour diverses
          applications :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Commerce de détail</h3>
            <p>Créez des codes EAN-13 ou UPC-A pour l'étiquetage de vos produits et la gestion de votre inventaire.</p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Logistique</h3>
            <p>
              Utilisez des codes Code 128 ou Code 39 pour le suivi des colis et la gestion de la chaîne
              d'approvisionnement.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Marketing</h3>
            <p>
              Générez des QR codes pour vos campagnes marketing, permettant aux clients d'accéder rapidement à vos sites
              web ou promotions.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-medium mb-2">Bibliothèques</h3>
            <p>Créez des codes-barres pour cataloguer et suivre les livres et autres ressources.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Types de codes-barres disponibles</h2>
        <p>
          Notre <strong>générateur code barre</strong> prend en charge une large gamme de formats de codes-barres,
          notamment :
        </p>

        <ul className="space-y-4 my-6">
          <li>
            <strong>EAN-13</strong> - Le standard international pour les produits de détail, utilisé dans le monde
            entier
          </li>
          <li>
            <strong>UPC-A</strong> - Principalement utilisé aux États-Unis et au Canada pour les produits de détail
          </li>
          <li>
            <strong>Code 128</strong> - Un code-barres haute densité capable d'encoder tous les caractères ASCII
          </li>
          <li>
            <strong>Code 39</strong> - Un format plus ancien mais toujours largement utilisé dans de nombreuses
            industries
          </li>
          <li>
            <strong>EAN-8</strong> - Une version plus courte de l'EAN-13, idéale pour les petits produits
          </li>
          <li>
            <strong>QR Code</strong> - Un code 2D capable de stocker beaucoup plus d'informations qu'un code-barres
            linéaire
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Pourquoi choisir notre générateur code barre ?</h2>
        <p>
          Il existe de nombreux outils de génération de codes-barres, mais notre <strong>générateur code barre</strong>{" "}
          se distingue par plusieurs avantages :
        </p>

        <ul className="space-y-2 my-6">
          <li>
            ✓ <strong>Aucune inscription requise</strong> - Commencez à utiliser notre générateur immédiatement
          </li>
          <li>
            ✓ <strong>Pas de filigrane</strong> - Vos codes-barres sont propres et professionnels
          </li>
          <li>
            ✓ <strong>Interface intuitive</strong> - Facile à utiliser, même pour les débutants
          </li>
          <li>
            ✓ <strong>Haute qualité</strong> - Codes-barres précis et lisibles par tous les scanners standard
          </li>
          <li>
            ✓ <strong>Confidentialité garantie</strong> - Vos données restent sur votre appareil
          </li>
        </ul>

        <div className="my-8 text-center">
          <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
            <Link href="/#barcode-generator">
              Créer un code-barre maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">FAQ sur notre générateur code barre</h2>

        <div className="space-y-6 my-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Le générateur code barre est-il vraiment gratuit ?</h3>
            <p>
              Oui, notre générateur code barre est entièrement gratuit. Vous pouvez créer autant de codes-barres que
              vous le souhaitez sans aucun coût.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              Puis-je utiliser les codes-barres générés à des fins commerciales ?
            </h3>
            <p>
              Absolument ! Les codes-barres créés avec notre générateur code barre peuvent être utilisés à des fins
              personnelles ou commerciales sans restriction.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Les codes-barres générés sont-ils conformes aux normes ?</h3>
            <p>
              Oui, tous les codes-barres créés avec notre générateur code barre sont conformes aux normes
              internationales et peuvent être lus par tous les scanners standard.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              Dois-je installer un logiciel pour utiliser votre générateur code barre ?
            </h3>
            <p>
              Non, notre générateur code barre fonctionne entièrement dans votre navigateur. Aucune installation n'est
              nécessaire.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4">Prêt à créer vos codes-barres ?</h2>
          <p className="mb-6">
            Notre <strong>générateur code barre</strong> est à votre disposition gratuitement. Commencez dès maintenant
            à créer des codes-barres professionnels pour tous vos besoins.
          </p>
          <div className="text-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
              <Link href="/#barcode-generator">
                Accéder au générateur code barre
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
