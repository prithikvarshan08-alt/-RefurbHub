import { Link } from "@tanstack/react-router";
import { Heart, ShieldCheck } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-hover group relative overflow-hidden rounded-2xl border border-white/5 bg-card p-3 shadow-lg shadow-black/20">
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="focus-ring block"
        aria-label={product.title}
      >
        <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary/50">
          <img
            src={product.featured_image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-[#ff7a00] px-2.5 py-1 text-xs font-bold text-white shadow-md">
            -{product.discount_percent}%
          </span>
          <button
            aria-label={`Add ${product.title} to wishlist`}
            onClick={(e) => { e.preventDefault(); }}
            className="focus-ring absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        <div className="px-1 pt-3 pb-1">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{product.category}</p>
          <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug">{product.title}</h3>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-lg font-bold text-[oklch(0.78_0.18_145)]">${product.sale_price}</span>
            <span className="text-xs text-muted-foreground line-through">${product.original_price}</span>
          </div>

          <div className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
            <ShieldCheck className="h-3 w-3" />
            <span>{product.warranty_months}-month warranty</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
