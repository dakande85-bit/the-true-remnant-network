import type { DirectoryProfile } from "@/data/directory";
import { ProfileCard } from "./ProfileCard";

export function DirectoryCard({ item, profile }: { item?: DirectoryProfile; profile?: DirectoryProfile }) {
  const resolvedProfile = profile ?? item;

  if (!resolvedProfile) {
    return null;
  }

  return <ProfileCard profile={resolvedProfile} />;
}
