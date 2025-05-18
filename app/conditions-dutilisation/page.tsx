import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions d'Utilisation | CodeBarreGenerator.com",
  description:
    "Consultez nos conditions d'utilisation pour comprendre les règles et restrictions liées à l'utilisation de notre générateur code barre en ligne.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 font-heading">Conditions d'Utilisation</h1>

      <div className="prose prose-lg max-w-none">
        <p className="lead">
          Bienvenue sur CodeBarreGenerator.com. En utilisant notre générateur code barre, vous acceptez de vous
          conformer aux présentes conditions d'utilisation. Veuillez les lire attentivement.
        </p>

        <p className="text-sm text-gray-500">Dernière mise à jour : 18 mai 2025</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">1. Acceptation des conditions</h2>
        <p>
          En accédant à ou en utilisant notre générateur code barre sur CodeBarreGenerator.com, vous acceptez d'être lié
          par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre
          générateur code barre.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">2. Modifications des conditions</h2>
        <p>
          Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur
          dès leur publication sur cette page. Votre utilisation continue de notre générateur code barre après la
          publication des modifications constitue votre acceptation de ces modifications.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">3. Utilisation du service</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Licence d'utilisation</h3>
        <p>
          Nous vous accordons une licence limitée, non exclusive, non transférable et révocable pour utiliser notre
          générateur code barre conformément à ces conditions.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Utilisation autorisée</h3>
        <p>
          Vous pouvez utiliser notre générateur code barre pour créer des codes-barres à des fins personnelles ou
          commerciales. Les codes-barres générés peuvent être utilisés dans vos produits, documents, sites web ou
          applications, sans attribution requise.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Restrictions d'utilisation</h3>
        <p>En utilisant notre générateur code barre, vous acceptez de ne pas :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Utiliser notre service d'une manière qui pourrait endommager, désactiver, surcharger ou compromettre nos
            systèmes
          </li>
          <li>Utiliser des robots, spiders ou autres moyens automatisés pour accéder à notre générateur code barre</li>
          <li>Collecter ou récolter des informations sur d'autres utilisateurs</li>
          <li>
            Créer des codes-barres contenant des informations illégales, offensantes, menaçantes, diffamatoires ou
            autrement inappropriées
          </li>
          <li>Utiliser les codes-barres générés pour des activités frauduleuses ou illégales</li>
          <li>Revendre, redistribuer ou créer un service concurrent basé sur notre générateur code barre</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">4. Propriété intellectuelle</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Notre contenu</h3>
        <p>
          Le générateur code barre, y compris son design, texte, graphiques, interfaces, code et tous les contenus
          associés, sont la propriété de CodeBarreGenerator.com et sont protégés par les lois sur la propriété
          intellectuelle.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Vos contenus</h3>
        <p>
          Les données que vous saisissez dans notre générateur code barre restent votre propriété. Nous ne revendiquons
          aucun droit sur les codes-barres que vous générez.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">5. Limitation de responsabilité</h2>
        <p>
          Notre générateur code barre est fourni "tel quel" et "selon disponibilité", sans garantie d'aucune sorte,
          expresse ou implicite. Nous ne garantissons pas que notre service sera ininterrompu, sécurisé ou exempt
          d'erreurs.
        </p>
        <p>
          En aucun cas, CodeBarreGenerator.com ne sera responsable des dommages directs, indirects, accessoires,
          spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser notre générateur code
          barre.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">6. Indemnisation</h2>
        <p>
          Vous acceptez de défendre, indemniser et de dégager de toute responsabilité CodeBarreGenerator.com, ses
          dirigeants, employés et agents contre toute réclamation, dommage, obligation, perte, responsabilité, coût ou
          dette, et dépense découlant de : (i) votre utilisation de notre générateur code barre ; (ii) votre violation
          de l'une de ces conditions ; (iii) votre violation des droits d'un tiers, y compris les droits d'auteur, de
          propriété ou de confidentialité.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">7. Liens vers d'autres sites</h2>
        <p>
          Notre générateur code barre peut contenir des liens vers des sites tiers qui ne sont ni détenus ni contrôlés
          par CodeBarreGenerator.com. Nous n'avons aucun contrôle et n'assumons aucune responsabilité pour le contenu,
          les politiques de confidentialité ou les pratiques des sites tiers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">8. Résiliation</h2>
        <p>
          Nous nous réservons le droit de résilier ou de suspendre votre accès à notre générateur code barre, sans
          préavis, pour toute raison, y compris, sans limitation, si vous violez ces conditions d'utilisation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">9. Loi applicable</h2>
        <p>
          Ces conditions sont régies et interprétées conformément aux lois en vigueur, sans égard aux principes de
          conflits de lois.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 font-heading">10. Nous contacter</h2>
        <p>Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter à :</p>
        <p>
          <a href="mailto:info@codebarregenerator.com" className="text-primary hover:underline">
            info@codebarregenerator.com
          </a>
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Ces conditions d'utilisation ont été créées spécifiquement pour CodeBarreGenerator.com, votre générateur code
          barre en ligne de confiance.
        </p>
      </div>
    </div>
  )
}
