import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Hugo Varennes 2027" },
      { name: "description", content: "Mentions légales du site varennes2027.com" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  useScrollReveal();
  return (
    <div className="container-narrow py-16 max-w-3xl">
      <div className="reveal">
        <span className="tricolore-accent" />
        <h1 className="mt-4 font-display text-4xl font-semibold text-foreground">Mentions légales</h1>
        <p className="mt-2 text-sm text-muted-foreground">Dernière mise à jour : 15 mai 2026</p>
      </div>

      <div className="mt-10 space-y-10 text-foreground/85 leading-relaxed reveal">

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Éditeur du site</h2>
          <p>Le site <strong>varennes2027.com</strong> est édité par :</p>
          <div className="mt-3 bg-secondary/50 rounded-xl p-5 text-sm space-y-1">
            <p><strong>Comité de soutien Hugo Varennes</strong></p>
            <p>Association loi 1901</p>
            <p>12 rue de la République, 75011 Paris</p>
            <p>Email : <a href="mailto:contact@varennes2027.com" className="text-primary hover:underline">contact@varennes2027.com</a></p>
            <p>Directeur de la publication : Hugo Varennes</p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Hébergement</h2>
          <div className="bg-secondary/50 rounded-xl p-5 text-sm space-y-1">
            <p><strong>Cloudflare, Inc.</strong></p>
            <p>101 Townsend St, San Francisco, CA 94107, États-Unis</p>
            <p>Site : <span className="text-primary">cloudflare.com</span></p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Propriété intellectuelle</h2>
          <p>L'ensemble des éléments composant le site varennes2027.com (textes, photographies, graphismes, logos, icônes, sons, logiciels) est la propriété exclusive du Comité de soutien Hugo Varennes, à l'exception des éléments provenant de tiers dûment identifiés.</p>
          <p className="mt-3">Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, sans l'autorisation écrite préalable du Comité de soutien Hugo Varennes, est interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Liens hypertextes</h2>
          <p>Le site varennes2027.com peut contenir des liens vers des sites tiers. Ces liens sont fournis à titre indicatif. Le Comité de soutien Hugo Varennes n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Dons et financement politique</h2>
          <p>Conformément à la loi n° 88-227 du 11 mars 1988 relative à la transparence financière de la vie politique, les dons effectués sur ce site sont soumis aux règles suivantes :</p>
          <ul className="mt-3 space-y-2 text-sm list-disc list-inside text-foreground/80">
            <li>Don plafonné à 7 500 € par personne physique et par an</li>
            <li>Les personnes morales (sociétés, associations, etc.) ne peuvent pas effectuer de dons</li>
            <li>Seules les personnes de nationalité française ou résidant en France peuvent contribuer</li>
            <li>Un reçu fiscal ouvrant droit à une réduction d'impôt de 66 % est émis pour chaque don</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Cookies</h2>
          <p>Ce site utilise des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie à des fins publicitaires ou de traçage commercial n'est déposé sans votre consentement explicite.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Droit applicable et juridiction</h2>
          <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents de Paris seront seuls compétents.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Contact</h2>
          <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@varennes2027.com" className="text-primary hover:underline">contact@varennes2027.com</a></p>
        </section>

        {/* ── Disclaimer parodique ── */}
        <section className="mt-12 pt-8 border-t-2 border-dashed border-border">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-amber-900 space-y-3">
            <p className="font-semibold text-base">⚠ Avertissement — Site de fiction</p>
            <p>
              <strong>varennes2027.com est un site de fiction et de création artistique.</strong> Hugo Varennes est un personnage fictif. Ce site a été conçu dans le cadre d'un projet créatif, pédagogique ou parodique.
            </p>
            <p>
              Toute ressemblance avec des personnes réelles, des partis politiques existants ou des événements réels ne serait que fortuite. Les positions politiques, chiffres, programmes et citations présentés sur ce site sont fictifs et ne représentent aucune organisation réelle.
            </p>
            <p>
              En aucun cas l'auteur ou le créateur de ce site ne pourra être tenu responsable de l'usage qui en est fait, de son interprétation ou de toute confusion avec un site politique réel. Ce site n'a pas vocation à tromper le public ni à influencer un processus électoral réel.
            </p>
            <p className="font-medium">
              Si vous souhaitez signaler un usage abusif de ce contenu, contactez-nous à : <a href="mailto:contact@varennes2027.com" className="underline">contact@varennes2027.com</a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
