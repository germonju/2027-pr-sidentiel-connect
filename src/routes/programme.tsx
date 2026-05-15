import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Shield, GraduationCap, Heart, Briefcase, Globe2, Home, Scale, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: "Programme — Hugo Varennes 2027" },
      { name: "description", content: "Le projet d'Hugo Varennes pour la France : écologie, sécurité, école, santé, économie, souveraineté, logement, justice." },
      { property: "og:title", content: "Programme — Hugo Varennes 2027" },
      { property: "og:description", content: "Huit grands chantiers pour la France de demain." },
    ],
    links: [{ rel: "canonical", href: "/programme" }],
  }),
  component: Programme,
});

const themes = [
  {
    icon: Leaf,          color: "bg-emerald-500/10 text-emerald-600", title: "Écologie",
    measures: ["Plan climat 2030 chiffré et financé", "Rénovation thermique de 700 000 logements/an", "Sortie progressive des énergies fossiles"],
  },
  {
    icon: Shield,        color: "bg-primary/10 text-primary",          title: "Sécurité",
    measures: ["+15 000 policiers et gendarmes sur le terrain", "Justice de proximité dans chaque tribunal", "Lutte renforcée contre les trafics"],
  },
  {
    icon: GraduationCap, color: "bg-amber-500/10 text-amber-600",      title: "Éducation",
    measures: ["Revalorisation salariale des enseignants", "Classes dédoublées en CP/CE1 partout en France", "Service civique d'apprentissage à 16 ans"],
  },
  {
    icon: Heart,         color: "bg-rose-500/10 text-rose-600",        title: "Santé",
    measures: ["Plan d'urgence pour l'hôpital public", "Fin des déserts médicaux d'ici 2030", "Prise en charge intégrale de la santé mentale"],
  },
  {
    icon: Briefcase,     color: "bg-sky-500/10 text-sky-600",          title: "Emploi & industrie",
    measures: ["Réindustrialiser via les filières d'avenir", "Prime à la production en France", "Objectif 1 million d'apprentis"],
  },
  {
    icon: Globe2,        color: "bg-violet-500/10 text-violet-600",    title: "Souveraineté",
    measures: ["Europe puissance, France indépendante", "Défense : 2,5 % du PIB d'ici 2030", "Politique migratoire ferme et humaine"],
  },
  {
    icon: Home,          color: "bg-orange-500/10 text-orange-600",    title: "Logement",
    measures: ["Construire 500 000 logements abordables", "Encadrement renforcé des loyers en zone tendue", "Lutte contre l'habitat indigne"],
  },
  {
    icon: Scale,         color: "bg-teal-500/10 text-teal-600",        title: "Démocratie",
    measures: ["Référendum d'initiative citoyenne renforcé", "Lutte contre les conflits d'intérêts", "Proportionnelle partielle aux législatives"],
  },
];

function Programme() {
  useScrollReveal();

  return (
    <>
      {/* ── EN-TÊTE ─────────────────────────────────────────────── */}
      <section className="container-narrow pt-16 pb-12">
        <div className="reveal">
          <span className="tricolore-accent" />
          <p className="mt-4 text-xs uppercase tracking-widest text-destructive font-semibold">Le programme</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold text-foreground max-w-3xl leading-tight">
            Huit chantiers concrets, un cap clair.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Un projet construit avec des élus, experts et citoyens. Chiffré, financé, opposable.
            Voici les grandes lignes.
          </p>
        </div>
      </section>

      {/* ── GRILLE DES THÈMES ───────────────────────────────────── */}
      <section className="container-narrow pb-20">
        <div className="grid md:grid-cols-2 gap-5">
          {themes.map((t, i) => (
            <article
              key={t.title}
              className={`reveal reveal-delay-${Math.min((i % 4) + 1, 4)} card-hover bg-card border border-border rounded-2xl p-7 cursor-pointer`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${t.color} shrink-0`}>
                  <t.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-4xl text-foreground/10 font-semibold select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="mt-5 font-display text-2xl font-semibold text-foreground">{t.title}</h2>

              <ul className="mt-4 space-y-2.5">
                {t.measures.map((m) => (
                  <li key={m} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA TÉLÉCHARGEMENT ──────────────────────────────────── */}
      <section
        className="py-20 reveal"
        style={{ background: "var(--bleu-deep)" }}
      >
        <div className="container-narrow text-center max-w-2xl mx-auto">
          <div className="tricolore-accent mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
            Téléchargez le programme intégral
          </h2>
          <p className="mt-3 text-white/70">
            160 pages, chiffrées et sourcées. Diffusez, partagez, débattez.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="#"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-colors"
              style={{ color: "var(--bleu-deep)" }}
            >
              Télécharger le PDF <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/engagement"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Rejoindre le mouvement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
