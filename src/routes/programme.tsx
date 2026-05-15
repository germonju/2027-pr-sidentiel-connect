import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Shield, GraduationCap, Heart, Briefcase, Globe2, Home, Scale } from "lucide-react";

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
  { icon: Leaf, title: "Écologie", measures: ["Plan climat 2030 chiffré et financé", "Rénovation thermique massive de 700 000 logements/an", "Sortie progressive des énergies fossiles"] },
  { icon: Shield, title: "Sécurité", measures: ["+15 000 policiers et gendarmes sur le terrain", "Justice de proximité dans chaque tribunal", "Lutte renforcée contre les trafics"] },
  { icon: GraduationCap, title: "Éducation", measures: ["Revalorisation salariale des enseignants", "Classes dédoublées en CP/CE1 partout en France", "Service civique d'apprentissage à 16 ans"] },
  { icon: Heart, title: "Santé", measures: ["Plan d'urgence pour l'hôpital public", "Fin des déserts médicaux d'ici 2030", "Prise en charge intégrale de la santé mentale"] },
  { icon: Briefcase, title: "Emploi & industrie", measures: ["Réindustrialiser via les filières d'avenir", "Salaires : prime à la production en France", "Apprentissage : objectif 1 million d'apprentis"] },
  { icon: Globe2, title: "Souveraineté", measures: ["Europe puissance, France indépendante", "Défense : 2,5 % du PIB d'ici 2030", "Politique migratoire ferme et humaine"] },
  { icon: Home, title: "Logement", measures: ["Construire 500 000 logements abordables", "Encadrement renforcé des loyers en zone tendue", "Lutte contre l'habitat indigne"] },
  { icon: Scale, title: "Démocratie", measures: ["Référendum d'initiative citoyenne renforcé", "Lutte contre les conflits d'intérêts", "Proportionnelle partielle aux législatives"] },
];

function Programme() {
  return (
    <>
      <section className="container-narrow pt-16 pb-12">
        <p className="text-xs uppercase tracking-widest text-destructive font-semibold">Le programme</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold text-foreground max-w-3xl">
          Huit chantiers concrets, un cap clair.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Un projet construit avec des élus, experts et citoyens. Chiffré, financé, opposable. Voici les grandes lignes.
        </p>
      </section>

      <section className="container-narrow grid md:grid-cols-2 gap-5 pb-20">
        {themes.map((t, i) => (
          <article key={t.title} className="bg-card border border-border rounded-2xl p-7 hover:shadow-[var(--shadow-card)] transition-shadow">
            <div className="flex items-start justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <t.icon className="h-5 w-5" />
              </div>
              <span className="font-display text-3xl text-primary/30 font-semibold">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">{t.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {t.measures.map((m) => (
                <li key={m} className="flex gap-3 text-sm text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-narrow text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Téléchargez le programme intégral</h2>
          <p className="mt-3 text-primary-foreground/85">160 pages, chiffrées et sourcées. Diffusez, partagez, débattez.</p>
          <a href="#" className="mt-6 inline-flex rounded-md bg-card text-primary px-6 py-3 text-sm font-semibold hover:bg-card/90">
            Télécharger le PDF (3,2 Mo)
          </a>
        </div>
      </section>
    </>
  );
}
