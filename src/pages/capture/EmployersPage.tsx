import PageLayout from "@/components/capture/PageLayout";
import PageHero from "@/components/capture/PageHero";
import { Mail } from "lucide-react";
import { MAILTO, EMAILS } from "@/lib/capture-links";

const EmployersPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Employers"
      title={<>Workplace wellness that <span className="text-primary">actually works.</span></>}
      description="Corporate health, ergonomics, and injury prevention programs designed around the realities of your workplace."
    >
      <a
        href={MAILTO.employers}
        aria-label="Email Alannah Hansen about corporate health and ergonomics"
        className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 font-semibold shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all"
      >
        <Mail className="w-4 h-4" /> Partner With Us
      </a>
    </PageHero>

    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
        {[
          { title: "Ergonomic Assessments", desc: "Identify workplace risks and reduce injuries before they happen." },
          { title: "On-Site Wellness", desc: "Bring our team to your team — education sessions, screenings, and clinics." },
          { title: "Injury Prevention", desc: "Custom programs that keep your people healthy and productive." },
        ].map((s) => (
          <div key={s.title} className="rounded-3xl bg-card border border-border p-7">
            <h3 className="text-xl mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center space-y-3">
        <p className="text-muted-foreground">Ready to talk? Reach Alannah directly:</p>
        <a href={MAILTO.employers} className="text-primary font-semibold hover:underline break-all">
          {EMAILS.alannah}
        </a>
      </div>
    </section>
  </PageLayout>
);

export default EmployersPage;
