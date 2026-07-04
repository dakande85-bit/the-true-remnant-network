import { Hero } from "@/components/Hero";
import { ResourceCard } from "@/components/ResourceCard";
import { ResourceExplorer } from "@/components/ResourceExplorer";
import { SectionHeader } from "@/components/SectionHeader";
import { menAndWomenOfGod, publicResources, resourceCategories } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <>
      <Hero
        eyebrow="Resources"
        title="Resources for the remnant believer."
        description="Teachings, prayers, testimonies, interviews, missions, worship, books, and trusted voices gathered to help believers stand firm in the true Gospel and follow the true Jesus."
      />
      <section className="py-10">
        <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-wrap gap-2 rounded-2xl border border-linen bg-white p-3 shadow-sm">
          {resourceCategories.map((tab, index) => (
            <a className={`rounded-full px-4 py-2 text-sm font-black ${index === 0 ? "bg-ink text-cream" : "border border-linen bg-parchment text-stone-700"}`} href={tab === "Men & Women of God" ? "#men-women-of-god" : "#resources"} key={tab}>
              {tab}
            </a>
          ))}
        </div>
      </section>
      <section className="bg-white py-16" id="men-women-of-god">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Men & Women of God"
            title="Teachers, pastors, apologists, worshippers, and testimony voices"
            description="Teachers, pastors, apologists, worshippers, and testimony voices we study from, interview, or make available for believers seeking biblical truth and spiritual discernment."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {menAndWomenOfGod.map((item) => <ResourceCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
      <section className="py-16" id="resources">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Resource Library"
            title="Curated resources for believers seeking truth, prayer, discernment, and spiritual strength."
            description="Search by name, category, topic, or type. Resources are controlled by the site owner and kept as a curated library, not an open public directory."
          />
          <ResourceExplorer resources={publicResources} categories={resourceCategories} />
        </div>
      </section>
    </>
  );
}
