import type { ImageKey } from "./images";

export const homeContent = {
  hero: {
    eyebrow: "Christian podcast and media platform",
    title: "A Christian podcast for conversations that matter.",
    description:
      "The True Remnant hosts honest conversations with people of faith about Jesus, the Gospel, Scripture, spiritual warfare, the Church, and the times we are living in.",
    actions: [
      { label: "Watch Latest Episode", href: "/watch", variant: "primary" },
      { label: "Explore Episodes", href: "/watch", variant: "secondary" },
      { label: "Subscribe", href: "/newsletter", variant: "ghost" }
    ]
  },
  mission: {
    title: "Podcast first. Everything else supports the conversation.",
    copy:
      "The website should make one thing clear: this is a Christian podcast and media platform. Episodes are the centre. Guests, resources, articles, events, and newsletter updates all exist to support the conversations."
  },
  who: {
    title: "Honest conversations about faith, truth, and the last days.",
    copy:
      "The True Remnant is a Christian podcast and media platform for long-form conversations with people of faith.",
    support:
      "We discuss Jesus Christ, the true Gospel, Scripture, spiritual warfare, the Church, testimony, discernment, and the times we are living in with humility, context, and Scripture at the centre."
  },
  beliefs: [
    ["Jesus Christ is Lord", "Jesus is the Son of God, the only way to the Father, and the centre of the true Gospel."],
    ["Scripture is the authority", "Every conversation, testimony, doctrine, and spiritual claim must be weighed against the Word of God."],
    ["Context matters", "We slow down, ask better questions, and avoid building doctrine from isolated verses or viral claims."],
    ["The Church needs clarity", "The Body of Christ is surrounded by voices. We want conversations that help believers return to truth, humility, prayer, and faithfulness."],
    ["The times are serious", "We believe believers must be awake, discerning, prayerful, and ready for the return of Jesus Christ."],
    ["Prayer is part of the work", "Truth must be joined with repentance, prayer, spiritual warfare, endurance, and dependence on the Holy Spirit."]
  ],
  whatWeDo: [
    ["Host long-form conversations", "Podcast interviews, testimony episodes, Bible discussions, and honest conversations with people of faith."],
    ["Invite guests and voices", "Pastors, teachers, apologists, worshippers, missionaries, authors, and believers with testimonies."],
    ["Ask the real questions", "We make space for questions about Jesus, salvation, Scripture, spiritual warfare, prophecy, culture, and the Church."],
    ["Create resources around episodes", "Study notes, prayers, books, links, scriptures, and recommended material connected to the conversations."],
    ["Publish articles and reflections", "Blog posts, episode notes, guest summaries, and short reflections that help people go deeper."],
    ["Prepare for future events", "Live conversations, prayer nights, gatherings, interviews, and community moments can be added as the ministry grows."]
  ],
  topics: [
    "The Gospel",
    "Jesus Christ",
    "Scripture & Context",
    "Spiritual Warfare",
    "End Times",
    "The Church",
    "Testimonies",
    "Apologetics",
    "Prayer"
  ],
  endTimes: {
    title: "Faithful conversations in serious times.",
    copy:
      "We believe the times we are living in require discernment, courage, prayer, and biblical clarity. End-times themes are part of the conversation, but the focus is not fear or speculation. The focus is Jesus Christ, truth, readiness, and faithfulness."
  },
  watch: {
    title: "Episodes are the centre of the platform.",
    copy:
      "The main experience is watching and listening: full conversations, guest interviews, testimonies, teaching discussions, short clips, and episode notes."
  },
  resources: {
    title: "Go deeper after each conversation.",
    copy:
      "Study notes, scriptures, prayers, books, articles, and recommended resources connected to podcast episodes.",
    categories: [
      { title: "Episode Notes", label: "Study", image: "studyDesk" as ImageKey, href: "/blog", copy: "Written summaries, scriptures, questions, and follow-up notes from each conversation." },
      { title: "Prayers", label: "Prayer", image: "prayerCircle" as ImageKey, href: "/prayers", copy: "Christ-centred prayers for repentance, protection, endurance, and spiritual warfare." },
      { title: "Books & Voices", label: "Resources", image: "bibleTable" as ImageKey, href: "/resources", copy: "Recommended books, teachers, and study helps for deeper research after each episode." },
      { title: "Events", label: "Coming Soon", image: "worshipGathering" as ImageKey, href: "/events", copy: "Future live conversations, prayer nights, interviews, and gatherings." }
    ]
  },
  scripture: {
    quote: "Make my joy complete by being of the same mind, having the same love, being in full accord and of one mind.",
    reference: "Philippians 2:2"
  },
  supportingScripture: {
    quote:
      "That all of you agree, and that there be no divisions among you, but that you be united in the same mind and the same judgment.",
    reference: "1 Corinthians 1:10"
  }
};
