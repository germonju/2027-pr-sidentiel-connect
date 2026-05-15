import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import portraitElysee from "@/assets/portrait-elysee.png";

export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Biographie — Hugo Varennes" },
      { name: "description", content: "Découvrez le parcours d'Hugo Varennes : engagements, expériences et convictions au service de la France." },
      { property: "og:title", content: "Biographie d'Hugo Varennes" },
      { property: "og:description", content: "Le parcours d'un candidat profondément attaché à la République." },
    ],
    links: [{ rel: "canonical", href: "/bio" }],
  }),
  component: Bio,
});

const timeline = [
  { year: "1980", title: "Naissance à Lyon",         text: "Issu d'une famille d'enseignants et d'artisans, dans une ville ouvrière." },
  { year: "2003", title: "Diplômé de Sciences Po",   text: "Spécialisation affaires publiques et économie. Major de promotion." },
  { year: "2008", title: "Engagement associatif",    text: "Fonde un réseau d'aide à l'emploi qui accompagne 2 000 jeunes en banlieue lyonnaise." },
  { year: "2014", title: "Élu maire",                text: "Maire d'une commune de 30 000 habitants pendant deux mandats consécutifs." },
  { year: "2022", title: "Député",                   text: "Élu à l'Assemblée nationale, membre de la commission des Finances." },
  { year: "2026", title: "Candidat à la présidentielle", text: "Lance le mouvement transpartisan « Pour la France de demain »." },
];

const valeurs = [
  { n: "2 mandats", l: "Maire élu" },
  { n: "2 000+",    l: "Jeunes accompagnés" },
  { n: "4 ans",     l: "À l'Assemblée" },
];

function Bio() {
  useScrollReveal();

  return (
    <>
      {/* ── EN-TÊTE ─────────────────────────────────────────────── */}
      <section className="container-narrow pt-16 pb-12">
        <div className="reveal">
          <span className="tricolore-accent" />
          <p className="mt-4 text-xs uppercase tracking-widest text-destructive font-semibold">L'homme</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold text-foreground max-w-3xl leading-tight">
            Un parcours d'engagement, au plus près des Français.
          </h1>
        </div>
      </section>

      {/* ── PORTRAIT + TEXTE ─────────────────────────────────────── */}
      <section className="container-narrow grid lg:grid-cols-5 gap-12 pb-20">
        {/* Photo */}
        <div className="lg:col-span-2 reveal-left">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl blur-2xl opacity-30"
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={portraitElysee}
                alt="Hugo Varennes"
                className="h-full w-full object-cover object-top"
              />
            </div>
            {/* Stats flottants */}
            <div className="absolute -bottom-5 -right-4 bg-card border border-border rounded-xl p-4 shadow-[var(--shadow-card)]">
              <div className="grid grid-cols-3 gap-4 divide-x divide-border">
                {valeurs.map(({ n, l }) => (
                  <div key={l} className="text-center px-2">
                    <div className="font-display text-xl font-semibold text-primary">{n}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5 leading-tight">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Texte biographique */}
        <div className="lg:col-span-3 space-y-6 text-foreground/85 leading-relaxed reveal-right">
          <p className="font-display text-2xl text-foreground font-semibold italic leading-snug">
            « Je crois en une France lucide, qui regarde ses fractures en face et choisit l'unité plutôt que la division. »
          </p>
          <p>
            Hugo Varennes a grandi entre Lyon et l'Ardèche, dans une famille où l'on transmettait le goût
            du travail bien fait et l'amour de la République. Après des études à Sciences Po Paris, il
            choisit le terrain : il fonde une association qui accompagne des centaines de jeunes vers l'emploi.
          </p>
          <p>
            Élu maire en 2014 puis député en 2022, il s'est imposé comme une voix singulière : pragmatique,
            exigeante, attachée à l'intérêt général. Il porte aujourd'hui un mouvement transpartisan
            rassemblant maires, entrepreneurs, chercheurs, soignants et citoyens engagés.
          </p>
          <p>
            Père de trois enfants, il vit aujourd'hui à Paris. Il défend une vision claire : une France
            qui protège, qui produit, et qui transmet aux générations futures.
          </p>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container-narrow">
          <div className="reveal mb-12">
            <span className="tricolore-accent" />
            <h2 className="mt-4 font-display text-4xl font-semibold text-foreground">Quelques dates</h2>
          </div>

          <ol className="relative border-l-2 border-primary/25 pl-10 space-y-10">
            {timeline.map((t, i) => (
              <li
                key={t.year}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} relative`}
              >
                {/* Dot */}
                <span className="absolute -left-[45px] top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-background shadow-sm" />

                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="font-display text-3xl text-primary font-semibold">{t.year}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground">{t.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xl">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
