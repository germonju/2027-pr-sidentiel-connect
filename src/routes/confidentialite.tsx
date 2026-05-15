import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Hugo Varennes 2027" },
      { name: "description", content: "Politique de confidentialité et traitement des données personnelles — varennes2027.com" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Confidentialite,
});

function Confidentialite() {
  useScrollReveal();
  return (
    <div className="container-narrow py-16 max-w-3xl">
      <div className="reveal">
        <span className="tricolore-accent" />
        <h1 className="mt-4 font-display text-4xl font-semibold text-foreground">Politique de confidentialité</h1>
        <p className="mt-2 text-sm text-muted-foreground">Dernière mise à jour : 15 mai 2026 — Conforme au RGPD (Règlement UE 2016/679)</p>
      </div>

      <div className="mt-10 space-y-10 text-foreground/85 leading-relaxed reveal">

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Responsable du traitement</h2>
          <div className="bg-secondary/50 rounded-xl p-5 text-sm space-y-1">
            <p><strong>Comité de soutien Hugo Varennes</strong></p>
            <p>12 rue de la République, 75011 Paris</p>
            <p>Email : <a href="mailto:contact@varennes2027.com" className="text-primary hover:underline">contact@varennes2027.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Données collectées</h2>
          <p>Nous collectons les données personnelles suivantes, uniquement lorsque vous les renseignez volontairement :</p>

          <div className="mt-4 space-y-4">
            <div className="bg-secondary/50 rounded-xl p-5 text-sm">
              <p className="font-semibold text-foreground mb-2">Formulaire de don</p>
              <ul className="space-y-1 list-disc list-inside text-foreground/80">
                <li>Prénom et nom</li>
                <li>Adresse email</li>
                <li>Montant du don</li>
                <li>Données de paiement (traitées par Stripe — non stockées par nos soins)</li>
              </ul>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5 text-sm">
              <p className="font-semibold text-foreground mb-2">Formulaire de contact / bénévolat</p>
              <ul className="space-y-1 list-disc list-inside text-foreground/80">
                <li>Prénom et nom</li>
                <li>Adresse email</li>
                <li>Code postal</li>
                <li>Type d'engagement souhaité</li>
                <li>Message libre (optionnel)</li>
              </ul>
            </div>
            <div className="bg-secondary/50 rounded-xl p-5 text-sm">
              <p className="font-semibold text-foreground mb-2">Inscription aux meetings</p>
              <ul className="space-y-1 list-disc list-inside text-foreground/80">
                <li>Adresse email</li>
                <li>Ville, salle, date et heure du meeting sélectionné</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Finalités du traitement</h2>
          <p>Vos données sont collectées pour les finalités suivantes :</p>
          <ul className="mt-3 space-y-2 text-sm list-disc list-inside text-foreground/80">
            <li>Traitement et confirmation des dons (obligation légale)</li>
            <li>Émission des reçus fiscaux (obligation légale)</li>
            <li>Gestion des inscriptions aux meetings</li>
            <li>Mise en relation avec un référent local de campagne</li>
            <li>Envoi d'informations sur la campagne (avec votre consentement)</li>
            <li>Respect des obligations légales liées au financement politique</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Base légale du traitement</h2>
          <p>Les traitements de données mis en œuvre reposent sur les bases légales suivantes :</p>
          <ul className="mt-3 space-y-2 text-sm list-disc list-inside text-foreground/80">
            <li><strong>Exécution d'un contrat</strong> : traitement des dons et inscriptions</li>
            <li><strong>Obligation légale</strong> : émission des reçus fiscaux, déclarations à la CNCCFP</li>
            <li><strong>Consentement</strong> : envoi de communications politiques et d'informations de campagne</li>
            <li><strong>Intérêt légitime</strong> : sécurité du site, prévention des fraudes</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Durée de conservation</h2>
          <div className="mt-3 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/60">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Type de données</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Durée</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Données de dons", "10 ans (obligation comptable)"],
                  ["Reçus fiscaux", "10 ans (obligation légale)"],
                  ["Inscriptions meetings", "6 mois après la date du meeting"],
                  ["Données bénévoles", "3 ans après le dernier contact"],
                  ["Données de contact", "3 ans après le dernier contact"],
                ].map(([type, duree]) => (
                  <tr key={type} className="hover:bg-secondary/30 transition-colors">
                    <td className="px-4 py-3 text-foreground/80">{type}</td>
                    <td className="px-4 py-3 text-muted-foreground">{duree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Destinataires des données</h2>
          <p>Vos données peuvent être partagées avec les sous-traitants suivants, dans le strict cadre des finalités décrites ci-dessus :</p>
          <ul className="mt-3 space-y-2 text-sm list-disc list-inside text-foreground/80">
            <li><strong>Stripe Inc.</strong> — traitement sécurisé des paiements (USA, garanties RGPD : clauses contractuelles types)</li>
            <li><strong>Resend Inc.</strong> — envoi d'emails transactionnels</li>
            <li><strong>n8n GmbH</strong> — automatisation des workflows</li>
            <li><strong>Cloudflare Inc.</strong> — hébergement et sécurité du site</li>
          </ul>
          <p className="mt-3">Vos données ne sont jamais vendues à des tiers ni utilisées à des fins commerciales.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Vos droits (RGPD)</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
          <ul className="mt-3 space-y-2 text-sm list-disc list-inside text-foreground/80">
            <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : supprimer vos données (sauf obligation légale)</li>
            <li><strong>Droit à la limitation</strong> : restreindre le traitement de vos données</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            <li><strong>Droit de retrait du consentement</strong> : à tout moment, sans rétroactivité</li>
          </ul>
          <p className="mt-4">Pour exercer ces droits, contactez-nous à <a href="mailto:contact@varennes2027.com" className="text-primary hover:underline">contact@varennes2027.com</a>. Nous répondrons dans un délai d'un mois. Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) sur <span className="text-primary">cnil.fr</span>.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Sécurité</h2>
          <p>Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation. Les communications sont chiffrées via HTTPS/TLS. Les paiements sont traités exclusivement par Stripe selon les normes PCI-DSS.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Cookies</h2>
          <p>Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement (session, sécurité). Aucun cookie publicitaire ou de pistage tiers n'est utilisé sans votre consentement préalable.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Modifications</h2>
          <p>Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière modification est indiquée en haut de ce document. Nous vous invitons à la consulter régulièrement.</p>
        </section>

        {/* ── Disclaimer parodique ── */}
        <section className="mt-12 pt-8 border-t-2 border-dashed border-border">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-amber-900 space-y-3">
            <p className="font-semibold text-base">⚠ Avertissement — Site de fiction</p>
            <p>
              <strong>varennes2027.com est un site de fiction et de création artistique.</strong> Les données collectées via les formulaires de ce site sont utilisées uniquement dans le cadre de ce projet de démonstration et ne sont associées à aucun véritable candidat à une élection.
            </p>
            <p>
              En aucun cas l'auteur ou le créateur de ce site ne pourra être tenu responsable de l'interprétation de son contenu, de son usage ou de toute confusion avec un site politique réel. Ce site n'a aucune vocation électorale réelle.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
