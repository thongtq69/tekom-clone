import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";

const pillars = [
  {
    title: "Sustainable Sourcing",
    desc: "100% legal timber, 88% FSC® certified, partnerships with smallholder forest growers in Vietnam.",
  },
  {
    title: "Cleaner Operations",
    desc: "Solar rooftop on BD2 covers 22% of factory electricity. Targeting 50% renewable mix by 2030.",
  },
  {
    title: "People & Community",
    desc: "Safe working conditions, fair wages, and active investment in workforce education and local development.",
  },
];

const stats = [
  { value: "−23%", label: "Scope 1+2 emissions vs 2020 baseline" },
  { value: "88%", label: "FSC® certified raw material" },
  { value: "1,300+", label: "Direct employees" },
  { value: "30+", label: "Export markets" },
];

export default function SustainabilityPage() {
  return (
    <>
      <Hero
        eyebrow="Sustainability"
        title="Together, For The Long Run."
        description="Sustainability is not a side initiative at TEKCOM — it shapes how we source, produce, and partner. Our 2030 roadmap is built around three pillars."
        bgImage="/images/hero-sustainability.png"
        height="tall"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle eyebrow="Our Pillars" title="Three Areas of Focus" align="center" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={p.title} className="text-center">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center font-display font-bold text-2xl text-white"
                  style={{ background: "var(--color-gold)" }}
                >
                  0{i + 1}
                </div>
                <h3 className="font-display font-bold uppercase tracking-wider text-lg mb-3" style={{ color: "var(--color-navy)" }}>
                  {p.title}
                </h3>
                <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-white">
          <div className="text-center mb-12">
            <p className="heading-eyebrow mb-3">By The Numbers</p>
            <h2 className="font-display font-bold uppercase text-3xl md:text-4xl tracking-wide">
              Our Progress So Far
            </h2>
            <div className="h-[3px] w-12 mx-auto mt-3" style={{ background: "var(--color-gold)" }} />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 border border-white/10">
                <p className="font-display font-bold text-4xl md:text-5xl mb-2" style={{ color: "var(--color-gold)" }}>
                  {s.value}
                </p>
                <p className="text-white/70 text-xs uppercase tracking-[0.2em]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
