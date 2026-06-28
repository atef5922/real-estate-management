"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TopNavbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        setHidden((current) => {
          if (!current && window.scrollY > 110) return true;
          if (current && window.scrollY < 32) return false;
          return current;
        });
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "hidden overflow-hidden bg-navy-950 text-white transition-[max-height,opacity] duration-300 ease-out lg:block",
        hidden ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
      )}
    >
      <div className="container flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-5 text-white/82">
          <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 hover:text-gold-400">
            <Phone className="h-3.5 w-3.5 text-gold-400" />
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-gold-400">
            <Mail className="h-3.5 w-3.5 text-gold-400" />
            {siteConfig.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold-400" />
            Dhaka, Bangladesh
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-gold-400" />
            {siteConfig.hours}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-white/90">
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
          <select className="bg-transparent text-white/90 outline-none" aria-label="Language">
            <option className="text-slateText">English</option>
            <option className="text-slateText">বাংলা</option>
          </select>
          <select className="bg-transparent text-white/90 outline-none" aria-label="Currency">
            <option className="text-slateText">BDT</option>
            <option className="text-slateText">USD</option>
          </select>
          <Link href="/login" className="hover:text-gold-400">
            Login
          </Link>
          <a href={siteConfig.whatsapp} className="inline-flex items-center gap-1.5 hover:text-gold-400">
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
