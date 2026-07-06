import { ImageCard } from "@/components/ImageCard";
import { PodcastFeature } from "@/components/PodcastFeature";
import { SectionHeader } from "@/components/SectionHeader";
import { TextField } from "@/components/forms";
import { homeContent } from "@/content/home";
import { mediaItems } from "@/data/media";

const guests = [
  ["Pastor Kevin L. A. Ewing", "Prayer, dreams, spiritual warfare"],
  ["Mike Winger", "Bible teaching, doctrine, apologetics"],
  ["Wes Huff", "Scripture, manuscripts, apologetics"],
  ["Todd Friel / Wretched", "Gospel clarity and evangelism"]
];

const blogPosts = [
  ["What makes a conversation worth having?", "A note on why the podcast will slow down, listen carefully, and return to Scripture."],
  ["The Gospel must stay clear", "A short reflection on keeping Jesus Christ and salvation at the centre of every discussion."],
  ["Prayer before platform", "Why truth, humility, repentance, and prayer must come before media growth."]
];

export default function HomePage() {
  const latest = mediaItems[0];
  const nextEpisodes = mediaItems.slice(1);

  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto w-[min(1320px,calc(100%-32px))]">
          <PodcastFeature />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[2rem] border border-linen bg-ink shadow-editorial">
            <ImageCard imageKey="podcastStudio" title={latest.title} label="Latest episode" className="min-h-[430px] rounded-none border-0" />
          </div>
          <div className="flex flex-col justify-center rounded-[2rem] border border-linen bg-parchment p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">Latest Episode</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">{latest.title}</h2>
            <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-stone-500">{latest.guest} · {latest.duration}</p>
            <p className="mt-5 text-lg leading-8 text-stone-700">{latest.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-full bg-gold px-6 py-3 text-sm font-black text-ink" href={latest.url}>
                Watch on YouTube
              </a>
              <a className="rounded-full border border-linen bg-white px-6 py-3 text-sm font-black text-ink" href="/watch">
                View Episodes
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Episodes"
            title="Conversations about faith, truth, and the last days."
            description="The podcast is the centre of the platform. Episodes can become full interviews, guest conversations, testimonies, short clips, and show notes as the ministry grows."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {nextEpisodes.map((episode) => (
              <article className="rounded-[1.5rem] border border-linen bg-white p-5 shadow-sm" key={episode.id}>
                <ImageCard imageKey="podcastStudio" title={episode.title} label={episode.status} className="min-h-[250px]" />
                <p className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-gold-deep">{episode.guest}</p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{episode.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {episode.tags?.map((tag) => (
                    <span className="rounded-full bg-parchment px-3 py-1 text-xs font-bold text-stone-600" key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader
            eyebrow="Guests"
            title="Guests and voices coming to the table."
            description="Pastors, teachers, apologists, worshippers, missionaries, authors, and believers sharing testimony, insight, and biblical perspective."
            inverse
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {guests.map(([name, focus]) => (
              <article className="rounded-[1.5rem] border border-cream/10 bg-cream/5 p-6" key={name}>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">Guest target</p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-cream">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/70">{focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader eyebrow="Topics" title="What the podcast explores" description="Clear subject areas so visitors understand the conversations without turning the site into a directory." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {homeContent.topics.map((topic) => (
              <a className="rounded-2xl border border-linen bg-parchment p-5 font-display text-2xl leading-tight text-ink transition hover:border-gold/60" href="/watch" key={topic}>
                {topic}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeader eyebrow="Resources" title={homeContent.resources.title} description={homeContent.resources.copy} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {homeContent.resources.categories.map((path) => (
              <ImageCard cta="Explore" description={path.copy} href={path.href} imageKey={path.image} key={path.title} label={path.label} title={path.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="Blog"
              title="Articles, notes, and reflections."
              description="The blog supports the podcast with episode notes, study reflections, guest summaries, prayers, and resource notes."
            />
          </div>
          <div className="grid gap-4">
            {blogPosts.map(([title, copy]) => (
              <article className="rounded-[1.5rem] border border-linen bg-parchment p-6" key={title}>
                <h3 className="font-display text-3xl leading-tight text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 rounded-[2rem] border border-linen bg-white p-8 shadow-editorial lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-deep">Stay connected</p>
            <h2 className="mt-4 font-display text-5xl leading-tight text-ink">Get new episodes and resources.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              Receive new conversations, guest announcements, study notes, prayers, event updates, and resources.
            </p>
          </div>
          <form className="grid gap-4">
            <TextField label="Name" placeholder="Your name" />
            <TextField label="Email" placeholder="you@example.com" type="email" />
            <button className="rounded-full bg-gold px-6 py-3 text-sm font-black text-ink" type="button">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="bg-ink py-20 text-cream">
        <div className="mx-auto rounded-[2rem] border border-cream/10 bg-cream/5 p-10 text-center w-[min(1180px,calc(100%-32px))]">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Events coming soon</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl leading-tight">Live conversations, prayer nights, and gatherings.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/70">
            Events will be added when there is real content: live interviews, prayer nights, local gatherings, and special conversations.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a className="rounded-full bg-gold px-6 py-3 text-sm font-black text-ink" href="/watch">Watch Episodes</a>
            <a className="rounded-full border border-cream/20 px-6 py-3 text-sm font-black text-cream" href="/about">About the Podcast</a>
          </div>
        </div>
      </section>
    </>
  );
}
