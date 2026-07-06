type CategoryFilterProps = {
  categories: string[];
};

export function CategoryFilter({ categories }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 rounded-2xl border border-linen bg-white p-3 shadow-sm">
      {categories.map((category, index) => (
        <button
          className={`rounded-full px-4 py-2 text-sm font-black ${
            index === 0 ? "bg-ink text-cream" : "border border-linen bg-parchment text-stone-700"
          }`}
          key={category}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
