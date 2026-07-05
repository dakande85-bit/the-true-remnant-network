import { Hero } from "@/components/Hero";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { menAndWomenOfGod, resourceCategories } from "@/data/resources";

const categoryDescriptions = [
  ["Men & Women of God", "A small launch list of teachers, pastors, apologists, and voices we currently make available for study."],
  ["Teachings", "Biblical sermons, studies, and long-form resources pointing believers back to Christ and Scripture."],
  ["Prayers", "Spiritual warfare prayers, repentance guides, and serious Christ-centred prayer resources."],
  ["Apologetics", "Resources that help believers defend the faith and answer hard questions with clarity."],
  ["Books & Resources", "Recommended reading, study helps, devotionals, and tools for discipleship."],
  ["Podcast Interviews", "Conversations, testimonies, and teaching media organised for easy watching and listening."]
];

export default function ResourcesPage() {
  return (
    <>
      <Hero
        eyebrow="Resources"
        title="Resources for the remnant believer."
        description="Curated resources for believers seeking truth, prayer, discernment, and spiritual strength."
      />
      <section className="py-10">
        <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-wrap gap-2 rounded-2xl border border-linen bg-white p-3 shadow-sm">
          {resourceCategories.map((tab, index) => (
            <a
              className={`rounded-full px-4 py-2 text-sm font-black ${index === 0 ? "bg-ink text-cream" : "border border-linen bg-parchment text-stone-700"}`}
              href={tab === "Men & Women of God" ? "#men-women-of-god" : "#categories"}
              key={tab}
            >
              {tab}
            </a>
          ))}
        </div>
      </section>
      <section className="bg-white py-16" id="men-women-of-god">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Men & Women of God"
            title="A small curated launch list"
            description="Teachers, pastors, apologists, and voices we study from, interview, or make available for believers seeking biblical truth and spiritual discernment."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {menAndWomenOfGod.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
      <section className="py-16" id="categories">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Resource Categories"
            title="Simple pathways for the launch library"
            description="More teachings, prayers, books, interviews, and study resources can be added as they are reviewed and curated."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categoryDescriptions.map(([title, description]) => (
              <article className="rounded-[1.5rem] border border-linen bg-white p-6 shadow-sm" key={title}>
                <h3 className="font-display text-3xl leading-tight text-ink">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink py-16 text-cream">
        <div className="mx-auto rounded-[2rem] border border-cream/10 bg-cream/5 p-8 text-center w-[min(1180px,calc(100%-32px))]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Coming soon</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl leading-tight">More resources coming soon</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/70">
            The library will grow carefully with teachings, prayers, apologetics, books, worship, missions, testimonies,
            and podcast resources as they are reviewed and curated.
          </p>
        </div>
      </section>
    </>
  );
}
