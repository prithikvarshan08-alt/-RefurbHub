import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { products } from "@/data/products";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.title} — RefurbHub` },
      { name: "description", content: loaderData?.product.short_description ?? "" },
      { property: "og:image", content: loaderData?.product.featured_image ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <Layout><div className="mx-auto max-w-3xl p-10 text-center"><h1 className="text-2xl font-bold">Product not found</h1></div></Layout>
  ),
  errorComponent: ({ error }) => <Layout><div className="p-10">{error.message}</div></Layout>,
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return (
    <Layout>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-white/5 bg-card">
          <img src={product.featured_image} alt={product.title} className="aspect-square w-full object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{product.category}</p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">{product.title}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-black text-[oklch(0.78_0.18_145)]">${product.sale_price}</span>
            <span className="text-lg text-muted-foreground line-through">${product.original_price}</span>
            <span className="rounded-full bg-[#ff7a00] px-2.5 py-1 text-xs font-bold text-white">-{product.discount_percent}%</span>
          </div>
          <p className="mt-4 text-muted-foreground">{product.short_description}</p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
            <div className="rounded-xl border border-white/5 bg-card p-3"><ShieldCheck className="mb-2 h-4 w-4 text-[#7c4dff]" />{product.warranty_months}-mo warranty</div>
            <div className="rounded-xl border border-white/5 bg-card p-3"><Truck className="mb-2 h-4 w-4 text-[#7c4dff]" />Free shipping</div>
            <div className="rounded-xl border border-white/5 bg-card p-3"><RotateCcw className="mb-2 h-4 w-4 text-[#7c4dff]" />30-day returns</div>
          </div>
          <div className="mt-8 flex gap-3">
            <Link to="/cart" className="focus-ring flex-1 rounded-full bg-[#7c4dff] py-3 text-center text-sm font-semibold text-white transition hover:brightness-110">Add to cart</Link>
            <Link to="/checkout" className="focus-ring flex-1 rounded-full bg-white py-3 text-center text-sm font-semibold text-[#1a0b3d]">Buy now</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
