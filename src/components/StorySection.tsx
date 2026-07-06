import type { ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";

type StorySectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  dark?: boolean;
};

export function StorySection({ eyebrow, title, description, children, dark = false }: StorySectionProps) {
  return (
    <section className={dark ? "bg-ink py-20 text-cream" : "py-20"}>
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} inverse={dark} />
        {children}
      </div>
    </section>
  );
}
