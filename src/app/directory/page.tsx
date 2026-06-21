import { DirectoryCard } from "@/components/DirectoryCard";
import { directoryItems } from "@/data/directory";

const categoryFilters = ["All Categories", "Church", "Teacher", "Mission", "Charity", "Music", "Event", "Resource"];
const statusFilters = ["All Statuses", "Listed", "Reviewed", "Verified", "Recommended", "Under Review"];

export default function DirectoryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker">Directory</p>
          <h1>Find reviewed Christian churches, teachers, ministries and missions.</h1>
          <p>
            A searchable Christian directory for reviewed people, organisations and resources. The MVP uses starter
            records; the next step is connecting these filters to Supabase.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="card">
            <div className="form-grid">
              <label>
                Search
                <input className="input" placeholder="Name, city, country, topic or language" />
              </label>
              <label>
                Category
                <select>
                  {categoryFilters.map((filter) => <option key={filter}>{filter}</option>)}
                </select>
              </label>
              <label>
                Verification
                <select>
                  {statusFilters.map((filter) => <option key={filter}>{filter}</option>)}
                </select>
              </label>
              <label>
                Location
                <input className="input" placeholder="Tenerife, London, Online, Global" />
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="grid grid-3">
            {directoryItems.map((item) => <DirectoryCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
