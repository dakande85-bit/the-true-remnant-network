export type DirectoryItem = {
  id: string;
  name: string;
  category: "Church" | "Teacher" | "Mission" | "Charity" | "Music" | "Event" | "Resource";
  city: string;
  country: string;
  summary: string;
  verificationStatus: "Listed" | "Reviewed" | "Verified" | "Recommended" | "Under Review";
  websiteUrl?: string;
  youtubeUrl?: string;
  resourceUrl?: string;
  relatedPodcastUrl?: string;
};

export const directoryItems: DirectoryItem[] = [
  {
    id: "local-church-placeholder",
    name: "Local Church Placeholder",
    category: "Church",
    city: "Tenerife",
    country: "Spain",
    summary: "A reviewed church profile placeholder for the first version of the directory.",
    verificationStatus: "Reviewed",
    websiteUrl: "#"
  },
  {
    id: "mission-project-placeholder",
    name: "Mission Project Placeholder",
    category: "Mission",
    city: "Rio de Janeiro",
    country: "Brazil",
    summary: "A mission profile placeholder with an external information link.",
    verificationStatus: "Listed",
    resourceUrl: "#"
  },
  {
    id: "teacher-profile-placeholder",
    name: "Teacher Profile Placeholder",
    category: "Teacher",
    city: "Manchester",
    country: "United Kingdom",
    summary: "A Christian teacher profile placeholder for future podcast guests and reviewed resources.",
    verificationStatus: "Verified",
    relatedPodcastUrl: "#"
  },
  {
    id: "music-resource-placeholder",
    name: "Music Resource Placeholder",
    category: "Music",
    city: "Online",
    country: "Global",
    summary: "A worship music and audio resource placeholder.",
    verificationStatus: "Listed",
    youtubeUrl: "#"
  }
];
