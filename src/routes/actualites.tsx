import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import rallyFoule    from "@/assets/rally-foule.jpg";
import terrainMeeting from "@/assets/terrain-meeting.png";
import terrainCitoyen from "@/assets/terrain-citoyen.png";
import terrainRural   from "@/assets/terrain-rural.png";

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
  {
    date: "12 mai 2026", cat: "Tribune",
    title: "Pour une France qui produit",
    excerpt: "Tribune publiée dans Le Monde sur la stratégie de réindustrialisation et la valorisation du travail français.",
    img: rallyFoule,
    featured: true,
  },
  {
    date: "5 mai 2026", cat: "Déplacement",
    title: "Rencontre avec les industriels de Saint-Étienne",
    excerpt: "Hugo Varennes a échangé avec les dirigeants et salariés d'un site emblématique de l'industrie française.",
    img: terrainMeeting,
    featured: false,
  },
  {
    date: "28 avril 2026", cat: "Annonce",
    title: "Lancement du plan « 1000 villages »",
    excerpt: "Un programme ambitieux pour la revitalisation des territoires ruraux, avec des engagements chiffrés.",
    img: terrainRural,
    featured: false,
  },
  {
    date: "20 avril 2026", cat: "Terrain",
    title: "Rencontre citoyenne à Angoulême",
    excerpt: "Hugo Varennes a rencontré des habitants pour écouter leurs préoccupations du quotidien.",
    img: terrainCitoyen,
    featured: false,
  },
];

const events = [
  { date: "20 mai",  city: "Marseille", venue: "Dôme de Marseille",   time: "19h00" },
  { date: "3 juin",  city: "Lille",     venue: "Zénith Arena",        time: "19h30" },
  { date: "17 juin", city: "Bordeaux",  venue: "Palais des Congrès",  time: "19h00" },
  { date: "1 juillet",city: "Paris",   venue: "Accor Arena",          time: "20h00" },
];

const catColors: Record<string, string> = {
  Tribune:    "bg-primary/10 text-primary",
  Déplacement:"bg-emerald-500/10 text-emerald-600",
  Annonce:    "bg-destructive/10 text-destructive",
  Terrain:    "bg-amber-500/10 text-amber-600",
  Interview:  "bg-violet-500/10 text-violet-600",
};

function Actualites() {
  useScrollReveal();

  const [featured, ...rest] = news;

  return (
    <>
      {/* ── EN-TÊTE ─────────────────────────────────────────────── */}
      <section className="container-narrow pt-16 pb-10">
        <div className="reveal">
          <span className="tricolore-accent" />
          <p className="mt-4 text-xs uppercase tracking-widest text-destructive font-semibold">La campagne</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold text-foreground max-w-3xl leading-tight">
            Actualités & agenda.
          </h1>
        </div>
      </section>

      <section className="container-narrow grid lg:grid-cols-3 gap-10 pb-24">
        {/* ── ACTUALITÉS ──────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-8">
          {/* Article à la une */}
          <article className="reveal group cursor-pointer">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src={featured.img}
                alt={featured.title}
                loading="lazy"
                className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-3 text-xs">
                <span className={`rounded-full px-2.5 py-1 font-semibold ${catColors[featured.cat] ?? "bg-muted text-muted-foreground"}`}>
                  {featured.cat}
                </span>
                <span className="text-muted-foreground">{featured.date}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            </div>
          </article>

          {/* Séparateur */}
          <div className="h-px bg-border" />

          {/* Articles secondaires */}
          <div className="grid sm:grid-cols-2 gap-5">
            {rest.map((n, i) => (
              <article
                key={n.title}
                className={`reveal reveal-delay-${i + 1} group cursor-pointer`}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`rounded-full px-2.5 py-1 font-semibold ${catColors[n.cat] ?? "bg-muted text-muted-foreground"}`}>
                      {n.cat}
                    </span>
                    <span className="text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {n.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ── AGENDA ──────────────────────────────────────────────── */}
        <aside className="reveal-right">
          <div className="sticky top-24">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              Prochains meetings
            </h2>
            <ul className="space-y-3">
              {events.map((e) => (
                <li
                  key={e.city}
                  className="card-hover cursor-pointer bg-card border border-border rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 text-xs text-destructive font-semibold uppercase tracking-wider">
                    <Calendar className="h-3.5 w-3.5" />
                    {e.date} · {e.time}
                  </div>
                  <div className="mt-2 font-display text-lg font-semibold text-foreground">{e.city}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {e.venue}
                  </div>
                  <button className="mt-3 w-full cursor-pointer rounded-lg bg-primary/8 text-primary text-xs font-semibold py-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                    S'inscrire
                  </button>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-6 rounded-xl bg-primary p-5 text-primary-foreground">
              <p className="font-display text-lg font-semibold">Restez informé</p>
              <p className="mt-1 text-sm text-primary-foreground/80">Recevez les actualités de la campagne.</p>
              <form className="mt-4 space-y-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="Votre email"
                  className="w-full rounded-lg bg-primary-foreground/15 placeholder:text-primary-foreground/50 px-4 py-2.5 text-sm border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground text-white"
                />
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-lg bg-destructive px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
