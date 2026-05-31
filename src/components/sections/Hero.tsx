"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center justify-center bg-brand-cream overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative full-bleed background subtle grid/grain texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#eae7e2_1px,transparent_1px)] [background-size:24px_24px] opacity-60 select-none pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 py-12 md:py-20">
        {/* Left Side: Headline and CTAs */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-bronze block">
              APEDA Registered Bulk Exporter
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-charcoal text-balance leading-[1.1]">
              {"India's grains."}
              <br />
              <span className="text-brand-olive italic">{"The world's markets."}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-brand-gray-medium max-w-xl leading-relaxed"
          >
            We supply bulk agricultural commodities, including premium Yellow Maize, long-grain Basmati Rice, and wholesale pulses, directly from central Indian farming clusters to global importers and food manufacturers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider text-brand-cream bg-brand-charcoal hover:bg-brand-olive transition-colors duration-300 focus:outline-none"
            >
              Send an Enquiry
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider text-brand-charcoal border border-brand-gray-light hover:bg-brand-sand transition-colors duration-300 focus:outline-none"
            >
              View our products
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Geometric Wheat SVG Animation */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 border border-brand-gray-light/60 p-8 flex items-center justify-center bg-brand-cream/40 backdrop-blur-sm relative"
          >
            {/* Border frame details for editorial feel */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-brand-gray-medium" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-brand-gray-medium" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-brand-gray-medium" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-brand-gray-medium" />

            {/* Geometric wheat outline animation */}
            <svg
              className="w-48 h-48 sm:w-60 sm:h-60 text-brand-olive/90"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Central stem */}
              <motion.path
                d="M100 190 V30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Geometric grains Left and Right, climbing the stem */}
              {[
                { y: 155, rx: 10, ry: 6, rot: -30, offset: 40 },
                { y: 140, rx: 10, ry: 6, rot: 30, offset: 40 },
                { y: 125, rx: 10, ry: 6, rot: -30, offset: 50 },
                { y: 110, rx: 10, ry: 6, rot: 30, offset: 50 },
                { y: 95, rx: 10, ry: 6, rot: -30, offset: 60 },
                { y: 80, rx: 10, ry: 6, rot: 30, offset: 60 },
                { y: 65, rx: 10, ry: 6, rot: -30, offset: 70 },
                { y: 50, rx: 10, ry: 6, rot: 30, offset: 70 },
              ].map((grain, idx) => {
                const isLeft = grain.rot < 0;
                // Path representing a sleek modern wheat husk leaf/seed
                const pathStr = isLeft
                  ? `M100 ${grain.y} C 80 ${grain.y - 12}, 70 ${grain.y - 4}, 100 ${grain.y - 20}`
                  : `M100 ${grain.y} C 120 ${grain.y - 12}, 130 ${grain.y - 4}, 100 ${grain.y - 20}`;

                return (
                  <motion.path
                    key={idx}
                    d={pathStr}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.4 + idx * 0.1,
                      ease: "easeOut",
                    }}
                    // Subtly sway the grains
                    whileHover={{ scale: 1.05 }}
                  />
                );
              })}

              {/* Apex wheat beard tip */}
              <motion.path
                d="M100 30 L100 10 M100 30 L95 15 M100 30 L105 15"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.5 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
