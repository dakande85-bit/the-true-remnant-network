import { CategoryFilter } from "@/components/CategoryFilter";
import { DirectoryCard } from "@/components/DirectoryCard";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustStatusExplainer } from "@/components/TrustStatusExplainer";
import { TextField } from "@/components/forms";
import { dataProvider } from "@/lib/data";

const categories = ["All", "Church", "Ministry", "Mission", "Charity", "Teacher", "Worship", "Book", "Podcast", "Event"];

export default async function DirectoryPage() {
  const profiles = await dataProvider.directory.list();

  return (
    <>
      <Hero
        eyebrow="Directory"
        title="A visual index of Christian people, ministries, and mission."
        description="Search reviewed churches, teachers, ministries, charities, missionaries, worship artists, books, podcasts, events, and mission projects from one editorial network."
      />
      <section className="py-10">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-4 rounded-[2rem] border border-linen bg-white p-5 shadow-sm">
          <TextField label="Search the network" placeholder="Name, city, country, topic, category, or ministry focus" />
          <CategoryFilter categories={categories} />
          <p className="text-sm leading-6 text-stone-600">
            Filters are prepared for the Supabase-backed directory. The current launch view uses curated example profiles.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Dossiers"
            title="Profiles with story, status, and external links."
            description="Each card opens into an editorial dossier rather than a flat listing."
          />
          {profiles.length ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {profiles.map((profile) => (
                <DirectoryCard key={profile.id} profile={profile} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-linen bg-parchment p-8 text-center">
              <h3 className="font-display text-3xl text-ink">No profiles match this view yet.</h3>
              <p className="mt-3 text-stone-600">Try another category or submit a ministry for review.</p>
            </div>
          )}
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Status"
            title="How to read the trust layer"
            description="A profile's status tells you how much public context has been gathered. It does not replace local discernment."
          />
          <TrustStatusExplainer />
        </div>
      </section>
    </>
  );
}
