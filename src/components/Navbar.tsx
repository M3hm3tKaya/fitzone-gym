"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { navLinks } from "@/data/site-data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-orange flex items-center justify-center rounded-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
                <rect x="2" y="9" width="4" height="6" rx="1" fill="currentColor" />
                <rect x="18" y="9" width="4" height="6" rx="1" fill="currentColor" />
                <rect x="7" y="7" width="10" height="10" rx="1" fill="currentColor" />
                <rect x="5" y="10" width="14" height="4" rx="0.5" fill="currentColor" />
              </svg>
            </div>
            <span className="font-[family-name:var(--font-oswald)] text-2xl font-bold tracking-wider">
              FIT<span className="text-orange">ZONE</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "font-[family-name:var(--font-oswald)] text-sm font-medium tracking-wider px-4 py-2 rounded-sm transition-all duration-300",
                  pathname === link.href
                    ? "text-orange bg-orange/10"
                    : "text-white/70 hover:text-orange hover:bg-orange/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <Link
            href="/iletisim"
            className="hidden lg:flex font-[family-name:var(--font-oswald)] text-sm font-bold tracking-wider bg-orange text-black px-6 py-2.5 rounded-sm hover:bg-orange-dark transition-colors duration-300"
          >
            ÜCRETSİZ DENEME
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-1.5"
            aria-label="Menü"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/98 border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={clsx(
                    "block font-[family-name:var(--font-oswald)] text-lg font-medium tracking-wider px-4 py-3 min-h-[44px] rounded-sm transition-all duration-300",
                    pathname === link.href
                      ? "text-orange bg-orange/10"
                      : "text-white/70 hover:text-orange"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/iletisim"
                onClick={() => setMobileOpen(false)}
                className="block text-center font-[family-name:var(--font-oswald)] text-lg font-bold tracking-wider bg-orange text-black px-6 py-3 min-h-[44px] rounded-sm mt-4"
              >
                ÜCRETSİZ DENEME
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
