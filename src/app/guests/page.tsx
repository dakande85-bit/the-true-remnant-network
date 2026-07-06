import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

const guests = [
  {
    name: "Pastor Kevin L. A. Ewing",
    focus: "Prayer, dreams, spiritual warfare, deliverance",
    status: "Target guest",
    note: "Strong fit for a conversation on prayer, spiritual insight, and standing firm in Christ."
  },
  {
    name: "Mike Winger",
    focus: "Bible teaching, doctrine, apologetics",
    status: "Target guest",
    note: "A strong fit for conversations that test claims carefully by Scripture and context."
  },
  {
    name: "Wes Huff",
    focus: "Scripture, manuscripts, apologetics",
    status: "Target guest",
    note: "A strong fit for Bible reliability, textual history, and public faith conversations."
  },
  {
    name: "Todd Friel / Wretched",
    focus: "Gospel clarity, evangelism, Christian commentary",
    status: "Target guest",
    note: "A strong fit for Gospel clarity, witnessing, repentance, and faithful Christian discussion."
  },
  {
    name: "Frank Turek / Cross Examined",
    focus: "Apologetics, truth, worldview",
    status: "Target guest",
    note: "A strong fit for truth, faith, reason, and defending Christianity in the public square."
  },
  {
    name: "Tenerife Family Church",
    focus: "Local church, faith, community, mission",
    status: "Local conversation",
    note: "A realistic first conversation to establish local credibility and begin with real church life."
  }
];

export default function GuestsPage() {
  return (
    <>
      <Hero
        eyebrow="Guests"
        title="Guests and voices for future conversations."
        description="A simple guest pipeline for pastors, teachers, apologists, worshippers, missionaries, authors, and believers with testimony. Guests can be marked as planned, invited, recorded, or published as the podcast develops."
        primaryHref="/watch"
        primaryLabel="View Episodes"
        secondaryHref="/about"
        secondaryLabel="About the Podcast"
      />
      <section className="py-16">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Guest Pipeline"
            title="Start small. Build credibility. Add carefully."
            description="These are not public endorsements or confirmed appearances. They are clean starting targets for the kind of conversations the podcast can pursue."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guests.map((guest) => (
              <article className="rounded-[1.5rem] border border-linen bg-white p-6 shadow-sm" key={guest.name}>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gold-deep">{guest.status}</p>
                <h2 className="mt-4 font-display text-3xl leading-tight text-ink">{guest.name}</h2>
                <p className="mt-3 text-sm font-black text-stone-700">{guest.focus}</p>
                <p className="mt-4 text-sm leading-7 text-stone-600">{guest.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
