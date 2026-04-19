import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

export default async function SustainabilityPage(
  props: PageProps<"/[lang]/sustainability">
) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const s = dict.sustainability;

  return (
    <>
      <Hero
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        description={s.hero.description}
        bgImage="/images/hero-sustainability.png"
        height="tall"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle
              eyebrow={s.pillars.eyebrow}
              title={s.pillars.title}
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {s.pillars.items.map((p, i) => (
              <div key={p.title} className="text-center">
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center font-display font-bold text-2xl text-white"
                  style={{ background: "var(--color-gold)" }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="font-display font-bold uppercase tracking-wider text-lg mb-3"
                  style={{ color: "var(--color-navy)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-[color:var(--color-muted)] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-white">
          <div className="text-center mb-12">
            <p className="heading-eyebrow mb-3">{s.stats.eyebrow}</p>
            <h2 className="font-display font-bold uppercase text-3xl md:text-4xl tracking-wide">
              {s.stats.title}
            </h2>
            <div
              className="h-[3px] w-12 mx-auto mt-3"
              style={{ background: "var(--color-gold)" }}
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {s.stats.items.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 border border-white/10"
              >
                <p
                  className="font-display font-bold text-4xl md:text-5xl mb-2"
                  style={{ color: "var(--color-gold)" }}
                >
                  {stat.value}
                </p>
                <p className="text-white/70 text-xs uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
