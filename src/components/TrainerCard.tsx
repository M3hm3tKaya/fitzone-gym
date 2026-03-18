"use client";

import { motion } from "framer-motion";

interface TrainerCardProps {
  name: string;
  specialty: string;
  experience: string;
  bio: string;
  index: number;
}

export default function TrainerCard({ name, specialty, experience, bio, index }: TrainerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-card rounded-sm overflow-hidden hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image placeholder */}
      <div className="relative aspect-[3/4] bg-card-light overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-20 h-20 text-white/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        {/* Experience badge */}
        <div className="absolute top-4 right-4 bg-orange text-black text-xs font-bold px-3 py-1 rounded-sm font-[family-name:var(--font-oswald)] tracking-wider">
          {experience}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold tracking-wider mb-1">
          {name}
        </h3>
        <span className="inline-block bg-orange/10 text-orange text-xs font-semibold px-3 py-1 rounded-sm font-[family-name:var(--font-oswald)] tracking-wider mb-3">
          {specialty.toUpperCase()}
        </span>
        <p className="text-muted text-sm leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
}
