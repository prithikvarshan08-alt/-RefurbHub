import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { products } from "@/data/products";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — RefurbHub" }] }),
  component: CartPage,
});

function CartPage() {
  const items = products.slice(0, 3);
  const total = items.reduce((s, p) => s + p.sale_price, 0);
  return (
    <Layout>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px]">
        <div>
          <h1 className="text-3xl font-black">Your Cart</h1>
          <div className="mt-6 space-y-3">
            {items.map((p) => (
              <div key={p.id} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-card p-3">
                <img src={p.featured_image} alt={p.title} className="h-20 w-20 rounded-xl object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                </div>
                <p className="font-bold text-[oklch(0.78_0.18_145)]">${p.sale_price}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-2xl border border-white/5 bg-card p-5">
          <h2 className="font-bold">Summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${total}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>Free</span></div>
            <div className="mt-3 flex justify-between border-t border-white/5 pt-3 font-bold"><span>Total</span><span>${total}</span></div>
          </div>
          <Link to="/checkout" className="focus-ring mt-5 block rounded-full bg-[#7c4dff] py-3 text-center text-sm font-semibold text-white">Checkout</Link>
        </aside>
      </div>
    </Layout>
  );
}
