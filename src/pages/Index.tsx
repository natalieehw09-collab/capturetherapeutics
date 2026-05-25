import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Printer,
  Stethoscope,
  Briefcase,
  Building2,
  Users,
  HeartHandshake,
  ShoppingBag,
  Sparkles,
  HandHeart,
  ShieldCheck,
  TreePine,
  TrendingUp,
  Facebook,
  Instagram,
  Linkedin,
  BookOpen,
} from "lucide-react";
import Navbar from "@/components/capture/Navbar";
import Chatbot from "@/components/capture/Chatbot";

const BOOK_URL = "https://physiofirst.janeapp.com/";

const PATHWAYS = [
  { icon: Stethoscope, title: "I’m a patient", desc: "Book care with our collaborative team.", href: "#patients", cta: "Book now" },
  { icon: Briefcase, title: "I need vocational services", desc: "Independent, timely evaluations.", href: "#vocational", cta: "Learn more" },
  { icon: Building2, title: "I’m an employer", desc: "Wellness, ergonomics & prevention.", href: "#employers", cta: "Explore" },
  { icon: HeartHandshake, title: "I’m a clinic owner", desc: "Protect your legacy with us.", href: "#clinic-owners", cta: "Partner with us" },
  { icon: Users, title: "I want to join the team", desc: "Grow with the Capture Crew.", href: "#join", cta: "View roles" },
  { icon: MapPin, title: "I want to find a location", desc: "Three clinics across the Maritimes.", href: "#locations", cta: "See locations" },
];

const SERVICES = [
  { id: "patients", tag: "Patients", title: "Get better with a whole-team approach.", desc: "Physiotherapy, occupational therapy, kinesiology, and mental health support — coordinated under one roof so you recover faster and with confidence.", tone: "from-primary/10 to-accent/10" },
  { id: "vocational", tag: "Vocational Services", title: "Trusted, timely, independent evaluations.", desc: "Functional capacity evaluations, return-to-work planning, and assessments delivered with care, clarity, and clinical rigor.", tone: "from-accent/15 to-secondary" },
  { id: "employers", tag: "Employers", title: "Workplace wellness, ergonomics, and injury prevention.", desc: "Proactive programs that keep your team healthy, productive, and engaged — designed around the realities of your workplace.", tone: "from-secondary to-primary/10" },
  { id: "community", tag: "Community", title: "Partnerships, purpose, and accessible care.", desc: "We meet people where they are — in schools, workplaces, and community programs — making quality care easier to reach.", tone: "from-primary/10 to-accent/15" },
  { id: "clinic-owners", tag: "Clinic Owners", title: "Protecting your legacy and your team’s future.", desc: "A thoughtful path forward for clinic owners ready to transition — preserving your culture and supporting the people who built it.", tone: "from-accent/10 to-secondary" },
];

const VALUES = [
  { icon: Sparkles, name: "Access", desc: "Reducing wait times and making care easier to reach." },
  { icon: HandHeart, name: "Collaboration", desc: "A whole-team approach to healthcare." },
  { icon: ShieldCheck, name: "Trust", desc: "Clear, timely, and independent support." },
  { icon: TreePine, name: "Community", desc: "Building partnerships that last." },
  { icon: TrendingUp, name: "Growth", desc: "Supporting staff, patients, and partners as they move forward." },
];

const LOCATIONS = [
  {
    city: "Moncton, NB",
    address: "171 Lutz St, Suite 102, Moncton, NB E1C 5E8",
    phone: "(506) 856-9380",
    fax: "(506) 856-9388",
    email: "moncton@capturetherapeutics.com",
  },
  {
    city: "Truro, NS",
    address: "Truro, Nova Scotia",
    phone: "(902) 000-0000",
    fax: "(902) 000-0001",
    email: "truro@capturetherapeutics.com",
  },
  {
    city: "Woodstock, NB",
    address: "Woodstock, New Brunswick",
    phone: "(506) 000-0000",
    fax: "(506) 000-0001",
    email: "woodstock@capturetherapeutics.com",
  },
];

const TALKS = [
  { title: "5 factors that can delay recovery time", tag: "Recovery", excerpt: "Small habits and overlooked obstacles that quietly slow your healing — and how to move past them." },
  { title: "Mental Health — how can an OT help?", tag: "Mental Health", excerpt: "Occupational therapists bring a unique lens to mental wellness. Here’s how they support everyday life." },
  { title: "Self-Care", tag: "Wellness", excerpt: "Practical, sustainable self-care rituals that actually fit into a busy life." },
];

const useReveal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
};

const ValueRow = ({ v, i }: { v: (typeof VALUES)[number]; i: number }) => {
  const { ref, visible } = useReveal();
  const Icon = v.icon;
  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-10 py-10 border-b border-border/60 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      <div className="flex items-center gap-5 md:w-1/2">
        <div className="w-14 h-14 rounded-2xl bg-accent/20 text-accent-foreground grid place-items-center shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">0{i + 1}</p>
          <h3 className="text-2xl md:text-3xl">{v.name}</h3>
        </div>
      </div>
      <p className="md:w-1/2 text-lg text-muted-foreground leading-relaxed">{v.desc}</p>
    </div>
  );
};

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl -z-10" />
        <div className="absolute -bottom-40 -left-20 w-[24rem] h-[24rem] rounded-full bg-primary/15 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-7 animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/70 backdrop-blur border border-border text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-accent" /> Now welcoming new patients
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Accessible care,<br />
              <span className="text-primary">when you need it most.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Capture Therapeutics brings together a collaborative healthcare team focused on timely,
              high-quality care for patients, employers, communities, and partners.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-[var(--shadow-card)]"
              >
                <Calendar className="w-4 h-4" /> Book Now
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-6 py-3.5 font-medium hover:bg-muted transition-all"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div><strong className="text-foreground text-2xl">15+</strong><br />years of care</div>
              <div className="w-px h-10 bg-border" />
              <div><strong className="text-foreground text-2xl">3</strong><br />Maritime clinics</div>
              <div className="w-px h-10 bg-border" />
              <div><strong className="text-foreground text-2xl">10k+</strong><br />patients helped</div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-[4/5] rounded-[2rem] bg-card overflow-hidden shadow-[var(--shadow-float)] border border-border">
              <img
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=900&q=80"
                alt="Compassionate healthcare team supporting a patient"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -left-4 -bottom-4 md:-left-10 md:-bottom-10 bg-background rounded-2xl border border-border shadow-[var(--shadow-card)] p-5 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/30 grid place-items-center">
                  <HandHeart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Whole-team care</p>
                  <p className="text-xs text-muted-foreground">PT · OT · Kinesiology · MH</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex absolute -right-6 top-10 bg-background rounded-2xl border border-border shadow-[var(--shadow-card)] p-4 items-center gap-3">
              <Sparkles className="w-5 h-5 text-accent" />
              <p className="text-sm">Lower wait times</p>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE PATHWAYS */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Start here</p>
            <h2 className="text-4xl md:text-5xl">How can we help you today?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pick the path that fits you — we’ll take it from there.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PATHWAYS.map((p, i) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.title}
                  href={p.href}
                  className="group relative rounded-3xl bg-card border border-border p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] transition-all duration-300"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    {p.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 lg:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Our services</p>
            <h2 className="text-4xl md:text-5xl">Care designed around real people.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {SERVICES.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className={`relative rounded-3xl p-8 lg:p-10 border border-border overflow-hidden bg-gradient-to-br ${s.tone} ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <span className="text-xs uppercase tracking-[0.2em] text-primary">{s.tag}</span>
                <h3 className="mt-3 text-2xl md:text-3xl max-w-xl">{s.title}</h3>
                <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{s.desc}</p>
                <a
                  href={s.id === "patients" ? BOOK_URL : `#${s.id}`}
                  target={s.id === "patients" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SCROLL */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Our values</p>
            <h2 className="text-4xl md:text-5xl">Care that moves with purpose.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide every appointment, partnership, and conversation.
            </p>
          </div>
          <div>
            {VALUES.map((v, i) => (
              <ValueRow key={v.name} v={v} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="py-20 lg:py-28 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Locations</p>
              <h2 className="text-4xl md:text-5xl">Find care close to home.</h2>
            </div>
            <a
              href="#locations"
              className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              View all locations <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {LOCATIONS.map((l) => (
              <div key={l.city} className="rounded-3xl bg-background border border-border p-7 hover:shadow-[var(--shadow-card)] transition-all">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-xl">{l.city}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{l.address}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> {l.phone}</li>
                  <li className="flex items-center gap-2"><Printer className="w-4 h-4 text-accent" /> {l.fax}</li>
                  <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> <a className="hover:text-primary" href={`mailto:${l.email}`}>{l.email}</a></li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPTURE TALKS */}
      <section id="capture-talks" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4" /> Capture Talks</p>
              <h2 className="text-4xl md:text-5xl">Stories, insights, and recovery tips.</h2>
            </div>
            <a href="#capture-talks" className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted">
              View all articles <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TALKS.map((t, i) => (
              <article key={t.title} className="group rounded-3xl overflow-hidden bg-card border border-border hover:-translate-y-1 hover:shadow-[var(--shadow-float)] transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${["1559757148-5c350d0d3c56", "1571019613454-1cb2f99b2d8b", "1506905925346-21bda4d32df4"][i]}?auto=format&fit=crop&w=800&q=80`}
                    alt={t.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-accent">{t.tag}</span>
                  <h3 className="mt-2 text-xl leading-snug">{t.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{t.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] opacity-80">
                <ShoppingBag className="w-4 h-4" /> Shop Products
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl">Find recovery tools to help you heal, with home delivery.</h2>
            </div>
            <div className="md:text-right">
              <p className="opacity-90 mb-6 md:max-w-md md:ml-auto">
                Therapist-curated braces, foam rollers, exercise bands and more — shipped straight to your door.
              </p>
              <a
                href="#shop"
                className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 font-medium hover:scale-[1.02] transition-transform"
              >
                Shop Products <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="join" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-card border border-border p-10 md:p-14 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Newsletter</p>
            <h2 className="text-4xl md:text-5xl">Subscribe to our crew</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Be the first to know about new happenings with the Capture Crew.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-[1.02] transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-9 h-9 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                  <HandHeart className="w-4 h-4" />
                </span>
                <span className="font-serif text-lg">Capture Therapeutics</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                A collaborative healthcare team focused on timely, high-quality care across the Maritimes.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <a href="#" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>
            <div>
              <h3 className="text-sm mb-4">Quick links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#patients" className="hover:text-primary">Patients</a></li>
                <li><a href="#join" className="hover:text-primary">Join Our Crew</a></li>
                <li><a href="#capture-talks" className="hover:text-primary">Capture Talks</a></li>
                <li><a href="#shop" className="hover:text-primary">Shop</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#vocational" className="hover:text-primary">Vocational</a></li>
                <li><a href="#employers" className="hover:text-primary">Employers</a></li>
                <li><a href="#community" className="hover:text-primary">Community</a></li>
                <li><a href="#clinic-owners" className="hover:text-primary">Clinic Owners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#locations" className="hover:text-primary">Locations</a></li>
                <li><a href="mailto:moncton@capturetherapeutics.com" className="hover:text-primary">moncton@capturetherapeutics.com</a></li>
                <li>(506) 856-9380</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Capture Therapeutics. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default Index;
