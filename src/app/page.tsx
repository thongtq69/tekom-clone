import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const values = [
  {
    title: "Conquer",
    items: [
      "Excellent quality",
      "Effective operation",
      "Dare to challenge",
      "Dedicated",
      "Self-responsibility",
      "Speedy response on issues",
    ],
  },
  {
    title: "Constant Renewal",
    items: [
      "Think outside the box",
      "Can-do-it spirit",
      "Positive adaptability",
      "Business initiatives",
      "Learn to share, share to learn",
      "Proactive action",
    ],
  },
  {
    title: "Collaboration",
    items: [
      "High commitment",
      "Result-oriented",
      "True service mind-set",
      "Constructive idea sharing",
      "Respect business partners",
      "Encourage and motivate each other",
    ],
  },
  {
    title: "Customer Centricity",
    items: [
      "Outside-in thinking",
      "Excellent engagement with customers",
      "Profound WIN-WIN spirit",
      "Positive listening",
      "Open feedback culture",
      "Expectation plus",
    ],
  },
];

const factories = [
  {
    name: "Binh Duong 01 Factory",
    image: "/images/factory-bd1.jpg",
    desc: "TEKCOM's 55,000 square-meter factory is equipped with the most state-of-the-art facilities in FFP industry. Our offerings are certified to conform with EU Standards (EN 13986) and obtain TÜV Rheinland Certification in plywood.",
    area: "55,000 m²",
    products: "Formwork plywood",
    people: "700+ employees",
  },
  {
    name: "Binh Duong 02 Factory",
    image: "/images/factory-bd2.jpeg",
    desc: "Opened in 2019, BD2 is more automated and specialized in producing plywood for furniture and other industries, including high-quality kitchen cabinets.",
    area: "60,000 m²",
    products: "Furniture plywood, kitchen cabinets",
    people: "600+ employees",
  },
];

const milestones = [
  { year: "2005", title: "Establishment", desc: "As insulation trading company." },
  { year: "2010", title: "First plywood line", desc: "Launched our first plywood production line at BD1." },
  { year: "2015", title: "Export markets", desc: "Began serving partners across Asia, Australia, and the EU." },
  { year: "2019", title: "BD2 factory", desc: "Opened the second factory dedicated to furniture plywood." },
  { year: "2022", title: "RTA Cabinets", desc: "Launched RTA Kitchen Cabinet line for the US market." },
  { year: "Today", title: "Building The Best", desc: "Serving customers in 30+ countries." },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title="Together Building The Best."
        bgImage="/images/hero-about.png"
        description={
          <>
            Established in 2005, TEKCOM Corporation specializes in providing plywood and
            associated products to partners and clients in Vietnam and export markets. With
            a strong commitment to deliver high-quality products, the challenge of developing
            innovative solutions for construction and architectural creation never stops.
            <br />
            <br />
            Our core products include: <strong>Formwork Plywood | Furniture Plywood | RTA Kitchen Cabinets</strong>
          </>
        }
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionTitle eyebrow="Our Vision" title="A Market Leader in Wood and Associated Products" />
          </div>
          <div className="lg:col-span-7 space-y-5 text-[color:var(--color-foreground)]/80 leading-relaxed">
            <p className="text-lg font-medium" style={{ color: "var(--color-navy)" }}>
              To be a market leader of preferred wood and associated products; and to provide
              innovative solutions in construction and architectural design.
            </p>
            <ul className="space-y-3 text-[15px]">
              <Bullet>Leading position in the national and regional market through innovation and a well-known brand.</Bullet>
              <Bullet>Being a sustainable leading manufacturer in the region.</Bullet>
              <Bullet>Operating an effective supply-chain management.</Bullet>
              <Bullet>Constantly renewed to bring suitable solutions to customers.</Bullet>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ background: "linear-gradient(180deg, #f7f8fa 0%, #ffffff 100%)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle
              eyebrow="Our Core Values"
              title="Four Pillars That Drive Us"
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-7 border-t-4 hover:shadow-xl transition-shadow"
                style={{ borderColor: "var(--color-gold)" }}
              >
                <h3
                  className="font-display font-bold uppercase tracking-wider text-lg mb-4"
                  style={{ color: "var(--color-navy)" }}
                >
                  {v.title}
                </h3>
                <ul className="space-y-2 text-sm text-[color:var(--color-muted)]">
                  {v.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span style={{ color: "var(--color-gold)" }}>•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle eyebrow="Our Facilities" title="Our Factories" align="center" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {factories.map((f) => (
              <div
                key={f.name}
                className="relative overflow-hidden group"
                style={{ background: "var(--color-navy)" }}
              >
                <div
                  className="aspect-[16/10] bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(21,52,82,0.35), rgba(13,34,56,0.15)), url('${f.image}')`,
                  }}
                />
                <div className="p-7 text-white">
                  <h3 className="font-display font-bold uppercase tracking-wider text-xl mb-3">
                    {f.name}
                  </h3>
                  <p className="text-white/75 text-[14px] leading-relaxed mb-5">{f.desc}</p>
                  <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/15">
                    <Stat label="Total Area" value={f.area} />
                    <Stat label="Main Products" value={f.products} small />
                    <Stat label="Man Power" value={f.people} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,34,56,0.92), rgba(13,34,56,0.92)), url('/images/milestones-bg.png')",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-white relative">
          <div className="text-center mb-14">
            <p className="heading-eyebrow mb-3">Key Milestones</p>
            <h2 className="font-display font-bold uppercase text-3xl md:text-4xl tracking-wide mb-3">
              Together Building The Best
            </h2>
            <div className="h-[3px] w-12 mx-auto" style={{ background: "var(--color-gold)" }} />
            <p className="text-white/70 mt-5 max-w-2xl mx-auto">
              In each step of operation, TEKCOM is striving for consistent coordination with
              our partners.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-7 left-0 right-0 h-px bg-white/20 hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
              {milestones.map((m) => (
                <div key={m.year} className="text-center">
                  <div
                    className="w-14 h-14 mx-auto rounded-full flex items-center justify-center font-bold mb-4 relative"
                    style={{ background: "var(--color-gold)" }}
                  >
                    <span className="text-white text-[12px]">{m.year}</span>
                  </div>
                  <h4 className="font-display font-bold uppercase text-sm tracking-wider mb-2">
                    {m.title}
                  </h4>
                  <p className="text-white/65 text-[13px] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div
            className="relative px-8 py-16 md:px-16 md:py-20 text-center text-white overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(21,52,82,0.92) 0%, rgba(13,34,56,0.92) 50%, rgba(26,68,112,0.92) 100%), url('/images/vision-bg.jpg')",
            }}
          >
            <h3 className="font-display font-bold uppercase text-2xl md:text-3xl tracking-wide mb-4">
              Ready to build something together?
            </h3>
            <p className="text-white/75 max-w-2xl mx-auto mb-8">
              Our team is ready to support your next project — from sample requests to
              long-term supply partnerships.
            </p>
            <Link href="/contact" className="btn-gold">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        className="mt-2 w-2 h-2 rounded-full shrink-0"
        style={{ background: "var(--color-gold)" }}
      />
      <span>{children}</span>
    </li>
  );
}

function Stat({ label, value, small }: { label: string; value: string; small?: boolean }) {
  return (
    <div>
      <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-1">{label}</p>
      <p className={`font-bold ${small ? "text-[12px]" : "text-base"}`}>{value}</p>
    </div>
  );
}
