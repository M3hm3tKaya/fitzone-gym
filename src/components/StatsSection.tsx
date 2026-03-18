"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site-data";

export default function StatsSection() {
  return (
    <section className="py-20 bg-orange relative overflow-hidden">
      {/* Diagonal pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-[family-name:var(--font-oswald)] text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                {stat.value}
              </div>
              <div className="font-[family-name:var(--font-oswald)] text-sm md:text-base font-semibold tracking-[0.2em] text-black/60 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
