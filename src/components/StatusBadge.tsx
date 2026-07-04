import type { ValidationStatus } from "@/data/directory";

const statusClass: Record<ValidationStatus, string> = {
  Listed: "border-stone-300 bg-stone-100 text-stone-700",
  "Under Review": "border-amber-200 bg-amber-50 text-amber-800",
  Reviewed: "border-blue-200 bg-blue-50 text-blue-800",
  Verified: "border-emerald-200 bg-emerald-50 text-emerald-800",
  Featured: "border-gold/40 bg-amber-50 text-gold-deep"
};

export function StatusBadge({ status }: { status: ValidationStatus }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-wide ${statusClass[status]}`}>
      {status}
    </span>
  );
}
