import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

const productImages = [
  "/images/factory-bd1.jpg",
  "/images/factory-bd2.jpeg",
  "/images/sustainability-3.jpg",
];

export default async function PlywoodPage(props: PageProps<"/[lang]/plywood">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const p = dict.plywood;

  return (
    <>
      <Hero
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        description={p.hero.description}
        bgImage="/images/factory-bd2.jpeg"
        height="tall"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle
              eyebrow={p.products.eyebrow}
              title={p.products.title}
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {p.products.items.map((item, i) => (
              <article
                key={item.name}
                className="group overflow-hidden border border-[color:var(--color-line)] hover:shadow-2xl transition-all"
              >
                <div
                  className="h-56 relative bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(13,34,56,0.1), rgba(13,34,56,0.75)), url('${productImages[i]}')`,
                  }}
                >
                  <h3 className="absolute bottom-5 left-6 right-6 font-display font-bold uppercase tracking-wider text-white text-2xl">
                    {item.name}
                  </h3>
                </div>
                <div className="p-7">
                  <p
                    className="text-sm uppercase tracking-wider font-bold mb-4"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {item.tagline}
                  </p>
                  <ul className="space-y-3 text-[14px] text-[color:var(--color-muted)]">
                    {item.features.map((f) => (
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
            <SectionTitle eyebrow={p.quality.eyebrow} title={p.quality.title} />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[color:var(--color-muted)]">
              <p>{p.quality.p1}</p>
              <p>{p.quality.p2}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {p.quality.certs.map((cert) => (
              <div
                key={cert}
                className="aspect-square bg-white border border-[color:var(--color-line)] flex items-center justify-center font-display font-bold uppercase text-sm tracking-wider text-center px-4"
                style={{ color: "var(--color-navy)" }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
