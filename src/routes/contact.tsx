import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — RefurbHub" }] }),
  component: () => (
    <Layout>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl font-black">Contact us</h1>
        <p className="mt-2 text-muted-foreground">We typically respond within one business day.</p>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Your name" aria-label="Name" className="focus-ring h-11 w-full rounded-xl border border-white/10 bg-secondary/60 px-4 text-sm" />
          <input placeholder="Email" type="email" aria-label="Email" className="focus-ring h-11 w-full rounded-xl border border-white/10 bg-secondary/60 px-4 text-sm" />
          <textarea placeholder="Message" aria-label="Message" rows={5} className="focus-ring w-full rounded-xl border border-white/10 bg-secondary/60 p-4 text-sm" />
          <button className="focus-ring w-full rounded-full bg-[#7c4dff] py-3 font-semibold text-white">Send message</button>
        </form>
      </div>
    </Layout>
  ),
});
