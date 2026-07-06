import Image from "next/image";
import type { ImageKey } from "@/content/images";
import { editorialImages } from "@/content/images";

type ImageCardProps = {
  imageKey: ImageKey;
  title: string;
  label?: string;
  description?: string;
  href?: string;
  cta?: string;
  priority?: boolean;
  className?: string;
};

export function ImageCard({ imageKey, title, label, description, href, cta, priority = false, className = "" }: ImageCardProps) {
  const image = editorialImages[imageKey];
  const content = (
    <article className={`group relative min-h-[330px] overflow-hidden rounded-[1.75rem] border border-cream/10 bg-ink shadow-editorial ${className}`}>
      <Image className="object-cover transition duration-700 group-hover:scale-105" src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" priority={priority} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/42 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">{label ?? image.label}</p>
        <h3 className="mt-3 font-display text-3xl leading-tight">{title}</h3>
        {description ? <p className="mt-3 text-sm leading-6 text-cream/75">{description}</p> : null}
        {cta ? <span className="mt-5 inline-flex rounded-full bg-cream px-4 py-2 text-sm font-black text-ink">{cta}</span> : null}
      </div>
    </article>
  );

  return href ? <a href={href}>{content}</a> : content;
}
