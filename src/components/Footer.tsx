import { BrandLogo } from "./BrandLogo";
import { DonateLink } from "./DonateLink";

const footerColumns = [
  {
    title: "Ministry",
    links: [
      ["About", "/about"],
      ["Watch", "/watch"],
      ["Topics", "/topics"],
      ["End Times", "/end-times"]
    ]
  },
  {
    title: "Stay Connected",
    links: [
      ["Prayers", "/prayers"],
      ["Resources", "/resources"],
      ["Blog", "/blog"],
      ["Newsletter", "/newsletter"],
      ["Donate", "/donate"]
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
            The True Remnant Network is a Christian interview, conversation, and end-times discernment ministry seeking
            biblical truth, context, unity, and faithfulness to Jesus Christ.
          </p>
          <DonateLink className="mt-5 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-black text-ink">
            Donate with PayPal
          </DonateLink>
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
