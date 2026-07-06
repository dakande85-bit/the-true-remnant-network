import { notFound } from "next/navigation";
import { ProfileDetail } from "@/components/ProfileDetail";
import { personProfiles } from "@/data/directory";
import { dataProvider } from "@/lib/data";

export function generateStaticParams() {
  return personProfiles.map((profile) => ({ slug: profile.slug }));
}

export default async function PersonProfilePage({ params }: { params: { slug: string } }) {
  const profile = await dataProvider.directory.bySlug(params.slug);

  if (!profile || profile.kind !== "person") {
    notFound();
  }

  return <ProfileDetail profile={profile} />;
}
