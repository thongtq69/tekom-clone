import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const features = [
  { title: "Premium Materials", desc: "Solid wood, plywood box, soft-close hardware." },
  { title: "Rigorous QC", desc: "100% inspection before flat-pack." },
  { title: "Scalable Capacity", desc: "Up to 150 containers/month." },
  { title: "Custom Designs", desc: "Shaker, slab, raised-panel and contemporary." },
  { title: "Quick Lead Time", desc: "Sample 2 weeks · Production 45 days." },
  { title: "Reliable Logistics", desc: "FCL/LCL — door-to-door available." },
];

const styles = [
  { name: "Shaker White", color: "linear-gradient(135deg, #f5f3ee, #d9d4ca)" },
  { name: "Espresso", color: "linear-gradient(135deg, #3a2418, #1f130b)" },
  { name: "Natural Oak", color: "linear-gradient(135deg, #c8a274, #8a6238)" },
  { name: "Slate Grey", color: "linear-gradient(135deg, #5b6770, #2d3640)" },
];

export default function CabinetsPage() {
  return (
    <>
      <Hero
        eyebrow="TEKCOM — Your Trusted Partner"
        title="RTA Kitchen Cabinets"
        description="At TEKCOM, we specialize in manufacturing premium kitchen cabinets in Vietnam. We ensure exceptional craftsmanship and reliable delivery, meeting the high demands of cabinet manufacturing."
        bgImage="/images/hero-cabinets.jpg"
        height="tall"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle eyebrow="Why TEKCOM" title="Features That Set Us Apart" align="center" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="p-7 border border-[color:var(--color-line)] hover:border-[color:var(--color-gold)] transition-colors"
              >
                <div
                  className="font-display text-2xl font-bold mb-3"
                  style={{ color: "var(--color-gold)" }}
                >
                  {String(i + 1).padStart(2, "0")}.
                </div>
                <h3
                  className="font-display font-bold uppercase tracking-wider text-base mb-2"
                  style={{ color: "var(--color-navy)" }}
                >
                  {f.title}
                </h3>
                <p className="text-[14px] text-[color:var(--color-muted)] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "#f7f8fa" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle eyebrow="Finishes" title="Choose Your Style" align="center" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {styles.map((s) => (
              <div key={s.name} className="group cursor-pointer">
                <div
                  className="aspect-square mb-3 transition-transform group-hover:scale-[1.02]"
                  style={{ background: s.color }}
                />
                <p
                  className="font-display font-bold uppercase tracking-wider text-sm text-center"
                  style={{ color: "var(--color-navy)" }}
                >
                  {s.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <Link
            href="https://tekcom.vn/uploads/files/general/tk-mkt-brochure-cabinet-240820-compressed.pdf"
            className="btn-gold"
          >
            Download Brochure (PDF) →
          </Link>
        </div>
      </section>
    </>
  );
}
