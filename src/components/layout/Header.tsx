"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Exports", href: "/exports" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo / Brand Mark */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            {/* Geometric wheat SVG logo */}
            <svg
              className="h-6 w-6 text-brand-olive group-hover:rotate-6 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20M12 5a3 3 0 0 1 3-3M12 9a3 3 0 0 1 3-3M12 13a3 3 0 0 1 3-3M12 17a3 3 0 0 1 3-3" />
              <path d="M12 5a3 3 0 0 0-3-3M12 9a3 3 0 0 0-3-3M12 13a3 3 0 0 0-3-3M12 17a3 3 0 0 0-3-3" />
            </svg>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-brand-charcoal">
                VARADA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gray-medium font-semibold -mt-1">
                Agribusiness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 focus:outline-none ${
                    isActive
                      ? "text-brand-charcoal font-semibold"
                      : "text-brand-gray-medium hover:text-brand-charcoal"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-olive"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 text-xs font-semibold uppercase tracking-wider text-brand-cream bg-brand-charcoal hover:bg-brand-olive transition-colors duration-300 focus:outline-none"
            >
              Enquire Now
            </Link>
          </nav>

          {/* Mobile Hamburger Trigger */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-charcoal hover:text-brand-olive focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-brand-cream border-b border-brand-gray-light"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 sm:px-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-base font-medium border-b border-brand-gray-light/40 transition-colors ${
                      isActive ? "text-brand-charcoal font-semibold" : "text-brand-gray-medium hover:text-brand-charcoal"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold uppercase tracking-wider text-brand-cream bg-brand-charcoal hover:bg-brand-olive transition-colors duration-300"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
