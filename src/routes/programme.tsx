import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Leaf, Shield, GraduationCap, Heart, Briefcase, Globe2, Home, Scale,
  ArrowRight, TrendingUp, Zap, Wheat,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: "Programme — Hugo Varennes 2027" },
      { name: "description", content: "Le programme complet d'Hugo Varennes : économie, éducation, santé, écologie, sécurité, Europe, démocratie, territoires. Chiffré, financé, opposable." },
      { property: "og:title", content: "Programme — Hugo Varennes 2027" },
      { property: "og:description", content: "La France en commun — tenir ensemble, avancer juste." },
    ],
    links: [{ rel: "canonical", href: "/programme" }],
  }),
  component: Programme,
});

const themes = [
  {
    icon: TrendingUp,
    color: "bg-sky-500/10 text-sky-600",
    num: "01",
    title: "Économie & Travail",
    subtitle: "Croissance responsable",
    measures: [
      "Réduction progressive de la dette publique à 90 % du PIB d'ici 2030",
      "Maintien du taux d'IS à 25 %, avec bonus fiscal pour les PME qui embauchent en CDI",
      "Création d'un Fonds France Compétences de 2 Md€ pour la formation professionnelle",
      "Revalorisation du SMIC de 3 % par an sur cinq ans, indexée sur la productivité",
      "Expérimentation du CDI de projet dans les secteurs en tension (numérique, énergie, santé)",
      "Plan national pour l'apprentissage : objectif 1 million d'apprentis d'ici 2027",
    ],
  },
  {
    icon: GraduationCap,
    color: "bg-amber-500/10 text-amber-600",
    num: "02",
    title: "Éducation & Jeunesse",
    subtitle: "L'école, priorité absolue",
    measures: [
      "Revalorisation de 15 % du salaire des enseignants en contrepartie d'une présence élargie",
      "Dédoublement des classes CP/CE1 étendu à tous les collèges REP+",
      "Service civique universel obligatoire de 3 mois entre 18 et 25 ans",
      "Création d'un Pass Compétences de 2 000 € pour chaque jeune à 18 ans",
      "Réforme du baccalauréat : réintroduction d'une épreuve nationale de philosophie et de français oral",
    ],
  },
  {
    icon: Heart,
    color: "bg-rose-500/10 text-rose-600",
    num: "03",
    title: "Santé",
    subtitle: "Un système de soins pour tous",
    measures: [
      "Recrutement de 15 000 médecins généralistes d'ici 2028 via incitations à l'installation",
      "Remboursement à 100 % des soins dentaires et optiques pour les moins de 18 ans et les plus de 70 ans",
      "Création de 500 Maisons de Santé Pluridisciplinaires dans les déserts médicaux",
      "Plan national de santé mentale : doublement des postes de psychiatres et psychologues",
      "Augmentation de 20 % des admissions en première année de médecine",
    ],
  },
  {
    icon: Leaf,
    color: "bg-emerald-500/10 text-emerald-600",
    num: "04",
    title: "Transition écologique",
    subtitle: "Énergie & agriculture",
    measures: [
      "Mix énergétique 2035 : 50 % nucléaire, 40 % renouvelables, 10 % gaz",
      "Construction de 6 nouveaux réacteurs EPR2 — lancement immédiat des études",
      "Objectif 100 % de véhicules neufs électriques ou hybrides vendus d'ici 2032",
      "Prime à la rénovation énergétique portée à 15 000 € pour les ménages modestes",
      "25 % de l'alimentation scolaire en produits biologiques ou locaux d'ici 2027",
      "Plan de soutien agroécologique : 3 Md€ sur le quinquennat",
    ],
  },
  {
    icon: Shield,
    color: "bg-primary/10 text-primary",
    num: "05",
    title: "Sécurité & Justice",
    subtitle: "L'autorité républicaine",
    measures: [
      "Recrutement de 10 000 policiers et gendarmes supplémentaires sur cinq ans",
      "Doublement des juges et greffiers dans les tribunaux correctionnels",
      "Développement des travaux d'intérêt général pour les primo-délinquants",
      "Plan national contre les violences conjugales : 200 centres d'accueil supplémentaires",
      "Rétablissement de la police de proximité dans les 200 quartiers prioritaires",
    ],
  },
  {
    icon: Globe2,
    color: "bg-violet-500/10 text-violet-600",
    num: "06",
    title: "Europe & International",
    subtitle: "Une France forte dans le monde",
    measures: [
      "Défense d'une Europe fédérale par étapes — renforcement du Parlement européen",
      "Budget européen commun de défense porté à 2 % du PIB pour chaque État membre",
      "Relance de l'axe franco-allemand sur l'industrie verte et le numérique",
      "Politique migratoire européenne commune : hotspots aux frontières, quotas contraignants",
      "Aide publique au développement portée à 0,7 % du RNB",
    ],
  },
  {
    icon: Scale,
    color: "bg-teal-500/10 text-teal-600",
    num: "07",
    title: "Institutions & Démocratie",
    subtitle: "Remettre les citoyens au centre",
    measures: [
      "Introduction d'une dose de proportionnelle (20 %) aux élections législatives",
      "Référendum d'initiative citoyenne : 500 000 signatures pour soumettre un texte au Parlement",
      "Limitation à deux mandats présidentiels non consécutifs",
      "Réforme du Sénat : suppression du mandat à vie pour les anciens Présidents",
      "Transparence patrimoniale étendue à tous les élus locaux de plus de 50 000 habitants",
    ],
  },
  {
    icon: Home,
    color: "bg-orange-500/10 text-orange-600",
    num: "08",
    title: "Cohésion sociale & Territoires",
    subtitle: "Aucun territoire laissé de côté",
    measures: [
      "Plan France Rurale : 5 Md€ sur cinq ans pour les communes de moins de 5 000 habitants",
      "Zéro fermeture de poste, école ou gare sans accord des élus locaux",
      "Création d'un revenu universel d'activité fusionnant RSA, prime d'activité et APL",
      "Retraite à 64 ans maintenue, avec dérogations pour carrières longues dès 58 ans",
      "Construction de 500 000 logements abordables et encadrement des loyers en zone tendue",
    ],
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
          <p className="mt-4 text-xs uppercase tracking-widest text-destructive font-semibold">
            Le programme
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold text-foreground max-w-3xl leading-tight">
            Huit chantiers concrets, un cap clair.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Un projet construit avec des élus, experts et citoyens. Chiffré, financé, opposable.
            <span className="block mt-2 font-display italic text-foreground/70">
              « La France en commun — tenir ensemble, avancer juste. »
            </span>
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
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${t.color} shrink-0`}>
                  <t.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-4xl text-foreground/8 font-semibold select-none">
                  {t.num}
                </span>
              </div>

              {/* Titre */}
              <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">{t.title}</h2>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.subtitle}</p>

              {/* Mesures */}
              <ul className="mt-5 space-y-2.5">
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
      <section className="py-20 reveal" style={{ background: "var(--bleu-deep)" }}>
        <div className="container-narrow text-center max-w-2xl mx-auto">
          <div className="tricolore-accent mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
            Téléchargez le programme intégral
          </h2>
          <p className="mt-3 text-white/70">
            160 pages, chiffrées et sourcées. Diffusez, partagez, débattez.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-colors"
              style={{ color: "var(--bleu-deep)" }}
            >
              Télécharger le PDF <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/engagement"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Rejoindre le mouvement
            </Link>
          </div>
          <p className="mt-8 text-xs text-white/40">
            Contact presse : presse@varennes2027.fr
          </p>
        </div>
      </section>
    </>
  );
}
