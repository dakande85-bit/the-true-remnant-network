import { DirectoryCard } from "@/components/DirectoryCard";
import { directoryItems } from "@/data/directory";

export default function DirectoryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Directory</p>
          <h1>Find reviewed Christian churches, teachers, ministries and missions.</h1>
          <p>Search and filter trusted Christian organisations, people and resources. Start with seed records, then connect to Supabase later.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card" style={{ marginBottom: 24 }}>
            <div className="form-grid">
              <input className="input" placeholder="Search name, city, country or topic" />
              <select>
                <option>All Categories</option>
                <option>Church</option>
                <option>Teacher</option>
                <option>Mission</option>
                <option>Charity</option>
                <option>Music</option>
              </select>
            </div>
          </div>
          <div className="grid grid-4">
            {directoryItems.map((item) => <DirectoryCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
