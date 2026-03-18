"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import MembershipCard from "@/components/MembershipCard";
import { memberships } from "@/data/site-data";

export default function UyelikPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-black diagonal-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            accent="ÜYELİK PLANLARI"
            title="SENİN İÇİN EN UYGUN PLAN"
            subtitle="İhtiyacına göre seç, hemen başla. Tüm planlarda ilk hafta ücretsiz."
          />
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {memberships.map((m, i) => (
              <MembershipCard key={m.name} {...m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            accent="KARŞILAŞTIR"
            title="PLAN DETAYLARI"
            subtitle="Tüm özellikleri karşılaştırarak en uygun planı seçin."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 font-[family-name:var(--font-oswald)] text-sm tracking-wider text-muted uppercase">
                    ÖZELLİK
                  </th>
                  {memberships.map((m) => (
                    <th
                      key={m.name}
                      className="text-center py-4 px-4 font-[family-name:var(--font-oswald)] text-lg tracking-wider"
                    >
                      <span className={m.popular ? "text-orange" : "text-white"}>
                        {m.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Aylık Ücret", values: ["499 TL", "799 TL", "1.299 TL"] },
                  { feature: "Salon Erişimi", values: ["check", "check", "check"] },
                  { feature: "Soyunma Odası", values: ["check", "check", "check"] },
                  { feature: "Duş & Sauna", values: ["check", "check", "check"] },
                  { feature: "Grup Dersleri", values: ["cross", "check", "check"] },
                  { feature: "Kişisel Antrenör", values: ["cross", "4x/ay", "Sınırsız"] },
                  { feature: "Beslenme Programı", values: ["cross", "check", "check"] },
                  { feature: "Misafir Hakkı", values: ["cross", "cross", "2x/ay"] },
                  { feature: "VIP Salon", values: ["cross", "cross", "check"] },
                  { feature: "7/24 Erişim", values: ["cross", "cross", "check"] },
                ].map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                  >
                    <td className="py-4 px-4 text-sm text-muted">{row.feature}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="text-center py-4 px-4">
                        {val === "check" ? (
                          <svg className="w-5 h-5 text-orange mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : val === "cross" ? (
                          <svg className="w-5 h-5 text-white/20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          <span className="text-sm text-white font-medium">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </>
  );
}
