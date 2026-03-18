"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import SectionHeading from "@/components/SectionHeading";
import { schedule, weekDays } from "@/data/site-data";
import type { ScheduleClass } from "@/data/site-data";

const typeColors: Record<ScheduleClass["type"], { bg: string; text: string; label: string }> = {
  yoga: { bg: "bg-yoga/20", text: "text-yoga", label: "YOGA" },
  hiit: { bg: "bg-hiit/20", text: "text-hiit", label: "HIIT" },
  spinning: { bg: "bg-spinning/20", text: "text-spinning", label: "SPİNNİNG" },
  pilates: { bg: "bg-pilates/20", text: "text-pilates", label: "PİLATES" },
  guc: { bg: "bg-guc/20", text: "text-guc", label: "GÜÇ" },
};

function ClassCell({ cls }: { cls: ScheduleClass }) {
  const color = typeColors[cls.type];
  return (
    <div
      className={clsx(
        "rounded-sm p-3 border-l-2 transition-all duration-300 hover:-translate-y-0.5",
        color.bg,
        cls.type === "yoga" && "border-yoga",
        cls.type === "hiit" && "border-hiit",
        cls.type === "spinning" && "border-spinning",
        cls.type === "pilates" && "border-pilates",
        cls.type === "guc" && "border-guc"
      )}
    >
      <div className={clsx("font-[family-name:var(--font-oswald)] text-sm font-bold tracking-wider", color.text)}>
        {cls.name}
      </div>
      <div className="text-white/60 text-xs mt-1">{cls.trainer}</div>
      <div className="flex items-center gap-2 mt-2 text-white/40 text-xs">
        <span>{cls.time}</span>
        <span>|</span>
        <span>{cls.duration}</span>
      </div>
    </div>
  );
}

export default function ProgramPage() {
  const [selectedDay, setSelectedDay] = useState(weekDays[0]);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-black diagonal-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            accent="HAFTALIK TAKVİM"
            title="DERS PROGRAMI"
            subtitle="Haftanın her günü farklı derslerle enerjini yüksel. Renk kodlarıyla kolayca takip et."
          />
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(typeColors).map(([key, val]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className={clsx(
                    "w-3 h-3 rounded-full",
                    key === "yoga" && "bg-yoga",
                    key === "hiit" && "bg-hiit",
                    key === "spinning" && "bg-spinning",
                    key === "pilates" && "bg-pilates",
                    key === "guc" && "bg-guc"
                  )}
                />
                <span className="font-[family-name:var(--font-oswald)] text-xs tracking-wider text-muted">
                  {val.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop: Full Week Grid */}
      <section className="py-12 bg-black hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-7 gap-4">
            {weekDays.map((day) => (
              <div key={day}>
                <div className="text-center mb-4">
                  <span className="font-[family-name:var(--font-oswald)] text-sm font-bold tracking-wider text-orange">
                    {day}
                  </span>
                </div>
                <div className="space-y-3">
                  {schedule[day].map((cls, i) => (
                    <ClassCell key={`${day}-${i}`} cls={cls} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile: Day Selector + Vertical List */}
      <section className="py-12 bg-black lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Day Selector */}
          <div className="flex overflow-x-auto gap-2 pb-4 mb-6 scrollbar-none">
            {weekDays.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={clsx(
                  "shrink-0 font-[family-name:var(--font-oswald)] text-sm font-bold tracking-wider px-4 py-2 rounded-sm transition-all duration-300",
                  selectedDay === day
                    ? "bg-orange text-black"
                    : "bg-card text-muted hover:text-white"
                )}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Classes */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {schedule[selectedDay].map((cls, i) => (
                <ClassCell key={`mobile-${selectedDay}-${i}`} cls={cls} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
