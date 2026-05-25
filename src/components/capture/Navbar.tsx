import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const NAV = [
  { label: "Patients", href: "#patients" },
  { label: "Vocational Services", href: "#vocational" },
  { label: "Employers", href: "#employers" },
  { label: "Clinic Owners", href: "#clinic-owners" },
  { label: "Locations", href: "#locations" },
  { label: "Capture Talks", href: "#capture-talks" },
  { label: "Join Our Crew", href: "#join" },
  { label: "Shop", href: "#shop" },
];

const BOOK_URL = "https://physiofirst.janeapp.com/";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-xl bg-primary text-primary-foreground grid place-items-center">
            <Heart className="w-4 h-4" />
          </span>
          <span className="font-serif text-lg leading-tight">
            Capture <span className="text-primary">Therapeutics</span>
          </span>
        </a>

        <nav className="hidden xl:flex items-center gap-6 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-[var(--shadow-card)]"
          >
            Book Now
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="xl:hidden p-2 rounded-lg hover:bg-muted"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
