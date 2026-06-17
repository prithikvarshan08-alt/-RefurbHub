import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ProductGrid } from "@/components/site/ProductGrid";

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} — Refurbished | RefurbHub` },
      { name: "description", content: `Shop certified refurbished ${params.slug.toLowerCase()} with warranty at RefurbHub.` },
    ],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useParams();
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{slug}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Certified refurbished {slug.toLowerCase()} backed by warranty.</p>
      </div>
      <ProductGrid initialCategory={slug} />
    </Layout>
  );
}
