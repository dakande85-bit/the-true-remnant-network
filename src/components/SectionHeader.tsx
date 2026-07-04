type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  actionLabel?: string;
  actionHref?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  actionLabel,
  actionHref
}: SectionHeaderProps) {
  return (
    <div className={`mb-9 flex flex-col gap-5 ${align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}>
      <div>
        {eyebrow ? <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">{eyebrow}</p> : null}
        <h2 className={`mt-3 max-w-4xl font-display text-4xl leading-[1.02] tracking-tight md:text-6xl ${inverse ? "text-cream" : "text-ink"}`}>
          {title}
        </h2>
        {description ? <p className={`mt-4 max-w-2xl text-base leading-8 ${inverse ? "text-cream/70" : "text-stone-600"}`}>{description}</p> : null}
      </div>
      {actionLabel && actionHref ? (
        <a className={`rounded-full px-5 py-3 text-sm font-black ${inverse ? "bg-cream text-ink" : "border border-linen bg-parchment text-ink"}`} href={actionHref}>
          {actionLabel}
        </a>
      ) : null}
    </div>
  );
}
