import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";
import { productImages } from "./images";
import ProductGallery from "@/components/ProductGallery";

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
                  className="border hover:border-white/25 transition-colors scroll-mt-24 overflow-hidden"
                  style={{
                    background: "#1A202C",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="p-6 md:p-10">
                    <Link
                      href={`/${lang}/plywood/${item.slug}`}
                      className="inline-block mb-5 hover:text-[color:var(--color-gold)] transition-colors"
                    >
                      <h3
                        style={{
                          fontSize: "24px",
                          letterSpacing: "1px",
                          color: "#fff",
                        }}
                      >
                        {item.name}
                      </h3>
                    </Link>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
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
                      <div className="md:pt-0 pt-3 md:border-l border-t md:border-t-0 border-white/10 md:pl-10 flex flex-col gap-5">
                        <ul className="space-y-1.5">
                          {item.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex gap-2"
                              style={{
                                fontSize: "13px",
                                lineHeight: "20px",
                                color: "rgba(255,255,255,0.75)",
                              }}
                            >
                              <span style={{ color: "var(--color-gold)" }}>
                                ▸
                              </span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/${lang}/plywood/${item.slug}`}
                          className="btn-gold self-start md:mt-auto"
                        >
                          {dict.common.viewDetail} →
                        </Link>
                      </div>
                    </div>
                  </div>
                  {images.length > 0 && (
                    <ProductGallery
                      images={images}
                      alt={item.name}
                      prevLabel={dict.common.prev}
                      nextLabel={dict.common.next}
                    />
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
          color: "rgba(255,255,255,0.6)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </dt>
      <dd
        style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.9)",
          lineHeight: "20px",
        }}
      >
        {value}
      </dd>
    </div>
  );
}
