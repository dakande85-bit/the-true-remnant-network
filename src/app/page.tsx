import { CTASection } from "@/components/CTASection";
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
      <section className="bg-ink">
        <div className="mx-auto w-[min(1320px,calc(100%-32px))]">
          <PodcastFeature />
        </div>
      </section>

      <StorySection eyebrow="Mission" title={homeContent.mission.title} description={homeContent.mission.copy}>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <ScriptureBlock quote={homeContent.scripture.quote} reference={homeContent.scripture.reference} />
          <ScriptureBlock quote={homeContent.supportingScripture.quote} reference={homeContent.supportingScripture.reference} />
        </div>
      </StorySection>

      <section className="bg-white py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="What We Do"
            title="Conversations that seek truth, context, and unity."
            description="The ministry exists to interview, ask, test, examine, discuss, and equip so believers can stand together in Christ."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {homeContent.whatWeDo.map(([title, copy]) => (
              <article className="rounded-[1.5rem] border border-linen bg-parchment p-6" key={title}>
                <h3 className="font-display text-2xl leading-tight text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StorySection
        eyebrow="Topics"
        title="Difficult questions facing the Church."
        description="We explore doctrine, prophecy, spiritual warfare, testimonies, mission, unity, and Christian living with Scripture first."
        dark
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {homeContent.topics.map((topic) => (
            <a className="rounded-2xl border border-cream/10 bg-cream/5 p-5 font-display text-2xl leading-tight text-cream transition hover:border-gold/50" href="/topics" key={topic}>
              {topic}
            </a>
          ))}
        </div>
      </StorySection>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 lg:grid-cols-[0.9fr_1fr]">
          <ImageCard imageKey="cityNight" title="Stay awake, grounded in Scripture, and faithful to Christ." label="End Times" className="min-h-[460px]" />
          <div className="flex flex-col justify-center rounded-[2rem] border border-linen bg-parchment p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">End Times</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">{homeContent.endTimes.title}</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">{homeContent.endTimes.copy}</p>
            <a className="mt-8 w-fit rounded-full bg-ink px-6 py-3 text-sm font-black text-cream" href="/end-times">
              Explore End Times
            </a>
          </div>
        </div>
      </section>

      <StorySection eyebrow="Watch" title={homeContent.watch.title} description={homeContent.watch.copy}>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col justify-center rounded-[2rem] border border-linen bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-stone-700">
              Interviews and long-form discussions create room for testimony, Scripture, context, disagreement handled
              with humility, and unity built around the truth of Jesus Christ.
            </p>
            <a className="mt-8 w-fit rounded-full bg-gold px-6 py-3 text-sm font-black text-ink" href="/watch">
              Watch Conversations
            </a>
          </div>
          <ImageCard imageKey="podcastStudio" title="Interviews, testimonies, and biblical conversations." label="Watch" className="min-h-[430px]" />
        </div>
      </StorySection>

      <section className="bg-white py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader eyebrow="Resources" title={homeContent.resources.title} description={homeContent.resources.copy} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {homeContent.resources.categories.map((path) => (
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
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 rounded-[2rem] border border-linen bg-white p-8 shadow-editorial lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">Newsletter</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">Join the Remnant newsletter</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Receive new interviews, conversations, prayers, end-times studies, articles, and recommended resources.
            </p>
          </div>
          <form className="grid gap-4">
            <TextField label="Name" placeholder="Your name" />
            <TextField label="Email" placeholder="you@example.com" type="email" />
            <SelectField label="Interest">
              <option>All updates</option>
              <option>Conversations</option>
              <option>Topics</option>
              <option>End Times</option>
              <option>Prayers</option>
              <option>Resources</option>
            </SelectField>
            <button className="rounded-full bg-gold px-6 py-3 text-sm font-black text-ink" type="button">
              Join Newsletter
            </button>
          </form>
        </div>
      </section>

      <CTASection
        title="Join the conversation."
        description="Watch interviews, explore biblical topics, pray with us, and stand with believers seeking truth and unity in Christ."
        primaryHref="/watch"
        primaryLabel="Watch Latest"
        secondaryHref="/topics"
        secondaryLabel="Explore Topics"
      />
    </>
  );
}
