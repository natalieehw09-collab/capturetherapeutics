import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Printer,
  Map,
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
  BookOpen,
  Clock,
  CheckCircle2,
  Compass,
  Gift,
  FileText,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/capture/Navbar";
import Footer from "@/components/capture/Footer";
import Chatbot from "@/components/capture/Chatbot";
import {
  BOOK_URL,
  SHOP_URL,
  GIFT_CARD_URL,
  VOCATIONAL_REFERRAL_PDF,
  MAILTO,
  LOCATIONS,
  BLOG_POSTS,
} from "@/lib/capture-links";

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
    "inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold transition-all hover:scale-[1.02] shadow-[var(--shadow-card)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground hover:brightness-95"
      : variant === "light"
      ? "bg-background text-foreground hover:bg-muted"
      : "bg-transparent border border-current hover:bg-foreground/5";
  return (
    <a
      href={BOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book an appointment with Capture Therapeutics"
      className={`${base} ${styles} ${className}`}
    >
      <Calendar className="w-4 h-4" /> {label}
    </a>
  );
};

type PathwayKind = "internal" | "external";
type Pathway = {
  icon: typeof Stethoscope;
  title: string;
  desc: string;
  href: string;
  cta: string;
  kind: PathwayKind;
  highlight?: boolean;
};

const PATHWAYS: Pathway[] = [
  { icon: Stethoscope, title: "I’m a patient", desc: "Book care with our collaborative team — PT, OT, kinesiology, and mental health.", href: BOOK_URL, cta: "Book now", kind: "external", highlight: true },
  { icon: Briefcase, title: "I need vocational services", desc: "Independent, timely evaluations and return-to-work planning.", href: "/vocational-services", cta: "Learn more", kind: "internal" },
  { icon: Building2, title: "I’m an employer", desc: "Workplace wellness, ergonomics, and injury prevention.", href: "/employers", cta: "Explore programs", kind: "internal" },
  { icon: HeartHandshake, title: "I’m a clinic owner", desc: "A thoughtful transition that protects your legacy and team.", href: "/clinic-owners", cta: "Let’s talk", kind: "internal" },
  { icon: Users, title: "I want to join the team", desc: "Grow your practice with the Capture Crew.", href: "/careers", cta: "View roles", kind: "internal" },
  { icon: MapPin, title: "I want to find a location", desc: "Five welcoming clinics across the Maritimes.", href: "/locations", cta: "See locations", kind: "internal" },
];

type ServiceCard = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  external?: boolean;
};

const SERVICES: ServiceCard[] = [
  { id: "patients", tag: "Patients", title: "Get better with a whole-team approach.", desc: "Physiotherapy, OT, kinesiology, and mental health support — coordinated under one roof so you recover faster.", href: BOOK_URL, cta: "Book now", external: true },
  { id: "vocational", tag: "Vocational Services", title: "Trusted, timely, independent evaluations.", desc: "FCEs, return-to-work planning, and assessments delivered with care, clarity, and clinical rigor.", href: "/vocational-services", cta: "Find out more" },
  { id: "employers", tag: "Employers", title: "Workplace wellness, ergonomics, and injury prevention.", desc: "Proactive programs designed around the realities of your workplace.", href: "/employers", cta: "Partner with us" },
  { id: "community", tag: "Community", title: "Partnerships, purpose, and accessible care.", desc: "We meet people where they are — in schools, workplaces, and community programs.", href: "/community", cta: "Amplify our impact" },
  { id: "clinic-owners", tag: "Clinic Owners", title: "Protecting your legacy and your team’s future.", desc: "A thoughtful path forward for clinic owners ready to transition.", href: "/clinic-owners", cta: "Let’s talk" },
];

const VALUES = [
  { icon: Sparkles, name: "Access", statement: "Reducing wait times and making care easier to reach.", detail: "We open more space in our schedules, simplify intake, and make sure the first appointment isn’t the hardest one.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80", alt: "Clinician welcoming a patient at the front desk" },
  { icon: HandHeart, name: "Collaboration", statement: "A whole-team approach to healthcare.", detail: "Our clinicians work together — not in silos — so your plan is shaped by every perspective you need.", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80", alt: "Physiotherapist guiding a patient through an exercise" },
  { icon: ShieldCheck, name: "Trust", statement: "Clear, timely, and independent support.", detail: "From plain-language assessments to honest timelines, we keep the people we serve fully informed.", image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=900&q=80", alt: "Therapist reassuringly holding a patient’s hands" },
  { icon: TreePine, name: "Community", statement: "Building partnerships that last.", detail: "We invest in schools, employers, and local programs so care extends well beyond our clinic doors.", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&q=80", alt: "Healthcare workers meeting with community members" },
  { icon: TrendingUp, name: "Growth", statement: "Supporting staff, patients, and partners as they move forward.", detail: "Healing is a beginning. We keep showing up as people, teams, and businesses grow into what’s next.", image: "https://images.unsplash.com/photo-1518644961665-ed172691aaa1?auto=format&fit=crop&w=900&q=80", alt: "Person walking confidently outdoors, recovered and active" },
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

const PathwayCard = ({ p }: { p: Pathway }) => {
  const Icon = p.icon;
  const highlight = p.highlight;
  const classes = `group relative rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
    highlight ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
  }`;
  const inner = (
    <>
      <div className={`w-12 h-12 rounded-2xl grid place-items-center mb-5 transition-colors ${
        highlight ? "bg-background/15 text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
      }`}>
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
    </>
  );
  if (p.kind === "external") {
    return (
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={p.title === "I’m a patient" ? "Book an appointment with Capture Therapeutics" : p.title}
        className={classes}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link to={p.href} className={classes} aria-label={p.title}>
      {inner}
    </Link>
  );
};

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!ok) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div className="mt-8 max-w-md mx-auto rounded-2xl bg-accent/15 border border-border p-6 flex items-center gap-3 justify-center">
        <CheckCircle className="w-6 h-6 text-primary" />
        <p className="text-sm font-medium">Thank you for subscribing. We’ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
        placeholder="your@email.com"
        aria-invalid={status === "error"}
        aria-describedby={status === "error" ? "newsletter-error" : undefined}
        className="flex-1 px-5 py-3.5 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <button
        type="submit"
        className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-[1.02] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Subscribe
      </button>
      {status === "error" && (
        <p id="newsletter-error" className="sm:absolute mt-2 text-sm text-destructive w-full text-center sm:static">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
};

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
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
              <BookButton label="Book Here" />
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

        {/* About strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="rounded-[2rem] bg-background/70 backdrop-blur border border-border p-8 md:p-10 grid md:grid-cols-3 gap-6 md:gap-10 items-center shadow-[var(--shadow-card)]">
            <div className="md:col-span-2">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-2">Who we are</p>
              <h2 className="text-2xl md:text-3xl leading-tight">
                A Maritime healthcare crew built around <em className="not-italic text-primary">people first</em> —
                patients, employers, partners, and communities.
              </h2>
              <Link
                to="/about"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
              >
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-6 md:border-l md:border-border md:pl-8">
              <div><strong className="block text-3xl text-primary">15+</strong><span className="text-xs text-muted-foreground">years of care</span></div>
              <div><strong className="block text-3xl text-primary">5</strong><span className="text-xs text-muted-foreground">clinics</span></div>
              <div><strong className="block text-3xl text-primary">10k+</strong><span className="text-xs text-muted-foreground">patients</span></div>
            </div>
          </div>
        </div>
      </section>

      <SectionConnector label="Step 1 · What kind of support do you need?" />

      {/* PATHWAYS */}
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
            {PATHWAYS.map((p) => <PathwayCard key={p.title} p={p} />)}
          </div>
        </div>
      </section>

      <SectionConnector label="Step 2 · Explore our services" />

      {/* SERVICES */}
      <section id="services" className="pt-20 pb-20 lg:pt-24 lg:pb-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Our services</p>
              <h2 className="text-4xl md:text-5xl">Care designed around real people.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Focused programs — one connected team behind every interaction.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
            >
              Find out more <ArrowRight className="w-4 h-4" />
            </Link>
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
              const CtaLink = s.external ? (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book an appointment with Capture Therapeutics"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                >
                  {s.cta} <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link
                  to={s.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                >
                  {s.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              );
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className={`relative rounded-3xl p-8 lg:p-10 border border-border overflow-hidden ${tones[i]}`}
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-primary">{s.tag}</span>
                  <h3 className="mt-3 text-2xl md:text-3xl max-w-xl">{s.title}</h3>
                  <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{s.desc}</p>
                  {CtaLink}
                </article>
              );
            })}
          </div>

          {/* Vocational referral PDF CTA strip */}
          <div className="mt-8 rounded-3xl border border-border bg-background p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent">Vocational referrals</p>
              <h3 className="mt-1 text-xl">Need to submit a referral? Download our intake form.</h3>
            </div>
            <a
              href={VOCATIONAL_REFERRAL_PDF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the Capture Vocational Services Online Referral / Intake Form (PDF)"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-medium hover:bg-primary/90"
            >
              <FileText className="w-4 h-4" /> Online Referral Form
            </a>
          </div>
        </div>
      </section>

      <SectionConnector label="Step 3 · Why Capture is different" />

      {/* VALUES */}
      <section className="relative pt-20 pb-10 lg:pt-28 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-muted/40 to-transparent -z-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Our values</p>
            <h2 className="text-4xl md:text-6xl leading-tight">Care that moves with purpose.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Five principles that shape every appointment, partnership, and conversation.
            </p>
          </div>
          <div className="relative mt-6">
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
                <Link
                  to="/locations"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3.5 font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  <MapPin className="w-4 h-4" /> Or call a clinic
                </Link>
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
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Our Locations</p>
              <h2 className="text-4xl md:text-5xl">Find care close to home.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <BookButton label="Book at any clinic" />
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-5 py-3 text-sm font-medium hover:bg-muted transition-colors"
              >
                View all locations <ArrowRight className="w-4 h-4" />
              </Link>
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
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent shrink-0" />
                    <a href={l.phoneHref} className="hover:text-primary" aria-label={`Call ${l.city} at ${l.phone}`}>{l.phone}</a>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground"><Printer className="w-4 h-4 text-accent shrink-0" /> Fax: {l.fax}</li>
                  <li className="flex items-center gap-2 break-all">
                    <Mail className="w-4 h-4 text-accent shrink-0" />
                    <a className="hover:text-primary" href={`mailto:${l.email}`} aria-label={`Email ${l.city} at ${l.email}`}>{l.email}</a>
                  </li>
                </ul>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={BOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book an appointment at ${l.city}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90"
                  >
                    <Calendar className="w-4 h-4" /> Book at {l.city.split(",")[0]}
                  </a>
                  <a
                    href={l.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${l.city} on Google Maps`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:bg-muted"
                  >
                    <Map className="w-4 h-4" /> Get Directions
                  </a>
                </div>
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
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
            >
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.map((t) => (
              <a
                key={t.slug}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read "${t.title}" on capturetherapeutics.com`}
                className="group rounded-3xl overflow-hidden bg-card border border-border hover:-translate-y-1 hover:shadow-[var(--shadow-float)] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
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
                    Read article <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP + GIFT CARDS */}
      <section id="shop" className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-5">
          <div className="rounded-[2rem] bg-accent/15 border border-border p-10 md:p-12 flex flex-col">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
              <ShoppingBag className="w-4 h-4" /> Shop Products
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl">Recovery tools to help you heal, with home delivery.</h2>
            <p className="text-muted-foreground mt-4 mb-6 max-w-md">
              Therapist-curated braces, foam rollers, exercise bands and more — shipped straight to your door.
            </p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shop Capture Therapeutics products (opens in a new tab)"
              className="mt-auto inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:scale-[1.02] transition-transform shadow-[var(--shadow-card)] w-fit"
            >
              Shop Here <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="rounded-[2rem] bg-primary/10 border border-border p-10 md:p-12 flex flex-col">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
              <Gift className="w-4 h-4" /> Gift Cards
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl">Give the gift of better days.</h2>
            <p className="text-muted-foreground mt-4 mb-6 max-w-md">
              Capture Therapeutics gift cards work for any service at any of our clinics.
            </p>
            <a
              href={GIFT_CARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Purchase a Capture Therapeutics gift card (opens in a new tab)"
              className="mt-auto inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 font-medium hover:scale-[1.02] transition-transform shadow-[var(--shadow-card)] w-fit"
            >
              Buy a Gift Card <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CAREERS / JOIN */}
      <section id="join" className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-card p-10 md:p-14 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Join Our Crew</p>
              <h2 className="text-3xl md:text-5xl">We grow. You grow.</h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                A meaningful career in healthcare — with mentorship, autonomy, and a team that has your back.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:bg-primary/90"
              >
                View Careers <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={MAILTO.careers}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-medium hover:bg-muted"
              >
                <Mail className="w-4 h-4" /> Email Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-card border border-border p-10 md:p-14 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Newsletter</p>
            <h2 className="text-4xl md:text-5xl">Subscribe to our crew</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Be the first to know about new happenings with the Capture Crew.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
