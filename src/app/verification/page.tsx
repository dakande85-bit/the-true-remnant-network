import { FeaturedSection } from "@/components/FeaturedSection";
import { Hero } from "@/components/Hero";
import { StatusBadge } from "@/components/StatusBadge";
import type { ValidationStatus } from "@/data/directory";

const levels: Array<[ValidationStatus, string]> = [
  ["Pending Review", "Submitted or researched, but not yet public-trust ready."],
  ["Reviewed", "Basic public details, category, links, location, and description checked."],
  ["Validated", "Identity, doctrine, leadership, activity, and accountability reviewed where possible."],
  ["Featured", "Strong editorial placement because the profile is especially useful, timely, or media-connected."]
];

export default function VerificationPage() {
  return (
    <>
      <Hero
        eyebrow="Validation"
        title="Clear review statuses without reckless claims."
        description="Validation means a profile has passed a defined review stage. It is not a permanent endorsement of every teaching, decision, or action."
      />
      <FeaturedSection eyebrow="Statuses" title="The public validation ladder" muted>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {levels.map(([status, description]) => (
            <article className="rounded-2xl border border-linen bg-parchment p-6" key={status}>
              <StatusBadge status={status} />
              <p className="mt-4 text-sm leading-6 text-stone-600">{description}</p>
            </article>
          ))}
        </div>
      </FeaturedSection>
    </>
  );
}
