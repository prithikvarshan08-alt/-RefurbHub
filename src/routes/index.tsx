import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { ProductGrid } from "@/components/site/ProductGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RefurbHub — Premium Refurbished Devices, Up to 70% Off" },
      { name: "description", content: "Certified refurbished phones, laptops, tablets, headphones and more. Like-new quality with a 6-month warranty." },
      { property: "og:title", content: "RefurbHub — Premium Refurbished Devices" },
      { property: "og:description", content: "Up to 70% off. Like-new quality. 6-month warranty. Certified products." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <ProductGrid />
    </Layout>
  );
}
