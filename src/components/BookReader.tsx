"use client";
import { useEffect,useState } from "react";
import type { LibraryBook } from "@/data/library";
export function BookReader({book}:{book:LibraryBook}) {
 const [page,setPage]=useState(0);
 const [font,setFont]=useState(20);
 const [night,setNight]=useState(false);
 const count=book.pages.length;
 useEffect(()=>{try{const saved=localStorage.getItem("unseen-reader-"+book.slug); if(saved!==null)setPage(Math.min(Math.max(0,Number(saved)||0),count-1));}catch{}},[book.slug,count]);
 function go(to:number){const p=Math.min(count-1,Math.max(0,to));setPage(p);try{localStorage.setItem("unseen-reader-"+book.slug,String(p));}catch{}}
 useEffect(()=>{function keys(e:KeyboardEvent){if(e.key==="ArrowRight")go(page+1);if(e.key==="ArrowLeft")go(page-1);}window.addEventListener("keydown",keys);return()=>window.removeEventListener("keydown",keys);},[page]);
 const current=book.pages[page];
 return <div className={"uw-reader"+(night?" uw-reader-night":"")}>
   <div className="uw-reader-toolbar"><span>READING MODE</span><div className="uw-reader-settings"><button onClick={()=>setFont(Math.max(16,font-2))} aria-label="Decrease text size">A−</button><button onClick={()=>setFont(Math.min(30,font+2))} aria-label="Increase text size">A+</button><button onClick={()=>setNight(!night)}>{night?"☀ Light":"☾ Night"}</button></div></div>
   <div className="uw-book-page"><div className="uw-page-ornament">✦</div><p className="uw-overline">{book.category} · {book.title}</p><h2>{current.heading}</h2><p className="uw-book-text" style={{fontSize:font}}>{current.body}</p>{current.reference&&<p className="uw-reference">READ IN YOUR BIBLE · {current.reference}</p>}<div className="uw-page-number">{page+1} / {count}</div></div>
   <div className="uw-reader-controls"><button onClick={()=>go(page-1)} disabled={page===0}>← Previous</button><span>{Math.round((page+1)/count*100)}% completed</span><button onClick={()=>go(page+1)} disabled={page===count-1}>Next →</button></div><div className="uw-progress"><div style={{width:((page+1)/count*100)+"%"}}/></div>
   <p className="uw-reader-note">Your last page is saved in this browser. Use the arrow keys to turn pages. PDF downloads will be available after final editorial and layout review.</p>
 </div>;
}