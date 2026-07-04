import { AdminLayout } from "@/components/AdminLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { getSupabaseConfig } from "@/lib/supabase";
import { dataProvider } from "@/lib/data";

const stats = ["Listed", "Under Review", "Reviewed", "Verified", "Featured"] as const;

export default async function AdminPage() {
  const profiles = await dataProvider.directory.list();
  const supabase = getSupabaseConfig();
  const queue = profiles.filter((profile) => profile.status === "Listed" || profile.status === "Under Review");

  return (
    <AdminLayout>
      <div className="rounded-[2rem] border border-cream/10 bg-cream p-7 text-ink shadow-editorial">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-deep">Admin dashboard</p>
        <h1 className="mt-3 font-display text-5xl leading-tight">Review and publishing control room</h1>
        <p className="mt-4 max-w-2xl leading-7 text-stone-600">
          Demo admin surface for submissions, validation status, media, events, and reports. Authentication and writes
          should be added before this becomes a live operational dashboard.
        </p>
        <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold text-amber-900">
          Supabase: {supabase.isConfigured ? "configured" : "not configured, using mock data"}. Admin auth is a placeholder.
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-5">
        {stats.map((status) => (
          <article className="rounded-2xl border border-cream/10 bg-cream/10 p-5" key={status}>
            <StatusBadge status={status} />
            <strong className="mt-4 block font-display text-4xl text-cream">
              {profiles.filter((profile) => profile.status === status).length}
            </strong>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[2rem] border border-cream/10 bg-cream p-5 text-ink">
          <h2 className="font-display text-3xl">Pending review queue</h2>
          <div className="mt-4 grid gap-3">
            {queue.length ? queue.map((profile) => (
              <div className="rounded-xl border border-linen bg-white p-4" key={profile.id}>
                <div className="flex items-center justify-between gap-3">
                  <strong>{profile.name}</strong>
                  <StatusBadge status={profile.status} />
                </div>
                <p className="mt-2 text-sm text-stone-600">{profile.reviewNotes}</p>
              </div>
            )) : <p className="text-sm text-stone-600">No profiles currently need first-pass review.</p>}
          </div>
        </section>

        <section className="rounded-[2rem] border border-cream/10 bg-cream p-5 text-ink">
          <h2 className="font-display text-3xl">Recently added profiles</h2>
          <div className="mt-4 grid gap-3">
            {profiles.map((profile) => (
              <div className="flex flex-col justify-between gap-3 rounded-xl border border-linen bg-white p-4 md:flex-row md:items-center" key={profile.id}>
                <div>
                  <strong>{profile.name}</strong>
                  <p className="text-sm text-stone-600">{profile.category} · {profile.kind}</p>
                </div>
                <StatusBadge status={profile.status} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}
