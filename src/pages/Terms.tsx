import PageLayout from "@/components/capture/PageLayout";
import PageHero from "@/components/capture/PageHero";

const Terms = () => (
  <PageLayout>
    <PageHero eyebrow="Legal" title="Terms of Use" description="The terms that govern your use of this website." />
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-muted-foreground space-y-4">
        <p>This is a placeholder terms-of-use document for the redesigned Capture Therapeutics website mock. The final terms will cover acceptable use, intellectual property, disclaimers, limitations of liability, and governing law.</p>
        <p>Questions? Contact <a className="text-primary hover:underline" href="mailto:admin@capturetherapeutics.com">admin@capturetherapeutics.com</a>.</p>
      </div>
    </section>
  </PageLayout>
);

export default Terms;
