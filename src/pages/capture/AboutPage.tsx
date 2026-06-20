import PageLayout from "@/components/capture/PageLayout";
import PageHero from "@/components/capture/PageHero";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, HandHeart, ShieldCheck, Sparkles, TreePine, TrendingUp } from "lucide-react";
import { BOOK_URL } from "@/lib/capture-links";

const VALUES = [
  { icon: Sparkles, name: "Access", statement: "Reducing wait times and making care easier to reach." },
  { icon: HandHeart, name: "Collaboration", statement: "A whole-team approach to healthcare." },
  { icon: ShieldCheck, name: "Trust", statement: "Clear, timely, and independent support." },
  { icon: TreePine, name: "Community", statement: "Building partnerships that last." },
  { icon: TrendingUp, name: "Growth", statement: "Supporting staff, patients, and partners forward." },
];

const About = () => (
  <PageLayout>
    <PageHero
      eyebrow="About Us"
      title={<>People first. <span className="text-primary">Always.</span></>}
      description="Capture Therapeutics is a Maritime healthcare crew built around timely, accessible, whole-team care for patients, employers, partners, and communities."
    >
      <a
        href={BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book an appointment with Capture Therapeutics"
        className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 font-semibold shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all"
      >
        <Calendar className="w-4 h-4" /> Book Now
      </a>
      <Link
        to="/services"
        className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-6 py-3.5 font-medium hover:bg-muted transition-all"
      >
        Explore our services <ArrowRight className="w-4 h-4" />
      </Link>
    </PageHero>

    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Our story</p>
          <h2 className="text-3xl md:text-4xl mb-5">A collaborative crew, built around the Maritimes.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Capture Therapeutics began with a simple idea: care should be easier to access, more
            connected, and centered on the person in front of us. Today, our team of physiotherapists,
            occupational therapists, kinesiologists, and mental health clinicians work side by side to
            help people get back to what they love.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We serve patients, employers, and partners across New Brunswick and Nova Scotia from five
            welcoming clinics — and we’re always growing.
          </p>
        </div>
        <div className="rounded-[2rem] overflow-hidden border border-border shadow-[var(--shadow-card)]">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80"
            alt="Capture Therapeutics clinical team collaborating"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl mb-10 text-center">What we stand for</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.name} className="rounded-3xl bg-background border border-border p-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl mb-2">{v.name}</h3>
                <p className="text-sm text-muted-foreground">{v.statement}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
