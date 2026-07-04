import { CTASection } from "@/components/CTASection";
import { CinematicHero } from "@/components/CinematicHero";
import { DirectoryCard } from "@/components/DirectoryCard";
import { ImageCard } from "@/components/ImageCard";
import { MissionBanner } from "@/components/MissionBanner";
import { PodcastFeature } from "@/components/PodcastFeature";
import { ScriptureBlock } from "@/components/ScriptureBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { StorySection } from "@/components/StorySection";
import { TrustStatusExplainer } from "@/components/TrustStatusExplainer";
import { homeContent } from "@/content/home";
import { dataProvider } from "@/lib/data";

export default async function HomePage() {
  const profiles = await dataProvider.directory.list();
  const featured = profiles.filter((profile) => profile.status === "Featured" || profile.status === "Verified").slice(0, 6);

  return (
    <>
      <CinematicHero />

      <StorySection
        eyebrow="Mission"
        title={homeContent.mission.title}
        description={homeContent.mission.copy}
      >
        <ScriptureBlock quote={homeContent.mission.scripture} reference={homeContent.mission.reference} />
      </StorySection>

      <StorySection eyebrow="The Problem" title="Discovery is easy. Discernment is harder." dark>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {homeContent.problemCards.map(([title, copy]) => (
            <article className="rounded-[1.5rem] border border-cream/10 bg-cream/5 p-6" key={title}>
              <h3 className="font-display text-2xl leading-tight text-cream">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-cream/68">{copy}</p>
            </article>
          ))}
        </div>
      </StorySection>

      <StorySection
        eyebrow="The Solution"
        title="A reviewed Christian network for people, ministries, and mission."
        description="The network gathers Christian voices and ministries in one searchable place while keeping language careful and links transparent."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {homeContent.solutionPoints.map((point, index) => (
            <article className="rounded-[1.5rem] border border-linen bg-white p-6 shadow-sm" key={point}>
              <span className="font-display text-5xl text-gold">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-lg leading-8 text-stone-700">{point}</p>
            </article>
          ))}
        </div>
      </StorySection>

      <section className="bg-white py-20">
        <div className="mx-auto w-[min(1240px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Discovery Paths"
            title="A serious network needs more than one doorway."
            description="Each path is designed to feel editorial and useful: image-led, clearly labelled, and connected to the wider network."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {homeContent.discoveryPaths.map((path, index) => (
              <ImageCard
                className={index === 0 || index === 2 ? "lg:col-span-2" : ""}
                cta="Explore"
                description={path.copy}
                href={path.href}
                imageKey={path.image}
                key={path.title}
                label={path.label}
                title={path.title}
              />
            ))}
          </div>
        </div>
      </section>

      <StorySection
        eyebrow="Trust Layer"
        title="Not every listing means endorsement."
        description="The platform is designed to be careful with language. Profiles can be listed, reviewed, verified, or featured, but users are always encouraged to examine fruit, doctrine, accountability, and local leadership."
      >
        <TrustStatusExplainer />
      </StorySection>

      <section className="bg-white py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Featured"
            title="Featured from the network"
            description="Example dossiers show the tone and structure for churches, teachers, missions, charities, media, and worship profiles."
            actionHref="/directory"
            actionLabel="Open Directory"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((profile) => (
              <DirectoryCard key={profile.id} profile={profile} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <PodcastFeature />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <MissionBanner />
        </div>
      </section>

      <CTASection
        title="Know a faithful ministry, teacher, church, or mission?"
        description="Submit it for review so the network can begin gathering the right context, links, story, and accountability notes."
        primaryHref="/submit"
        primaryLabel="Submit for Review"
        secondaryHref="/directory"
        secondaryLabel="Explore Directory"
      />
    </>
  );
}
