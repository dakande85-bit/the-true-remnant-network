import { Hero } from "@/components/Hero";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { resourceItems } from "@/data/resources";

const tabs = ["All", "Books", "Audio Bible", "Music", "Teaching", "Devotionals", "Tools"];

export default function ResourcesPage() {
  return (
    <>
      <Hero
        eyebrow="Books & Audio"
        title="Resources for faithful study, listening, and growth."
        description="A curated library of external resource links for reading, worship, audio teaching, devotionals, and Bible study tools."
      />
      <section className="py-10">
        <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-wrap gap-2 rounded-2xl border border-linen bg-white p-3 shadow-sm">
          {tabs.map((tab, index) => (
            <a className={`rounded-full px-4 py-2 text-sm font-black ${index === 0 ? "bg-ink text-cream" : "border border-linen bg-parchment text-stone-700"}`} href="#resources" key={tab}>
              {tab}
            </a>
          ))}
        </div>
      </section>
      <section className="bg-white py-16" id="resources">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Library"
            title="Books, teaching, worship, devotionals, and tools"
            description="Resource links stay external and should be reviewed before being promoted as recommended."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resourceItems.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
