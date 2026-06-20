import PageLayout from "@/components/capture/PageLayout";
import PageHero from "@/components/capture/PageHero";
import { Mail } from "lucide-react";
import { MAILTO, EMAILS } from "@/lib/capture-links";

const CareersPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Join Our Crew"
      title={<>We grow. <span className="text-primary">You grow.</span></>}
      description="Capture is a place to build a meaningful career in healthcare — with mentorship, autonomy, and a team that has your back."
    >
      <a
        href={MAILTO.careers}
        aria-label="Email Capture Therapeutics careers team"
        className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 font-semibold shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all"
      >
        <Mail className="w-4 h-4" /> Apply / Inquire
      </a>
    </PageHero>

    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl mb-8">Current openings</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { title: "Physiotherapist", location: "Moncton, NB" },
            { title: "Occupational Therapist", location: "Truro, NS" },
            { title: "Kinesiologist", location: "Woodstock, NB" },
            { title: "Massage Therapist", location: "Grand Falls, NB" },
          ].map((j) => (
            <a
              key={j.title + j.location}
              href={MAILTO.careers}
              className="rounded-3xl bg-card border border-border p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-float)] transition-all block"
            >
              <h3 className="text-xl mb-1">{j.title}</h3>
              <p className="text-sm text-muted-foreground">{j.location} · Full-time</p>
              <p className="mt-3 text-sm text-primary font-medium">Apply by email →</p>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center space-y-3">
          <p className="text-muted-foreground">Don’t see your role? We’d still love to hear from you.</p>
          <a href={MAILTO.careers} className="text-primary font-semibold hover:underline break-all">
            {EMAILS.people}
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default CareersPage;
