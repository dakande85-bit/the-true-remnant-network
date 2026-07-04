import { FeaturedSection } from "@/components/FeaturedSection";
import { Hero } from "@/components/Hero";
import { ScriptureBlock } from "@/components/ScriptureBlock";
import { homeContent } from "@/content/home";

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="A Christian media and resource platform for believers standing firm."
        description="The True Remnant Network points people back to the true Jesus through biblical teaching, prayer, discernment, testimony, worship, missions, and Gospel-centred resources."
      />
      <FeaturedSection
        eyebrow="Who We Are"
        title="Created to help believers stand firm in truth."
        description={homeContent.who.copy}
        muted
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[2rem] border border-linen bg-parchment p-8">
            <p className="text-lg leading-8 text-stone-700">{homeContent.who.support}</p>
          </article>
          <ScriptureBlock quote={homeContent.scripture.quote} reference={homeContent.scripture.reference} />
        </div>
      </FeaturedSection>
      <FeaturedSection eyebrow="Beliefs" title="What we believe">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {homeContent.beliefs.map(([title, description]) => (
            <article className="rounded-2xl border border-linen bg-white p-6 shadow-sm" key={title}>
              <h3 className="font-display text-2xl text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{description}</p>
            </article>
          ))}
        </div>
      </FeaturedSection>
    </>
  );
}
