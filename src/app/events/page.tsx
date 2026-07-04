import { CategoryFilter } from "@/components/CategoryFilter";
import { FeaturedSection } from "@/components/FeaturedSection";
import { Hero } from "@/components/Hero";
import { TextField } from "@/components/forms";
import { dataProvider } from "@/lib/data";

export default async function EventsPage() {
  const events = await dataProvider.events.list();

  return (
    <>
      <Hero
        eyebrow="Events"
        title="Christian events, conferences, prayer nights, and mission trips."
        description="Events are listed with clear organiser context and external official links for tickets, registration, or details."
      />
      <section className="py-8">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-4">
          <TextField label="Search events" placeholder="Prayer, conference, worship, mission" />
          <CategoryFilter categories={["All", "Prayer Night", "Conference", "Mission Trip", "Worship Night"]} />
        </div>
      </section>
      <FeaturedSection eyebrow="Calendar" title="Curated event listings" muted>
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((event) => (
            <article className="rounded-2xl border border-linen bg-parchment p-6" key={event.id}>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-gold-deep">
                {event.type}
              </span>
              <h3 className="mt-4 font-display text-2xl text-ink">{event.title}</h3>
              <p className="mt-2 text-sm font-black text-stone-700">{event.date} · {event.location}</p>
              <p className="mt-3 text-sm leading-6 text-stone-600">{event.summary}</p>
              <a className="mt-5 inline-flex rounded-full bg-ink px-4 py-3 text-sm font-black text-cream" href={event.url}>
                Open Event Link
              </a>
            </article>
          ))}
        </div>
      </FeaturedSection>
    </>
  );
}
