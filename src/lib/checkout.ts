export async function createCheckout(data: {
  amount: number;
  email: string;
  prenom: string;
  nom: string;
}): Promise<{ url: string }> {
  const res = await fetch("/api/create-checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Stripe checkout failed");
  return res.json();
}
