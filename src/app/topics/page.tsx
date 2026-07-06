import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { homeContent } from "@/content/home";

export default function TopicsPage() {
  return (
    <>
      <Hero
        eyebrow="Topics"
        title="Difficult questions facing the Body of Christ."
        description="We discuss faith, doctrine, prophecy, spiritual warfare, unity, testimony, mission, and Christian living with Scripture first and context handled carefully."
        primaryHref="/watch"
        primaryLabel="Watch Conversations"
        secondaryHref="/end-times"
        secondaryLabel="End Times"
      />
      <section className="py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Topics We Cover"
            title="Truth, context, and unity in Christ."
            description="These topics guide interviews, long-form conversations, articles, prayers, and future study notes."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.topics.map((topic) => (
              <article className="rounded-[1.5rem] border border-linen bg-white p-6 shadow-sm" key={topic}>
                <h2 className="font-display text-3xl leading-tight text-ink">{topic}</h2>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  A conversation pathway for Scripture-first discernment, careful context, and unity around the truth of
                  Jesus Christ.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
