export type SortKey = "featured" | "price_asc" | "price_desc" | "discount";

type Props = { value: SortKey; onChange: (v: SortKey) => void };

export function SortDropdown({ value, onChange }: Props) {
  return (
    <label className="flex items-center gap-2 text-sm text-muted-foreground">
      <span className="hidden sm:inline">Sort by</span>
      <select
        aria-label="Sort products"
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
        className="focus-ring rounded-full border border-white/10 bg-secondary/60 px-3 py-2 text-sm text-foreground"
      >
        <option value="featured">Featured</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="discount">Biggest Discount</option>
      </select>
    </label>
  );
}
