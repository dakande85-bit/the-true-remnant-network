"use client";

import { useMemo, useState } from "react";
import { ResourceCard } from "@/components/ResourceCard";
import type { Resource } from "@/data/resources";

type ResourceExplorerProps = {
  resources: Resource[];
  categories: string[];
};

const allTypes = ["all", "person", "ministry", "youtube-channel", "podcast", "music", "book", "church", "mission", "prayer", "blog", "resource"];

export function ResourceExplorer({ resources, categories }: ResourceExplorerProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [topic, setTopic] = useState("all");
  const [type, setType] = useState("all");

  const topics = useMemo(
    () => Array.from(new Set(resources.flatMap((resource) => resource.topics))).sort(),
    [resources]
  );

  const filtered = resources.filter((resource) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || `${resource.name} ${resource.summary} ${resource.topics.join(" ")}`.toLowerCase().includes(query);
    const matchesCategory = category === "all" || resource.category === category;
    const matchesTopic = topic === "all" || resource.topics.includes(topic);
    const matchesType = type === "all" || resource.resourceType === type;
    return matchesSearch && matchesCategory && matchesTopic && matchesType;
  });

  return (
    <div>
      <div className="grid gap-3 rounded-[1.5rem] border border-linen bg-white p-4 shadow-sm md:grid-cols-4">
        <label className="grid gap-2 text-sm font-black text-stone-700">
          Search by name
          <input
            className="rounded-xl border border-linen bg-white px-4 py-3 font-normal outline-none focus:border-gold"
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Mike Winger, prayers, apologetics..."
            value={search}
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-stone-700">
          Category
          <select className="rounded-xl border border-linen bg-white px-4 py-3 font-normal outline-none focus:border-gold" onChange={(event) => setCategory(event.target.value)} value={category}>
            <option value="all">All categories</option>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-black text-stone-700">
          Topic
          <select className="rounded-xl border border-linen bg-white px-4 py-3 font-normal outline-none focus:border-gold" onChange={(event) => setTopic(event.target.value)} value={topic}>
            <option value="all">All topics</option>
            {topics.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-black text-stone-700">
          Type
          <select className="rounded-xl border border-linen bg-white px-4 py-3 font-normal outline-none focus:border-gold" onChange={(event) => setType(event.target.value)} value={type}>
            {allTypes.map((item) => <option key={item} value={item}>{item === "all" ? "All types" : item.replace("-", " ")}</option>)}
          </select>
        </label>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource) => <ResourceCard key={resource.id} item={resource} />)}
      </div>
      {!filtered.length ? (
        <div className="mt-8 rounded-2xl border border-linen bg-parchment p-8 text-center">
          <h3 className="font-display text-3xl text-ink">No resources match those filters yet.</h3>
          <p className="mt-3 text-stone-600">Try another topic, type, or category.</p>
        </div>
      ) : null}
    </div>
  );
}
