import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-cream border-t border-brand-gray-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <svg
                className="h-5 w-5 text-brand-bronze"
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
              <span className="font-serif text-lg font-bold tracking-tight">
                VARADA
              </span>
            </Link>
            <p className="text-xs text-brand-gray-medium leading-relaxed max-w-xs">
              Bulk agricultural commodity supplies for domestic distributors and global importers across the Middle East, Southeast Asia, and Africa.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider mb-6 text-brand-bronze">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Product Catalogue", href: "/products" },
                { name: "International Exports", href: "/exports" },
                { name: "Contact & Enquiry", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-brand-gray-medium hover:text-brand-cream transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Products */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider mb-6 text-brand-bronze">
              Our Products
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Yellow Maize", href: "/products?category=maize" },
                { name: "White Food Maize", href: "/products?category=maize" },
                { name: "Premium Basmati Rice", href: "/products?category=rice" },
                { name: "Non-Basmati Long Grain Rice", href: "/products?category=rice" },
                { name: "Grains & Split Pulses", href: "/products?category=pulses_grains" },
              ].map((prod) => (
                <li key={prod.name}>
                  <Link
                    href={prod.href}
                    className="text-xs text-brand-gray-medium hover:text-brand-cream transition-colors duration-200"
                  >
                    {prod.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider mb-6 text-brand-bronze">
              Contact Office
            </h3>
            <address className="not-italic space-y-3 text-xs text-brand-gray-medium leading-relaxed">
              <p>
                <strong className="text-brand-cream font-medium">Varada Agribusiness</strong>
                <br />
                Market Yard, Pune 411037
                <br />
                Maharashtra, India
              </p>
              <p className="space-y-1">
                <span>Phone: </span>
                <a href="tel:+912024260000" className="hover:text-brand-cream transition-colors">
                  +91 (20) 2426-0000
                </a>
                <br />
                <span>Email: </span>
                <a href="mailto:trade@varada-agribusiness.com" className="hover:text-brand-cream transition-colors">
                  trade@varada-agribusiness.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-gray-dark flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-wider text-brand-gray-medium uppercase text-center md:text-left">
            &copy; {currentYear} Varada Agribusiness. All Rights Reserved.
          </p>
          <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-brand-gray-dark text-[10px] uppercase tracking-widest text-brand-bronze bg-brand-gray-dark/20 font-semibold select-none">
            {/* Minimalist badge - text-based as requested */}
            <span>APEDA Registered Exporter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
