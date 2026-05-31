import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryForm from "@/components/sections/EnquiryForm";

export const metadata: Metadata = {
  title: "Commercial Trade Desk & Enquiries | Varada Agribusiness",
  description: "Contact our commercial trade desk in Pune, Maharashtra. Submit detailed agricultural commodity specifications, required packaging, and bulk shipping quantities.",
  openGraph: {
    title: "Commercial Trade Desk & Enquiries | Varada Agribusiness",
    description: "Submit a direct commercial enquiry for Yellow Maize, Basmati Rice, and wholesale pulses.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-6 mb-16 md:mb-20">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-bronze block">
            Commercial Desk
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-charcoal">
            Connect with trade
          </h1>
          <div className="w-12 h-[1px] bg-brand-olive mt-6" />
          <p className="text-sm sm:text-base text-brand-gray-medium leading-relaxed font-light">
            We respond promptly to structured bulk trade requests. Importers, trading houses, and food manufacturers can contact our trade desks directly or submit the enquiry form below.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office Contacts & Stylized Map */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-brand-charcoal">
                Pune Office
              </h2>
              <div className="w-8 h-[1px] bg-brand-olive" />
              
              <address className="not-italic space-y-4 text-xs sm:text-sm text-brand-gray-medium leading-relaxed">
                <div>
                  <strong className="text-brand-charcoal font-semibold block text-[10px] uppercase tracking-wider mb-1">
                    Registered Headquarters
                  </strong>
                  <span className="font-light">
                    Varada Agribusiness
                    <br />
                    Commercial District, Market Yard
                    <br />
                    Pune 411037, Maharashtra, India
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-gray-light/60">
                  <div>
                    <strong className="text-brand-charcoal font-semibold block text-[10px] uppercase tracking-wider mb-1">
                      Direct Trade Line
                    </strong>
                    <a href="tel:+912024260000" className="hover:text-brand-olive transition-colors font-light">
                      +91 (20) 2426-0000
                    </a>
                  </div>
                  <div>
                    <strong className="text-brand-charcoal font-semibold block text-[10px] uppercase tracking-wider mb-1">
                      Commercial Email
                    </strong>
                    <a href="mailto:trade@varada-agribusiness.com" className="hover:text-brand-olive transition-colors font-light">
                      trade@varada-agribusiness.com
                    </a>
                  </div>
                </div>
              </address>
            </div>

            {/* Stylized Google Maps Embed Grayscale Iframe */}
            <div className="border border-brand-gray-light bg-brand-sand p-2 relative h-72 sm:h-80 w-full overflow-hidden">
              <iframe
                title="Varada Agribusiness Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.567087640476!2d73.86877997592476!3d18.49876797588324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0406852bb05%3A0xc3c54d31d4d09228!2sMarket%20Yard%2C%20Pune%2C%20Maharashtra%20411037!5e0!3m2!1sen!2sin!4v1717145000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(1) contrast(1.1) invert(0.05)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Commercial Form wrapped in Next.js App Router Suspense */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="border border-brand-gray-light p-8 md:p-10 text-center text-xs text-brand-gray-medium font-light">
                  Loading enquiry parameters...
                </div>
              }
            >
              <EnquiryForm />
            </Suspense>
          </div>

        </div>
      </div>
    </div>
  );
}
