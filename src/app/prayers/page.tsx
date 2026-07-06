import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { prayerItems } from "@/data/prayers";

export default function PrayersPage() {
  return (
    <>
      <Hero
        eyebrow="Prayers"
        title="Spiritual warfare prayers"
        description="Prayer is dependence on God, submission to Jesus Christ, and resistance against darkness. These placeholder guides are serious, biblical, and Christ-centred."
      />
      <section className="bg-white py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Prayer Library"
            title="Prayer categories for believers standing firm"
            description="Future prayer pages can include Scripture references, written prayers, audio, printable guides, and pastoral notes."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {prayerItems.map((item) => (
              <article className="rounded-[1.5rem] border border-linen bg-parchment p-6" key={item.category}>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-gold-deep">{item.category}</span>
                <h3 className="mt-4 font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
