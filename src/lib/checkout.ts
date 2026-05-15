import { createServerFn } from "@tanstack/react-start";
import Stripe from "stripe";

const SITE_URL = "https://varennes2027.com";

type CheckoutInput = {
  amount: number;
  email: string;
  prenom: string;
  nom: string;
};

export const createCheckoutSession = createServerFn({ method: "POST" })
  .validator((data: CheckoutInput) => data)
  .handler(async ({ data }) => {
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
            unit_amount: Math.round(data.amount * 100),
          },
          quantity: 1,
        },
      ],
      customer_email: data.email || undefined,
      metadata: {
        prenom: data.prenom,
        nom: data.nom,
        source: "varennes2027.com",
      },
      success_url: `${SITE_URL}/engagement?don=success`,
      cancel_url: `${SITE_URL}/engagement`,
    });

    return { url: session.url };
  });
