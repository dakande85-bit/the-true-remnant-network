import { directoryItems } from "@/data/directory";

export function generateStaticParams() {
  return directoryItems.map((item) => ({ id: item.id }));
}

export default function DirectoryProfilePage({ params }: { params: { id: string } }) {
  const item = directoryItems.find((entry) => entry.id === params.id);

  if (!item) {
    return (
      <section className="page-hero">
        <div className="container">
          <h1>Profile not found</h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">{item.category}</p>
          <h1>{item.name}</h1>
          <p>{item.city}, {item.country}</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid grid-3">
          <article className="card" style={{ gridColumn: "span 2" }}>
            <span className="badge">{item.verificationStatus}</span>
            <h2 style={{ marginTop: 16 }}>Profile Summary</h2>
            <p>{item.summary}</p>
            <h3>External Links</h3>
            <div className="row">
              {item.websiteUrl ? <a className="btn" href={item.websiteUrl}>Website</a> : null}
              {item.youtubeUrl ? <a className="btn" href={item.youtubeUrl}>YouTube</a> : null}
              {item.resourceUrl ? <a className="btn" href={item.resourceUrl}>Resource Link</a> : null}
              {item.relatedPodcastUrl ? <a className="btn" href={item.relatedPodcastUrl}>Podcast Episode</a> : null}
            </div>
          </article>
          <aside className="card">
            <h3>Verification Note</h3>
            <p>Verification means the profile has passed the current review level. It does not mean every teaching, decision or action is endorsed permanently.</p>
            <a className="btn" href="/verification">View Process</a>
          </aside>
        </div>
      </section>
    </>
  );
}
