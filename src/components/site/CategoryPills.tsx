import { categories } from "@/data/products";

type Props = { active: string; onChange: (c: string) => void };

export function CategoryPills({ active, onChange }: Props) {
  return (
    <div
      role="tablist"
      aria-label="Product categories"
      className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {categories.map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(c)}
            className={`focus-ring shrink-0 rounded-full border border-white/10 px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive ? "pill-active border-transparent" : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
