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
  Clock,
  CheckCircle2,
  Compass,
} from "lucide-react";
import Navbar from "@/components/capture/Navbar";
import Chatbot from "@/components/capture/Chatbot";
import logo from "@/assets/capture-logo.png";

const BOOK_URL = "https://physiofirst.janeapp.com/";

const BookButton = ({
  label = "Book Now",
  variant = "primary",
  className = "",
}: {
  label?: string;
  variant?: "primary" | "light" | "outline";
  className?: string;
}) => {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-all hover:scale-[1.02] shadow-[var(--shadow-card)]";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground hover:brightness-95"
      : variant === "light"
      ? "bg-background text-foreground hover:bg-muted"
      : "bg-transparent border border-current hover:bg-foreground/5";
  return (
    <a href={BOOK_URL} target="_blank" rel="noreferrer" className={`${base} ${styles} ${className}`}>
      <Calendar className="w-4 h-4" /> {label}
    </a>
  );
};

const PATHWAYS = [
  {
    icon: Stethoscope,
    title: "I’m a patient",
    desc: "Book care with our collaborative team — PT, OT, kinesiology, and mental health.",
    href: BOOK_URL,
    cta: "Book now",
    external: true,
    highlight: true,
  },
  { icon: Briefcase, title: "I need vocational services", desc: "Independent, timely evaluations and return-to-work planning.", href: "#vocational", cta: "Learn more" },
  { icon: Building2, title: "I’m an employer", desc: "Workplace wellness, ergonomics, and injury prevention.", href: "#employers", cta: "Explore programs" },
  { icon: HeartHandshake, title: "I’m a clinic owner", desc: "A thoughtful transition that protects your legacy and team.", href: "#clinic-owners", cta: "Partner with us" },
  { icon: Users, title: "I want to join the team", desc: "Grow your practice with the Capture Crew.", href: "#join", cta: "View roles" },
  { icon: MapPin, title: "I want to find a location", desc: "Five welcoming clinics across the Maritimes.", href: "#locations", cta: "See locations" },
];

const SERVICES = [
  { id: "patients", tag: "Patients", title: "Get better with a whole-team approach.", desc: "Physiotherapy, occupational therapy, kinesiology, and mental health support — coordinated under one roof so you recover faster and with confidence." },
  { id: "vocational", tag: "Vocational Services", title: "Trusted, timely, independent evaluations.", desc: "Functional capacity evaluations, return-to-work planning, and assessments delivered with care, clarity, and clinical rigor." },
  { id: "employers", tag: "Employers", title: "Workplace wellness, ergonomics, and injury prevention.", desc: "Proactive programs that keep your team healthy, productive, and engaged — designed around the realities of your workplace." },
  { id: "community", tag: "Community", title: "Partnerships, purpose, and accessible care.", desc: "We meet people where they are — in schools, workplaces, and community programs — making quality care easier to reach." },
  { id: "clinic-owners", tag: "Clinic Owners", title: "Protecting your legacy and your team’s future.", desc: "A thoughtful path forward for clinic owners ready to transition — preserving your culture and supporting the people who built it." },
];

const VALUES = [
  {
    icon: Sparkles,
    name: "Access",
    statement: "Reducing wait times and making care easier to reach.",
    detail: "We open more space in our schedules, simplify intake, and make sure the first appointment isn’t the hardest one.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    alt: "Clinician welcoming a patient at the front desk",
  },
  {
    icon: HandHeart,
    name: "Collaboration",
    statement: "A whole-team approach to healthcare.",
    detail: "Our clinicians work together — not in silos — so your plan is shaped by every perspective you need.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80",
    alt: "Physiotherapist guiding a patient through an exercise",
  },
  {
    icon: ShieldCheck,
    name: "Trust",
    statement: "Clear, timely, and independent support.",
    detail: "From plain-language assessments to honest timelines, we keep the people we serve fully informed.",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=900&q=80",
    alt: "Therapist reassuringly holding a patient’s hands",
  },
  {
    icon: TreePine,
    name: "Community",
    statement: "Building partnerships that last.",
    detail: "We invest in schools, employers, and local programs so care extends well beyond our clinic doors.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&q=80",
    alt: "Healthcare workers meeting with community members",
  },
  {
    icon: TrendingUp,
    name: "Growth",
    statement: "Supporting staff, patients, and partners as they move forward.",
    detail: "Healing is a beginning. We keep showing up as people, teams, and businesses grow into what’s next.",
    image: "https://images.unsplash.com/photo-1518644961665-ed172691aaa1?auto=format&fit=crop&w=900&q=80",
    alt: "Person walking confidently outdoors, recovered and active",
  },
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
    address: "1 Commercial St, Unit 104, Truro, NS B2N 3H8",
    phone: "(902) 843-9681",
    fax: "(902) 843-9683",
    email: "truro@capturetherapeutics.com",
  },
  {
    city: "Woodstock, NB",
    address: "100 Jones St, Suite 201, Woodstock, NB E7M 0H6",
    phone: "(506) 325-1565",
    fax: "(506) 325-0738",
    email: "woodstock@capturetherapeutics.com",
  },
  {
    city: "Grand Falls, NB",
    address: "68 Ouellette St, Suite 100, Grand Falls, NB E3Z 1A6",
    phone: "(506) 473-7064",
    fax: "(506) 473-6936",
    email: "admin@capturetherapeutics.com",
  },
  {
    city: "Kedgwick, NB",
    address: "116A Rue Notre Dame, Kedgwick, NB E8B 1H8",
    phone: "(506) 473-7064",
    fax: "(506) 473-6936",
    email: "admin@capturetherapeutics.com",
  },
];

const TALKS = [
  { title: "5 factors that can delay recovery time", tag: "Recovery", excerpt: "Small habits and overlooked obstacles that quietly slow your healing — and how to move past them.", img: "1571019613454-1cb2f99b2d8b" },
  { title: "Mental Health — how can an OT help?", tag: "Mental Health", excerpt: "Occupational therapists bring a unique lens to mental wellness. Here’s how they support everyday life.", img: "1559757148-5c350d0d3c56" },
  { title: "Self-Care", tag: "Wellness", excerpt: "Practical, sustainable self-care rituals that actually fit into a busy life.", img: "1506905925346-21bda4d32df4" },
];

const useReveal = <T extends HTMLElement>(threshold = 0.25) => {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
};

const ValueStory = ({ v, i }: { v: (typeof VALUES)[number]; i: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);
  const Icon = v.icon;
  const flip = i % 2 === 1;
  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center py-14 md:py-20 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className={`${flip ? "md:order-2" : ""} space-y-5`}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent">Value 0{i + 1}</p>
            <h3 className="text-3xl md:text-4xl mt-0.5">{v.name}</h3>
          </div>
        </div>
        <p className="text-xl md:text-2xl font-serif leading-snug text-foreground/90">{v.statement}</p>
        <p className="text-base text-muted-foreground leading-relaxed max-w-lg">{v.detail}</p>
      </div>

      <div className={`${flip ? "md:order-1" : ""} relative`}>
        <div className="aspect-[5/4] rounded-[2rem] overflow-hidden border border-border shadow-[var(--shadow-card)] bg-card">
          <img src={v.image} alt={v.alt} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-background rounded-2xl border border-border shadow-[var(--shadow-card)] px-4 py-2.5 flex items-center gap-2">
          <span className="font-serif text-2xl text-primary">0{i + 1}</span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">/ 05</span>
        </div>
      </div>
    </div>
  );
};

const SectionConnector = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center -my-2 relative z-10">
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-background border border-border shadow-[var(--shadow-card)]">
      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
    </div>
  </div>
);

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* HERO — Who we are */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute -top-40 -right-32 w-[32rem] h-[32rem] rounded-full bg-accent/25 blur-3xl -z-10" />
        <div className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-7 animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur border border-border text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Now welcoming new patients across the Maritimes
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              Accessible care,<br />
              <span className="text-primary">when you need it most.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Capture Therapeutics brings together a collaborative healthcare team focused on timely,
              high-quality care for patients, employers, communities, and partners.
            </p>

            <div className="flex flex-wrap gap-3">
              <BookButton />
              <a
                href="#pathways"
                className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-6 py-3.5 font-medium hover:bg-muted transition-all"
              >
                <Compass className="w-4 h-4" /> Find the right service
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-3 text-sm text-foreground/80">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Easy online booking</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Timely appointments</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Collaborative team</li>
            </ul>
          </div>

          <div className="lg:col-span-5 relative animate-scale-in">
            <div className="aspect-[4/5] rounded-[2.25rem] bg-card overflow-hidden shadow-[var(--shadow-float)] border border-border">
              <img
                src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&w=900&q=80"
                alt="Capture Therapeutics physiotherapist guiding a patient through rehabilitation"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -left-3 -bottom-4 md:-left-8 md:-bottom-8 bg-background rounded-2xl border border-border shadow-[var(--shadow-card)] p-4 max-w-[16rem]">
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
            <div className="hidden md:flex absolute -right-4 top-10 bg-background rounded-2xl border border-border shadow-[var(--shadow-card)] p-3.5 items-center gap-2.5">
              <Clock className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm font-medium leading-tight">Lower wait times</p>
                <p className="text-xs text-muted-foreground">Often within the week</p>
              </div>
            </div>
          </div>
        </div>

        {/* About strip — Who we are */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="rounded-[2rem] bg-background/70 backdrop-blur border border-border p-8 md:p-10 grid md:grid-cols-3 gap-6 md:gap-10 items-center shadow-[var(--shadow-card)]">
            <div className="md:col-span-2">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">Who we are</p>
              <h2 className="text-2xl md:text-3xl leading-tight">
                A Maritime healthcare crew built around <em className="not-italic text-primary">people first</em> —
                patients, employers, partners, and communities.
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-6 md:border-l md:border-border md:pl-8">
              <div><strong className="block text-3xl text-primary">15+</strong><span className="text-xs text-muted-foreground">years of care</span></div>
              <div><strong className="block text-3xl text-primary">3</strong><span className="text-xs text-muted-foreground">clinics</span></div>
              <div><strong className="block text-3xl text-primary">10k+</strong><span className="text-xs text-muted-foreground">patients</span></div>
            </div>
          </div>
        </div>
      </section>

      <SectionConnector label="Step 1 · What kind of support do you need?" />

      {/* AUDIENCE PATHWAYS */}
      <section id="pathways" className="pt-20 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Start here</p>
            <h2 className="text-4xl md:text-5xl">How can we help you today?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pick the path that fits you — we’ll take it from there.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PATHWAYS.map((p) => {
              const Icon = p.icon;
              const highlight = p.highlight;
              return (
                <a
                  key={p.title}
                  href={p.href}
                  target={p.external ? "_blank" : undefined}
                  rel={p.external ? "noreferrer" : undefined}
                  className={`group relative rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] ${
                    highlight
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl grid place-items-center mb-5 transition-colors ${
                      highlight
                        ? "bg-background/15 text-primary-foreground"
                        : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl mb-2">{p.title}</h3>
                  <p className={`text-sm mb-5 ${highlight ? "opacity-90" : "text-muted-foreground"}`}>{p.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium">
                    {p.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {highlight && (
                    <span className="absolute top-5 right-5 text-[10px] uppercase tracking-wider bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                      Book online
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <SectionConnector label="Step 2 · Explore our services" />

      {/* SERVICES */}
      <section id="services" className="pt-20 pb-20 lg:pt-24 lg:pb-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Our services</p>
            <h2 className="text-4xl md:text-5xl">Care designed around real people.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Five focused programs — one connected team behind every interaction.
            </p>
          </div>
          <div className="grid md:grid-cols-6 gap-5">
            {SERVICES.map((s, i) => {
              const tones = [
                "bg-gradient-to-br from-primary/10 to-accent/10 md:col-span-6",
                "bg-gradient-to-br from-accent/15 to-secondary md:col-span-3",
                "bg-gradient-to-br from-secondary to-primary/10 md:col-span-3",
                "bg-gradient-to-br from-primary/10 to-accent/15 md:col-span-3",
                "bg-gradient-to-br from-accent/10 to-secondary md:col-span-3",
              ];
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className={`relative rounded-3xl p-8 lg:p-10 border border-border overflow-hidden ${tones[i]}`}
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
                    {s.id === "patients" ? "Book now" : "Learn more"} <ArrowRight className="w-4 h-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <SectionConnector label="Step 3 · Why Capture is different" />

      {/* VALUES — storytelling scroll */}
      <section className="relative pt-20 pb-10 lg:pt-28 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-muted/40 to-transparent -z-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Our values</p>
            <h2 className="text-4xl md:text-6xl leading-tight">Care that moves with purpose.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Five principles that shape every appointment, partnership, and conversation. Scroll through to meet them.
            </p>
          </div>

          <div className="relative mt-6">
            {/* spine line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />
            {VALUES.map((v, i) => (
              <ValueStory key={v.name} v={v} i={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionConnector label="Step 4 · Ready to book?" />

      {/* PRIMARY BOOKING CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.25rem] bg-gradient-to-br from-primary via-primary to-primary/85 text-primary-foreground p-10 md:p-14 grid md:grid-cols-5 gap-8 items-center shadow-[var(--shadow-float)]">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.25em] opacity-80 mb-3">Book your appointment</p>
              <h2 className="text-3xl md:text-5xl leading-tight">Care, on your schedule — usually within the week.</h2>
              <p className="mt-4 opacity-90 max-w-xl">
                Use our Jane online booking to choose a clinic, clinician, and time that fits your life.
                No phone tag, no waiting on hold.
              </p>
            </div>
            <div className="md:col-span-2 flex md:justify-end">
              <div className="flex flex-col gap-3 w-full md:max-w-xs">
                <BookButton variant="light" label="Book on Jane" className="justify-center" />
                <a
                  href="#locations"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  <MapPin className="w-4 h-4" /> Or call a clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionConnector label="Step 5 · Find a clinic, articles & products" />

      {/* LOCATIONS */}
      <section id="locations" className="pt-16 pb-20 md:pt-20 md:pb-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Locations</p>
              <h2 className="text-4xl md:text-5xl">Find care close to home.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <BookButton label="Book at any clinic" />
              <a
                href="#locations"
                className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-5 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                View all locations <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCATIONS.map((l) => (
              <div key={l.city} className="rounded-3xl bg-background border border-border p-7 hover:shadow-[var(--shadow-card)] transition-all flex flex-col">
                <div className="flex items-center gap-2 text-primary mb-3">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-xl">{l.city}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{l.address}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent shrink-0" /> {l.phone}</li>
                  <li className="flex items-center gap-2"><Printer className="w-4 h-4 text-accent shrink-0" /> {l.fax}</li>
                  <li className="flex items-center gap-2 break-all"><Mail className="w-4 h-4 text-accent shrink-0" /> <a className="hover:text-primary" href={`mailto:${l.email}`}>{l.email}</a></li>
                </ul>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90"
                >
                  <Calendar className="w-4 h-4" /> Book at {l.city.split(",")[0]}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPTURE TALKS */}
      <section id="capture-talks" className="py-20 lg:py-24">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TALKS.map((t) => (
              <article key={t.title} className="group rounded-3xl overflow-hidden bg-card border border-border hover:-translate-y-1 hover:shadow-[var(--shadow-float)] transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${t.img}?auto=format&fit=crop&w=800&q=80`}
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
      <section id="shop" className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-accent/15 border border-border p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
                <ShoppingBag className="w-4 h-4" /> Shop Products
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl">Find recovery tools to help you heal, with home delivery.</h2>
            </div>
            <div className="md:text-right">
              <p className="text-muted-foreground mb-6 md:max-w-md md:ml-auto">
                Therapist-curated braces, foam rollers, exercise bands and more — shipped straight to your door.
              </p>
              <a
                href="#shop"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:scale-[1.02] transition-transform shadow-[var(--shadow-card)]"
              >
                Shop Products <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="join" className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-card border border-border p-10 md:p-14 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Newsletter</p>
            <h2 className="text-4xl md:text-5xl">Subscribe to our crew</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Be the first to know about new happenings with the Capture Crew.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
              <div className="mb-4">
                <img src={logo} alt="Capture Therapeutics" className="h-10 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                A collaborative healthcare team focused on timely, high-quality care across the Maritimes.
              </p>
              <div className="mt-5"><BookButton label="Book Now" /></div>
              <div className="flex items-center gap-3 mt-5">
                <a href="#" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-full border border-border grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>
            <div>
              <h3 className="text-sm mb-4">Quick links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#pathways" className="hover:text-primary">Patients</a></li>
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
                <li className="break-all"><a href="mailto:moncton@capturetherapeutics.com" className="hover:text-primary">moncton@capturetherapeutics.com</a></li>
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
