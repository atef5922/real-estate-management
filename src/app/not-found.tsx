import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-navy-radial px-4 py-20 text-center text-white">
      <div className="max-w-xl">
        <p className="font-heading text-8xl font-semibold text-gold-400">404</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold">Page Not Found</h1>
        <p className="mt-4 text-white/72">
          The page you requested is not available. Continue browsing verified premium properties.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="gold">
            <Link href="/">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button asChild variant="inverse">
            <Link href="/properties">
              <Search className="h-4 w-4" />
              Browse Properties
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
