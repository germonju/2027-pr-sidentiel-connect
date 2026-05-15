import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import Stripe from "stripe";

const SITE_URL = "https://varennes2027.com";

export const Route = createFileRoute("/api/create-checkout")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { amount, email, prenom, nom } = await request.json<{
          amount: number;
          email: string;
          prenom: string;
          nom: string;
        }>();

        if (!amount || amount < 1 || amount > 7500) {
          return Response.json({ error: "Montant invalide" }, { status: 400 });
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

        const session = await stripe.checkout.sessions.create({
          mode: "payment",
          locale: "fr",
          line_items: [
            {
              price_data: {
                currency: "eur",
                product_data: {
                  name: "Don de soutien — Hugo Varennes 2027",
                  description:
                    "Don politique. Reçu fiscal envoyé par email. Plafonné à 7 500 € / an / personne.",
                },
                unit_amount: Math.round(amount * 100),
              },
              quantity: 1,
            },
          ],
          customer_email: email || undefined,
          metadata: { prenom, nom, source: "varennes2027.com" },
          success_url: `${SITE_URL}/engagement?don=success`,
          cancel_url: `${SITE_URL}/engagement`,
        });

        return Response.json({ url: session.url });
      },
    },
  },
});
