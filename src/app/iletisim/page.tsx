"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/site-data";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-black diagonal-lines">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            accent="BİZE ULAŞIN"
            title="İLETİŞİM"
            subtitle="Sorularınız, üyelik başvurunuz veya ücretsiz deneme için bize ulaşın."
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold tracking-wider uppercase mb-8">
                MESAJ GÖNDERIN
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted mb-2">Adınız Soyadınız</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-orange transition-colors duration-300 placeholder:text-white/20"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-2">E-posta</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-orange transition-colors duration-300 placeholder:text-white/20"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-card border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-orange transition-colors duration-300 placeholder:text-white/20"
                      placeholder="0532 000 00 00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-2">Konu</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-orange transition-colors duration-300 appearance-none"
                    >
                      <option value="" className="bg-card">Konu Seçin</option>
                      <option value="deneme" className="bg-card">Ücretsiz Deneme</option>
                      <option value="uyelik" className="bg-card">Üyelik Bilgisi</option>
                      <option value="antrenor" className="bg-card">Kişisel Antrenman</option>
                      <option value="genel" className="bg-card">Genel Bilgi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted mb-2">Mesajınız</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-card border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-orange transition-colors duration-300 placeholder:text-white/20 resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-[family-name:var(--font-oswald)] text-base font-bold tracking-wider bg-orange text-black py-4 rounded-sm hover:bg-orange-dark transition-colors duration-300"
                >
                  GÖNDER
                </button>
              </form>
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-bold tracking-wider uppercase mb-8">
                  İLETİŞİM BİLGİLERİ
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-sm flex items-center justify-center text-orange shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-oswald)] text-sm font-bold tracking-wider text-orange mb-1">
                        ADRES
                      </h4>
                      <p className="text-muted text-sm">{siteConfig.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-sm flex items-center justify-center text-orange shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-oswald)] text-sm font-bold tracking-wider text-orange mb-1">
                        TELEFON
                      </h4>
                      <p className="text-muted text-sm">{siteConfig.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-sm flex items-center justify-center text-orange shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-oswald)] text-sm font-bold tracking-wider text-orange mb-1">
                        E-POSTA
                      </h4>
                      <p className="text-muted text-sm">{siteConfig.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-sm flex items-center justify-center text-orange shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-oswald)] text-sm font-bold tracking-wider text-orange mb-1">
                        ÇALIŞMA SAATLERİ
                      </h4>
                      <p className="text-muted text-sm">Hafta içi: 06:00 - 23:00</p>
                      <p className="text-muted text-sm">Hafta sonu: 08:00 - 22:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card-light rounded-sm overflow-hidden aspect-[4/3] relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-orange/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-[family-name:var(--font-oswald)] text-sm tracking-wider text-muted uppercase">
                    HARİTA ALANI
                  </p>
                  <p className="text-white/30 text-xs mt-2">Kadıköy, İstanbul</p>
                </div>
                {/* Decorative grid lines */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
