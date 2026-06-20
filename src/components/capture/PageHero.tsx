import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

const PageHero = ({ eyebrow, title, description, children }: Props) => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
    <div className="absolute -top-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/25 blur-3xl -z-10" />
    <div className="absolute -bottom-40 -left-20 w-[22rem] h-[22rem] rounded-full bg-primary/15 blur-3xl -z-10" />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center space-y-6">
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      )}
      <h1 className="text-4xl md:text-6xl leading-[1.05]">{title}</h1>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      {children && <div className="flex flex-wrap gap-3 justify-center pt-2">{children}</div>}
    </div>
  </section>
);

export default PageHero;
