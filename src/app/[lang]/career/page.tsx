import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

export default async function CareerPage(props: PageProps<"/[lang]/career">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const c = dict.career;

  return (
    <>
      <Hero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        description={c.hero.description}
        bgImage="/images/hero-career.png"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle
              eyebrow={c.benefits.eyebrow}
              title={c.benefits.title}
            />
            <ul className="mt-6 space-y-3">
              {c.benefits.items.map((b) => (
                <li key={b} className="flex gap-3">
                  <span
                    className="mt-2 w-2 h-2 rounded-full shrink-0"
                    style={{ background: "var(--color-gold)" }}
                  />
                  <span className="text-[15px] text-[color:var(--color-muted)]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow={c.jobs.eyebrow} title={c.jobs.title} />
            <div className="mt-6 space-y-3">
              {c.jobs.items.map((j) => (
                <div
                  key={j.title}
                  className="p-5 border border-[color:var(--color-line)] hover:border-[color:var(--color-gold)] transition-colors flex justify-between items-center gap-4"
                >
                  <div>
                    <h3
                      className="font-display font-bold uppercase tracking-wider text-sm mb-1"
                      style={{ color: "var(--color-navy)" }}
                    >
                      {j.title}
                    </h3>
                    <p className="text-xs text-[color:var(--color-muted)]">
                      {j.location} · {j.type}
                    </p>
                  </div>
                  <button
                    className="text-xs uppercase tracking-[0.2em] font-bold shrink-0"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {dict.common.apply} →
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
