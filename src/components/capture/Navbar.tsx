import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import logo from "@/assets/capture-logo.png";
import { BOOK_URL, NAV_ITEMS } from "@/lib/capture-links";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <Link
          to="/"
          onClick={() => {
            if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
          aria-label="Capture Therapeutics home"
        >
          <img src={logo} alt="Capture Therapeutics" className="h-9 md:h-10 w-auto" />
        </Link>

        <nav className="hidden xl:flex items-center gap-5 text-sm text-muted-foreground" aria-label="Main">
          {NAV_ITEMS.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded ${
                  isActive ? "text-primary font-semibold" : ""
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book an appointment with Capture Therapeutics"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:brightness-95 hover:scale-[1.02] transition-all shadow-[var(--shadow-card)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Calendar className="w-4 h-4" /> Book Now
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="xl:hidden p-2 rounded-lg hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV_ITEMS.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-lg text-sm hover:bg-muted ${isActive ? "bg-muted text-primary font-semibold" : ""}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book an appointment with Capture Therapeutics"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold"
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
