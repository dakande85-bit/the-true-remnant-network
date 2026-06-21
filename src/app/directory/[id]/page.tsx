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
          <p>This profile has not been added to the reviewed directory yet.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">{item.category} Profile</p>
          <h1>{item.name}</h1>
          <p>{item.city}, {item.country} · {item.language}</p>
          <div className="tag-row">
            {item.tags.map((tag) => <span className="mini-tag" key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <article className="card span-2">
            <div className="card-meta">
              <span className="badge">{item.category}</span>
              <span className="status-pill">{item.verificationStatus}</span>
            </div>
            <h2>Profile Summary</h2>
            <p>{item.summary}</p>
            <h3>Focus</h3>
            <p>{item.focus}</p>
            <h3>External Links</h3>
            <p>All support, media, event, book and donation links should remain external during the MVP stage.</p>
            <div className="row">
              {item.websiteUrl ? <a className="btn" href={item.websiteUrl}>Website</a> : null}
              {item.youtubeUrl ? <a className="btn" href={item.youtubeUrl}>YouTube</a> : null}
              {item.resourceUrl ? <a className="btn" href={item.resourceUrl}>Resource Link</a> : null}
              {item.relatedPodcastUrl ? <a className="btn" href={item.relatedPodcastUrl}>Podcast Episode</a> : null}
            </div>
          </article>

          <aside className="card">
            <span className="badge">Review Note</span>
            <h3>{item.verificationStatus}</h3>
            <p>{item.reviewNote}</p>
            <a className="btn btn-soft" href="/verification">View Verification Process</a>
          </aside>
        </div>
      </section>
    </>
  );
}
