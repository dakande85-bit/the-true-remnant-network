import Link from "next/link";
import type {LibraryBook} from "@/data/library";
export const seriesInfo={
"Biblical Discoveries":{tag:"SCRIPTURE STUDIES",description:"Short, carefully researched explorations of biblical details and the connections between passages.",tone:"discovery",symbol:"✧"},
"Children":{tag:"YOUNG READERS",description:"Gentle, age-appropriate Bible stories and questions to explore together.",tone:"children",symbol:"✦"},
"Prayers":{tag:"PRAYER & DEVOTION",description:"Biblically grounded prayers for repentance, intercession and standing firm in Christ.",tone:"prayer",symbol:"✳"}
} as const;
export type SeriesName=keyof typeof seriesInfo;
export function BookCover({book,large=false}:{book:LibraryBook;large?:boolean}){const info=seriesInfo[book.category];return <div className={`uw2-cover uw2-cover--${info.tone} ${large?"uw2-cover--large":""}`} aria-label={book.title+" book cover"}><div className="uw2-cover-inner"><span className="uw2-cover-imprint">UNSEEN WAR <i>·</i> LIBRARY</span><span className="uw2-cover-symbol" aria-hidden="true">{info.symbol}</span><div className="uw2-cover-bottom"><span className="uw2-cover-series">{info.tag}</span><strong>{book.title}</strong><span className="uw2-cover-footer">A BIBLICAL READING COLLECTION</span></div></div></div>}
export function BookTile({book}:{book:LibraryBook}){return <Link href={`/library/${book.slug}`} className="uw2-tile"><BookCover book={book}/><div className="uw2-tile-copy"><span className="uw2-label">{seriesInfo[book.category].tag} · {book.pages.length} SECTIONS</span><h3>{book.title}</h3><p>{book.description}</p><span className="uw2-text-link">Explore book <span aria-hidden="true">↗</span></span></div></Link>}
