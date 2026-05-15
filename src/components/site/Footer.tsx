import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="tricolore-bar" />
      <div className="container-narrow py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-display font-bold">
              HV
            </span>
            <div>
              <div className="font-display text-lg font-semibold">Hugo Varennes</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Pour la France de demain</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Mouvement citoyen pour une France juste, souveraine et tournée vers l'avenir. Élection présidentielle d'avril 2027.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Naviguer</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/bio" className="hover:text-primary">Biographie</Link></li>
            <li><Link to="/programme" className="hover:text-primary">Programme</Link></li>
            <li><Link to="/actualites" className="hover:text-primary">Actualités</Link></li>
            <li><Link to="/engagement" className="hover:text-primary">S'engager</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contact@hugovarennes2027.fr</li>
            <li>12 rue de la République, 75011 Paris</li>
            <li className="flex gap-3 pt-2">
              <a href="#" className="hover:text-primary">X</a>
              <a href="#" className="hover:text-primary">Instagram</a>
              <a href="#" className="hover:text-primary">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-narrow py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© 2026 Comité de soutien Hugo Varennes. Tous droits réservés.</p>
          <p>Mentions légales · Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  );
}
