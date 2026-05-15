import { createFileRoute } from "@tanstack/react-router";
import heroPortrait from "@/assets/hero-portrait.jpg";

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
  { year: "1980", title: "Naissance à Lyon", text: "Issu d'une famille d'enseignants et d'artisans." },
  { year: "2003", title: "Diplômé de Sciences Po", text: "Spécialisation affaires publiques et économie." },
  { year: "2008", title: "Engagement associatif", text: "Fonde un réseau d'aide à l'emploi en banlieue lyonnaise." },
  { year: "2014", title: "Élu maire", text: "Maire d'une commune de 30 000 habitants pendant deux mandats." },
  { year: "2022", title: "Député", text: "Élu à l'Assemblée nationale, membre de la commission des Finances." },
  { year: "2026", title: "Candidat à la présidentielle", text: "Lance le mouvement « Pour la France de demain »." },
];

function Bio() {
  return (
    <>
      <section className="container-narrow pt-16 pb-12">
        <p className="text-xs uppercase tracking-widest text-destructive font-semibold">L'homme</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold text-foreground max-w-3xl">
          Un parcours d'engagement, au plus près des Français.
        </h1>
      </section>

      <section className="container-narrow grid lg:grid-cols-5 gap-12 pb-16">
        <div className="lg:col-span-2">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <img src={heroPortrait} alt="Hugo Varennes" width={1080} height={1350} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-3 space-y-5 text-foreground/90 leading-relaxed">
          <p className="text-xl font-display text-foreground">
            « Je crois en une France lucide, qui regarde ses fractures en face et choisit l'unité plutôt que la division. »
          </p>
          <p>
            Hugo Varennes a grandi entre Lyon et l'Ardèche, dans une famille où l'on transmettait le goût du travail bien fait
            et l'amour de la République. Après des études à Sciences Po Paris, il choisit le terrain : il fonde une association
            qui accompagne des centaines de jeunes vers l'emploi.
          </p>
          <p>
            Élu maire en 2014 puis député en 2022, il s'est imposé comme une voix singulière : pragmatique, exigeante,
            attachée à l'intérêt général. Il porte aujourd'hui un mouvement transpartisan rassemblant maires, entrepreneurs,
            chercheurs, soignants et citoyens engagés.
          </p>
          <p>
            Père de trois enfants, il vit aujourd'hui à Paris. Il défend une vision : une France qui protège, qui produit,
            et qui transmet.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container-narrow">
          <h2 className="font-display text-4xl font-semibold text-foreground">Quelques dates</h2>
          <ol className="mt-10 relative border-l-2 border-primary/30 pl-8 space-y-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[42px] top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-background" />
                <div className="font-display text-2xl text-primary font-semibold">{t.year}</div>
                <h3 className="mt-1 font-semibold text-foreground">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
