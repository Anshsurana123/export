"use client";

import { motion } from "framer-motion";

export default function ExportMarkets() {
  const regions = [
    {
      title: "Middle East & Gulf",
      countries: "UAE, Saudi Arabia, Oman, Kuwait",
      description: "Heavily supplying premium aromatic 1121 Basmati Rice, milling-grade wheat, and split lentils. Offering swift shipping transits to Jebel Ali and Dammam ports."
    },
    {
      title: "Southeast Asia",
      countries: "Vietnam, Indonesia, Malaysia, Philippines",
      description: "Key supplier of Yellow Maize for industrial starch and feed production, alongside premium non-Basmati long grain white rice (IR 64 variety)."
    },
    {
      title: "East & West Africa",
      countries: "Kenya, Tanzania, Djibouti, Senegal",
      description: "Providing high-volume bulk shipments of Swarna white rice, broken rice for brewing, and high-protein split chickpeas for retail packaging."
    }
  ];

  return (
    <section className="bg-brand-cream py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-left mb-16 md:mb-20 space-y-4">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-bronze">
            Global Supply Chain
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight">
            Export markets
          </h2>
          <div className="w-12 h-[1px] bg-brand-olive mt-6" />
        </div>

        {/* Simplified Flat World Map SVG */}
        <div className="border border-brand-gray-light bg-brand-sand/30 p-4 sm:p-8 lg:p-12 mb-16 relative">
          {/* Framed corners detail */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brand-gray-medium/50" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-brand-gray-medium/50" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-brand-gray-medium/50" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brand-gray-medium/50" />

          <div className="w-full flex justify-center items-center">
            {/* Highly styled abstract vector world map displaying only necessary elements: 
                Africa, Europe, Middle East, India, Asia. */}
            <svg
              className="w-full max-w-4xl h-auto text-brand-gray-medium/20"
              viewBox="0 0 1000 450"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Grid Lines for technical editorial feel */}
              <line x1="100" y1="0" x2="100" y2="450" strokeDasharray="4 8" strokeWidth="0.5" />
              <line x1="300" y1="0" x2="300" y2="450" strokeDasharray="4 8" strokeWidth="0.5" />
              <line x1="500" y1="0" x2="500" y2="450" strokeDasharray="4 8" strokeWidth="0.5" />
              <line x1="700" y1="0" x2="700" y2="450" strokeDasharray="4 8" strokeWidth="0.5" />
              <line x1="900" y1="0" x2="900" y2="450" strokeDasharray="4 8" strokeWidth="0.5" />
              
              <line x1="0" y1="100" x2="1000" y2="100" strokeDasharray="4 8" strokeWidth="0.5" />
              <line x1="0" y1="225" x2="1000" y2="225" strokeDasharray="4 8" strokeWidth="0.5" />
              <line x1="0" y1="350" x2="1000" y2="350" strokeDasharray="4 8" strokeWidth="0.5" />

              {/* Simplified Abstract Continent Outlines */}
              {/* Africa */}
              <path
                d="M320 180 C320 220, 310 260, 320 290 C330 310, 350 340, 370 370 C380 390, 390 410, 395 420 C396 422, 398 422, 398 420 C405 380, 420 340, 440 310 C465 270, 475 240, 470 200 C468 180, 430 170, 410 175 C370 185, 340 180, 320 180 Z"
                fill="#f3f1ed"
                stroke="#eae7e2"
              />
              
              {/* Europe & Middle East & Central Asia */}
              <path
                d="M320 150 C340 140, 380 140, 410 130 C430 120, 440 90, 460 70 C490 70, 520 60, 560 60 C610 60, 680 80, 710 90 C730 100, 780 90, 810 110 C830 120, 840 150, 860 170 L890 200 C920 220, 940 230, 950 250 L930 270 L910 260 C870 260, 850 280, 840 300 C810 320, 780 330, 750 330 C720 330, 700 300, 680 280 C650 280, 630 260, 620 240 C590 240, 570 230, 540 230 C510 230, 490 220, 475 200 C450 190, 420 200, 400 200 C370 200, 340 190, 330 180 Z"
                fill="#f3f1ed"
                stroke="#eae7e2"
              />

              {/* India Peninsula (Magnified slightly for supply context) */}
              <path
                d="M510 200 L540 230 L555 270 L570 285 L575 290 L585 270 L600 240 L605 220 Z"
                fill="#f3f1ed"
                stroke="#eae7e2"
                strokeWidth="2"
              />

              {/* Southeast Asia Archipelago & Australia Abstract */}
              <path
                d="M720 300 C730 300, 760 320, 780 320 C810 320, 840 300, 860 310 C870 320, 870 340, 890 350"
                stroke="#eae7e2"
                strokeWidth="1.5"
              />

              {/* India Port Anchor Dot (Source of supplies) */}
              <circle cx="570" cy="280" r="5" fill="#a48e73" className="animate-pulse" />
              <text x="560" y="265" fill="#1c1d1b" fontSize="10" fontWeight="bold" fontFamily="monospace" letterSpacing="1">
                INDIA (JNPT)
              </text>

              {/* SHIPPING LINES (Dotted custom curves emerging from India) */}
              {/* To Middle East (Dubai) */}
              <motion.path
                d="M570 280 Q 510 260, 460 225"
                stroke="#3e443a"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <circle cx="460" cy="225" r="4" fill="#3e443a" />
              <text x="400" y="215" fill="#3e443a" fontSize="9" fontWeight="bold" letterSpacing="0.5">
                MIDDLE EAST
              </text>

              {/* To Southeast Asia (Singapore/Jakarta) */}
              <motion.path
                d="M570 280 Q 670 310, 740 325"
                stroke="#3e443a"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              <circle cx="740" cy="325" r="4" fill="#3e443a" />
              <text x="735" y="342" fill="#3e443a" fontSize="9" fontWeight="bold" letterSpacing="0.5">
                SOUTHEAST ASIA
              </text>

              {/* To East Africa (Mombasa) */}
              <motion.path
                d="M570 280 Q 490 320, 440 330"
                stroke="#3e443a"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.9 }}
              />
              <circle cx="440" cy="330" r="4" fill="#3e443a" />
              <text x="375" y="345" fill="#3e443a" fontSize="9" fontWeight="bold" letterSpacing="0.5">
                EAST AFRICA
              </text>
            </svg>
          </div>
        </div>

        {/* Region Descriptions side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-8 border-t border-brand-gray-light/60">
          {regions.map((region, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="space-y-4"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest text-brand-bronze font-semibold">
                  {region.countries}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-charcoal">
                  {region.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed font-light">
                {region.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
