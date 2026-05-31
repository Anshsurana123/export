"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatWeSupply() {
  const categories = [
    {
      name: "Yellow & White Maize",
      description: "Premium feed-grade and food-grade maize sourced from Maharashtra and Karnataka, processed to global starch and feed standards.",
      href: "/products?category=maize",
      tag: "Maize"
    },
    {
      name: "Basmati & Non-Basmati Rice",
      description: "Aromatic parboiled long-grains and consistent milling-grade white rice processed at state-of-the-art Sortex facilities.",
      href: "/products?category=rice",
      tag: "Rice"
    },
    {
      name: "Pulses & Grains",
      description: "Cleaned and sorted Chickpeas (Chana Dal), Pigeon Peas (Toor Dal), Soybean, and wheat grains sourced for global food manufacturing.",
      href: "/products?category=pulses_grains",
      tag: "Grains & Pulses"
    }
  ];

  return (
    <section className="bg-brand-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-left mb-16 md:mb-20 space-y-4">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-bronze">
            Commodity Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight">
            What we supply
          </h2>
          <div className="w-12 h-[1px] bg-brand-olive mt-6" />
        </div>

        {/* Editorial Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group border border-brand-gray-light bg-transparent p-8 md:p-10 flex flex-col justify-between hover:border-brand-olive transition-colors duration-500 min-h-[300px] relative"
            >
              {/* Card corner detail */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-transparent group-hover:border-brand-bronze transition-colors duration-500" />
              
              <div className="space-y-6">
                <span className="text-[9px] uppercase tracking-widest text-brand-gray-medium font-semibold">
                  {cat.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal group-hover:text-brand-olive transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed font-light line-clamp-3">
                  {cat.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-gray-light/60 flex flex-col gap-3">
                <span className="text-[10px] text-brand-gray-medium font-medium tracking-wide uppercase">
                  Available for domestic & export supply
                </span>
                <Link
                  href={cat.href}
                  className="inline-flex items-center text-xs font-semibold text-brand-charcoal hover:text-brand-bronze uppercase tracking-wider transition-colors duration-200 w-fit focus:outline-none"
                >
                  Learn more
                  <svg
                    className="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
