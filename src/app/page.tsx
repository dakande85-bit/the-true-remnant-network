import { DirectoryCard } from "@/components/DirectoryCard";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Hero } from "@/components/Hero";
import { dataProvider } from "@/lib/data";

const pillars = [
  ["Christian trust network", "Profiles are organised around public review status, doctrine notes, links, and accountability signals."],
  ["Media-led discovery", "Podcast and video conversations help people hear the voices behind the listings."],
  ["External links only", "Donations, books, music, tickets, and support pages stay on official external sites in the MVP."],
  ["Supabase-ready", "Mock data is isolated behind a provider so the database can be connected cleanly later."]
];

export default async function HomePage() {
  const profiles = await dataProvider.directory.list();
  const featured = profiles.filter((profile) => profile.status === "Featured").slice(0, 3);

  return (
    <>
      <Hero
        eyebrow="The True Remnant Network"
        title="Find faithful voices. Discover trusted ministries."
        description="A premium Christian media and trust platform for validated teachers, churches, ministries, charities, missionaries, worship artists, books, podcasts, events, and mission projects."
        primaryHref="/directory"
        primaryLabel="Explore Directory"
        secondaryHref="/media"
        secondaryLabel="Watch Media"
      />

      <FeaturedSection
        eyebrow="Foundation"
        title="Built for careful Christian discovery."
        description="The MVP keeps the experience simple: strong editorial pages, clear validation statuses, profile pages, media, missions, events, and a submission flow."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([title, description]) => (
            <article className="rounded-2xl border border-linen bg-white p-5 shadow-sm" key={title}>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-gold-deep">MVP</span>
              <h3 className="mt-3 font-display text-2xl text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{description}</p>
            </article>
          ))}
        </div>
      </FeaturedSection>

      <FeaturedSection
        eyebrow="Featured"
        title="Validated profiles for people and organisations."
        description="Starter records demonstrate churches, missions, charities, teachers, and worship artists before Supabase is connected."
        actionHref="/directory"
        actionLabel="View Directory"
        muted
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((profile) => (
            <DirectoryCard key={profile.id} profile={profile} />
          ))}
        </div>
      </FeaturedSection>
    </>
  );
}
