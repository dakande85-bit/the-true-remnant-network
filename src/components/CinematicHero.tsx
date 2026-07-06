import Image from "next/image";
import { homeContent } from "@/content/home";

export function CinematicHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-ink text-cream">
      <Image
        alt="The True Remnant Network golden worship scene"
        className="object-cover object-center"
        fill
        priority
        sizes="100vw"
        src="/brand/true-remnant-heaven-hero.png"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-black/20" />
      <div className="absolute inset-y-0 left-0 w-[62%] bg-black/45" />
      <div className="relative mx-auto flex min-h-[720px] w-[min(1240px,calc(100%-32px))] items-center py-14 lg:py-20">
        <div className="max-w-[720px] border-l-4 border-gold bg-black/72 px-5 py-6 shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-7 md:px-9 md:py-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-gold md:text-sm">{homeContent.hero.eyebrow}</p>
          <h1 className="mt-5 font-display text-[3.25rem] leading-[0.95] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.65)] md:text-7xl">
            {homeContent.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white md:text-xl md:leading-9">{homeContent.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {homeContent.hero.actions.map((action) => (
              <a
                className={
                  action.variant === "primary"
                    ? "rounded-full bg-gold px-6 py-3 text-sm font-black text-ink"
                    : action.variant === "secondary"
                      ? "rounded-full bg-cream px-6 py-3 text-sm font-black text-ink"
                      : "rounded-full border border-cream/55 bg-black/30 px-6 py-3 text-sm font-black text-cream"
                }
                href={action.href}
                key={action.href}
              >
                {action.label}
              </a>
            ))}
          </div>
          <div className="mt-10 grid gap-4 border-t border-cream/20 pt-6 text-sm font-semibold text-cream/88 sm:grid-cols-3">
            <span><strong className="block text-lg text-white">Truth</strong>True Gospel</span>
            <span><strong className="block text-lg text-white">Prayer</strong>Warfare resources</span>
            <span><strong className="block text-lg text-white">Media</strong>Teaching and testimony</span>
          </div>
        </div>
      </div>
    </section>
  );
}
