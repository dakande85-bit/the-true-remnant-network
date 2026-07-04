import type { ReactNode } from "react";

const adminNav = ["Overview", "Submissions", "Directory", "Media", "Events", "Reports"];

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-stone-950 py-10 text-cream">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl border border-cream/10 bg-cream/5 p-5">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Admin</p>
          <h2 className="mt-3 font-display text-3xl">Control room</h2>
          <nav className="mt-6 grid gap-2">
            {adminNav.map((item) => (
              <a className="rounded-xl px-3 py-2 text-sm font-bold text-cream/70 hover:bg-cream/10 hover:text-cream" href="/admin" key={item}>
                {item}
              </a>
            ))}
          </nav>
        </aside>
        <div>{children}</div>
      </div>
    </section>
  );
}
