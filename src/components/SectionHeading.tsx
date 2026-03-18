"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  accent,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={center ? "text-center" : ""}
    >
      {accent && (
        <span className="font-[family-name:var(--font-oswald)] text-orange text-sm font-semibold tracking-[0.2em] uppercase">
          {accent}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted mt-4 max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <div className={`w-16 h-1 bg-orange mt-6 ${center ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
