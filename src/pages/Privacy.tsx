import PageLayout from "@/components/capture/PageLayout";
import PageHero from "@/components/capture/PageHero";

const Privacy = () => (
  <PageLayout>
    <PageHero eyebrow="Legal" title="Privacy Policy" description="How Capture Therapeutics collects, uses, and protects your information." />
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-muted-foreground space-y-4">
        <p>This is a placeholder privacy policy for the redesigned Capture Therapeutics website mock. The final policy will outline data collection, use, retention, third-party sharing, and patient rights in accordance with applicable Canadian privacy legislation (PIPEDA) and provincial health information laws.</p>
        <p>For questions about your information, please contact <a className="text-primary hover:underline" href="mailto:admin@capturetherapeutics.com">admin@capturetherapeutics.com</a>.</p>
      </div>
    </section>
  </PageLayout>
);

export default Privacy;
