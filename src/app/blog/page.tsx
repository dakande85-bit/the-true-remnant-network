import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { blogArticles } from "@/data/blog";

export default function BlogPage() {
  return (
    <>
      <Hero
        eyebrow="Blog"
        title="Articles for discernment and discipleship"
        description="Written resources on the Gospel, spiritual warfare, prayer, deception, Christian living, mission, and biblical truth."
      />
      <section className="bg-white py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader eyebrow="Articles" title="Sober writing for faithful Christian living" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <article className="rounded-[1.5rem] border border-linen bg-parchment p-6" key={article.title}>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-gold-deep">{article.category}</span>
                <h3 className="mt-4 font-display text-3xl leading-tight text-ink">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{article.summary}</p>
                <a className="mt-5 inline-flex rounded-full bg-ink px-4 py-3 text-sm font-black text-cream" href="/newsletter">
                  Get Updates
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
