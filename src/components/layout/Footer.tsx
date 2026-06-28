import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/layout/Logo";
import { pageLinks, propertyMenuItems, siteConfig } from "@/lib/constants";

const services = [
  "Property Buy/Sell",
  "Property Rent",
  "Project Marketing",
  "Legal Verification",
  "Home Loan Assistance",
  "Corporate Leasing"
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container grid gap-10 py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr]">
        <div>
          <Logo inverse />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/68">
            {siteConfig.description}
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/76">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 hover:text-gold-400">
              <Phone className="h-4 w-4 text-gold-400" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-gold-400">
              <Mail className="h-4 w-4 text-gold-400" />
              {siteConfig.email}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold-400" />
              {siteConfig.address}
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-2xl font-semibold">Quick Links</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/68">
            {pageLinks.concat([{ label: "Contact", href: "/contact" }]).map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-gold-400">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-2xl font-semibold">Properties</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/68">
            {propertyMenuItems.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-gold-400">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-2xl font-semibold">Services & Updates</h3>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/68">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
          <form className="mt-6 flex gap-2">
            <Input type="email" placeholder="Email address" className="border-white/15 bg-white/10 text-white placeholder:text-white/50" />
            <Button aria-label="Subscribe" size="icon" variant="gold">
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <div className="mt-6 overflow-hidden rounded-lg border border-white/12">
            <div className="grid h-36 place-items-center bg-[linear-gradient(135deg,rgba(212,164,74,.22),rgba(255,255,255,.04)),url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center text-center">
              <span className="rounded-sm bg-navy-950/76 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-gold-400">
                Gulshan Office Map
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-4 py-6 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Dream Habitat Realty. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gold-400">
              Privacy
            </Link>
            <Link href="#" className="hover:text-gold-400">
              Terms
            </Link>
            <div className="flex items-center gap-3 text-white/80">
              <Link href="#" aria-label="Facebook" className="hover:text-gold-400">
                <FaFacebookF />
              </Link>
              <Link href="#" aria-label="X" className="hover:text-gold-400">
                <FaXTwitter />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-gold-400">
                <FaLinkedinIn />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-gold-400">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
