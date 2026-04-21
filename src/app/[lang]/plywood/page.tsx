import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

const productImages: Record<string, string> = {
  rubberwood: "/images/factory-bd1.jpg",
  eucalyptus: "/images/factory-bd2.jpeg",
  acacia: "/images/sustainability-3.jpg",
  pine: "/images/sustainability-2.jpg",
};

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
        height="medium"
      />

      {/* PRODUCTS */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10 flex flex-col items-center">
            <SectionTitle
              eyebrow={p.products.eyebrow}
              title={p.products.title}
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.products.items.map((item) => (
              <article
                key={item.slug}
                id={item.slug}
                className="group flex flex-col md:flex-row border border-[color:var(--color-line)] hover:shadow-lg transition-shadow scroll-mt-24"
              >
                <div
                  className="md:w-2/5 aspect-video md:aspect-auto bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${productImages[item.slug] ?? "/images/factory-bd1.jpg"}')`,
                  }}
                />
                <div className="md:w-3/5 p-6">
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "20px",
                      letterSpacing: "1px",
                      color: "var(--color-navy)",
                    }}
                  >
                    {item.name}
                  </h3>
                  <dl className="space-y-2 mb-4">
                    <Spec
                      label={dict.common.material}
                      value={item.material}
                    />
                    <Spec
                      label={dict.common.dimensions}
                      value={item.dimensions}
                    />
                    <Spec label={dict.common.price} value={item.price} />
                    <Spec label={dict.common.minOrderQty} value={item.moq} />
                  </dl>
                  <ul className="space-y-1.5 mb-5 pt-3 border-t border-[color:var(--color-line)]">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2"
                        style={{
                          fontSize: "13px",
                          lineHeight: "20px",
                          color: "var(--color-muted)",
                        }}
                      >
                        <span style={{ color: "var(--color-gold)" }}>▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${lang}/contact?subject=${encodeURIComponent(item.name)}`}
                    className="btn-gold"
                  >
                    {dict.common.contactUs} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16" style={{ background: "#f7f8fa" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10 flex flex-col items-center">
            <SectionTitle
              eyebrow={p.certifications.eyebrow}
              title={p.certifications.title}
              subtitle={p.certifications.subtitle}
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.certifications.items.map((c, i) => (
              <div
                key={c.shortName}
                className="bg-white p-6 border-t-4 hover:shadow-lg transition-shadow"
                style={{ borderColor: "var(--color-gold)" }}
              >
                <div
                  className="font-bold mb-3"
                  style={{
                    color: "var(--color-gold)",
                    fontSize: "14px",
                    letterSpacing: "2px",
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "15px",
                    letterSpacing: "1px",
                    color: "var(--color-navy)",
                    lineHeight: "22px",
                  }}
                >
                  {c.shortName}
                </h3>
                <p
                  className="font-semibold mb-2"
                  style={{
                    fontSize: "12px",
                    color: "var(--color-foreground)",
                    lineHeight: "18px",
                  }}
                >
                  {c.name}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--color-muted)",
                    lineHeight: "20px",
                  }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <dt
        className="shrink-0 font-bold"
        style={{
          minWidth: "100px",
          fontSize: "11px",
          letterSpacing: "1.5px",
          color: "var(--color-muted)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </dt>
      <dd
        style={{
          fontSize: "13px",
          color: "var(--color-foreground)",
          lineHeight: "20px",
        }}
      >
        {value}
      </dd>
    </div>
  );
}
