"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

function ActionTooltip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-sm border border-navy-950/10 bg-navy-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-premium transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
      {label}
      <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-navy-950" />
    </span>
  );
}

export function FloatingActions() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      setShowTopButton(window.scrollY > 520);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonClass =
    "group relative grid h-12 w-12 place-items-center rounded-full border shadow-[0_16px_34px_rgba(6,26,45,0.22)] outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2";

  return (
    <div className="fixed bottom-5 right-4 z-[75] flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      <motion.a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, y: 18, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -3, scale: 1.025 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          buttonClass,
          "isolate overflow-visible border-[#25D366]/45 bg-gradient-to-br from-navy-950 via-[#0B2742] to-[#128C7E] text-white shadow-[0_18px_42px_rgba(18,140,126,0.34)] hover:border-[#25D366]/70 hover:shadow-[0_22px_50px_rgba(18,140,126,0.45)]"
        )}
      >
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/35 blur-md"
          animate={{ opacity: [0.5, 0.24, 0.5], scale: [1, 1.16, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full border border-[#25D366]/45"
          animate={{ opacity: [0.5, 0], scale: [1, 1.55] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
        <span className="absolute inset-[3px] rounded-full border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02))]" />
        <span className="relative grid h-8 w-8 place-items-center rounded-full bg-white text-[#128C7E] shadow-[0_8px_18px_rgba(0,0,0,0.16)] transition group-hover:scale-105">
          <FaWhatsapp className="h-5 w-5" />
        </span>
        <ActionTooltip label="Chat on WhatsApp" />
      </motion.a>

      <AnimatePresence>
        {showTopButton ? (
          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              buttonClass,
              "border-gold-500/30 bg-white text-navy-950 hover:-translate-y-1 hover:border-gold-500 hover:bg-gold-500"
            )}
          >
            <ArrowUp className="h-5 w-5" />
            <ActionTooltip label="Back to Top" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
