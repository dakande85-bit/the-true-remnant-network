import { FeaturedSection } from "@/components/FeaturedSection";
import { Hero } from "@/components/Hero";
import { TrustStatusExplainer } from "@/components/TrustStatusExplainer";

const checks = [
  ["Doctrine", "Is the gospel, view of Scripture, and core Christian teaching clearly stated?"],
  ["Fruit", "Is there public evidence of ministry activity, humility, service, and correction?"],
  ["Accountability", "Is there leadership, oversight, references, local context, or public accountability?"],
  ["Links", "Are donation, event, book, music, and website links official external pages?"],
  ["Identity", "Is this a real person, church, ministry, or organisation with traceable public information?"],
  ["Review", "Can concerns be raised and can the listing be updated, downgraded, or removed?"]
];

export default function VerificationPage() {
  return (
    <>
      <Hero
        eyebrow="Validation"
        title="Clear review statuses without reckless claims."
        description="Validation means a profile has passed a defined review stage. It is not a permanent endorsement of every teaching, decision, or action."
      />
      <FeaturedSection eyebrow="Statuses" title="The public trust ladder" muted>
        <TrustStatusExplainer />
      </FeaturedSection>
      <FeaturedSection
        eyebrow="Checklist"
        title="Users are still encouraged to test everything."
        description="The network can organise review notes and links, but Christians should still examine doctrine, fruit, accountability, and local leadership."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {checks.map(([title, description]) => (
            <article className="rounded-2xl border border-linen bg-white p-6 shadow-sm" key={title}>
              <h3 className="font-display text-2xl text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{description}</p>
            </article>
          ))}
        </div>
      </FeaturedSection>
    </>
  );
}
