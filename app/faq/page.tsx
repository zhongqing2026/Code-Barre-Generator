import { translations } from "@/lib/translations"
import { FAQSchema } from "@/components/structured-data"
import SEOHead from "@/components/seo-head"

export const metadata = {
  title: "FAQ | Code Barre Generator",
  description: "Questions fréquemment posées sur notre générateur de code barre en ligne gratuit.",
}

export default function FAQPage() {
  const t = translations.fr

  // 为FAQ结构化数据准备数据
  const faqItems = t.faq.questions.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))

  return (
    <div className="container mx-auto px-4 py-8">
      <SEOHead
        title="FAQ - Questions Fréquentes | Générateur de Code Barre"
        description="Trouvez des réponses aux questions fréquentes sur notre générateur de code barre en ligne gratuit. Apprenez comment créer, personnaliser et utiliser des codes-barres pour vos besoins."
        canonicalPath="/faq"
        locale="fr"
      />

      <FAQSchema questions={faqItems} />

      <h1 className="text-3xl font-bold mb-8">Foire Aux Questions (FAQ)</h1>

      <div className="max-w-3xl mx-auto space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Comment utiliser ce générateur de code barre ?</h2>
          <p className="mb-2">L'utilisation de notre générateur de code barre est simple :</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Sélectionnez le type de code-barres que vous souhaitez créer dans le menu déroulant.</li>
            <li>Entrez les données que vous souhaitez encoder dans le champ prévu à cet effet.</li>
            <li>Personnalisez l'apparence de votre code-barres selon vos préférences (couleurs, taille, etc.).</li>
            <li>Visualisez l'aperçu en temps réel de votre code-barres.</li>
            <li>Téléchargez votre code-barres au format souhaité (PNG, JPEG).</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Ce générateur de code barre est-il gratuit ?</h2>
          <p>
            Oui, notre générateur de code barre est entièrement gratuit. Vous pouvez créer et télécharger autant de
            codes-barres que vous le souhaitez sans aucun frais.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Quels types de codes-barres puis-je créer ?</h2>
          <p className="mb-2">
            Notre générateur prend en charge plusieurs formats populaires de codes-barres, notamment :
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>EAN-13 (utilisé mondialement pour les produits de détail)</li>
            <li>EAN-8 (version courte de l'EAN pour les petits produits)</li>
            <li>UPC-A (principalement utilisé aux États-Unis et au Canada)</li>
            <li>Code 128 (code-barres alphanumérique haute densité)</li>
            <li>Code 39 (code-barres alphanumérique plus ancien)</li>
            <li>QR Code (code-barres 2D pouvant stocker une grande quantité d'informations)</li>
            <li>Et d'autres formats...</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Puis-je personnaliser l'apparence de mes codes-barres ?</h2>
          <p>
            Oui, vous pouvez personnaliser plusieurs aspects de vos codes-barres, notamment la couleur du code, la
            couleur de fond (ou opter pour un fond transparent), la hauteur, la largeur, et choisir d'afficher ou non le
            texte sous le code-barres.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Dans quels formats puis-je télécharger mes codes-barres ?</h2>
          <p>
            Vous pouvez télécharger vos codes-barres aux formats PNG et JPEG. Le support pour le format SVG sera ajouté
            prochainement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Mes données sont-elles sécurisées ?</h2>
          <p>
            Oui, toutes les opérations de génération de codes-barres sont effectuées localement dans votre navigateur.
            Vos données ne sont jamais envoyées à nos serveurs ni stockées de quelque manière que ce soit.
          </p>
        </section>
      </div>
    </div>
  )
}
