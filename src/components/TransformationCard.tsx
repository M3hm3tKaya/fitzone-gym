"use client";

import { motion } from "framer-motion";

interface TransformationCardProps {
  name: string;
  duration: string;
  weightBefore: string;
  weightAfter: string;
  quote: string;
  index: number;
}

export default function TransformationCard({
  name,
  duration,
  weightBefore,
  weightAfter,
  quote,
  index,
}: TransformationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="bg-card rounded-sm overflow-hidden group hover:-translate-y-1 transition-all duration-300"
    >
      {/* Before / After Placeholder */}
      <div className="grid grid-cols-2 gap-0.5">
        <div className="relative aspect-[4/5] bg-card-light">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-white/10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div className="absolute bottom-2 left-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded-sm font-[family-name:var(--font-oswald)] tracking-wider">
            ÖNCE
          </div>
          <div className="absolute top-2 right-2 bg-white/10 text-white text-xs font-bold px-2 py-1 rounded-sm font-[family-name:var(--font-oswald)]">
            {weightBefore}
          </div>
        </div>
        <div className="relative aspect-[4/5] bg-card-light">
          <div className="absolute inset-0 flex items-center justify-center bg-orange/5">
            <svg className="w-12 h-12 text-orange/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div className="absolute bottom-2 left-2 bg-orange text-black text-xs font-bold px-2 py-1 rounded-sm font-[family-name:var(--font-oswald)] tracking-wider">
            SONRA
          </div>
          <div className="absolute top-2 right-2 bg-orange/20 text-orange text-xs font-bold px-2 py-1 rounded-sm font-[family-name:var(--font-oswald)]">
            {weightAfter}
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between gap-2 mb-3">
          <h4 className="font-[family-name:var(--font-oswald)] text-base sm:text-lg font-bold tracking-wider truncate">
            {name}
          </h4>
          <span className="text-orange text-xs font-semibold font-[family-name:var(--font-oswald)] tracking-wider shrink-0">
            {duration}
          </span>
        </div>
        <p className="text-muted text-sm leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
      </div>
    </motion.div>
  );
}
