export function Hero() {
  return (
    <section className="px-4 pt-6 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl hero-gradient hero-shimmer px-6 py-16 sm:py-24 md:py-28">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
            Certified Refurbished · Trusted by 200k+ customers
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Premium Refurbished Devices
          </h1>
          <p className="mt-4 text-sm font-medium text-white/90 sm:text-base">
            Up to 70% off · Like‑New quality · 6‑month warranty · Certified Products
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#products" className="focus-ring rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1a0b3d] transition hover:scale-[1.02]">Shop Deals</a>
            <a href="#products" className="focus-ring rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">Browse Categories</a>
          </div>
        </div>
      </div>
    </section>
  );
}
