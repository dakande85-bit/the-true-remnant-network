import { Hero } from "@/components/Hero";
import { SelectField, TextAreaField, TextField } from "@/components/forms";

export default function SubmitPage() {
  return (
    <>
      <Hero
        eyebrow="Submit Organisation"
        title="Submit a church, ministry, teacher, mission, event, or resource."
        description="This front-end intake form is ready for a Supabase-backed pending review workflow. Submissions should be checked before publication."
      />
      <section className="py-16">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 lg:grid-cols-[1fr_340px]">
          <form className="rounded-2xl border border-linen bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <TextField label="Name" placeholder="Organisation, person, ministry, or resource" />
              <SelectField label="Category" defaultValue="">
                <option value="" disabled>Choose category</option>
                <option>Church</option>
                <option>Ministry</option>
                <option>Mission</option>
                <option>Charity</option>
                <option>Teacher</option>
                <option>Worship</option>
                <option>Book</option>
                <option>Podcast</option>
                <option>Event</option>
              </SelectField>
              <TextField label="Location" placeholder="City, online, or global" />
              <TextField label="Country" placeholder="Country or international" />
              <TextField label="Official website" placeholder="https://..." />
              <TextField label="YouTube / media URL" placeholder="https://..." />
              <TextField label="Donation / support URL" placeholder="External official link only" />
              <TextField label="Contact email" placeholder="admin@example.com" />
            </div>
            <div className="mt-4">
              <TextAreaField label="Review notes" placeholder="Doctrine, leadership, public links, accountability, references, and why this should be reviewed." />
            </div>
            <button className="mt-6 rounded-full bg-gold px-6 py-3 text-sm font-black text-ink" type="button">
              Submit for Review
            </button>
          </form>
          <aside className="rounded-2xl border border-linen bg-parchment p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-deep">Review checklist</p>
            <h2 className="mt-3 font-display text-3xl text-ink">Before publication</h2>
            <p className="mt-4 leading-7 text-stone-600">
              Check identity, doctrine, leadership, public links, external giving pages, safeguarding context,
              event organisers, and media history before moving beyond Listed or Under Review.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
