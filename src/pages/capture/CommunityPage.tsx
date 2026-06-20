import PageLayout from "@/components/capture/PageLayout";
import PageHero from "@/components/capture/PageHero";
import { Mail } from "lucide-react";
import { MAILTO, EMAILS } from "@/lib/capture-links";

const CommunityPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Community"
      title={<>Amplifying our <span className="text-primary">impact.</span></>}
      description="We meet people where they are — in schools, workplaces, and community programs — making quality care easier to reach."
    >
      <a
        href={MAILTO.community}
        aria-label="Email Capture Therapeutics about a community partnership"
        className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 font-semibold shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all"
      >
        <Mail className="w-4 h-4" /> Partner with Capture
      </a>
    </PageHero>

    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
        {[
          { title: "Gratitude", desc: "Honoring the communities and partners that make our work possible." },
          { title: "Action", desc: "Showing up — at events, in schools, and where care is needed most." },
          { title: "Partnerships", desc: "Long-term relationships with local organizations that share our values." },
        ].map((s) => (
          <div key={s.title} className="rounded-3xl bg-card border border-border p-7">
            <h3 className="text-xl mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center space-y-3">
        <p className="text-muted-foreground">Have an idea to share?</p>
        <a href={MAILTO.community} className="text-primary font-semibold hover:underline break-all">
          {EMAILS.admin}
        </a>
      </div>
    </section>
  </PageLayout>
);

export default CommunityPage;
