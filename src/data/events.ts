export type EventItem = {
  id: string;
  title: string;
  type: "Prayer Night" | "Conference" | "Mission Trip" | "Worship Night";
  date: string;
  location: string;
  summary: string;
  url: string;
};

export const eventItems: EventItem[] = [
  {
    id: "event-001",
    title: "Remnant Prayer Night",
    type: "Prayer Night",
    date: "August 2026",
    location: "Tenerife, Spain",
    summary: "A reviewed event card for prayer, worship, and local fellowship.",
    url: "https://example.com/events/prayer"
  },
  {
    id: "event-002",
    title: "Faithful Voices Weekend",
    type: "Conference",
    date: "September 2026",
    location: "London, United Kingdom",
    summary: "Teaching, testimony, and ministry interviews with official organiser links.",
    url: "https://example.com/events/conference"
  },
  {
    id: "event-003",
    title: "Frontier Mission Visit",
    type: "Mission Trip",
    date: "October 2026",
    location: "International",
    summary: "Mission opportunity with organiser details, prayer context, and external links hosted officially.",
    url: "https://example.com/events/mission"
  }
];
