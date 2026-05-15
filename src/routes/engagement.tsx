import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Users, Megaphone, Mail } from "lucide-react";

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

function Engagement() {
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState("");
  const [submitted, setSubmitted] = useState<null | "don" | "contact">(null);

  return (
    <>
      <section className="container-narrow pt-16 pb-10">
        <p className="text-xs uppercase tracking-widest text-destructive font-semibold">Agir</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl font-semibold text-foreground max-w-3xl">
          Une campagne, ce sont des citoyens.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Don, bénévolat, comité local : choisissez la manière dont vous voulez vous engager.
        </p>
      </section>

      <section className="container-narrow grid md:grid-cols-3 gap-5 pb-12">
        {[
          { icon: Heart, title: "Faire un don", text: "66 % déductible des impôts." },
          { icon: Users, title: "Devenir bénévole", text: "Tractage, porte-à-porte, événements." },
          { icon: Megaphone, title: "Comité local", text: "Rejoignez l'équipe près de chez vous." },
        ].map((a) => (
          <div key={a.title} className="bg-card border border-border rounded-xl p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <a.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{a.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{a.text}</p>
          </div>
        ))}
      </section>

      <section className="container-narrow grid lg:grid-cols-2 gap-10 pb-24">
        {/* DON */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 shadow-[var(--shadow-elegant)]">
          <h2 className="font-display text-3xl font-semibold">Faire un don</h2>
          <p className="mt-2 text-primary-foreground/85 text-sm">Don plafonné à 7 500 € / an / personne. Reçu fiscal envoyé par email.</p>

          <form
            className="mt-6 space-y-5"
            onSubmit={(e) => { e.preventDefault(); setSubmitted("don"); }}
          >
            <div>
              <label className="text-sm font-medium">Choisir un montant</label>
              <div className="mt-2 grid grid-cols-5 gap-2">
                {amounts.map((a) => (
                  <button
                    type="button"
                    key={a}
                    onClick={() => { setAmount(a); setCustom(""); }}
                    className={`rounded-md py-2.5 text-sm font-semibold transition ${amount === a && !custom ? "bg-card text-primary" : "bg-primary-foreground/10 hover:bg-primary-foreground/20"}`}
                  >
                    {a}€
                  </button>
                ))}
              </div>
              <input
                type="number"
                min={1}
                max={7500}
                placeholder="Autre montant en €"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="mt-3 w-full rounded-md bg-primary-foreground/10 placeholder:text-primary-foreground/50 px-4 py-2.5 text-sm border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Prénom" className="rounded-md bg-primary-foreground/10 placeholder:text-primary-foreground/50 px-4 py-2.5 text-sm border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground" />
              <input required placeholder="Nom" className="rounded-md bg-primary-foreground/10 placeholder:text-primary-foreground/50 px-4 py-2.5 text-sm border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground" />
            </div>
            <input required type="email" placeholder="Email" className="w-full rounded-md bg-primary-foreground/10 placeholder:text-primary-foreground/50 px-4 py-2.5 text-sm border border-primary-foreground/20 focus:outline-none focus:border-primary-foreground" />

            <button type="submit" className="w-full rounded-md bg-destructive text-destructive-foreground py-3 text-sm font-semibold hover:opacity-95 transition">
              Donner {custom || amount}€
            </button>
            {submitted === "don" && (
              <p className="text-sm bg-card/10 border border-card/20 rounded-md p-3">Merci pour votre soutien ! Vous allez être redirigé vers le paiement sécurisé.</p>
            )}
          </form>
        </div>

        {/* CONTACT / BÉNÉVOLAT */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground">Rejoindre le mouvement</h2>
          <p className="mt-2 text-sm text-muted-foreground">Laissez-nous vos coordonnées : un référent local vous contactera sous 48h.</p>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => { e.preventDefault(); setSubmitted("contact"); }}
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Prénom" className="rounded-md bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary" />
              <input required placeholder="Nom" className="rounded-md bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary" />
            </div>
            <input required type="email" placeholder="Email" className="w-full rounded-md bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary" />
            <input required placeholder="Code postal" className="w-full rounded-md bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary" />
            <select className="w-full rounded-md bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary">
              <option>Je veux devenir bénévole</option>
              <option>Rejoindre un comité local</option>
              <option>Proposer une idée au programme</option>
              <option>Demande presse</option>
            </select>
            <textarea rows={4} placeholder="Votre message (optionnel)" className="w-full rounded-md bg-secondary px-4 py-2.5 text-sm border border-border focus:outline-none focus:border-primary" />
            <button type="submit" className="w-full rounded-md bg-primary text-primary-foreground py-3 text-sm font-semibold hover:opacity-95 transition">
              Envoyer
            </button>
            {submitted === "contact" && (
              <p className="text-sm bg-primary/5 border border-primary/20 text-primary rounded-md p-3">Merci ! Votre message a bien été reçu.</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
