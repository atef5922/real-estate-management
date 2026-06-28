"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/layout/Logo";

export function InitialLoadCard() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[200] grid place-items-center bg-navy-950/92 px-4 backdrop-blur-md"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <motion.div
            className="w-full max-w-md overflow-hidden rounded-lg border border-white/14 bg-white p-6 text-center shadow-premium"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
          >
            <div className="flex justify-center">
              <Logo />
            </div>
            <div className="mx-auto mt-6 grid h-16 w-16 place-items-center rounded-full border border-gold-500/30 bg-gold-500/12 text-gold-500">
              <Building2 className="h-8 w-8" />
            </div>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.24em] text-gold-500">
              Preparing Your Private Realty Desk
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-slateText">
              Curating Premium Spaces
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-mutedText">
              Verified homes, trusted advisors, and refined property journeys are loading for you.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              Secure frontend preview
            </div>
            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full rounded-full bg-gold-500"
                initial={{ width: "18%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.05, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
