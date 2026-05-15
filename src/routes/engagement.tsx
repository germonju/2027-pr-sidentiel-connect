import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Users, Megaphone, Mail, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import portraitEngagement from "@/assets/portrait-engagement.png";
import { createCheckoutSession } from "@/lib/checkout";

const WEBHOOK_URL = "https://n8n.srv954228.hstgr.cloud/webhook/contact";

export const Route = createFileRoute("/engagement")({
  validateSearch: (search) => ({
    don: (search.don as string) ?? undefined,
  }),
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

  const { don } = Route.useSearch();

  // ── Don form ──
  const [amount, setAmount]     = useState<number>(50);
  const [custom, setCustom]     = useState("");
  const [donPrenom, setDonPrenom] = useState("");
  const [donNom, setDonNom]       = useState("");
  const [donEmail, setDonEmail]   = useState("");
  const [donLoading, setDonLoading] = useState(false);
  const [donError, setDonError]     = useState(false);

  const finalAmount = custom ? Number(custom) : amount;

  const handleDonSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount < 1 || finalAmount > 7500) return;
    setDonLoading(true);
    setDonError(false);
    try {
      const result = await createCheckoutSession({
        data: { amount: finalAmount, email: donEmail, prenom: donPrenom, nom: donNom },
      });
      if (result.url) {
        window.location.href = result.url;
      } else {
        setDonError(true);
        setDonLoading(false);
      }
    } catch {
      setDonError(true);
      setDonLoading(false);
    }
  };

  // ── Contact form ──
  const [contactState, setContactState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactState("loading");
    const fd = new FormData(e.currentTarget);
    const body = {
      prenom:     fd.get("prenom"),
      nom:        fd.get("nom"),
      email:      fd.get("email"),
      codePostal: fd.get("codePostal"),
      type:       fd.get("type"),
      message:    fd.get("message"),
    };
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setContactState(res.ok ? "success" : "error");
    } catch {
      setContactState("error");
    }
  };

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

        {/* ── DON STRIPE ── */}
        <div
          className="reveal rounded-2xl p-8 md:p-10 shadow-[var(--shadow-elegant)]"
          style={{ background: "var(--bleu-deep)" }}
        >
          <h2 className="font-display text-3xl font-semibold text-white">Faire un don</h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            Don plafonné à 7 500 € / an / personne. Reçu fiscal envoyé par email.
          </p>

          {/* Succès Stripe (retour depuis checkout) */}
          {don === "success" ? (
            <div className="mt-8 text-center">
              <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto" />
              <p className="mt-4 font-display text-xl font-semibold text-white">
                Merci pour votre don !
              </p>
              <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                Votre reçu fiscal vous sera envoyé par email. La France vous remercie.
              </p>
            </div>
          ) : (
            <form className="mt-7 space-y-5" onSubmit={handleDonSubmit}>
              {/* Montants */}
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
                  onChange={(e) => { setCustom(e.target.value); }}
                  className="mt-3 w-full rounded-lg bg-white/10 placeholder:text-white/40 px-4 py-2.5 text-sm border border-white/20 focus:outline-none focus:border-white/60 text-white transition-colors"
                />
              </div>

              {/* Identité */}
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  required
                  placeholder="Prénom"
                  value={donPrenom}
                  onChange={(e) => setDonPrenom(e.target.value)}
                  className="rounded-lg bg-white/10 placeholder:text-white/40 px-4 py-2.5 text-sm border border-white/20 focus:outline-none focus:border-white/60 text-white transition-colors"
                />
                <input
                  required
                  placeholder="Nom"
                  value={donNom}
                  onChange={(e) => setDonNom(e.target.value)}
                  className="rounded-lg bg-white/10 placeholder:text-white/40 px-4 py-2.5 text-sm border border-white/20 focus:outline-none focus:border-white/60 text-white transition-colors"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Email (pour le reçu fiscal)"
                value={donEmail}
                onChange={(e) => setDonEmail(e.target.value)}
                className="w-full rounded-lg bg-white/10 placeholder:text-white/40 px-4 py-2.5 text-sm border border-white/20 focus:outline-none focus:border-white/60 text-white transition-colors"
              />

              {/* Erreur */}
              {donError && (
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm text-white/90">
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                  Une erreur s'est produite. Veuillez réessayer.
                </div>
              )}

              <button
                type="submit"
                disabled={donLoading || finalAmount < 1}
                className="w-full cursor-pointer rounded-xl bg-destructive text-white py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {donLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Redirection vers le paiement…
                  </>
                ) : (
                  `Donner ${finalAmount > 0 ? `${finalAmount} €` : ""} →`
                )}
              </button>

              <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                Paiement sécurisé par Stripe · 66 % déductible des impôts
              </p>
            </form>
          )}
        </div>

        {/* ── CONTACT / BÉNÉVOLAT ── */}
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

          {contactState === "success" ? (
            <div className="mt-8 text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto" />
              <p className="mt-4 font-display text-xl font-semibold text-foreground">
                Message bien envoyé !
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Merci pour votre engagement. Un référent local vous contactera sous 48h.
              </p>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleContactSubmit}>
              <div className="grid sm:grid-cols-2 gap-3">
                <input required name="prenom" placeholder="Prénom"
                  className="rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors" />
                <input required name="nom" placeholder="Nom"
                  className="rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors" />
              </div>
              <input required name="email" type="email" placeholder="Email"
                className="w-full rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors" />
              <input required name="codePostal" placeholder="Code postal"
                className="w-full rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors" />
              <select name="type"
                className="w-full cursor-pointer rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors text-foreground">
                <option>Je veux devenir bénévole</option>
                <option>Rejoindre un comité local</option>
                <option>Proposer une idée au programme</option>
                <option>Demande presse</option>
              </select>
              <textarea name="message" rows={4} placeholder="Votre message (optionnel)"
                className="w-full rounded-lg bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary transition-colors resize-none" />

              {contactState === "error" && (
                <p className="text-sm text-destructive bg-destructive/8 border border-destructive/20 rounded-lg px-4 py-3">
                  Une erreur s'est produite. Veuillez réessayer.
                </p>
              )}

              <button type="submit" disabled={contactState === "loading"}
                className="w-full cursor-pointer rounded-xl bg-primary text-primary-foreground py-3.5 text-sm font-semibold hover:opacity-95 transition-opacity shadow-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {contactState === "loading" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" />Envoi en cours…</>
                ) : "Envoyer"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
