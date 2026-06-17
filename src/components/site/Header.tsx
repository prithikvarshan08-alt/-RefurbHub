import { Link } from "@tanstack/react-router";
import { Search, Heart, Moon, ShoppingBag, User } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2 focus-ring rounded-lg">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#7c4dff] to-[#0ea5a4] font-black text-white">R</div>
          <span className="hidden text-lg font-bold tracking-tight sm:inline">RefurbHub</span>
        </Link>

        <div className="relative min-w-0">
          <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            aria-label="Search refurbished products"
            placeholder="Search iPhone, MacBook, PS5…"
            className="focus-ring h-11 w-full rounded-full border border-white/10 bg-secondary/60 pl-11 pr-4 text-sm placeholder:text-muted-foreground"
          />
        </div>

        <nav className="flex shrink-0 items-center gap-1">
          <button aria-label="Toggle dark mode" className="focus-ring grid h-10 w-10 place-items-center rounded-full hover:bg-white/5"><Moon className="h-4 w-4" /></button>
          <Link to="/account" aria-label="Account" className="focus-ring grid h-10 w-10 place-items-center rounded-full hover:bg-white/5"><User className="h-4 w-4" /></Link>
          <button aria-label="Wishlist" className="focus-ring grid h-10 w-10 place-items-center rounded-full hover:bg-white/5"><Heart className="h-4 w-4" /></button>
          <Link to="/cart" aria-label="Cart" className="focus-ring grid h-10 w-10 place-items-center rounded-full hover:bg-white/5"><ShoppingBag className="h-4 w-4" /></Link>
        </nav>
      </div>
    </header>
  );
}
