import PageLayout from "@/components/capture/PageLayout";
import PageHero from "@/components/capture/PageHero";
import { Mail } from "lucide-react";
import { MAILTO, EMAILS } from "@/lib/capture-links";

const ClinicOwnersPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Clinic Owners"
      title={<>Protecting your legacy and <span className="text-primary">your team’s future.</span></>}
      description="A thoughtful path forward for clinic owners ready to transition — preserving your culture and supporting the people who built it."
    >
      <a
        href={MAILTO.clinicOwners}
        aria-label="Email Alannah Hansen about a clinic transition"
        className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 font-semibold shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all"
      >
        <Mail className="w-4 h-4" /> Let’s Talk
      </a>
    </PageHero>

    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          You’ve spent years building your practice. When the time is right to step back, you deserve a partner
          who treats your team, your patients, and your legacy with the same care you did.
        </p>
        <p>
          Capture works with clinic owners across the Maritimes on respectful, fair, and confidential transitions —
          whether that means full acquisition, gradual succession, or a partnership model.
        </p>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center space-y-3">
        <p className="text-muted-foreground">Start a confidential conversation:</p>
        <a href={MAILTO.clinicOwners} className="text-primary font-semibold hover:underline break-all">
          {EMAILS.alannah}
        </a>
      </div>
    </section>
  </PageLayout>
);

export default ClinicOwnersPage;
