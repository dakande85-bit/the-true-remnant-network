"use client";
import {useEffect,useMemo,useState} from "react";
import type {LibraryBook} from "@/data/library";

type Leaf={chapter:number;heading:string;paragraphs:string[];reference?:string;first:boolean};
function paginate(book:LibraryBook):Leaf[]{
 const leaves:Leaf[]=[];
 book.pages.forEach((chapter,chapterIndex)=>{
  const paragraphs=chapter.body.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);
  let buffer:string[]=[],length=0,first=true;
  function flush(){if(!buffer.length)return;leaves.push({chapter:chapterIndex,heading:chapter.heading,paragraphs:buffer,first});first=false;buffer=[];length=0;}
  for(const para of paragraphs){
   const words=para.split(/\s+/);let segment="";
   for(const word of words){
    if(segment.length+word.length+1>620 && segment){if(length+segment.length>900)flush();buffer.push(segment);length+=segment.length;segment="";}
    segment+=(segment?" ":"")+word;
   }
   if(segment){if(length+segment.length>900)flush();buffer.push(segment);length+=segment.length;}
  }
  flush();
  if(leaves.length&&chapter.reference)leaves[leaves.length-1].reference=chapter.reference;
 });
 return leaves;
}
export function BookReader({book}:{book:LibraryBook}){
 const leaves=useMemo(()=>paginate(book),[book]);
 const [page,setPage]=useState(0),[font,setFont]=useState(18),[night,setNight]=useState(false),[toc,setToc]=useState(false),[wide,setWide]=useState(false);
 const count=leaves.length;
 useEffect(()=>{const media=window.matchMedia("(min-width: 860px)");const update=()=>setWide(media.matches);update();media.addEventListener("change",update);return()=>media.removeEventListener("change",update)},[]);
 useEffect(()=>{try{const n=Number(localStorage.getItem("unseen-reader-"+book.slug));if(Number.isInteger(n))setPage(Math.min(Math.max(n,0),count-1))}catch{}},[book.slug,count]);
 function go(n:number){const next=Math.min(Math.max(n,0),count-1);setPage(next);try{localStorage.setItem("unseen-reader-"+book.slug,String(next))}catch{}}
 const start=wide?Math.floor(page/2)*2:page,step=wide?2:1;
 useEffect(()=>{function onKey(e:KeyboardEvent){if(["INPUT","TEXTAREA","BUTTON"].includes((e.target as HTMLElement)?.tagName)||e.altKey||e.metaKey||e.ctrlKey)return;if(e.key==="ArrowRight")go(start+step);if(e.key==="ArrowLeft")go(start-step)}window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[start,step]);
 const chapters=book.pages.map((chapter,i)=>({chapter,index:leaves.findIndex(l=>l.chapter===i)})).filter(x=>x.index>=0);
 function LeafPage({index}:{index:number}){const leaf=leaves[index];if(!leaf)return <div className="uw3-leaf uw3-leaf-blank" aria-hidden="true"/>;return <article className="uw3-leaf" aria-label={"Page "+(index+1)}><div className="uw3-leaf-header"><span>UNSEEN WAR</span><span>{book.category.toUpperCase()}</span></div><div className="uw3-leaf-content"><div className="uw3-chapter-label">{leaf.first?"CHAPTER "+String(leaf.chapter+1).padStart(2,"0"):"CONTINUED"}</div>{leaf.first&&<h2>{leaf.heading}</h2>}{leaf.paragraphs.map((p,i)=><p className="uw3-prose" key={i} style={{fontSize:font}}>{p}</p>)}{leaf.reference&&<div className="uw3-scripture">SCRIPTURE READING <span>{leaf.reference}</span></div>}</div><div className="uw3-page-number"><span>{book.title}</span><strong>{index+1}</strong></div></article>}
 return <div className={"uw3-reader"+(night?" uw3-night":"")}>
 <div className="uw3-topbar"><span className="uw3-top-title">THE READING ROOM <span> / {book.title}</span></span><div className="uw3-tools"><button onClick={()=>setToc(!toc)} aria-expanded={toc} aria-controls="uw3-contents">☷ Contents</button><button aria-label="Decrease text size" onClick={()=>setFont(Math.max(15,font-1))}>A−</button><button aria-label="Increase text size" onClick={()=>setFont(Math.min(22,font+1))}>A+</button><button onClick={()=>setNight(!night)}>{night?"☀ Day":"☾ Night"}</button></div></div>
 {toc&&<nav id="uw3-contents" className="uw3-toc" aria-label="Book chapters">{chapters.map(({chapter,index},i)=><button key={i} aria-current={leaves[start]?.chapter===i?"step":undefined} onClick={()=>{go(index);setToc(false)}}><span>{String(i+1).padStart(2,"0")}</span>{chapter.heading}</button>)}</nav>}
 <div className="uw3-stage"><button className="uw3-edge uw3-edge-left" aria-label="Turn back" disabled={start===0} onClick={()=>go(start-step)}>‹</button><div className="uw3-book"><LeafPage index={start}/>{wide&&<LeafPage index={start+1}/>}</div><button className="uw3-edge uw3-edge-right" aria-label="Turn forward" disabled={start+step>=count} onClick={()=>go(start+step)}>›</button></div>
 <div className="uw3-bottom"><button onClick={()=>go(start-step)} disabled={start===0}>← Previous pages</button><span>PAGE {start+1}{wide&&start+1<count?"–"+Math.min(start+2,count):""} OF {count}</span><button onClick={()=>go(start+step)} disabled={start+step>=count}>Next pages →</button></div><div className="uw3-progress" role="progressbar" aria-valuemin={0} aria-valuemax={count} aria-valuenow={Math.min(start+step,count)}><div style={{width:(Math.min(start+step,count)/count*100)+"%"}}/></div><p className="uw3-help">Use the arrow keys to turn pages. Your reading position is saved on this device.</p>
 </div>
}