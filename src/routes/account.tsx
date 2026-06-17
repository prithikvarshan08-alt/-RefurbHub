import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "Account — RefurbHub" }] }),
  component: () => (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-black">My Account</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Profile","Manage your personal info"],
            ["Orders","Track and review purchases"],
            ["Wishlist","Saved items for later"],
            ["Addresses","Shipping & billing"],
          ].map(([t,d]) => (
            <div key={t} className="rounded-2xl border border-white/5 bg-card p-5">
              <h3 className="font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  ),
});
