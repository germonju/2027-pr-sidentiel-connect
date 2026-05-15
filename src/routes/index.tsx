import { createFileRoute, Link } from "@tanstack/react-router";
import heroPortrait from "@/assets/hero-portrait.jpg";
import rally from "@/assets/rally.jpg";
import { ArrowRight, Leaf, Shield, GraduationCap, Heart, Briefcase, Globe2 } from "lucide-react";

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
  { icon: Leaf, title: "Transition écologique", text: "Un plan climat ambitieux, juste, créateur d'emplois durables." },
  { icon: Shield, title: "Sécurité & justice", text: "Restaurer l'autorité républicaine et la confiance dans nos institutions." },
  { icon: GraduationCap, title: "École & savoirs", text: "Refonder l'école : exigence, méritocratie, égalité des chances." },
  { icon: Heart, title: "Santé pour tous", text: "Désengorger les hôpitaux, lutter contre les déserts médicaux." },
  { icon: Briefcase, title: "Emploi & industrie", text: "Réindustrialiser la France, valoriser le travail et les compétences." },
  { icon: Globe2, title: "Souveraineté", text: "Une voix forte pour la France en Europe et dans le monde." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-narrow grid lg:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive animate-pulse" />
              Élection présidentielle · Avril 2027
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-foreground">
              Pour la France <span className="italic text-primary">de demain.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Hugo Varennes porte un projet d'unité, de courage et d'ambition. Une République retrouvée,
              une économie souveraine, une planète habitable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/programme"
                className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-[var(--shadow-elegant)] hover:opacity-95 transition"
              >
                Découvrir le programme <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/engagement"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent transition"
              >
                Rejoindre le mouvement
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["+120k", "Soutiens"],
                ["350", "Comités locaux"],
                ["18", "Mois de campagne"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-semibold text-primary">{n}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-destructive/10 rounded-3xl blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
              <img
                src={heroPortrait}
                alt="Portrait officiel de Hugo Varennes, candidat à la présidentielle 2027"
                width={1080}
                height={1350}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-[var(--shadow-card)] max-w-[220px]">
              <p className="font-display italic text-sm text-foreground leading-snug">
                « La France n'a pas besoin de promesses. Elle a besoin de preuves. »
              </p>
              <p className="mt-2 text-xs text-muted-foreground">— Hugo Varennes</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILIERS */}
      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-destructive font-semibold">Le projet</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-foreground">
              Six combats pour relever la France.
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {piliers.map((p) => (
              <div key={p.title} className="group bg-card rounded-xl p-6 border border-border hover:border-primary transition-colors">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/programme" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              Lire le programme complet <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA RALLY */}
      <section className="relative py-24 overflow-hidden">
        <img
          src={rally}
          alt="Meeting de campagne d'Hugo Varennes"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        <div className="container-narrow relative">
          <div className="max-w-2xl text-primary-foreground">
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Le changement, ensemble.</h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Rejoignez les milliers de citoyennes et citoyens qui construisent la France de 2027.
              Engagez-vous, faites un don, devenez bénévole.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/engagement" className="rounded-md bg-destructive px-6 py-3 text-sm font-semibold text-destructive-foreground hover:opacity-90">
                Faire un don
              </Link>
              <Link to="/engagement" className="rounded-md bg-card px-6 py-3 text-sm font-semibold text-primary hover:bg-card/90">
                Devenir bénévole
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
