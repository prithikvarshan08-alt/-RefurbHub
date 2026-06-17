import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — RefurbHub" },
    { name: "description", content: "RefurbHub gives premium electronics a second life with rigorous certification and 6-month warranties." },
  ]}),
  component: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl font-black">About RefurbHub</h1>
        <p className="mt-4 text-muted-foreground">We give premium electronics a second life. Every device passes a 50-point inspection, ships with a 6-month warranty, and saves you up to 70% versus new.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[["200k+","Happy customers"],["50‑pt","Certification"],["6 mo","Warranty"]].map(([n,l]) => (
            <div key={l} className="rounded-2xl border border-white/5 bg-card p-5"><p className="text-2xl font-black text-[#7c4dff]">{n}</p><p className="text-sm text-muted-foreground">{l}</p></div>
          ))}
        </div>
      </div>
    </Layout>
  ),
});
