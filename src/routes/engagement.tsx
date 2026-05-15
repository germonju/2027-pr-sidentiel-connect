import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Users, Megaphone, Mail, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import portraitEngagement from "@/assets/portrait-engagement.png";

export const Route = createFileRoute("/engagement")({
  head: () => ({
    meta: [
      { title: "S'engager & faire un don — Hugo Varennes 2027" },
      { name: "description", content: "Soutenez la campagne d'Hugo Varennes : faites un don, devenez bénévole, rejoignez un comité local." },
      { property: "og:title", content: "S'engager — Hugo Varennes 2027" },
      { property: "og:description", content: "Donner, militer, agir : rejoignez le mouvement." },
    ],
    links: [{ rel: "canonical", href: "/engagement" }],
  }),
  component: Engagement,
});

const amounts = [20, 50, 100, 250, 500];

const actions = [
  {
    icon: Heart,
    title: "Faire un don",
    text: "66 % déductible des impôts. Reçu fiscal automatique.",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: Users,
    title: "Devenir bénévole",
    text: "Tractage, porte-à-porte, organisation d'événements.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Megaphone,
    title: "Comité local",
    text: "Rejoignez l'équipe de campagne près de chez vous.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

function Engagement() {
  useScrollReveal();
  const [amount, setAmount]     = useState<number>(50);
  const [custom, setCustom]     = useState("");
  const [submitted, setSubmitted] = useState<null | "don" | "contact">(null);

  const finalAmount = custom ? Number(custom) : amount;

  return (
    <>
      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={portraitEngagement}
          alt="Hugo Varennes — Pour une France qui avance"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, color-mix(in oklab, var(--bleu-deep) 95%, transparent), color-mix(in oklab, var(--bleu-deep) 70%, transparent) 60%, transparent)" }}
        />
        <div className="container-narrow relative">
          <div className="max-w-xl text-white reveal-left">
            <span className="tricolore-accent mb-5" />
            <p className="mt-2 text-xs uppercase tracking-widest font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
              Agir
            </p>
            <h1
              className="mt-3 font-display font-semibold text-white leading-tight"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            >
              Une campagne, ce sont des citoyens.
            </h1>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
              Don, bénévolat, comité local : choisissez la manière dont vous voulez changer les choses.
            </p>
          </div>
        </div>
      </section>

      {/* ── CARTES D'ACTION ─────────────────────────────────────── */}
      <section className="container-narrow grid md:grid-cols-3 gap-5 py-12">
        {actions.map((a, i) => (
          <div
            key={a.title}
            className={`reveal reveal-delay-${i + 1} card-hover cursor-pointer bg-card border border-border rounded-2xl p-6`}
          >
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${a.color}`}>
              <a.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{a.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{a.text}</p>
          </div>
        ))}
      </section>

      {/* ── FORMULAIRES ─────────────────────────────────────────── */}
      <section className="container-narrow grid lg:grid-cols-2 gap-8 pb-24">

        {/* DON */}
        <div
          className="reveal rounded-2xl p-8 md:p-10 shadow-[var(--shadow-elegant)]"
          style={{ background: "var(--bleu-deep)" }}
        >
          <h2 className="font-display text-3xl font-semibold text-white">Faire un don</h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            Don plafonné à 7 500 € / an / personne. Reçu fiscal envoyé par email.
          </p>

          {submitted === "don" ? (
            <div className="mt-8 text-center">
              <CheckCircle className="h-12 w-12 text-white mx-auto" />
              <p className="mt-4 font-display text-xl font-semibold text-white">Merci pour votre soutien !</p>
              <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                Vous allez être redirigé vers le paiement sécurisé.
              </p>
            </div>
          ) : (
            <form
              className="mt-7 space-y-5"
              onSubmit={(e) => { e.preventDefault(); setSubmitted("don"); }}
            >
              <div>
                <label className="text-sm font-medium text-white">Choisir un montant</label>
                <div className="mt-2.5 grid grid-cols-5 gap-2">
                  {amounts.map((a) => (
                    <button
                      type="button"
                      key={a}
                      onClick={() => { setAmount(a); setCustom(""); }}
                      className={`cursor-pointer rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                        amount === a && !custom
                          ? "bg-white text-[var(--bleu-deep)]"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {a}€
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min={1}
                  max={7500}
                  placeholder="Autre montant (€)"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  className="mt-3 w-full rounded-lg bg-white/10 placeholder:text-white/40 px-4 py-2.5 text-sm border border-white/20 focus:outline-none focus:border-white/60 text-white transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  required
                  placeholder="Prénom"
                  className="rounded-lg bg-white/10 placeholder:text-white/40 px-4 py-2.5 text-sm border border-white/20 focus:outline-none focus:border-white/60 text-white transition-colors"
                />
                <input
                  required
                  placeholder="Nom"
                  className="rounded-lg bg-white/10 placeholder:text-white/40 px-4 py-2.5 text-sm border border-white/20 focus:outline-none focus:border-white/60 text-white transition-colors"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full rounded-lg bg-white/10 placeholder:text-white/40 px-4 py-2.5 text-sm border border-white/20 focus:outline-none focus:border-white/60 text-white transition-colors"
              />

              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl bg-destructive text-white py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                Donner {finalAmount > 0 ? `${finalAmount}€` : ""}
              </button>
            </form>
          )}
        </div>

        {/* CONTACT / BÉNÉVOLAT */}
        <div className="reveal-right bg-card border border-border rounded-2xl p-8 md:p-10">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground">
            Rejoindre le mouvement
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Laissez-nous vos coordonnées : un référent local vous contactera sous 48h.
          </p>

          {submitted === "contact" ? (
            <div className="mt-8 text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto" />
              <p className="mt-4 font-display text-xl font-semibold text-foreground">Message bien reçu !</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Un référent local prendra contact avec vous sous 48h.
              </p>
            </div>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => { e.preventDefault(); setSubmitted("contact"); }}
            >
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  required
                  placeholder="Prénom"
                  className="rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  required
                  placeholder="Nom"
                  className="rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Email"
                className="w-full rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors"
              />
              <input
                required
                placeholder="Code postal"
                className="w-full rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors"
              />
              <select className="w-full cursor-pointer rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors text-foreground">
                <option>Je veux devenir bénévole</option>
                <option>Rejoindre un comité local</option>
                <option>Proposer une idée au programme</option>
                <option>Demande presse</option>
              </select>
              <textarea
                rows={4}
                placeholder="Votre message (optionnel)"
                className="w-full rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl bg-primary text-primary-foreground py-3.5 text-sm font-semibold hover:opacity-95 transition-opacity shadow-sm"
              >
                Envoyer
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
