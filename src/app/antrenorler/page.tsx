"use client";

import SectionHeading from "@/components/SectionHeading";
import TrainerCard from "@/components/TrainerCard";
import { trainers } from "@/data/site-data";

export default function AntrenorlerPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-black diagonal-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            accent="UZMAN KADRO"
            title="ANTRENÖRLER"
            subtitle="Alanında uzman, sertifikalı antrenörlerimizle tanışın. Her biri sizin hedefinize ulaşmanız için burada."
          />
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer, i) => (
              <TrainerCard key={trainer.name} {...trainer} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
