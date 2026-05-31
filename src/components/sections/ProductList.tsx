"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/products";

interface ProductListProps {
  initialProducts: Product[];
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Set category filter based on query param if present
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("all");
    }
  }, [searchParams]);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "maize", name: "Maize" },
    { id: "rice", name: "Rice" },
    { id: "pulses_grains", name: "Grains & Pulses" },
  ];

  const filteredProducts = selectedCategory === "all"
    ? initialProducts
    : initialProducts.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Update URL query parameters silently
    if (category === "all") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products?category=${category}`, { scroll: false });
    }
  };

  return (
    <div className="space-y-12">
      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center gap-3 border-b border-brand-gray-light pb-6">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              type="button"
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none border ${
                isActive
                  ? "bg-brand-charcoal border-brand-charcoal text-brand-cream"
                  : "bg-transparent border-brand-gray-light text-brand-gray-medium hover:border-brand-charcoal hover:text-brand-charcoal"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="border border-brand-gray-light bg-brand-cream p-8 md:p-10 flex flex-col justify-between hover:border-brand-olive transition-colors duration-300"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-[9px] uppercase tracking-widest text-brand-bronze font-semibold">
                    {product.category === "maize" ? "Maize" : product.category === "rice" ? "Rice" : "Grains & Pulses"}
                  </span>
                  <span className="text-[10px] text-brand-gray-medium font-mono">
                    ID: {product.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
                  {product.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Technical Specifications */}
                <div className="pt-6 border-t border-brand-gray-light/60 space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-brand-gray-medium block">
                        Variety / botanical
                      </span>
                      <span className="text-brand-charcoal font-medium">
                        {product.variety}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-brand-gray-medium block">
                        Origin State
                      </span>
                      <span className="text-brand-charcoal font-medium">
                        {product.originState}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-brand-gray-light/20">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-brand-gray-medium block">
                        Available Grades
                      </span>
                      <span className="text-brand-charcoal font-medium">
                        {product.grades.join(", ")}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-brand-gray-medium block">
                        Moisture Spec
                      </span>
                      <span className="text-brand-charcoal font-medium">
                        {product.moistureSpec}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-brand-gray-light/20">
                    <span className="text-[10px] uppercase tracking-wider text-brand-gray-medium block">
                      Packaging Formats
                    </span>
                    <span className="text-xs text-brand-charcoal font-medium">
                      {product.packagingOptions.join(" / ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Request Quote Button linking to /contact?product=id */}
              <div className="mt-10 pt-6 border-t border-brand-gray-light/60">
                <Link
                  href={`/contact?product=${product.id}`}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-brand-cream bg-brand-charcoal hover:bg-brand-olive transition-colors duration-300 focus:outline-none"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
