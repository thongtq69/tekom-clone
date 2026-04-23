import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";
import { productImages } from "./images";

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
          <div className="flex flex-col gap-10">
            {p.products.items.map((item) => {
              const images = productImages[item.slug] ?? [];
              return (
                <article
                  key={item.slug}
                  id={item.slug}
                  className="border border-[color:var(--color-line)] hover:shadow-lg transition-shadow scroll-mt-24 overflow-hidden"
                >
                  <div className="p-6 md:p-10">
                    <Link
                      href={`/${lang}/plywood/${item.slug}`}
                      className="inline-block mb-5 hover:text-[color:var(--color-gold)] transition-colors"
                      style={{
                        fontSize: "24px",
                        letterSpacing: "1px",
                        color: "var(--color-navy)",
                      }}
                    >
                      <h3>{item.name}</h3>
                    </Link>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mb-5">
                      <dl className="space-y-2">
                        <Spec
                          label={dict.common.material}
                          value={item.material}
                        />
                        <Spec
                          label={dict.common.dimensions}
                          value={item.dimensions}
                        />
                        <Spec label={dict.common.price} value={item.price} />
                        <Spec
                          label={dict.common.minOrderQty}
                          value={item.moq}
                        />
                      </dl>
                      <ul className="space-y-1.5 md:pt-0 pt-3 md:border-l border-t md:border-t-0 border-[color:var(--color-line)] md:pl-10 pt-3">
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
                            <span style={{ color: "var(--color-gold)" }}>
                              ▸
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/${lang}/plywood/${item.slug}`}
                        className="btn-gold"
                      >
                        {dict.common.viewDetail} →
                      </Link>
                      <Link
                        href={`/${lang}/contact?subject=${encodeURIComponent(item.name)}`}
                        className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] text-sm font-bold uppercase tracking-[1.5px] transition-colors"
                        style={{
                          borderColor: "var(--color-navy)",
                          color: "var(--color-navy)",
                        }}
                      >
                        {dict.common.contactUs}
                      </Link>
                    </div>
                  </div>
                  {images.length > 0 && (
                    <Link
                      href={`/${lang}/plywood/${item.slug}`}
                      className="grid grid-cols-2 lg:grid-cols-4 gap-1 border-t border-[color:var(--color-line)]"
                      aria-label={item.name}
                    >
                      {images.map((src, i) => (
                        <div
                          key={src}
                          className="aspect-[3/4] bg-cover bg-center hover:opacity-90 transition-opacity"
                          style={{ backgroundImage: `url('${src}')` }}
                          role="img"
                          aria-label={`${item.name} ${i + 1}`}
                        />
                      ))}
                    </Link>
                  )}
                </article>
              );
            })}
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
