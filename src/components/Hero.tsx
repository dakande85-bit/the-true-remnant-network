type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: HeroProps) {
  return (
    <section className="overflow-hidden border-b border-linen bg-[radial-gradient(circle_at_75%_20%,rgba(200,154,61,0.28),transparent_28rem)]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 py-16 md:grid-cols-[1.08fr_0.92fr] md:py-24">
        <div className="self-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl leading-[0.96] tracking-tight text-ink md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{description}</p>
          {(primaryHref || secondaryHref) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryHref && primaryLabel ? (
                <a className="rounded-full bg-gold px-6 py-3 text-sm font-black text-ink shadow-editorial" href={primaryHref}>
                  {primaryLabel}
                </a>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <a className="rounded-full border border-linen bg-parchment px-6 py-3 text-sm font-black text-ink" href={secondaryHref}>
                  {secondaryLabel}
                </a>
              ) : null}
            </div>
          )}
        </div>
        <div className="min-h-80 rounded-[2rem] border border-gold/30 bg-gradient-to-br from-ink via-stone-900 to-gold-deep p-6 shadow-editorial">
          <div className="flex h-full flex-col justify-end rounded-[1.5rem] border border-cream/10 p-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Gospel-centred resources</p>
            <div className="mt-5 grid gap-3">
              {[
                ["Watch", "Podcast interviews, testimonies, and teaching videos."],
                ["Pray", "Christ-centred prayers for repentance, protection, and standing firm."],
                ["Grow", "Books, worship, articles, and discipleship resources."]
              ].map(([title, copy]) => (
                <div className="rounded-2xl border border-cream/10 bg-cream/10 p-4 text-cream" key={title}>
                  <strong>{title}</strong>
                  <p className="mt-1 text-sm text-cream/65">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
