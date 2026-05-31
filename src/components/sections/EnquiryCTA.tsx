"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EnquiryCTA() {
  return (
    <section className="bg-brand-charcoal text-brand-cream py-20 md:py-28 relative overflow-hidden">
      {/* Subtle abstract background layout lines for premium agency feel */}
      <div className="absolute inset-0 opacity-10 select-none pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-brand-cream" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-brand-cream" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-bronze block">
            Partner with Varada
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-cream text-balance leading-tight">
            Secure your commodity supply chain
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-xs sm:text-sm md:text-base text-brand-gray-medium max-w-xl mx-auto leading-relaxed font-light"
        >
          Establish a reliable supply line. Get in touch with our commercial trade desk to request technical specs, contract terms, shipping timelines, or sample approvals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-xs font-semibold uppercase tracking-wider text-brand-charcoal bg-brand-cream hover:bg-brand-bronze hover:text-brand-charcoal transition-colors duration-300 focus:outline-none"
          >
            Initiate Commercial Enquiry
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
