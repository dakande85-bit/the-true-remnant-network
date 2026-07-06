import type { DirectoryProfile } from "@/data/directory";
import { EditorialProfileCard } from "./EditorialProfileCard";

export function DirectoryCard({ item, profile }: { item?: DirectoryProfile; profile?: DirectoryProfile }) {
  const resolvedProfile = profile ?? item;

  if (!resolvedProfile) {
    return null;
  }

  return <EditorialProfileCard profile={resolvedProfile} />;
}
