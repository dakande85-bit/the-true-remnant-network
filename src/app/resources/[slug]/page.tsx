import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { ResourceCard } from "@/components/ResourceCard";
import { getRelatedResources, getResourceBySlug, publicResources } from "@/data/resources";

export function generateStaticParams() {
  return publicResources.map((resource) => ({ slug: resource.slug }));
}

export default function ResourceProfilePage({ params }: { params: { slug: string } }) {
  const resource = getResourceBySlug(params.slug);

  if (!resource) {
    notFound();
  }

  const externalLinks = Object.entries(resource.links).filter((entry): entry is [string, string] => Boolean(entry[1]));
  const related = getRelatedResources(resource);

  return (
    <>
      <Hero
        eyebrow={resource.category}
        title={resource.name}
        description={resource.summary}
      />
      <section className="py-16">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 lg:grid-cols-[1fr_340px]">
          <div className="grid gap-6">
            <article className="rounded-[2rem] border border-linen bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">Resource type</p>
              <h2 className="mt-3 font-display text-4xl capitalize text-ink">{resource.resourceType.replace("-", " ")}</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">{resource.bio ?? resource.summary}</p>
            </article>
            {resource.testimony ? (
              <article className="rounded-[2rem] border border-linen bg-white p-7 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">Testimony</p>
                <p className="mt-4 text-lg leading-8 text-stone-600">{resource.testimony}</p>
              </article>
            ) : null}
            <article className="rounded-[2rem] border border-linen bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">Why included</p>
              <p className="mt-4 text-lg leading-8 text-stone-600">{resource.whyIncluded ?? "Included as a curated Christian resource for study and discernment."}</p>
            </article>
            <article className="rounded-[2rem] border border-linen bg-parchment p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">Disclaimer</p>
              <p className="mt-4 text-lg leading-8 text-stone-700">
                Resources are shared for study and discernment. We encourage every believer to test everything by Scripture and remain led by the Holy Spirit.
              </p>
            </article>
          </div>
          <aside className="h-fit rounded-[2rem] border border-linen bg-parchment p-6 shadow-sm lg:sticky lg:top-28">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">Topics</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {resource.topics.map((topic) => (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-stone-700" key={topic}>{topic}</span>
              ))}
            </div>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-gold-deep">External links</p>
            <div className="mt-4 grid gap-3">
              {externalLinks.map(([label, href]) => (
                <a className="rounded-full bg-ink px-4 py-3 text-center text-sm font-black capitalize text-cream" href={href} key={label}>
                  {label.replace(/([A-Z])/g, " $1")}
                </a>
              ))}
              {!externalLinks.length ? <span className="text-sm font-bold text-stone-500">Links need review before publication.</span> : null}
            </div>
          </aside>
        </div>
      </section>
      {related.length ? (
        <section className="bg-white py-16">
          <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">Related resources</p>
            <h2 className="mt-3 font-display text-5xl text-ink">Continue studying with discernment</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => <ResourceCard key={item.id} item={item} />)}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
