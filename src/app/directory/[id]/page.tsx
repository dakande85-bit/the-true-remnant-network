import { notFound, redirect } from "next/navigation";
import { directoryProfiles } from "@/data/directory";

export function generateStaticParams() {
  return directoryProfiles.map((profile) => ({ id: profile.slug }));
}

export default function DirectoryProfileRedirect({ params }: { params: { id: string } }) {
  const profile = directoryProfiles.find((entry) => entry.slug === params.id || entry.id === params.id);

  if (!profile) {
    notFound();
  }

  redirect(profile.kind === "person" ? `/people/${profile.slug}` : `/organisations/${profile.slug}`);
}
