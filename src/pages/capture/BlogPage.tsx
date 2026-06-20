import PageLayout from "@/components/capture/PageLayout";
import PageHero from "@/components/capture/PageHero";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/capture-links";

const BlogPage = () => (
  <PageLayout>
    <PageHero
      eyebrow="Capture Talks"
      title={<>Stories, insights, and <span className="text-primary">recovery tips.</span></>}
      description="Articles from the Capture Crew on health, healing, and everyday wellness."
    />

    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
    </section>
  </PageLayout>
);

export default BlogPage;
