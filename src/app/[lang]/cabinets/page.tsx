import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

const styleColors = [
  "linear-gradient(135deg, #f5f3ee, #d9d4ca)",
  "linear-gradient(135deg, #3a2418, #1f130b)",
  "linear-gradient(135deg, #c8a274, #8a6238)",
  "linear-gradient(135deg, #5b6770, #2d3640)",
];

export default async function CabinetsPage(
  props: PageProps<"/[lang]/cabinets">
) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const c = dict.cabinets;

  return (
    <>
      <Hero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        description={c.hero.description}
        bgImage="/images/hero-cabinets.jpg"
        height="tall"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle
              eyebrow={c.features.eyebrow}
              title={c.features.title}
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.features.items.map((f, i) => (
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
            <SectionTitle
              eyebrow={c.styles.eyebrow}
              title={c.styles.title}
              align="center"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {c.styles.items.map((name, i) => (
              <div key={name} className="group cursor-pointer">
                <div
                  className="aspect-square mb-3 transition-transform group-hover:scale-[1.02]"
                  style={{ background: styleColors[i] }}
                />
                <p
                  className="font-display font-bold uppercase tracking-wider text-sm text-center"
                  style={{ color: "var(--color-navy)" }}
                >
                  {name}
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
            {dict.common.downloadBrochure} →
          </Link>
        </div>
      </section>
    </>
  );
}
