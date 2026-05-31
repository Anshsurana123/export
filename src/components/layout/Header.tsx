"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Exports", href: "/exports" },
  { name: "Contact", href: "/contact" },
];

const languages = [
  { code: "en", name: "EN", label: "English" },
  { code: "ar", name: "AR", label: "العربية" },
  { code: "vi", name: "VI", label: "Tiếng Việt" },
  { code: "es", name: "ES", label: "Español" },
  { code: "hi", name: "HI", label: "हिन्दी" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState("en");
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Parse active googtrans cookie on client mount
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };
    const transCookie = getCookie("googtrans");
    if (transCookie) {
      const code = transCookie.split("/").pop();
      if (code && languages.some(l => l.code === code)) {
        setCurrentLang(code);
      }
    }
  }, []);

  const handleLangChange = (langCode: string) => {
    if (langCode === "en") {
      // Clear google trans cookies to revert to native English
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
    } else {
      // Set the translation path cookies
      document.cookie = "googtrans=/en/" + langCode + "; path=/;";
      document.cookie = "googtrans=/en/" + langCode + "; path=/; domain=" + window.location.hostname;
    }
    // Perform a robust, instantaneous reload to trigger Google Translate element bindings
    window.location.reload();
  };

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

            {/* Custom B2B Minimalist Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
                type="button"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gray-medium hover:text-brand-charcoal py-2 focus:outline-none select-none"
                aria-haspopup="true"
                aria-expanded={isLangOpen}
              >
                <svg
                  className="h-4 w-4 text-brand-gray-medium"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>{languages.find((l) => l.code === currentLang)?.name}</span>
                <svg
                  className={`h-3 w-3 transform transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-32 bg-brand-cream border border-brand-gray-light py-2 shadow-sm z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onMouseDown={() => handleLangChange(lang.code)}
                        type="button"
                        className={`w-full text-left px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none ${
                          currentLang === lang.code
                            ? "bg-brand-sand text-brand-charcoal"
                            : "text-brand-gray-medium hover:bg-brand-sand/50 hover:text-brand-charcoal"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
            <div className="px-4 pt-2 pb-6 space-y-4 sm:px-6">
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

              {/* Mobile Translation selector */}
              <div className="pt-2 border-b border-brand-gray-light/40 pb-4 space-y-2.5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gray-medium font-bold block px-1">
                  Select Language
                </span>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => {
                    const isActive = currentLang === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLangChange(lang.code);
                          setIsOpen(false);
                        }}
                        type="button"
                        className={`px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest border transition-colors ${
                          isActive
                            ? "bg-brand-charcoal border-brand-charcoal text-brand-cream"
                            : "border-brand-gray-light text-brand-gray-medium bg-transparent hover:border-brand-charcoal hover:text-brand-charcoal"
                        }`}
                      >
                        {lang.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
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
