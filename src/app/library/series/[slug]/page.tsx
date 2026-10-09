import Link from "next/link";
import {notFound} from "next/navigation";
import {publishedBooks} from "@/data/library";
import {BookTile,seriesInfo} from "@/components/LibraryCover";
import "../../library.css";
const slugs={"biblical-discoveries":"Biblical Discoveries","children":"Children","prayers":"Prayers"} as const;
export function generateStaticParams(){return Object.keys(slugs).map(slug=>({slug}));}
export default function SeriesPage({params}:{params:{slug:string}}){const category=slugs[params.slug as keyof typeof slugs];if(!category)notFound();const books=publishedBooks.filter(b=>b.category===category);const info=seriesInfo[category];return <main className="uw2"><section className={`uw2-series-hero uw2-series-${info.tone}`}><div className="uw2-container"><Link href="/library" className="uw2-breadcrumb">← The Library</Link><span className="uw2-label">{info.tag} · COLLECTION</span><h1>{category==="Children"?"Children’s Collection":category}</h1><p>{info.description}</p><span className="uw2-series-count">{books.length} {books.length===1?"available title":"available titles"}</span></div></section><section className="uw2-container uw2-section"><div className="uw2-section-heading"><div><span className="uw2-label">COLLECTION BOOKS</span><h2>Choose your next read</h2></div></div><div className="uw2-books-grid">{books.map(book=><BookTile key={book.slug} book={book}/>)}</div></section></main>}
