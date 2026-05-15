import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import portraitElysee from "@/assets/portrait-elysee.png";
import hugoAnne from "@/assets/hugo-anne.png";

export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Biographie — Hugo Varennes" },
      { name: "description", content: "Né à Poitiers en 1972, fils d'un professeur et d'une institutrice, Hugo Varennes a construit un parcours d'exigence et d'engagement au service de la République." },
      { property: "og:title", content: "Biographie d'Hugo Varennes" },
      { property: "og:description", content: "Le parcours d'un homme formé par la République, engagé pour la France." },
    ],
    links: [{ rel: "canonical", href: "/bio" }],
  }),
  component: Bio,
});

const timeline = [
  {
    year: "1972",
    title: "Naissance à Poitiers",
    text: "Fils de Bernard Varennes, professeur de lettres classiques, et de Françoise, institutrice. Une famille où l'on transmettait l'exigence et l'amour de la langue avant l'argent.",
  },
  {
    year: "1989",
    title: "Boursier au lycée Henri-IV",
    text: "Premier déracinement à Paris. Il arrive de Poitiers avec l'accent et les bonnes notes, et comprend que la compétence seule ne suffit pas — il faut aussi apprendre à occuper les espaces qui ne vous étaient pas destinés.",
  },
  {
    year: "1994",
    title: "Sciences Po, puis l'ENA",
    text: "Promotion « Liberté » (1994–1996). Il y développe son talent propre : convaincre — non pas séduire ou imposer, mais rendre les gens d'accord avec une idée qui tient la route.",
  },
  {
    year: "1996",
    title: "Mariage avec Anne Delorme",
    text: "Rencontrée à Sciences Po, Anne est fille de notaires bordelais. Ensemble, ils ont deux enfants : Gabriel, puis Lou. Elle accompagne son engagement avec clarté et intelligence.",
  },
  {
    year: "2010",
    title: "Élu député de la Vienne",
    text: "À 38 ans, après un parcours d'attaché parlementaire, chef de cabinet et conseiller ministériel. Centriste sincère, il s'impose dans les commissions économiques et européennes.",
  },
  {
    year: "2026",
    title: "Candidat à la présidentielle",
    text: "Il lance le mouvement transpartisan « Pour la France de demain » avec une conviction : la France n'a pas besoin d'un sauveur. Elle a besoin de quelqu'un qui comprend comment elle fonctionne.",
  },
];

const valeurs = [
  { n: "30 ans",   l: "D'engagement public" },
  { n: "2 mandats", l: "Comme député" },
  { n: "ENA 1996", l: "Promotion « Liberté »" },
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
            Un parcours forgé par la République, au service de la France.
          </h1>
        </div>
      </section>

      {/* ── PORTRAIT + TEXTE ─────────────────────────────────────── */}
      <section className="container-narrow grid lg:grid-cols-5 gap-12 pb-20">
        {/* Photo */}
        <div className="lg:col-span-2 reveal-left">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl blur-2xl opacity-25"
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
              <div className="flex gap-5 divide-x divide-border">
                {valeurs.map(({ n, l }) => (
                  <div key={l} className="text-center px-3 first:pl-0 last:pr-0">
                    <div className="font-display text-base font-semibold text-primary leading-tight">{n}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5 leading-tight whitespace-nowrap">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Texte */}
        <div className="lg:col-span-3 space-y-6 text-foreground/85 leading-relaxed reveal-right">
          <p className="font-display text-2xl text-foreground font-semibold italic leading-snug">
            « Un pays ne se gouverne pas depuis les sommets. Il se gouverne depuis les réalités. »
          </p>

          <p>
            Hugo Varennes naît le 14 mars 1972 à Poitiers, dans une famille où les livres occupent plus de
            place que l'argent. Son père Bernard, professeur de lettres classiques, lui transmet l'exigence
            et le respect de la langue. Sa mère Françoise, institutrice, lui donne le sens du concret et
            l'ancrage populaire.
          </p>

          <p>
            Boursier au lycée Henri-IV à Paris à 17 ans, il vit son premier grand déracinement. Il arrive
            de Poitiers avec l'accent et les bonnes notes. Il comprend vite que la compétence ne suffit pas
            — il faut aussi apprendre à occuper les espaces qui ne vous étaient pas destinés. C'est là que
            se forge sa conviction première : les institutions de la République doivent s'ouvrir à ceux qui
            méritent d'y entrer, pas seulement à ceux qui y sont nés.
          </p>

          <p>
            Diplômé de Sciences Po Paris, il entre à l'ENA en 1994 (promotion « Liberté »). Il y confirme
            un talent singulier : convaincre — rendre les gens d'accord avec une idée juste, avant même
            qu'ils aient compris pourquoi cette idée leur est indispensable.
          </p>

          <p>
            Sa carrière politique est méthodique, sans raccourci : attaché parlementaire, chef de cabinet,
            conseiller ministériel, député de la Vienne à 38 ans. Centriste sincère, il croit à l'Europe
            comme puissance, à la République comme socle commun, à la rigueur comme condition de la
            promesse publique. Ce qu'il ne supporte pas : les postures. Ce qu'il cherche : les faits,
            et les gens capables de les regarder en face.
          </p>

          <p>
            À 52 ans, il nage seul chaque matin à 6h avant de lire trois journaux. C'est l'heure où il
            est simplement lui-même — avant les discours, avant les agendas. Il se lance dans cette
            campagne avec une conviction nette : la France n'a pas besoin d'un sauveur. Elle a besoin
            de quelqu'un qui comprend comment elle fonctionne, et qui est prêt à faire le travail.
          </p>
        </div>
      </section>

      {/* ── PHOTO COUPLE ─────────────────────────────────────────── */}
      <section className="container-narrow pb-16">
        <div className="reveal rounded-3xl overflow-hidden border border-border bg-secondary/40 md:grid md:grid-cols-2">
          {/* Photo — hauteur fixe mobile, stretch desktop */}
          <div className="h-72 md:h-auto relative overflow-hidden">
            <img
              src={hugoAnne}
              alt="Hugo Varennes et Anne Delorme"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          {/* Texte */}
          <div className="px-8 py-10">
            <span className="tricolore-accent" />
            <h2 className="mt-5 font-display text-2xl font-semibold text-foreground">
              Avec Anne, à ses côtés.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Hugo Varennes et Anne Delorme se rencontrent à Sciences Po Paris. Fille de notaires bordelais,
              Anne est avocate. Ensemble depuis trente ans, ils ont deux enfants : Gabriel et Lou.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              « Anne est ma boussole. Elle dit ce que les autres n'osent pas. C'est la qualité la plus
              rare qui soit. »
            </p>
            <p className="mt-4 text-xs text-muted-foreground/60 italic">
              — Hugo Varennes, mars 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container-narrow">
          <div className="reveal mb-12">
            <span className="tricolore-accent" />
            <h2 className="mt-4 font-display text-4xl font-semibold text-foreground">Le parcours</h2>
          </div>

          <ol className="relative border-l-2 border-primary/25 pl-10 space-y-10">
            {timeline.map((t, i) => (
              <li
                key={t.year}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} relative`}
              >
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

      {/* ── VALEURS ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-narrow">
          <div className="reveal mb-10">
            <span className="tricolore-accent" />
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground">Ses convictions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                titre: "L'Europe comme puissance",
                texte: "Il croit à une Europe capable de défendre ses intérêts, de parler d'une voix unie face aux grandes puissances. Pas une Europe subie — une Europe choisie et assumée.",
              },
              {
                titre: "La République comme socle",
                texte: "La laïcité, l'égalité des chances, l'autorité de l'État : ce ne sont pas des archaïsmes. Ce sont les conditions sans lesquelles aucune promesse collective ne tient.",
              },
              {
                titre: "La rigueur comme respect",
                texte: "Les promesses sans financement sont une forme de mépris. Chaque engagement de sa campagne est chiffré, sourcé, opposable. C'est une question d'honnêteté.",
              },
            ].map((v, i) => (
              <div
                key={v.titre}
                className={`reveal reveal-delay-${i + 1} card-hover cursor-pointer bg-card border border-border rounded-2xl p-7`}
              >
                <div
                  className="w-8 h-1 rounded-full mb-5"
                  style={{ background: "var(--gradient-tricolore)" }}
                />
                <h3 className="font-display text-xl font-semibold text-foreground">{v.titre}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
