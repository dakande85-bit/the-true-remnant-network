import { homeContent } from "@/content/home";
import { ImageCollage } from "./ImageCollage";

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(200,154,61,0.22),transparent_28rem),radial-gradient(circle_at_85%_30%,rgba(255,250,240,0.08),transparent_26rem)]" />
      <div className="relative mx-auto grid w-[min(1240px,calc(100%-32px))] gap-10 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">{homeContent.hero.eyebrow}</p>
          <h1 className="mt-5 font-display text-6xl leading-[0.9] tracking-tight md:text-8xl">
            {homeContent.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/72">{homeContent.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {homeContent.hero.actions.map((action) => (
              <a
                className={
                  action.variant === "primary"
                    ? "rounded-full bg-gold px-6 py-3 text-sm font-black text-ink"
                    : action.variant === "secondary"
                      ? "rounded-full bg-cream px-6 py-3 text-sm font-black text-ink"
                      : "rounded-full border border-cream/20 px-6 py-3 text-sm font-black text-cream"
                }
                href={action.href}
                key={action.href}
              >
                {action.label}
              </a>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-cream/10 pt-6 text-sm text-cream/70">
            <span><strong className="block text-lg text-cream">Truth</strong>True Gospel</span>
            <span><strong className="block text-lg text-cream">Prayer</strong>Warfare resources</span>
            <span><strong className="block text-lg text-cream">Media</strong>Teaching and testimony</span>
          </div>
        </div>
        <ImageCollage />
      </div>
    </section>
  );
}
