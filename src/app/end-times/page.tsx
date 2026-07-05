import { Hero } from "@/components/Hero";
import { ScriptureBlock } from "@/components/ScriptureBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { homeContent } from "@/content/home";

const endTimesNotes = [
  "Scripture warns about deception, lawlessness, and falling away.",
  "Believers should understand tribulation, endurance, and the hope of Christ's return.",
  "The Antichrist system must be discussed biblically, soberly, and without sensationalism.",
  "End-times discernment should produce faithfulness, prayer, holiness, courage, and love for the truth."
];

export default function EndTimesPage() {
  return (
    <>
      <Hero
        eyebrow="End Times"
        title={homeContent.endTimes.title}
        description={homeContent.endTimes.copy}
        primaryHref="/watch"
        primaryLabel="Watch Conversations"
        secondaryHref="/topics"
        secondaryLabel="Explore Topics"
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 lg:grid-cols-[0.9fr_1fr]">
          <ScriptureBlock quote={homeContent.scripture.quote} reference={homeContent.scripture.reference} />
          <div>
            <SectionHeader
              eyebrow="Discernment"
              title="Serious, biblical, and without fear-mongering."
              description="The last days are not a theme for speculation. They are a call to stay awake, love the truth, endure faithfully, and point people to Jesus Christ."
            />
            <div className="grid gap-4">
              {endTimesNotes.map((note) => (
                <article className="rounded-2xl border border-linen bg-parchment p-5 text-stone-700" key={note}>
                  {note}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
