"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[80] h-1 origin-left bg-gold-500"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  );
}
