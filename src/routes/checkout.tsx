import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — RefurbHub" }] }),
  component: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-black">Checkout</h1>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          {["Full name", "Email", "Address", "City", "Postal code"].map((l) => (
            <label key={l} className="block">
              <span className="text-sm text-muted-foreground">{l}</span>
              <input className="focus-ring mt-1 h-11 w-full rounded-xl border border-white/10 bg-secondary/60 px-4 text-sm" />
            </label>
          ))}
          <button className="focus-ring w-full rounded-full bg-[#7c4dff] py-3 font-semibold text-white">Place order</button>
        </form>
      </div>
    </Layout>
  ),
});
