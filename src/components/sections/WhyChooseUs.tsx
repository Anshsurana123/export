"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const trustPoints = [
    {
      title: "Direct Farming Clusters",
      description: "By sourcing directly from primary agricultural clusters in Maharashtra and MP, we eliminate unnecessary middlemen, ensuring fair farm-gate prices and complete trace-ability of all commodities."
    },
    {
      title: "Rigorous Grading & QC",
      description: "Our grains undergo multi-stage Sortex color sorting, moisture verification, and foreign body extraction to ensure compliance with stringent international food standards."
    },
    {
      title: "Logistical Reliability",
      description: "Our proximity to major dry ports in central India and JNPT port in Mumbai enables seamless shipping pipelines, reliable container stuffing, and consistent export delivery timelines."
    }
  ];

  return (
    <section className="bg-brand-sand py-20 md:py-28 border-y border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sourcing & Quality Standards Brief */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-bronze block">
              Our Core Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight leading-tight">
              Why buyers
              <br />
              choose us
            </h2>
            <div className="w-12 h-[1px] bg-brand-olive my-6" />
            <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed font-light">
              We manage supply chains with absolute precision, from crop aggregation at regional mandi centers to global shipment delivery. Importers and food manufacturers rely on our capabilities because we honor contracts, guarantee grain technical specifications, and ensure continuous availability.
            </p>
          </div>

          {/* Right Column: Stacked trust points with left border accents */}
          <div className="lg:col-span-7 space-y-8">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="pl-6 md:pl-8 border-l-2 border-brand-olive/40 hover:border-brand-olive transition-colors duration-300 py-2 space-y-2"
              >
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed font-light max-w-2xl">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
