import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";

const products = [
  {
    name: "Formwork Plywood",
    tagline: "Concrete formwork for high-rise construction",
    features: [
      "Phenolic film face for excellent release",
      "Up to 8+ reuse cycles",
      "Conforms with EN 13986 standard",
      "Multiple thicknesses: 12, 15, 17, 18, 21 mm",
    ],
    image: "/images/factory-bd1.jpg",
  },
  {
    name: "Furniture Plywood",
    tagline: "Premium-grade plywood for indoor furniture",
    features: [
      "E0/E1 low-formaldehyde glue options",
      "Smooth A-grade veneer surfaces",
      "BB/CC, CC/CC, BB/BB grading",
      "Custom thicknesses 4 mm – 25 mm",
    ],
    image: "/images/factory-bd2.jpeg",
  },
  {
    name: "Film Faced Plywood",
    tagline: "Versatile, durable, weather-resistant",
    features: [
      "Brown / black phenolic film",
      "Waterproof WBP glue",
      "Smooth or wire-mesh face options",
      "Edges sealed for protection",
    ],
    image: "/images/sustainability-3.jpg",
  },
];

export default function PlywoodPage() {
  return (
    <>
      <Hero
        eyebrow="Plywood"
        title="Engineered Wood, Built To Perform."
        description="From formwork in skyscrapers to elegant furniture pieces, our plywood products are trusted by architects, contractors and manufacturers across 30+ countries."
        bgImage="/images/factory-bd2.jpeg"
        height="tall"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle eyebrow="Product Range" title="Plywood Products" align="center" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <article
                key={p.name}
                className="group overflow-hidden border border-[color:var(--color-line)] hover:shadow-2xl transition-all"
              >
                <div
                  className="h-56 relative bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(13,34,56,0.1), rgba(13,34,56,0.75)), url('${p.image}')`,
                  }}
                >
                  <h3 className="absolute bottom-5 left-6 right-6 font-display font-bold uppercase tracking-wider text-white text-2xl">
                    {p.name}
                  </h3>
                </div>
                <div className="p-7">
                  <p
                    className="text-sm uppercase tracking-wider font-bold mb-4"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {p.tagline}
                  </p>
                  <ul className="space-y-3 text-[14px] text-[color:var(--color-muted)]">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span style={{ color: "var(--color-gold)" }}>▸</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "#f7f8fa" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle eyebrow="Quality Assurance" title="International Standards & Certifications" />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[color:var(--color-muted)]">
              <p>
                Every product leaving our factories is tested at every stage — from log
                selection to final inspection — to ensure consistent performance.
              </p>
              <p>
                We hold <strong>EN 13986</strong> (CE), <strong>TÜV Rheinland</strong>,
                <strong> CARB Phase II</strong>, <strong>FSC® Chain of Custody</strong> and
                meet the strict E0/E1 emission limits for indoor use.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["EN 13986", "TÜV Rheinland", "CARB P2", "FSC® CoC", "ISO 9001", "ISO 14001"].map(
              (cert) => (
                <div
                  key={cert}
                  className="aspect-square bg-white border border-[color:var(--color-line)] flex items-center justify-center font-display font-bold uppercase text-sm tracking-wider text-center px-4"
                  style={{ color: "var(--color-navy)" }}
                >
                  {cert}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
