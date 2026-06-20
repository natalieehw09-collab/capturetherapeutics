import PageLayout from "@/components/capture/PageLayout";
import PageHero from "@/components/capture/PageHero";
import { Calendar, Stethoscope, HandHeart, Activity, Apple, Brain, Briefcase, Sparkles } from "lucide-react";
import { BOOK_URL } from "@/lib/capture-links";

const SERVICES = [
  { id: "physiotherapy", icon: Stethoscope, name: "Physiotherapy", desc: "Assessment, hands-on treatment, and exercise to restore movement and reduce pain." },
  { id: "massage", icon: HandHeart, name: "Massage Therapy", desc: "Therapeutic massage for recovery, stress relief, and chronic pain management." },
  { id: "chiropractic", icon: Activity, name: "Chiropractic Care", desc: "Spinal and joint care to support alignment, mobility, and long-term function." },
  { id: "dietitian", icon: Apple, name: "Dietitian Services", desc: "Personalized nutrition guidance for recovery, performance, and chronic conditions." },
  { id: "kinesiology", icon: Activity, name: "Kinesiology", desc: "Movement-based rehab and conditioning plans tailored to your goals." },
  { id: "counselling", icon: Brain, name: "Counselling & Mental Wellness", desc: "A safe, supportive space to work through life’s challenges with a licensed clinician." },
  { id: "ot", icon: Sparkles, name: "Occupational Therapy & Rehab", desc: "Helping you return to the activities, work, and routines that matter most." },
  { id: "vocational", icon: Briefcase, name: "Vocational Services", desc: "Independent evaluations, FCEs, and return-to-work planning for insurers and employers." },
];

const ServicesPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Our Services"
      title={<>Care designed around <span className="text-primary">real people.</span></>}
      description="One connected team across physiotherapy, mental wellness, rehab, and vocational services — coordinated under one roof."
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
    </PageHero>

    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                id={s.id}
                className="group rounded-3xl bg-card border border-border p-7 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default ServicesPage;
