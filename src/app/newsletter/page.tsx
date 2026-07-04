import { Hero } from "@/components/Hero";
import { SelectField, TextField } from "@/components/forms";

export default function NewsletterPage() {
  return (
    <>
      <Hero
        eyebrow="Newsletter"
        title="Join the Remnant newsletter"
        description="Receive new teachings, prayers, interviews, articles, mission updates, and recommended resources."
      />
      <section className="py-16">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[2rem] border border-linen bg-parchment p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">Coming next</p>
            <h2 className="mt-4 font-display text-4xl text-ink">Structured for a real email platform.</h2>
            <p className="mt-4 leading-7 text-stone-600">
              This frontend form is ready to connect later to Supabase, Mailchimp, Beehiiv, ConvertKit, Resend, or
              another email workflow.
            </p>
          </aside>
          <form className="grid gap-4 rounded-[2rem] border border-linen bg-white p-8 shadow-sm">
            <TextField label="Name" placeholder="Your name" />
            <TextField label="Email" placeholder="you@example.com" type="email" />
            <SelectField label="Interest">
              <option>All updates</option>
              <option>Teachings</option>
              <option>Prayers</option>
              <option>Podcast</option>
              <option>Missions</option>
              <option>Books & Resources</option>
            </SelectField>
            <button className="rounded-full bg-gold px-6 py-3 text-sm font-black text-ink" type="button">
              Join Newsletter
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
