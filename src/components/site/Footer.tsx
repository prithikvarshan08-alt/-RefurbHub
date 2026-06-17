import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#7c4dff] to-[#0ea5a4] font-black text-white">R</div>
            <span className="font-bold">RefurbHub</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Certified refurbished electronics with up to 70% off and a 6‑month warranty.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/category/$slug" params={{ slug: "Mobiles" }} className="hover:text-foreground">Mobiles</Link></li>
            <li><Link to="/category/$slug" params={{ slug: "Laptops" }} className="hover:text-foreground">Laptops</Link></li>
            <li><Link to="/category/$slug" params={{ slug: "Headphones" }} className="hover:text-foreground">Headphones</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/account" className="hover:text-foreground">Account</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Newsletter</h4>
          <p className="mt-3 text-sm text-muted-foreground">Get exclusive deals.</p>
          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="you@email.com" aria-label="Email" className="focus-ring h-10 flex-1 rounded-full border border-white/10 bg-secondary/60 px-4 text-sm" />
            <button className="focus-ring rounded-full bg-[#7c4dff] px-4 text-sm font-semibold text-white">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} RefurbHub. All rights reserved.</div>
    </footer>
  );
}
