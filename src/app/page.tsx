"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatsSection from "@/components/StatsSection";
import TrainerCard from "@/components/TrainerCard";
import TransformationCard from "@/components/TransformationCard";
import { services, trainers, transformations } from "@/data/site-data";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden diagonal-lines">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/60 z-10" />

        {/* Right side diagonal image placeholder */}
        <div className="absolute right-0 top-0 w-1/2 h-full clip-diagonal bg-card-light hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-32 h-32 text-orange/10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block font-[family-name:var(--font-oswald)] text-orange text-sm font-semibold tracking-[0.3em] mb-4">
                KADIKÖY, İSTANBUL
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-[family-name:var(--font-oswald)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider leading-[0.9] mb-6"
            >
              LİMİTLERİNİ
              <br />
              <span className="text-orange">AŞ</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
            >
              Modern ekipmanlar, uzman antrenörler ve enerjik atmosfer ile
              hayalindeki forma kavuş.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] text-base font-bold tracking-wider bg-orange text-black px-8 py-4 rounded-full hover:bg-orange-dark transition-colors duration-300"
              >
                ÜCRETSİZ DENEME
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/uyelik"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] text-base font-bold tracking-wider border border-white/20 text-white px-8 py-4 rounded-full hover:border-orange hover:text-orange transition-all duration-300"
              >
                ÜYELİK PLANLARI
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-orange rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            accent="HİZMETLERİMİZ"
            title="NELER SUNUYORUZ"
            subtitle="Hedefiniz ne olursa olsun, size uygun programı bulacaksınız."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <StatsSection />

      {/* ===== TRAINERS PREVIEW ===== */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            accent="UZMAN KADRO"
            title="ANTRENÖRLER"
            subtitle="Alanında uzman antrenörlerimizle tanışın."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {trainers.slice(0, 3).map((trainer, i) => (
              <TrainerCard key={trainer.name} {...trainer} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/antrenorler"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] text-sm font-bold tracking-wider text-orange hover:text-white transition-colors duration-300"
            >
              TÜM ANTRENÖRLER
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MEMBERSHIP CTA ===== */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 diagonal-lines opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-[family-name:var(--font-oswald)] text-orange text-sm font-semibold tracking-[0.2em]">
              ÖZEL FIRSAT
            </span>
            <h2 className="font-[family-name:var(--font-oswald)] text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider uppercase mt-4 mb-6">
              İLK HAFTA{" "}
              <span className="text-orange">ÜCRETSİZ</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10">
              Hemen üye ol, ilk haftanı ücretsiz geçir. Tüm salon, dersler ve ekipmanlara sınırsız erişim.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] text-lg font-bold tracking-wider bg-orange text-black px-10 py-4 rounded-sm hover:bg-orange-dark transition-colors duration-300"
            >
              HEMEN BAŞLA
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== TRANSFORMATIONS ===== */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            accent="BAŞARI HİKAYELERİ"
            title="DÖNÜŞÜMLER"
            subtitle="Üyelerimizin ilham veren dönüşüm hikayeleri."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {transformations.map((t, i) => (
              <TransformationCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
