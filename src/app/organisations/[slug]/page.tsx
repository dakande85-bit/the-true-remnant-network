import { notFound } from "next/navigation";
import { ProfileDetail } from "@/components/ProfileDetail";
import { organisationProfiles } from "@/data/directory";
import { dataProvider } from "@/lib/data";

export function generateStaticParams() {
  return organisationProfiles.map((profile) => ({ slug: profile.slug }));
}

export default async function OrganisationProfilePage({ params }: { params: { slug: string } }) {
  const profile = await dataProvider.directory.bySlug(params.slug);

  if (!profile || profile.kind !== "organisation") {
    notFound();
  }

  return <ProfileDetail profile={profile} />;
}
