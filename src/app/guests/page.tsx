import { guestProfiles } from "@/data/guests";

const publishedGuests = guestProfiles.filter((guest) => guest.status === "Published");
const upcomingGuests = guestProfiles.filter((guest) => guest.status !== "Published");

export default function GuestsPage() {
  return (
    <>
      <section className="page-hero clean-page-hero">
        <div className="container">
          <p className="kicker">Guests</p>
          <h1>Past and upcoming conversations.</h1>
          <p>
            This page is for the podcast audience: who has been interviewed, who is coming next, what each guest brings,
            and how the conversation connects to Scripture, testimony, mission and resources.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">Upcoming</p>
              <h2>Guest pipeline</h2>
              <p>Keep these as podcast placeholders until the real names are confirmed.</p>
            </div>
            <a className="btn" href="/submit">Suggest a guest</a>
          </div>
          <div className="grid grid-3">
            {upcomingGuests.map((guest) => (
              <article className="card guest-card" key={guest.id}>
                <div className="guest-media">
                  {guest.imageUrl ? <img src={guest.imageUrl} alt={`${guest.name} image`} /> : <span>{guest.topic}</span>}
                </div>
                <div className="card-meta">
                  <span className="badge">{guest.status}</span>
                  <span className="mini-tag">{guest.topic}</span>
                </div>
                <h3>{guest.name}</h3>
                <p className="location">{guest.role} · {guest.location}</p>
                <p><strong>{guest.episodeTitle}</strong></p>
                <p>{guest.summary}</p>
                <div className="row">
                  {(guest.links ?? []).map((link) => <a className="btn btn-soft" href={link.href} key={link.href}>{link.label}</a>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="kicker">Past guests</p>
              <h2>Published conversations</h2>
              <p>This section will fill with real interviews once the first episodes are published.</p>
            </div>
          </div>
          {publishedGuests.length > 0 ? (
            <div className="grid grid-3">
              {publishedGuests.map((guest) => (
                <article className="card guest-card" key={guest.id}>
                  <h3>{guest.name}</h3>
                  <p className="location">{guest.role} · {guest.location}</p>
                  <p>{guest.summary}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state card">
              <span className="badge">Launch phase</span>
              <h3>No published guest interviews yet.</h3>
              <p>After recording, this area becomes the public archive of past guests with links to YouTube, notes and resources.</p>
              <a className="btn btn-primary" href="/podcast">View podcast plan</a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
