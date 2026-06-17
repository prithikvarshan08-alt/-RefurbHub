import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { CategoryPills } from "./CategoryPills";
import { SortDropdown, type SortKey } from "./SortDropdown";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ initialCategory = "All" }: { initialCategory?: string }) {
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortKey>("featured");

  const list = useMemo(() => {
    let l = category === "All" ? products : products.filter((p) => p.category === category);
    l = [...l];
    if (sort === "price_asc") l.sort((a, b) => a.sale_price - b.sale_price);
    if (sort === "price_desc") l.sort((a, b) => b.sale_price - a.sale_price);
    if (sort === "discount") l.sort((a, b) => b.discount_percent - a.discount_percent);
    return l;
  }, [category, sort]);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <SortDropdown value={sort} onChange={setSort} />
        <p className="text-xs text-muted-foreground">{list.length} products</p>
      </div>
      <div className="mb-6">
        <CategoryPills active={category} onChange={setCategory} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
