import { AdminLayout } from "@/components/AdminLayout";
import { getSupabaseConfig } from "@/lib/supabase";

const adminAreas = [
  ["Videos", "Manage YouTube videos, interviews, short-form teachings, and featured watch content."],
  ["Blog posts", "Draft and publish articles on the Gospel, discernment, prayer, and Christian living."],
  ["Prayers", "Organise prayer categories, written prayers, Scripture notes, and future audio resources."],
  ["Resources", "Curate teachings, books, worship, music, and discipleship resources."],
  ["Missions", "Share mission stories, updates, external support links, and outreach reports."],
  ["Books", "Maintain recommended reading lists and external book links."],
  ["Music", "Curate worship and testimony-led music resources."],
  ["Newsletter signups", "Prepare subscriber data for a future email platform integration."]
];

export default function AdminPage() {
  const supabase = getSupabaseConfig();

  return (
    <AdminLayout>
      <div className="rounded-[2rem] border border-cream/10 bg-cream p-7 text-ink shadow-editorial">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-deep">Admin dashboard</p>
        <h1 className="mt-3 font-display text-5xl leading-tight">Media and resource control room</h1>
        <p className="mt-4 max-w-2xl leading-7 text-stone-600">
          Demo admin surface for videos, blog posts, prayers, resources, missions, books, music, teachings, and
          newsletter signups. Authentication and writes should be added before this becomes operational.
        </p>
        <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold text-amber-900">
          Supabase: {supabase.isConfigured ? "configured" : "not configured, using mock data"}. Admin auth is a placeholder.
        </div>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {adminAreas.map(([title, description]) => (
          <article className="rounded-2xl border border-cream/10 bg-cream p-5 text-ink" key={title}>
            <h2 className="font-display text-2xl">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-stone-600">{description}</p>
          </article>
        ))}
      </div>
    </AdminLayout>
  );
}
