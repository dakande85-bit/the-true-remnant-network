import { StatusBadge } from "./StatusBadge";
import type { ValidationStatus } from "@/data/directory";

const statuses: Array<[ValidationStatus, string]> = [
  ["Listed", "Known to the network, but not presented as a recommendation."],
  ["Under Review", "Being checked or awaiting clearer information."],
  ["Reviewed", "Basic public details, links, category, and context checked."],
  ["Verified", "Identity, doctrine, leadership, activity, and accountability reviewed where possible."],
  ["Featured", "Editorially highlighted because the profile is especially useful or media-connected."]
];

export function TrustStatusExplainer() {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {statuses.map(([status, copy]) => (
        <article className="rounded-2xl border border-linen bg-white p-5 shadow-sm" key={status}>
          <StatusBadge status={status} />
          <p className="mt-4 text-sm leading-6 text-stone-600">{copy}</p>
        </article>
      ))}
    </div>
  );
}
