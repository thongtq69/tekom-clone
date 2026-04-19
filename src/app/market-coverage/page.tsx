import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";

const regions = [
  { name: "Asia Pacific", countries: "Vietnam, Japan, South Korea, Singapore, Australia, New Zealand" },
  { name: "North America", countries: "United States, Canada" },
  { name: "Europe", countries: "Germany, France, UK, Netherlands, Belgium" },
  { name: "Middle East", countries: "UAE, Saudi Arabia, Qatar" },
];

export default function MarketCoveragePage() {
  return (
    <>
      <Hero
        eyebrow="Market Coverage"
        title="Trusted in 30+ Countries."
        description="From Vietnamese contractors to global furniture brands, TEKCOM serves a diverse customer base on every continent."
        bgImage="/images/sustainability-2.jpg"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle eyebrow="Where We Operate" title="Global Reach, Local Service" align="center" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {regions.map((r) => (
              <div
                key={r.name}
                className="p-7 border border-[color:var(--color-line)] hover:border-[color:var(--color-gold)] transition-colors"
              >
                <h3 className="font-display font-bold uppercase tracking-wider text-lg mb-3" style={{ color: "var(--color-navy)" }}>
                  {r.name}
                </h3>
                <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                  {r.countries}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
