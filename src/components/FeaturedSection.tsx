import type { ReactNode } from "react";

type FeaturedSectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
  children: ReactNode;
  muted?: boolean;
};

export function FeaturedSection({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
  children,
  muted = false
}: FeaturedSectionProps) {
  return (
    <section className={muted ? "bg-white py-16" : "py-16"}>
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">{eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-ink md:text-5xl">{title}</h2>
            {description ? <p className="mt-4 max-w-2xl leading-7 text-stone-600">{description}</p> : null}
          </div>
          {actionHref && actionLabel ? (
            <a className="rounded-full border border-linen bg-parchment px-5 py-3 text-sm font-black text-ink" href={actionHref}>
              {actionLabel}
            </a>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
