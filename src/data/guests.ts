export type GuestStatus = "Published" | "Recording" | "Invited" | "Researching";

export type GuestProfile = {
  id: string;
  name: string;
  role: string;
  location: string;
  topic: string;
  status: GuestStatus;
  summary: string;
  episodeTitle: string;
  imageUrl?: string;
  links?: { label: string; href: string }[];
};

export const guestProfiles: GuestProfile[] = [
  {
    id: "founder-episode",
    name: "Founder Episode",
    role: "Host introduction",
    location: "Tenerife / Online",
    topic: "Vision and mission",
    status: "Recording",
    episodeTitle: "Why The True Remnant Exists",
    summary: "The launch conversation sets out the reason for the podcast: faithful Christian media, testimony, discernment, mission and a resource hub that points people back to Scripture.",
    imageUrl: "/images/founder-podcast.svg",
    links: [{ label: "View podcast plan", href: "/podcast" }]
  },
  {
    id: "bible-teacher-slot",
    name: "Bible Teacher",
    role: "Guest slot",
    location: "UK / Europe preferred",
    topic: "Discernment and doctrine",
    status: "Researching",
    episodeTitle: "Testing the Fruit Without Becoming Proud",
    summary: "A planned interview with a Bible teacher who can speak carefully on doctrine, discernment, false teaching and how believers test public ministry with humility.",
    links: [{ label: "View guest pipeline", href: "/guests" }]
  },
  {
    id: "missionary-slot",
    name: "Missionary / Charity Leader",
    role: "Guest slot",
    location: "Canary Islands / UK / Global",
    topic: "Mission and mercy ministry",
    status: "Researching",
    episodeTitle: "Stories From the Mission Field",
    summary: "A planned conversation with someone serving in mission or mercy ministry, with official links for prayer, support and accountability.",
    links: [{ label: "View guest pipeline", href: "/guests" }]
  },
  {
    id: "testimony-slot",
    name: "Testimony Guest",
    role: "Guest slot",
    location: "Online",
    topic: "Testimony and discipleship",
    status: "Invited",
    episodeTitle: "From Darkness to Truth",
    summary: "A testimony-led conversation focused on repentance, deliverance from deception, walking with Christ and practical discipleship after conversion.",
    links: [{ label: "View guest pipeline", href: "/guests" }]
  }
];
