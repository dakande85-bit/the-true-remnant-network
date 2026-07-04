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
        title="Discover mission projects with official support links."
        description="Mission profiles explain the work, prayer needs, accountability context, and external support routes. The platform does not process donations."
      />
      <FeaturedSection eyebrow="Mission Projects" title="Reviewed mission listings" muted>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <DirectoryCard key={profile.id} profile={profile} />
          ))}
        </div>
      </FeaturedSection>
    </>
  );
}
