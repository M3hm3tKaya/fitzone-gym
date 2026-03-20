"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";

interface Feature {
  text: string;
  included: boolean;
}

interface MembershipCardProps {
  name: string;
  price: number;
  period: string;
  popular: boolean;
  features: Feature[];
  index: number;
}

export default function MembershipCard({
  name,
  price,
  period,
  popular,
  features,
  index,
}: MembershipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className={clsx(
        "relative bg-card rounded-sm p-5 sm:p-6 md:p-8 border transition-all duration-300",
        popular
          ? "border-orange sm:scale-105 shadow-2xl shadow-orange/10"
          : "border-white/5 hover:border-white/10"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-black text-xs font-bold px-4 py-1.5 rounded-sm font-[family-name:var(--font-oswald)] tracking-[0.15em]">
          EN POPÜLER
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold tracking-wider mb-4">
          {name}
        </h3>
        <div className="flex items-end justify-center gap-1">
          <span className="font-[family-name:var(--font-oswald)] text-4xl sm:text-5xl font-bold text-orange">
            {price}
          </span>
          <span className="text-muted text-lg mb-1">TL {period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature.text} className="flex items-center gap-3">
            {feature.included ? (
              <svg className="w-5 h-5 text-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white/20 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span
              className={clsx(
                "text-sm",
                feature.included ? "text-white" : "text-white/30"
              )}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/iletisim"
        className={clsx(
          "block text-center font-[family-name:var(--font-oswald)] text-sm font-bold tracking-wider py-3.5 min-h-[44px] rounded-sm transition-all duration-300",
          popular
            ? "bg-orange text-black hover:bg-orange-dark"
            : "bg-white/5 text-white hover:bg-orange hover:text-black"
        )}
      >
        ÜYE OL
      </Link>
    </motion.div>
  );
}
