import { FeaturedSection } from "@/components/FeaturedSection";
import { Hero } from "@/components/Hero";

const values = [
  ["Christ-centred", "The platform exists to point people toward faithful Christian teaching, mission, and community."],
  ["Careful with trust", "Validation statuses avoid careless claims and make the review stage visible."],
  ["Media and directory together", "Long-form conversations create context; profiles make discovery practical."],
  ["Simple to launch", "No payments, no public posting, and no heavy community features in the first release."],
  ["Global direction", "The structure can grow from starter content into a worldwide Christian discovery map."],
  ["Useful resources", "Books, worship, podcasts, events, and missions can be curated around trusted profiles."]
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="A Christian discovery platform with trust at the centre."
        description="The True Remnant Network combines editorial media, validation workflow, and clean directory pages to help believers discover faithful voices and real ministry work."
      />
      <FeaturedSection eyebrow="Posture" title="Firm, biblical, and careful." muted>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map(([title, description]) => (
            <article className="rounded-2xl border border-linen bg-parchment p-6" key={title}>
              <h3 className="font-display text-2xl text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-stone-600">{description}</p>
            </article>
          ))}
        </div>
      </FeaturedSection>
    </>
  );
}
