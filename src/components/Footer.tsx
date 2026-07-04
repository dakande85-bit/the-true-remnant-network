import { BrandLogo } from "./BrandLogo";

const footerColumns = [
  {
    title: "Platform",
    links: [
      ["About", "/about"],
      ["Watch", "/watch"],
      ["Resources", "/resources"],
      ["Prayers", "/prayers"]
    ]
  },
  {
    title: "Stay Connected",
    links: [
      ["Blog", "/blog"],
      ["Newsletter", "/newsletter"],
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
            The True Remnant Network is a Christian media and resource platform for biblical truth, spiritual warfare
            prayer, testimonies, missions, teaching, worship, books, and Gospel-centred resources.
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
