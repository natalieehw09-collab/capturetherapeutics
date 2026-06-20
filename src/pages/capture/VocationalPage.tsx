import PageLayout from "@/components/capture/PageLayout";
import PageHero from "@/components/capture/PageHero";
import { FileText, ArrowRight } from "lucide-react";
import { VOCATIONAL_REFERRAL_PDF } from "@/lib/capture-links";

const VocationalPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Vocational Services"
      title={<>Trusted, timely, <span className="text-primary">independent evaluations.</span></>}
      description="Functional Capacity Evaluations, return-to-work planning, and assessments delivered with care, clarity, and clinical rigor."
    >
      <a
        href={VOCATIONAL_REFERRAL_PDF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the Capture Vocational Services Online Referral / Intake Form (PDF)"
        className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 font-semibold shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all"
      >
        <FileText className="w-4 h-4" /> Online Referral Form (PDF)
      </a>
    </PageHero>

    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        {[
          { title: "Functional Capacity Evaluations", desc: "Comprehensive, evidence-based assessments of a client’s physical abilities relative to job demands." },
          { title: "Return-to-Work Planning", desc: "Graduated, realistic plans that support a safe and sustainable return to work." },
          { title: "Ergonomic Assessments", desc: "Workplace assessments that identify risks and recommend practical solutions." },
          { title: "Independent Medical Coordination", desc: "Clear, timely reporting for insurers, employers, and legal partners." },
        ].map((s) => (
          <div key={s.title} className="rounded-3xl bg-card border border-border p-7">
            <h3 className="text-xl mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <a
          href={VOCATIONAL_REFERRAL_PDF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          Request a Service — Download Referral Form <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  </PageLayout>
);

export default VocationalPage;
