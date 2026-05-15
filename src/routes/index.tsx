import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Leaf, Shield, GraduationCap, Heart, Briefcase, Globe2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import portraitElysee from "@/assets/portrait-elysee.png";
import rallySoir from "@/assets/rally-soir.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hugo Varennes — Pour la France de demain | Présidentielle 2027" },
      { name: "description", content: "Découvrez Hugo Varennes, candidat à l'élection présidentielle de 2027. Un projet d'avenir pour une France juste, souveraine et écologique." },
      { property: "og:title", content: "Hugo Varennes — Présidentielle 2027" },
      { property: "og:description", content: "Pour la France de demain. Découvrez le programme et engagez-vous." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const piliers = [
  { icon: Leaf,          title: "Transition écologique", text: "Un plan climat ambitieux, juste, créateur d'emplois durables." },
  { icon: Shield,        title: "Sécurité & justice",    text: "Restaurer l'autorité républicaine et la confiance dans nos institutions." },
  { icon: GraduationCap, title: "École & savoirs",       text: "Refonder l'école : exigence, méritocratie, égalité des chances." },
  { icon: Heart,         title: "Santé pour tous",       text: "Désengorger les hôpitaux, lutter contre les déserts médicaux." },
  { icon: Briefcase,     title: "Emploi & industrie",    text: "Réindustrialiser la France, valoriser le travail et les compétences." },
  { icon: Globe2,        title: "Souveraineté",          text: "Une voix forte pour la France en Europe et dans le monde." },
];

function Index() {
  useScrollReveal();

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "var(--bleu-deep)" }}
      >
        {/* Glow orbs décoratifs */}
        <div
          className="absolute -top-48 -left-48 h-[800px] w-[800px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.22), transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/3 h-[500px] w-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(237,41,57,0.1), transparent 70%)" }}
        />

        {/* Portrait — côté droit desktop */}
        <div
          className="hero-animate-img absolute inset-y-0 right-0 hidden lg:block"
          style={{ width: "48%" }}
        >
          <img
            src={portraitElysee}
            alt="Portrait officiel de Hugo Varennes, candidat à la présidentielle 2027"
            className="h-full w-full object-cover object-top"
          />
          {/* Fondu gauche */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--bleu-deep) 0%, color-mix(in oklab, var(--bleu-deep) 35%, transparent) 42%, transparent 100%)",
            }}
          />
          {/* Fondu bas */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, var(--bleu-deep) 0%, transparent 28%)" }}
          />
        </div>

        {/* Contenu principal */}
        <div className="container-narrow relative z-10 w-full pt-20 pb-28 lg:pb-16">
          <div className="max-w-xl">

            {/* Portrait mobile */}
            <div className="hero-animate delay-100 lg:hidden mb-8 aspect-[4/5] rounded-2xl overflow-hidden max-w-[220px]">
              <img
                src={portraitElysee}
                alt="Hugo Varennes"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Badge */}
            <div
              className="hero-animate delay-100 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-medium tracking-wide"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red-400 pulse-dot" />
              Élection présidentielle · Avril 2027
            </div>

            {/* H1 */}
            <h1
              className="hero-animate delay-200 mt-7 font-display font-semibold leading-[1.05] tracking-tight text-white"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)" }}
            >
              Pour la France
              <br />
              <em style={{ color: "rgba(255,255,255,0.52)", fontStyle: "italic" }}>de demain.</em>
            </h1>

            {/* Accroche */}
            <p
              className="hero-animate delay-300 mt-6 text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.62)", maxWidth: "430px" }}
            >
              Fils d'un professeur et d'une institutrice, formé par la République,
              député pendant quinze ans : Hugo Varennes sait d'où il vient,
              et sait où mener la France.
            </p>

            {/* CTA */}
            <div className="hero-animate delay-400 mt-9 flex flex-wrap gap-3">
              <Link
                to="/programme"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ color: "var(--bleu-deep)" }}
              >
                Découvrir le programme <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/engagement"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Rejoindre le mouvement
              </Link>
            </div>

            {/* Stats */}
            <div
              className="hero-animate delay-500 mt-12 grid grid-cols-3 gap-6 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              {[
                { n: "+120k", l: "Soutiens" },
                { n: "350", l: "Comités locaux" },
                { n: "30 ans", l: "D'engagement" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div className="font-display text-3xl font-semibold text-white">{n}</div>
                  <div
                    className="mt-1 text-[11px] uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Citation flottante — desktop uniquement */}
        <div className="hero-animate delay-700 hidden xl:block absolute bottom-14 right-10 z-20">
          <div
            className="rounded-2xl p-5 max-w-[250px] border"
            style={{
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderColor: "rgba(255,255,255,0.14)",
            }}
          >
            <p className="font-display italic text-sm text-white/85 leading-snug">
              « La France n'a pas besoin de promesses. Elle a besoin de preuves. »
            </p>
            <p className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              — Hugo Varennes
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="h-5 w-5 bounce-y" style={{ color: "rgba(255,255,255,0.35)" }} />
        </div>
      </section>

      {/* ── PILIERS ─────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="container-narrow">
          <div className="reveal mb-12">
            <span className="tricolore-accent" />
            <p className="mt-4 text-xs uppercase tracking-widest text-destructive font-semibold">Le projet</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-foreground">
              Six combats pour relever la France.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {piliers.map((p, i) => (
              <div
                key={p.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-hover group cursor-pointer bg-card rounded-2xl p-7 border border-border`}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 reveal">
            <Link
              to="/programme"
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              Lire le programme complet <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CITATION MANIFESTE ──────────────────────────────────── */}
      <section className="py-20 border-y border-border bg-secondary/40">
        <div className="container-narrow max-w-3xl mx-auto text-center reveal">
          <div className="tricolore-accent mx-auto mb-8" />
          <blockquote className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            « Un pays ne se gouverne pas depuis les sommets. Il se gouverne depuis les réalités.
            C'est pour ça que je me lève chaque matin. »
          </blockquote>
          <footer className="mt-6 text-sm text-muted-foreground">
            Hugo Varennes · Discours de lancement de campagne, mars 2026
          </footer>
        </div>
      </section>

      {/* ── RALLY CTA ───────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={rallySoir}
          alt="Hugo Varennes au discours de campagne"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, color-mix(in oklab, var(--bleu) 93%, transparent) 0%, color-mix(in oklab, var(--bleu) 72%, transparent) 55%, transparent 100%)",
          }}
        />
        <div className="container-narrow relative">
          <div className="max-w-xl text-primary-foreground reveal-left">
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Le changement, ensemble.
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/85 leading-relaxed">
              Rejoignez les milliers de citoyens qui construisent la France de 2027.
              Engagez-vous, faites un don, devenez bénévole.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/engagement"
                className="cursor-pointer rounded-xl bg-destructive px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Faire un don
              </Link>
              <Link
                to="/engagement"
                className="cursor-pointer rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Devenir bénévole
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
