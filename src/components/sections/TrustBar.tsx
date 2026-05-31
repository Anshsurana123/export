"use client";

import { motion } from "framer-motion";

export default function TrustBar() {
  const stats = [
    { value: "15+", label: "years in business" },
    { value: "50,000+ MT", label: "supplied annually" },
    { value: "12+", label: "countries served" },
    { value: "APEDA", label: "registered exporter" },
  ];

  return (
    <section className="bg-brand-sand border-y border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-brand-gray-light/60">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-4 first:border-t-0"
            >
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray-medium mt-3">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
