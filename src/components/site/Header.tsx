import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/",          label: "Accueil" },
  { to: "/bio",       label: "Biographie" },
  { to: "/programme", label: "Programme" },
  { to: "/actualites",label: "Actualités" },
  { to: "/engagement",label: "S'engager" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled
          ? "bg-background/97 shadow-sm backdrop-blur-lg"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="tricolore-bar" />

      <div className="container-narrow flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm shadow-sm">
            HV
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold text-foreground">Hugo Varennes</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Présidentielle 2027</div>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-primary/8 font-semibold" }}
              className="px-3.5 py-2 text-sm font-medium text-foreground/75 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/engagement"
            hash="don"
            className="ml-3 inline-flex cursor-pointer items-center justify-center rounded-lg bg-destructive text-destructive-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Faire un don
          </Link>
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-accent transition-colors cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-lg">
          <nav className="container-narrow py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/8 font-semibold" }}
                className="px-3.5 py-2.5 text-sm font-medium rounded-lg text-foreground/80 hover:bg-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/engagement"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex cursor-pointer items-center justify-center rounded-lg bg-destructive text-destructive-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Faire un don
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
