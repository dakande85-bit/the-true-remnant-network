import { DirectoryCard } from "@/components/DirectoryCard";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Hero } from "@/components/Hero";
import { dataProvider } from "@/lib/data";

export default async function MissionsPage() {
  const profiles = (await dataProvider.directory.organisations()).filter((profile) => profile.category === "Mission");

  return (
    <>
      <Hero
        eyebrow="Missions"
        title="Mission, testimony, and evangelism in the last days."
        description="Mission stories help the Body of Christ pray, serve, witness, and remember that the Gospel must still be carried with compassion and truth."
      />
      <FeaturedSection eyebrow="Mission" title="Mission stories and outreach resources" muted>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <DirectoryCard key={profile.id} profile={profile} />
          ))}
        </div>
      </FeaturedSection>
    </>
  );
}
