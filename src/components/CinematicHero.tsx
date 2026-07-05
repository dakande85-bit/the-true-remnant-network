import Image from "next/image";
import { homeContent } from "@/content/home";

export function CinematicHero() {
  return (
    <section className="relative min-h-[780px] overflow-hidden bg-ink text-cream">
      <Image
        alt="The True Remnant Network golden worship scene"
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src="/brand/true-remnant-heaven-hero.png"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/48 to-black/12" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/10" />
      <div className="relative mx-auto flex min-h-[780px] w-[min(1240px,calc(100%-32px))] items-end py-16 lg:py-24">
        <div className="max-w-3xl rounded-[2rem] border border-cream/10 bg-black/30 p-6 shadow-editorial backdrop-blur-sm md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">{homeContent.hero.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[0.94] tracking-tight md:text-7xl">
            {homeContent.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/78">{homeContent.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {homeContent.hero.actions.map((action) => (
              <a
                className={
                  action.variant === "primary"
                    ? "rounded-full bg-gold px-6 py-3 text-sm font-black text-ink"
                    : action.variant === "secondary"
                      ? "rounded-full bg-cream px-6 py-3 text-sm font-black text-ink"
                      : "rounded-full border border-cream/25 px-6 py-3 text-sm font-black text-cream"
                }
                href={action.href}
                key={action.href}
              >
                {action.label}
              </a>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-cream/10 pt-6 text-sm text-cream/72">
            <span><strong className="block text-lg text-cream">Truth</strong>True Gospel</span>
            <span><strong className="block text-lg text-cream">Prayer</strong>Warfare resources</span>
            <span><strong className="block text-lg text-cream">Media</strong>Teaching and testimony</span>
          </div>
        </div>
      </div>
    </section>
  );
}
