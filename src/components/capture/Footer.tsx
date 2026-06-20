import { Link } from "react-router-dom";
import { Calendar, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/capture-logo.png";
import {
  BOOK_URL,
  SHOP_URL,
  GIFT_CARD_URL,
  SOCIALS,
  EMAILS,
  LOCATIONS,
} from "@/lib/capture-links";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4" aria-label="Capture Therapeutics home">
              <img src={logo} alt="Capture Therapeutics" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              A collaborative healthcare team focused on timely, high-quality care across the Maritimes.
            </p>
            <div className="mt-5">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book an appointment with Capture Therapeutics"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 font-semibold hover:brightness-95 transition-all shadow-[var(--shadow-card)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Calendar className="w-4 h-4" /> Book Now
              </a>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Capture Therapeutics on Facebook"
                className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SOCIALS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Capture Therapeutics on Instagram"
                className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIALS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Capture Therapeutics on YouTube"
                className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm mb-4 font-semibold">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/locations" className="hover:text-primary">Locations</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Capture Talks</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm mb-4 font-semibold">For You</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/vocational-services" className="hover:text-primary">Vocational Services</Link></li>
              <li><Link to="/employers" className="hover:text-primary">Employers</Link></li>
              <li><Link to="/clinic-owners" className="hover:text-primary">Clinic Owners</Link></li>
              <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link to="/community" className="hover:text-primary">Community</Link></li>
              <li>
                <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  Shop Products ↗
                </a>
              </li>
              <li>
                <a href={GIFT_CARD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  Gift Cards ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/locations" className="inline-flex items-center gap-2 hover:text-primary">
                  <MapPin className="w-4 h-4" /> All Locations
                </Link>
              </li>
              {LOCATIONS.slice(0, 2).map((l) => (
                <li key={l.city}>
                  <a href={`mailto:${l.email}`} className="inline-flex items-center gap-2 break-all hover:text-primary">
                    <Mail className="w-4 h-4 shrink-0" /> {l.email}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${EMAILS.admin}`} className="inline-flex items-center gap-2 break-all hover:text-primary">
                  <Mail className="w-4 h-4 shrink-0" /> {EMAILS.admin}
                </a>
              </li>
              <li>
                <a href="tel:+15068569380" className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone className="w-4 h-4" /> (506) 856-9380
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Capture Therapeutics. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
