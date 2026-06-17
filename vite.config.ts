// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import netlify from "@netlify/vite-plugin-tanstack-start";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // The Netlify Vite plugin emulates the Netlify platform locally and produces
  // the right output layout (dist/client + server functions) for netlify deploy.
  plugins: [netlify()],
  nitro: {
    // Hard-pin the Nitro preset so netlify deploy picks up server functions
    // even when no Lovable sandbox env is present (i.e. on Netlify CI).
    preset: "netlify",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});