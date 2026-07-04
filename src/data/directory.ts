export type ValidationStatus = "Pending Review" | "Reviewed" | "Validated" | "Featured";

export type DirectoryCategory =
  | "Church"
  | "Ministry"
  | "Mission"
  | "Charity"
  | "Teacher"
  | "Worship"
  | "Book"
  | "Podcast"
  | "Event";

export type ProfileKind = "organisation" | "person";

export type DirectoryProfile = {
  id: string;
  slug: string;
  kind: ProfileKind;
  name: string;
  category: DirectoryCategory;
  status: ValidationStatus;
  location: string;
  country: string;
  summary: string;
  description: string;
  focus: string[];
  tags: string[];
  imageTone: string;
  websiteUrl?: string;
  youtubeUrl?: string;
  donationUrl?: string;
  mediaUrl?: string;
  eventUrl?: string;
};

export const directoryProfiles: DirectoryProfile[] = [
  {
    id: "org-001",
    slug: "harbour-light-church",
    kind: "organisation",
    name: "Harbour Light Church",
    category: "Church",
    status: "Featured",
    location: "Tenerife",
    country: "Spain",
    summary: "A local fellowship profile showing service, doctrine, leadership, and location details.",
    description:
      "Harbour Light Church is a mock reviewed church profile for the MVP. It demonstrates how a public organisation page can present teaching posture, contact links, meeting context, and review notes without claiming permanent endorsement.",
    focus: ["Local church", "Discipleship", "Community care"],
    tags: ["Sunday gathering", "Bilingual", "Map-ready"],
    imageTone: "from-stone-950 via-stone-800 to-amber-700",
    websiteUrl: "https://example.com"
  },
  {
    id: "org-002",
    slug: "mercy-table-outreach",
    kind: "organisation",
    name: "Mercy Table Outreach",
    category: "Charity",
    status: "Validated",
    location: "London",
    country: "United Kingdom",
    summary: "A charity profile for mercy ministry, public accountability, and practical support.",
    description:
      "A sample charity listing for food support, family care, and crisis response. The MVP keeps giving links external while the admin workflow captures review notes and accountability checks.",
    focus: ["Food support", "Family care", "Mercy ministry"],
    tags: ["Charity", "External giving", "Safeguarding"],
    imageTone: "from-zinc-950 via-neutral-800 to-yellow-700",
    websiteUrl: "https://example.com",
    donationUrl: "https://example.com/donate"
  },
  {
    id: "org-003",
    slug: "frontier-bible-mission",
    kind: "organisation",
    name: "Frontier Bible Mission",
    category: "Mission",
    status: "Reviewed",
    location: "Global",
    country: "International",
    summary: "Mission project profile for field updates, prayer needs, and official support links.",
    description:
      "A mission profile designed for evangelism projects, Bible distribution, and field stories. Support remains on official external pages until future payment decisions are made.",
    focus: ["Bible distribution", "Evangelism", "Field reports"],
    tags: ["Missions", "Prayer", "External support"],
    imageTone: "from-black via-stone-900 to-amber-800",
    websiteUrl: "https://example.com",
    donationUrl: "https://example.com/support"
  },
  {
    id: "person-001",
    slug: "elias-morgan",
    kind: "person",
    name: "Elias Morgan",
    category: "Teacher",
    status: "Featured",
    location: "Online",
    country: "Global",
    summary: "Bible teacher profile connected to books, interviews, doctrine notes, and audio teaching.",
    description:
      "A sample person profile for a Christian teacher. It shows how the network can connect media, books, and review status around a person without turning the site into a social platform.",
    focus: ["Biblical theology", "Discipleship", "Discernment"],
    tags: ["Teacher", "Podcast guest", "Books"],
    imageTone: "from-neutral-950 via-stone-800 to-yellow-800",
    websiteUrl: "https://example.com",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "person-002",
    slug: "mara-wells",
    kind: "person",
    name: "Mara Wells",
    category: "Worship",
    status: "Reviewed",
    location: "Manchester",
    country: "United Kingdom",
    summary: "Worship artist profile for curated music, testimony, and media links.",
    description:
      "A worship artist profile template for albums, playlists, testimony interviews, and reviewed public links. Music is linked externally rather than hosted by the MVP.",
    focus: ["Worship", "Songwriting", "Testimony"],
    tags: ["Music", "YouTube", "External links"],
    imageTone: "from-stone-950 via-zinc-800 to-amber-600",
    mediaUrl: "https://example.com/music",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "org-004",
    slug: "city-prayer-room",
    kind: "organisation",
    name: "City Prayer Room",
    category: "Ministry",
    status: "Pending Review",
    location: "Bristol",
    country: "United Kingdom",
    summary: "Pending ministry listing for prayer gatherings, discipleship nights, and local events.",
    description:
      "A pending review profile that demonstrates the intake state. Admins can later promote records to Reviewed, Validated, or Featured once Supabase and authentication are connected.",
    focus: ["Prayer", "Local gatherings", "Discipleship"],
    tags: ["Pending", "Events", "Local ministry"],
    imageTone: "from-zinc-950 via-neutral-900 to-stone-700",
    eventUrl: "https://example.com/events"
  }
];

export const organisationProfiles = directoryProfiles.filter((profile) => profile.kind === "organisation");
export const personProfiles = directoryProfiles.filter((profile) => profile.kind === "person");

export function getProfileBySlug(slug: string) {
  return directoryProfiles.find((profile) => profile.slug === slug);
}
