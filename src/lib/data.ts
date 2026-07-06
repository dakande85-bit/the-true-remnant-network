import {
  directoryProfiles,
  getProfileBySlug,
  organisationProfiles,
  personProfiles
} from "@/data/directory";
import { eventItems } from "@/data/events";
import { mediaItems } from "@/data/media";

export const dataProvider = {
  directory: {
    list: async () => directoryProfiles,
    organisations: async () => organisationProfiles,
    people: async () => personProfiles,
    bySlug: async (slug: string) => getProfileBySlug(slug)
  },
  media: {
    list: async () => mediaItems
  },
  events: {
    list: async () => eventItems
  }
};

export type DataProvider = typeof dataProvider;
