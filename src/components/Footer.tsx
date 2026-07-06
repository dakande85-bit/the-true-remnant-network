import { BrandLogo } from "./BrandLogo";
import { DonateLink } from "./DonateLink";

const footerColumns = [
  {
    title: "Podcast",
    links: [
      ["Episodes", "/watch"],
      ["Guests", "/guests"],
      ["Blog", "/blog"],
      ["Events", "/events"]
    ]
  },
  {
    title: "Explore",
    links: [
      ["Resources", "/resources"],
      ["Prayers", "/prayers"],
      ["About", "/about"],
      ["Newsletter", "/newsletter"]
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
            The True Remnant is a Christian podcast and media platform for conversations about faith, Scripture, the Gospel,
            spiritual warfare, the Church, and the times we are living in.
          </p>
          <DonateLink className="mt-5 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-black text-ink">
            Support the Podcast
          </DonateLink>
          <p className="mt-4 text-sm font-semibold text-gold">Support and partner links are handled through trusted external platforms.</p>
          <p className="mt-6 text-xs leading-6 text-cream/45">
            © 2026 The True Remnant. All rights reserved.
          </p>
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
