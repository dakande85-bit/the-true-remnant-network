import { DonateLink } from "@/components/DonateLink";
import { donationsEnabled } from "@/config/donations";

export default function DonatePage() {
  return (
    <section className="bg-ink py-20 text-cream">
      <div className="mx-auto grid min-h-[calc(100vh-260px)] w-[min(1180px,calc(100%-32px))] items-center gap-10 lg:grid-cols-[1fr_0.82fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-gold">Support the work</p>
          <h1 className="mt-5 max-w-3xl font-display text-[3.5rem] leading-[0.95] text-white md:text-7xl">
            Help build The True Remnant Network.
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-cream/82 md:text-xl md:leading-9">
            Donations help support podcast interviews, video teachings, prayer resources, testimonies, and curated
            Christian media for believers who want to stand firm in truth.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <DonateLink className="rounded-full bg-gold px-7 py-4 text-sm font-black text-ink shadow-[0_14px_36px_rgba(214,163,51,0.24)]">
              Donate with PayPal
            </DonateLink>
            <a className="rounded-full border border-cream/25 px-7 py-4 text-sm font-black text-cream" href="/watch">
              Watch Latest
            </a>
          </div>
          {!donationsEnabled ? (
            <p className="mt-5 max-w-2xl text-sm leading-6 text-gold">
              PayPal is ready to connect. Add your personal PayPal donation link as
              {" "}
              <code>NEXT_PUBLIC_PAYPAL_DONATE_URL</code>
              {" "}
              in Vercel to activate this button.
            </p>
          ) : null}
        </div>
        <div className="border-l-4 border-gold bg-cream/[0.06] p-7 shadow-[0_32px_100px_rgba(0,0,0,0.4)]">
          <p className="font-display text-3xl leading-tight text-white">What donations support</p>
          <div className="mt-6 grid gap-4 text-sm font-semibold leading-7 text-cream/80">
            <p>Podcast interviews and video production.</p>
            <p>Biblical teaching, prayer, and spiritual warfare resources.</p>
            <p>Curated Christian resources, testimonies, missions, and outreach content.</p>
          </div>
          <p className="mt-7 border-t border-cream/15 pt-5 text-xs font-black uppercase tracking-[0.18em] text-gold">
            External PayPal checkout
          </p>
        </div>
      </div>
    </section>
  );
}
