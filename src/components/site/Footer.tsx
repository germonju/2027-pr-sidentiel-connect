import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/30">
      <div className="tricolore-bar" />

      <div className="container-narrow py-14 grid gap-10 md:grid-cols-12">
        {/* Marque */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold shadow-sm">
              HV
            </span>
            <div>
              <div className="font-display text-lg font-semibold text-foreground">Hugo Varennes</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Pour la France de demain</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Mouvement citoyen pour une France juste, souveraine et tournée vers l'avenir.
            Élection présidentielle d'avril 2027.
          </p>
          {/* Réseaux sociaux */}
          <div className="mt-5 flex gap-3">
            {[
              { label: "X (Twitter)", href: "#", icon: (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              )},
              { label: "Instagram", href: "#", icon: (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              )},
              { label: "YouTube", href: "#", icon: (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              )},
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-sm font-semibold text-foreground mb-4">Naviguer</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/bio"        className="hover:text-primary transition-colors cursor-pointer">Biographie</Link></li>
            <li><Link to="/programme"  className="hover:text-primary transition-colors cursor-pointer">Programme</Link></li>
            <li><Link to="/actualites" className="hover:text-primary transition-colors cursor-pointer">Actualités</Link></li>
            <li><Link to="/engagement" className="hover:text-primary transition-colors cursor-pointer">S'engager</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>contact@hugovarennes2027.fr</li>
            <li>12 rue de la République<br />75011 Paris</li>
            <li className="pt-1">
              <Link
                to="/engagement"
                hash="don"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-destructive text-destructive-foreground px-4 py-2 text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                Faire un don
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-narrow py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© 2026 Comité de soutien Hugo Varennes. Tous droits réservés.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors cursor-pointer">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors cursor-pointer">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
