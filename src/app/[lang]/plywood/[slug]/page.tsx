import Link from "next/link";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import ProductDetailGallery from "@/components/ProductDetailGallery";
import LightboxGrid from "@/components/LightboxGrid";
import { productImages } from "../images";

type Params = { lang: string; slug: string };

export default async function PlywoodDetailPage(props: {
  params: Promise<Params>;
}) {
  const { lang, slug } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const p = dict.plywood;
  const item = p.products.items.find((i) => i.slug === slug);
  if (!item) notFound();

  const images = productImages[slug] ?? [];
  const hero = images[0] ?? "/images/factory-bd1.jpg";

  return (
    <>
      {/* HERO */}
      <section
        className="relative pt-[88px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(13,34,56,0.55), rgba(13,34,56,0.75)), url('${hero}')`,
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-20 lg:py-28 text-white">
          <Link
            href={`/${lang}/plywood`}
            className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[2.5px] uppercase opacity-90 hover:opacity-100 transition-opacity"
            style={{ color: "var(--color-gold)" }}
          >
            ← {p.detail.back}
          </Link>
          <p
            className="mt-6 text-[11px] font-bold uppercase tracking-[3px]"
            style={{ color: "var(--color-gold)" }}
          >
            {p.products.eyebrow}
          </p>
          <h1
            className="font-display mt-3 leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "1px" }}
          >
            {item.name}
          </h1>
          <p className="mt-4 max-w-[640px] opacity-90 text-[15px] leading-[24px]">
            {item.material}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <ProductDetailGallery
                images={images.length > 0 ? images : [hero]}
                alt={item.name}
                prevLabel={dict.common.prev}
                nextLabel={dict.common.next}
              />
            </div>

            <div className="lg:col-span-5">
              <p
                className="text-[11px] font-bold uppercase tracking-[3px] mb-3"
                style={{ color: "var(--color-gold)" }}
              >
                {p.detail.overview}
              </p>
              <h2
                className="mb-6"
                style={{
                  fontSize: "24px",
                  letterSpacing: "1px",
                  color: "var(--color-navy)",
                }}
              >
                {item.name}
              </h2>

              <dl className="space-y-3 mb-6">
                <Spec label={dict.common.material} value={item.material} />
                <Spec label={dict.common.dimensions} value={item.dimensions} />
                <Spec label={dict.common.price} value={item.price} />
                <Spec label={dict.common.minOrderQty} value={item.moq} />
              </dl>

              <ul className="space-y-2 mb-8 pt-5 border-t border-[color:var(--color-line)]">
                {item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2"
                    style={{
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: "var(--color-foreground)",
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
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {images.length > 0 && (
        <section className="py-16" style={{ background: "#f7f8fa" }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="text-center mb-10 flex flex-col items-center">
              <SectionTitle
                eyebrow={p.products.eyebrow}
                title={p.detail.gallery}
                align="center"
              />
            </div>
            <LightboxGrid
              images={images}
              alt={item.name}
              prevLabel={dict.common.prev}
              nextLabel={dict.common.next}
            />
          </div>
        </section>
      )}

    </>
  );
}

export async function generateStaticParams() {
  const { locales } = await import("@/dictionaries/locales");
  const slugs = ["rubberwood", "eucalyptus", "acacia", "pine"];
  return locales.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <dt
        className="shrink-0 font-bold"
        style={{
          minWidth: "120px",
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
          fontSize: "14px",
          color: "var(--color-foreground)",
          lineHeight: "22px",
        }}
      >
        {value}
      </dd>
    </div>
  );
}
