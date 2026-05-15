import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/bio", label: "Biographie" },
  { to: "/programme", label: "Programme" },
  { to: "/actualites", label: "Actualités" },
  { to: "/engagement", label: "S'engager" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="tricolore-bar" />
      <div className="container-narrow flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-display font-bold">
            HV
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold text-foreground">Hugo Varennes</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Présidentielle 2027</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary bg-accent" }}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/engagement"
            className="ml-3 inline-flex items-center justify-center rounded-md bg-destructive text-destructive-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Faire un don
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-narrow py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary bg-accent" }}
                className="px-3 py-2 text-sm font-medium rounded-md text-foreground/80"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/engagement"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-destructive text-destructive-foreground px-4 py-2 text-sm font-semibold"
            >
              Faire un don
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
