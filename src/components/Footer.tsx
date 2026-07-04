import { BrandLogo } from "./BrandLogo";

const footerColumns = [
  {
    title: "Explore",
    links: [
      ["Directory", "/directory"],
      ["Podcast / Media", "/media"],
      ["Missions", "/missions"],
      ["Events", "/events"]
    ]
  },
  {
    title: "Trust",
    links: [
      ["About", "/about"],
      ["Submit Organisation", "/submit"],
      ["Admin", "/admin"]
    ]
  }
];

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-cream">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandLogo variant="light" />
          <p className="mt-5 max-w-md text-sm leading-7 text-cream/70">
            A Christian trust network and media platform for discovering validated teachers, churches, ministries,
            missions, charities, worship artists, books, podcasts, events, and mission projects.
          </p>
          <p className="mt-4 text-sm font-semibold text-gold">External links only. No in-site payments.</p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <strong className="font-display text-xl">{column.title}</strong>
            <div className="mt-4 grid gap-3 text-sm text-cream/70">
              {column.links.map(([label, href]) => (
                <a className="hover:text-gold" key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
