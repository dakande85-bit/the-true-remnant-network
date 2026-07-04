import { DirectoryCard } from "@/components/DirectoryCard";
import { Hero } from "@/components/Hero";
import { TextField, SelectField } from "@/components/forms";
import { dataProvider } from "@/lib/data";

export default async function MapPage() {
  const profiles = (await dataProvider.directory.list()).slice(0, 3);

  return (
    <>
      <Hero
        eyebrow="Map"
        title="A map-ready layer for Christian discovery."
        description="The platform prepares location-based profile data for future Google Maps or Mapbox integration."
      />
      <section className="py-16">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 lg:grid-cols-[1fr_340px]">
          <div className="min-h-96 rounded-2xl border border-linen bg-gradient-to-br from-stone-200 via-cream to-amber-100 p-6 shadow-sm">
            <div className="flex h-full items-end rounded-2xl border border-stone-300/60 p-6">
              <div className="rounded-2xl bg-white/80 p-5">
                <strong>The True Remnant Map</strong>
                <p className="mt-2 text-sm text-stone-600">Map pins will come from validated directory profiles.</p>
              </div>
            </div>
          </div>
          <aside className="rounded-2xl border border-linen bg-white p-6">
            <div className="grid gap-4">
              <TextField label="Location" placeholder="City, country, or online" />
              <SelectField label="Category">
                <option>All Categories</option>
                <option>Church</option>
                <option>Mission</option>
                <option>Charity</option>
                <option>Event</option>
              </SelectField>
            </div>
            <a className="mt-5 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-black text-cream" href="/directory">
              Search Directory
            </a>
          </aside>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-5 md:grid-cols-3">
          {profiles.map((profile) => (
            <DirectoryCard key={profile.id} profile={profile} />
          ))}
        </div>
      </section>
    </>
  );
}
