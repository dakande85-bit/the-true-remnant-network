import type { ImageKey } from "./images";

export const homeContent = {
  hero: {
    eyebrow: "The True Remnant Network",
    title: "Find faithful voices in a noisy world.",
    description:
      "The True Remnant Network is a Christian discovery platform for reviewed churches, teachers, ministries, missions, testimonies, events, and gospel-centred resources.",
    actions: [
      { label: "Explore the Network", href: "/directory", variant: "primary" },
      { label: "Watch the Podcast", href: "/media", variant: "secondary" },
      { label: "Submit a Ministry", href: "/submit", variant: "ghost" }
    ]
  },
  mission: {
    title: "Built for believers who still test everything.",
    copy:
      "In a world full of platforms, personalities, and noise, The True Remnant Network exists to help Christians discover voices, ministries, and resources with clarity, care, and accountability.",
    scripture: "Test everything; hold fast what is good.",
    reference: "1 Thessalonians 5:21"
  },
  problemCards: [
    ["Too many voices, not enough accountability", "Believers are surrounded by teaching, platforms, clips, and personalities without always knowing what sits behind them."],
    ["Good ministries are hard to find", "Faithful churches, charities, and teachers often work quietly while louder platforms dominate discovery."],
    ["Missions need visibility", "Missionaries and outreach projects need clear profiles, prayer context, and official support pathways."],
    ["Trusted pathways, not hype", "The network favours careful review, story, doctrine, fruit, and accountability over viral claims."]
  ],
  solutionPoints: [
    "We gather Christian voices and ministries in one searchable place.",
    "We label profiles clearly so users understand the review stage.",
    "We keep donation, book, event, and resource links external.",
    "We use podcast interviews, review notes, and transparent profile information to build trust."
  ],
  discoveryPaths: [
    { title: "Churches", label: "Local fellowship", image: "worshipGathering" as ImageKey, href: "/directory", copy: "Find reviewed church profiles with location, teaching posture, and leadership context." },
    { title: "Teachers", label: "Bible teaching", image: "studyDesk" as ImageKey, href: "/directory", copy: "Explore teachers, books, interviews, and resources with clear review notes." },
    { title: "Missions", label: "Field stories", image: "missionHands" as ImageKey, href: "/missions", copy: "Make mission work visible through profiles, prayer needs, and official support links." },
    { title: "Charities", label: "Mercy ministry", image: "prayerCircle" as ImageKey, href: "/directory", copy: "Discover Christian outreach with accountability and practical care details." },
    { title: "Testimonies", label: "Stories of faith", image: "cityNight" as ImageKey, href: "/media", copy: "Hear stories that reveal the people, faith, and fruit behind the profile." },
    { title: "Events", label: "Gatherings", image: "worshipGathering" as ImageKey, href: "/events", copy: "Find prayer nights, conferences, worship gatherings, and mission trips." },
    { title: "Books & Audio", label: "Resources", image: "bibleTable" as ImageKey, href: "/resources", copy: "Browse gospel-centred reading, teaching, audio, and study resources." },
    { title: "Worship & Music", label: "Music", image: "podcastStudio" as ImageKey, href: "/directory", copy: "Connect worship artists, testimony sessions, and external music links." },
    { title: "Podcast Interviews", label: "Media", image: "podcastStudio" as ImageKey, href: "/media", copy: "Long-form conversations with teachers, leaders, missionaries, and artists." },
    { title: "Global Map", label: "Network", image: "globalMap" as ImageKey, href: "/map", copy: "A map-ready layer for discovering Christian work by place and category." }
  ]
};
