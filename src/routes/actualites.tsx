import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import rally from "@/assets/rally.jpg";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités & agenda — Hugo Varennes 2027" },
      { name: "description", content: "Suivez l'actualité de la campagne, les meetings, déplacements et prises de parole d'Hugo Varennes." },
      { property: "og:title", content: "Actualités — Hugo Varennes 2027" },
      { property: "og:description", content: "Meetings, tribunes et déplacements de la campagne." },
    ],
    links: [{ rel: "canonical", href: "/actualites" }],
  }),
  component: Actualites,
});

const news = [
  { date: "12 mai 2026", cat: "Tribune", title: "Pour une France qui produit", excerpt: "Tribune publiée dans Le Monde sur la stratégie de réindustrialisation." },
  { date: "5 mai 2026", cat: "Déplacement", title: "Visite d'une usine à Saint-Étienne", excerpt: "Rencontre avec les salariés et la direction d'un site industriel emblématique." },
  { date: "28 avril 2026", cat: "Annonce", title: "Lancement du plan « 1000 villages »", excerpt: "Un programme dédié à la revitalisation des territoires ruraux." },
  { date: "20 avril 2026", cat: "Interview", title: "Invité du JT de 20h", excerpt: "Hugo Varennes a détaillé ses priorités pour les 100 premiers jours." },
];

const events = [
  { date: "20 mai", city: "Marseille", venue: "Dôme de Marseille", time: "19h00" },
  { date: "3 juin", city: "Lille", venue: "Zénith Arena", time: "19h30" },
  { date: "17 juin", city: "Bordeaux", venue: "Palais des Congrès", time: "19h00" },
  { date: "1 juillet", city: "Paris", venue: "Accor Arena", time: "20h00" },
];

function Actualites() {
  return (
    <>
      <section className="container-narrow pt-16 pb-10">
        <p className="text-xs uppercase tracking-widest text-destructive font-semibold">La campagne</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold text-foreground max-w-3xl">
          Actualités & agenda.
        </h1>
      </section>

      <section className="container-narrow grid lg:grid-cols-3 gap-10 pb-20">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl font-semibold mb-6">Dernières actualités</h2>
          <div className="space-y-5">
            {news.map((n, i) => (
              <article key={n.title} className={`group cursor-pointer ${i === 0 ? "lg:flex gap-6 items-start" : "flex gap-4 items-start"}`}>
                {i === 0 && (
                  <div className="lg:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
                    <img src={rally} alt="" loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-destructive/10 text-destructive px-2.5 py-1 font-semibold">{n.cat}</span>
                    <span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className={`mt-3 font-display font-semibold text-foreground group-hover:text-primary transition-colors ${i === 0 ? "text-2xl md:text-3xl" : "text-lg"}`}>
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside>
          <h2 className="font-display text-2xl font-semibold mb-6">Prochains meetings</h2>
          <ul className="space-y-3">
            {events.map((e) => (
              <li key={e.city} className="bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="flex items-center gap-2 text-xs text-destructive font-semibold uppercase tracking-wider">
                  <Calendar className="h-3.5 w-3.5" /> {e.date} · {e.time}
                </div>
                <div className="mt-2 font-display text-lg font-semibold text-foreground">{e.city}</div>
                <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {e.venue}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  );
}
