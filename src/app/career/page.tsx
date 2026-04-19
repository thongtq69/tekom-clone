import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";

const jobs = [
  { title: "Production Engineer", location: "Binh Duong 2 Factory", type: "Full-time" },
  { title: "Sales Executive — Export", location: "HCMC Office", type: "Full-time" },
  { title: "QC Supervisor — Plywood", location: "Binh Duong 1 Factory", type: "Full-time" },
  { title: "HR Business Partner", location: "HCMC Office", type: "Full-time" },
];

const benefits = [
  "Competitive salary with annual review",
  "13th-month salary + performance bonus",
  "Premium health insurance for employees & family",
  "Annual leave 14 – 18 days",
  "Continuous training & development",
  "Modern facilities and a friendly workplace",
];

export default function CareerPage() {
  return (
    <>
      <Hero
        eyebrow="Career"
        title="Build Your Career With Us"
        description="At TEKCOM, our people are the engine behind every product. Join a team that values excellence, collaboration, and constant renewal."
        bgImage="/images/hero-career.png"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle eyebrow="Why TEKCOM" title="Benefits & Culture" />
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ background: "var(--color-gold)" }} />
                  <span className="text-[15px] text-[color:var(--color-muted)]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Open Positions" title="We Are Hiring" />
            <div className="mt-6 space-y-3">
              {jobs.map((j) => (
                <div
                  key={j.title}
                  className="p-5 border border-[color:var(--color-line)] hover:border-[color:var(--color-gold)] transition-colors flex justify-between items-center gap-4"
                >
                  <div>
                    <h3 className="font-display font-bold uppercase tracking-wider text-sm mb-1" style={{ color: "var(--color-navy)" }}>
                      {j.title}
                    </h3>
                    <p className="text-xs text-[color:var(--color-muted)]">
                      {j.location} · {j.type}
                    </p>
                  </div>
                  <button className="text-xs uppercase tracking-[0.2em] font-bold shrink-0" style={{ color: "var(--color-gold)" }}>
                    Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
