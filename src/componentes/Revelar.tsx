"use client";
import { motion } from "framer-motion";

export default function Revelar({ children, atraso = 0, className }: { children: React.ReactNode; atraso?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: atraso, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
