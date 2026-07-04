import { AdminLayout } from "@/components/AdminLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { getSupabaseConfig } from "@/lib/supabase";
import { dataProvider } from "@/lib/data";

const stats = ["Pending Review", "Reviewed", "Validated", "Featured"] as const;

export default async function AdminPage() {
  const profiles = await dataProvider.directory.list();
  const supabase = getSupabaseConfig();

  return (
    <AdminLayout>
      <div className="rounded-2xl border border-cream/10 bg-cream p-6 text-ink">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-deep">Admin dashboard</p>
        <h1 className="mt-3 font-display text-5xl">Review and publishing overview</h1>
        <p className="mt-4 max-w-2xl leading-7 text-stone-600">
          Frontend admin dashboard for submissions, validation status, media, events, and reports. Authentication and
          database writes can be added when Supabase is configured.
        </p>
        <div className="mt-5 rounded-xl border border-linen bg-white p-4 text-sm font-bold">
          Supabase: {supabase.isConfigured ? "configured" : "not configured, using mock data"}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {stats.map((status) => (
          <article className="rounded-2xl border border-cream/10 bg-cream/10 p-5" key={status}>
            <StatusBadge status={status} />
            <strong className="mt-4 block font-display text-4xl text-cream">
              {profiles.filter((profile) => profile.status === status).length}
            </strong>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-cream/10 bg-cream p-5 text-ink">
        <h2 className="font-display text-3xl">Recent profiles</h2>
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
      </div>
    </AdminLayout>
  );
}
