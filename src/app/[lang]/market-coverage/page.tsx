import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

export default async function MarketCoveragePage(
  props: PageProps<"/[lang]/market-coverage">
) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const m = dict.marketCoverage;

  return (
    <>
      <Hero
        eyebrow={m.hero.eyebrow}
        title={m.hero.title}
        description={m.hero.description}
        bgImage="/images/sustainability-2.jpg"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle
              eyebrow={m.regions.eyebrow}
              title={m.regions.title}
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {m.regions.items.map((r) => (
              <div
                key={r.name}
                className="p-7 border border-[color:var(--color-line)] hover:border-[color:var(--color-gold)] transition-colors"
              >
                <h3
                  className="font-display font-bold uppercase tracking-wider text-lg mb-3"
                  style={{ color: "var(--color-navy)" }}
                >
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
