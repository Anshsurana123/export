import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Varada Agribusiness | Sourcing & Quality Standards",
  description: "Established in Pune, Maharashtra, Varada Agribusiness aggregates and exports bulk grains, pulses, and maize with complete quality control and supply chain compliance.",
  openGraph: {
    title: "About Varada Agribusiness | Sourcing & Quality Standards",
    description: "Aggregating and exporting bulk agricultural commodities directly from Indian farming clusters to global markets.",
    url: "/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      number: "01",
      title: "Quality Assurance",
      description: "We enforce strict grain testing standards, monitoring moisture content, grain uniformity, and Sortex cleanliness at every step of processing."
    },
    {
      number: "02",
      title: "Reliable Supply Chain",
      description: "Our strong relationships with regional farmers and container logistics operators ensure that we consistently meet shipping schedules."
    },
    {
      number: "03",
      title: "Global Compliance",
      description: "We maintain active registration with APEDA and comply with international phytosanitary, packaging, and custom regulations."
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Editorial Header & Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-brand-gray-light/60">
        <div className="max-w-3xl space-y-8">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-bronze">
            Corporate Profile
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-brand-charcoal">
            The foundation of our bulk trade
          </h1>
          <div className="w-12 h-[1px] bg-brand-olive mt-6" />
          
          <div className="space-y-6 text-sm sm:text-base text-brand-gray-medium leading-relaxed font-light">
            <p>
              Varada Agribusiness is an agricultural wholesaler and exporter headquartered in Pune, Maharashtra. We aggregate bulk agricultural commodities directly from farming clusters across Maharashtra, Madhya Pradesh, and Karnataka. By streamlining the collection process at regional mandis and managing dry-bulk container logistics, we provide domestic distributors and international importers with continuous access to high-quality grains, maize, and pulses.
            </p>
            <p>
              Our operations focus on maintaining contract specifications, grading accuracy, and transaction transparency. Rather than operating as simple commercial brokers, we actively manage grain storage, quality verification, and port delivery. This hands-on infrastructure allows us to mitigate supply chain risks and consistently deliver wholesale shipments on schedule and within parameters.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-bronze block">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal tracking-tight">
              Operational Standards
            </h2>
            <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed font-light">
              We govern our agricultural trade with standard operating procedures that safeguard quality, security, and global delivery schedules.
            </p>
          </div>

          {/* Right Column: Large Numbered Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="border border-brand-gray-light p-8 flex flex-col justify-between hover:border-brand-olive transition-colors duration-300 min-h-[260px] bg-brand-sand/10"
              >
                <span className="font-serif text-4xl sm:text-5xl font-light text-brand-bronze block mb-6">
                  {val.number}
                </span>
                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-bold text-brand-charcoal">
                    {val.title}
                  </h3>
                  <p className="text-xs text-brand-gray-medium leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
