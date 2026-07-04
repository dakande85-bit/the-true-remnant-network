import { CTASection } from "@/components/CTASection";
import { CinematicHero } from "@/components/CinematicHero";
import { ImageCard } from "@/components/ImageCard";
import { PodcastFeature } from "@/components/PodcastFeature";
import { ScriptureBlock } from "@/components/ScriptureBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { StorySection } from "@/components/StorySection";
import { TextField, SelectField } from "@/components/forms";
import { homeContent } from "@/content/home";

export default function HomePage() {
  return (
    <>
      <CinematicHero />

      <StorySection eyebrow="Who We Are" title={homeContent.who.title} description={homeContent.who.copy}>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-linen bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-stone-700">{homeContent.who.support}</p>
          </div>
          <ScriptureBlock quote={homeContent.scripture.quote} reference={homeContent.scripture.reference} />
        </div>
      </StorySection>

      <section className="bg-white py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="What We Believe"
            title="Truth is not decided by popularity."
            description="Truth is not decided by popularity, platforms, or personalities. We test everything by Scripture, the fruit of a life, and faithfulness to Jesus Christ."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {homeContent.beliefs.map(([title, copy]) => (
              <article className="rounded-[1.5rem] border border-linen bg-parchment p-6" key={title}>
                <h3 className="font-display text-2xl leading-tight text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StorySection eyebrow="The Problem" title="Deception is increasing. Discernment is urgent." dark>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {homeContent.problemCards.map(([title, copy]) => (
            <article className="rounded-[1.5rem] border border-cream/10 bg-cream/5 p-6" key={title}>
              <h3 className="font-display text-2xl leading-tight text-cream">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-cream/68">{copy}</p>
            </article>
          ))}
        </div>
      </StorySection>

      <StorySection
        eyebrow="The Response"
        title="Resources for the remnant believer."
        description={homeContent.response}
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {homeContent.resourceCategories.map((path) => (
            <ImageCard
              cta="Explore"
              description={path.copy}
              href={path.href}
              imageKey={path.image}
              key={path.title}
              label={path.label}
              title={path.title}
            />
          ))}
        </div>
      </StorySection>

      <section className="bg-ink py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <PodcastFeature />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 lg:grid-cols-[1fr_0.9fr]">
          <ImageCard imageKey="prayerCircle" title="Spiritual warfare prayers" label="Prayer" className="min-h-[430px]" />
          <div className="flex flex-col justify-center rounded-[2rem] border border-linen bg-white p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">Prayer</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">Spiritual warfare prayers</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Prayer is not a religious performance. It is dependence on God, submission to Jesus Christ, and resistance
              against darkness. This section gathers prayers for repentance, deliverance, protection, healing, family,
              purpose, and breakthrough.
            </p>
            <a className="mt-8 w-fit rounded-full bg-ink px-6 py-3 text-sm font-black text-cream" href="/prayers">
              Explore Prayers
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 lg:grid-cols-[0.9fr_1fr]">
          <div className="flex flex-col justify-center rounded-[2rem] border border-linen bg-parchment p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">Blog</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">Articles for discernment and discipleship</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Written resources on the Gospel, spiritual warfare, prayer, deception, Christian living, mission, and biblical truth.
            </p>
            <a className="mt-8 w-fit rounded-full bg-ink px-6 py-3 text-sm font-black text-cream" href="/blog">
              Read Articles
            </a>
          </div>
          <ImageCard imageKey="studyDesk" title="Written resources for sober, faithful Christian living." label="Articles" className="min-h-[430px]" />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 rounded-[2rem] border border-linen bg-white p-8 shadow-editorial lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">Newsletter</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">Join the Remnant newsletter</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Receive new teachings, prayers, interviews, articles, mission updates, and recommended resources.
            </p>
          </div>
          <form className="grid gap-4">
            <TextField label="Name" placeholder="Your name" />
            <TextField label="Email" placeholder="you@example.com" type="email" />
            <SelectField label="Interest">
              <option>All updates</option>
              <option>Teachings</option>
              <option>Prayers</option>
              <option>Podcast</option>
              <option>Missions</option>
              <option>Books & Resources</option>
            </SelectField>
            <button className="rounded-full bg-gold px-6 py-3 text-sm font-black text-ink" type="button">
              Join Newsletter
            </button>
          </form>
        </div>
      </section>

      <CTASection
        title="Stand firm. Stay awake. Hold fast to Christ."
        primaryHref="/watch"
        primaryLabel="Watch Latest"
        secondaryHref="/resources"
        secondaryLabel="Explore Resources"
      />
    </>
  );
}
