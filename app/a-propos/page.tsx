import type { Metadata } from "next"
import SEOHead from "@/components/seo-head"
import { BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "À propos de nous | CodeBarreGenerator.com",
  description:
    "Découvrez l'histoire et la mission de CodeBarreGenerator.com, votre générateur code barre en ligne gratuit et fiable depuis 2020.",
}

export default function AboutPage() {
  const breadcrumbItems = [
    {
      name: "Accueil",
      item: "https://codebarregenerator.com/",
    },
    {
      name: "À propos de nous",
      item: "https://codebarregenerator.com/a-propos",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SEOHead
        title="À propos de CodeBarreGenerator.com | Notre Histoire et Mission"
        description="Découvrez l'histoire, la mission et les valeurs derrière CodeBarreGenerator.com, votre générateur de code-barres en ligne gratuit et fiable depuis 2020."
        canonicalPath="/a-propos"
        locale="fr"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <h1 className="text-3xl font-bold mb-8 font-heading">À propos de CodeBarreGenerator.com</h1>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Notre histoire</h2>
        <p>
          Bienvenue sur CodeBarreGenerator.com, votre destination de confiance pour la génération de codes-barres en
          ligne. Fondé en 2020, notre générateur code barre est né d'une vision simple : rendre la création de
          codes-barres accessible à tous, sans nécessiter de compétences techniques ou de logiciels coûteux.
        </p>

        <p>
          Notre équipe de développeurs passionnés a créé ce générateur code barre en ligne avec l'objectif de combiner
          simplicité d'utilisation et fonctionnalités professionnelles. Au fil des années, nous avons continuellement
          amélioré notre plateforme en fonction des retours de nos utilisateurs, faisant de CodeBarreGenerator.com l'un
          des outils de génération de codes-barres les plus appréciés sur internet.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Notre mission</h2>
        <p>
          Chez CodeBarreGenerator.com, notre mission est de fournir un générateur code barre gratuit, fiable et facile à
          utiliser pour les particuliers et les professionnels du monde entier. Nous croyons que des outils de qualité
          professionnelle devraient être accessibles à tous, indépendamment de leur budget ou de leurs compétences
          techniques.
        </p>

        <p>
          Notre générateur code barre en ligne est conçu pour répondre aux besoins variés de nos utilisateurs, qu'il
          s'agisse de petites entreprises cherchant à étiqueter leurs produits, d'organisations gérant leur inventaire,
          ou de particuliers travaillant sur des projets personnels.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Nos valeurs</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Accessibilité</strong> : Notre générateur code barre reste entièrement gratuit, sans limitations
            cachées ni fonctionnalités premium.
          </li>
          <li>
            <strong>Qualité</strong> : Nous nous engageons à fournir des codes-barres de haute qualité qui fonctionnent
            parfaitement dans tous les environnements.
          </li>
          <li>
            <strong>Confidentialité</strong> : Votre vie privée est importante. Notre générateur code barre traite
            toutes les données localement dans votre navigateur, sans jamais les envoyer à nos serveurs.
          </li>
          <li>
            <strong>Innovation</strong> : Nous améliorons constamment notre générateur code barre en ligne pour intégrer
            les dernières technologies et répondre aux besoins évolutifs de nos utilisateurs.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Notre technologie</h2>
        <p>
          CodeBarreGenerator.com utilise les technologies web les plus récentes pour offrir une expérience utilisateur
          fluide et réactive. Notre générateur code barre prend en charge une large gamme de formats de codes-barres,
          notamment EAN-13, EAN-8, UPC-A, Code 128, Code 39, et les codes QR, avec des options de personnalisation
          étendues pour répondre à tous vos besoins.
        </p>

        <p>
          Contrairement à d'autres services, notre générateur code barre en ligne fonctionne entièrement dans votre
          navigateur, ce qui garantit des temps de génération rapides et une confidentialité totale de vos données.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">Contactez-nous</h2>
        <p>
          Nous sommes toujours à l'écoute de vos commentaires et suggestions pour améliorer notre générateur code barre.
          Si vous avez des questions, des idées ou des préoccupations, n'hésitez pas à nous contacter à
          <a href="mailto:info@codebarregenerator.com" className="text-primary hover:underline mx-1">
            info@codebarregenerator.com
          </a>
          .
        </p>

        <p className="mt-8 text-sm text-gray-500">Dernière mise à jour : 18 mai 2025</p>
      </div>
    </div>
  )
}
