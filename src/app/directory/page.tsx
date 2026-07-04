import { CategoryFilter } from "@/components/CategoryFilter";
import { DirectoryCard } from "@/components/DirectoryCard";
import { Hero } from "@/components/Hero";
import { TextField } from "@/components/forms";
import { dataProvider } from "@/lib/data";

const categories = ["All", "Church", "Ministry", "Mission", "Charity", "Teacher", "Worship", "Book", "Podcast", "Event"];

export default async function DirectoryPage() {
  const profiles = await dataProvider.directory.list();

  return (
    <>
      <Hero
        eyebrow="Directory"
        title="Discover validated Christian people and organisations."
        description="Search churches, teachers, ministries, charities, missionaries, worship artists, books, podcasts, events, and mission projects from one clean directory."
      />
      <section className="py-8">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-4">
          <TextField label="Search" placeholder="Name, city, country, topic, or category" />
          <CategoryFilter categories={categories} />
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <DirectoryCard key={profile.id} profile={profile} />
          ))}
        </div>
      </section>
    </>
  );
}
