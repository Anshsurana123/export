import type { Metadata } from "next";
import { Suspense } from "react";
import { products } from "@/lib/products";
import ProductList from "@/components/sections/ProductList";

export const metadata: Metadata = {
  title: "Product Specifications & Wholesale Catalogue | Varada Agribusiness",
  description: "Explore our export-grade grains and pulses catalogue. Full parameters, packaging options, origin states, and moisture grades for Maize, Basmati Rice, split peas, and soybean.",
  openGraph: {
    title: "Product Specifications & Wholesale Catalogue | Varada Agribusiness",
    description: "Export-grade grains and pulses technical parameters, packaging sizes, and grades.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Editorial Page Header */}
        <div className="max-w-3xl space-y-6 mb-16 md:mb-20">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-bronze block">
            Wholesale Catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-charcoal">
            Specifications & grades
          </h1>
          <div className="w-12 h-[1px] bg-brand-olive mt-6" />
          <p className="text-sm sm:text-base text-brand-gray-medium leading-relaxed font-light">
            We provide exact physical specifications, moisture levels, and grading standards for all agricultural shipments. Importers can filter by category below and request standard-sized samples or specific contract pricing details.
          </p>
        </div>

        {/* Mounted Filterable Client Grid wrapped in Suspense */}
        <Suspense
          fallback={
            <div className="border border-brand-gray-light p-8 md:p-10 text-center text-xs text-brand-gray-medium font-light">
              Loading commodities catalogue...
            </div>
          }
        >
          <ProductList initialProducts={products} />
        </Suspense>
        
      </div>
    </div>
  );
}

