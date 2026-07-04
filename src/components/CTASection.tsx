type CTASectionProps = {
  title: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({ title, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel }: CTASectionProps) {
  return (
    <section className="bg-ink py-20 text-cream">
      <div className="mx-auto rounded-[2rem] border border-gold/25 bg-[radial-gradient(circle_at_top_right,rgba(200,154,61,0.2),transparent_24rem)] p-8 text-center shadow-editorial w-[min(1180px,calc(100%-32px))]">
        <h2 className="mx-auto max-w-3xl font-display text-5xl leading-tight md:text-6xl">{title}</h2>
        {description ? <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/70">{description}</p> : null}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a className="rounded-full bg-gold px-6 py-3 text-sm font-black text-ink" href={primaryHref}>{primaryLabel}</a>
          {secondaryHref && secondaryLabel ? (
            <a className="rounded-full border border-cream/20 px-6 py-3 text-sm font-black text-cream" href={secondaryHref}>{secondaryLabel}</a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
