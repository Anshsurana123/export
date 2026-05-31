import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Exports & Supply Pipeline | Varada Agribusiness",
  description: "Bulk agricultural exports from India. Certified APEDA exporter delivering Maize, Basmati Rice, and wholesale pulses across the Middle East, Southeast Asia, and Africa under FOB/CIF maritime terms.",
  openGraph: {
    title: "Global Exports & Supply Pipeline | Varada Agribusiness",
    description: "Export logistics, container shipping terms (FOB, CIF), minimum order quantities, and phytosanitary regulatory clearances.",
    url: "/exports",
  },
};

export default function ExportsPage() {
  const regions = [
    {
      title: "Middle East & Gulf",
      ports: "Jebel Ali (UAE), Dammam (KSA), Sohar (Oman)",
      moq: "50 MT (2x20ft Containers)",
      commodities: "Aromatic Basmati Rice, Toor Dal, Milling Wheat",
      incoterms: "FOB / CIF / CFR"
    },
    {
      title: "Southeast Asia",
      ports: "Ho Chi Minh (Vietnam), Jakarta (Indonesia), Manila (Philippines)",
      moq: "100 MT (4x20ft Containers)",
      commodities: "Yellow Feed Maize, IR 64 Non-Basmati Rice, Soybean",
      incoterms: "FOB / CIF"
    },
    {
      title: "East & West Africa",
      ports: "Mombasa (Kenya), Dar es Salaam (Tanzania), Dakar (Senegal)",
      moq: "100 MT (4x20ft Containers)",
      commodities: "Broken Rice (Swarna), Yellow Maize, Split Chickpeas (Chana)",
      incoterms: "CIF / CFR"
    }
  ];

  const complianceCertificates = [
    "APEDA Registered Exporter",
    "FSSAI Food Safety Certified",
    "Phytosanitary Clearance",
    "Certificate of Origin (Indian Chamber)",
    "AGMARK Quality Certified"
  ];

  const steps = [
    {
      num: "01",
      name: "Enquiry",
      desc: "Importer submits specific technical parameters, target volume, packing format, and destination port."
    },
    {
      num: "02",
      name: "Sample Approval",
      desc: "Representative Sortex samples are couriered globally for quality validation and lab-testing verification."
    },
    {
      num: "03",
      name: "Contract & Payment",
      desc: "Commercial contracts are signed under standard FOB/CIF terms. Settled via irrevocable Letter of Credit (LC) or TT."
    },
    {
      num: "04",
      name: "Shipment",
      desc: "Container stuffing and phytosanitary sealing at the warehouse, customs port exit, and vessel booking."
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen">
      
      {/* 1. Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-brand-gray-light/60">
        <div className="max-w-3xl space-y-6">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-bronze block">
            International Supply
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-charcoal">
            Bulk global exports
          </h1>
          <div className="w-12 h-[1px] bg-brand-olive mt-6" />
          <p className="text-sm sm:text-base text-brand-gray-medium leading-relaxed font-light">
            We supply bulk agricultural commodities to importers, traders, and food manufacturers globally. Our central logistics team handles all standard export protocols, from customs aggregation in central India to maritime container shipping at JNPT Port (Mumbai).
          </p>
        </div>
      </section>

      {/* 2. Our Export Markets Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-b border-brand-gray-light/60">
        <div className="space-y-16">
          <div className="space-y-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-gray-medium">
              Regional Capabilities
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-charcoal">
              Target destination parameters
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regions.map((region, idx) => (
              <div
                key={idx}
                className="border border-brand-gray-light bg-brand-sand/10 p-8 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-6">
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal">
                    {region.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-brand-olive" />
                  
                  {/* Detailed Specs for Importers */}
                  <dl className="space-y-4 text-xs">
                    <div>
                      <dt className="uppercase tracking-wider text-brand-gray-medium font-semibold text-[9px] mb-1">
                        Frequent Discharge Ports
                      </dt>
                      <dd className="text-brand-charcoal font-medium">
                        {region.ports}
                      </dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-wider text-brand-gray-medium font-semibold text-[9px] mb-1">
                        Offered shipping terms
                      </dt>
                      <dd className="text-brand-charcoal font-mono font-medium">
                        {region.incoterms}
                      </dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-wider text-brand-gray-medium font-semibold text-[9px] mb-1">
                        Minimum Order Quantity (MOQ)
                      </dt>
                      <dd className="text-brand-charcoal font-medium">
                        {region.moq}
                      </dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-wider text-brand-gray-medium font-semibold text-[9px] mb-1">
                        Primary Commodities Supplied
                      </dt>
                      <dd className="text-brand-charcoal font-medium">
                        {region.commodities}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Export Compliance Strip */}
      <section className="bg-brand-sand/50 border-b border-brand-gray-light/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-charcoal text-center md:text-left">
              Regulated Compliance & Clearances
            </span>
            {/* Horizontal badge list - clean, text-based, no fake logos */}
            <div className="flex flex-wrap justify-center gap-3">
              {complianceCertificates.map((cert, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-2 border border-brand-gray-light/80 text-[9px] font-bold uppercase tracking-widest text-brand-olive bg-brand-cream select-none"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works Pipeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 border-b border-brand-gray-light/60">
        <div className="space-y-16">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-bronze block">
              Supply Pipeline
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-charcoal">
              Our export process
            </h2>
          </div>

          {/* Stepper horizontal grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {/* Connecting line for larger screens */}
            <div className="hidden md:block absolute top-14 left-16 right-16 h-[1px] bg-brand-gray-light/80 z-0" />
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-4 group">
                <span className="w-10 h-10 flex items-center justify-center border border-brand-gray-light bg-brand-cream font-serif text-sm font-bold text-brand-bronze group-hover:border-brand-olive group-hover:text-brand-olive transition-colors duration-300">
                  {step.num}
                </span>
                <div className="space-y-2 max-w-xs md:max-w-none">
                  <h3 className="font-serif text-base font-bold text-brand-charcoal">
                    {step.name}
                  </h3>
                  <p className="text-xs text-brand-gray-medium leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Enquiry CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
        <h2 className="font-serif text-3xl font-bold text-brand-charcoal">
          Discuss international trade contracts
        </h2>
        <p className="text-xs sm:text-sm text-brand-gray-medium max-w-lg mx-auto leading-relaxed font-light">
          Contact our commercial desk directly with your product specifications, target discharge port, and trade payment parameters.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-xs font-semibold uppercase tracking-wider text-brand-cream bg-brand-charcoal hover:bg-brand-olive transition-colors duration-300"
          >
            Initiate Commercial Enquiry
          </Link>
        </div>
      </section>

    </div>
  );
}
