import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

const factoryImages = ["/images/factory-bd1.jpg", "/images/factory-bd2.jpeg"];

export default async function HomePage(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const h = dict.home;

  return (
    <>
      {/* HERO — base44 style: 72vh, soft overlay, products line below */}
      <Hero
        eyebrow={h.hero.eyebrow}
        title={h.hero.title}
        bgImage="/images/hero-about.png"
        height="hero"
        overlay="soft"
        description={
          <>
            <p style={{ fontSize: "15px", lineHeight: "26px" }}>
              {h.hero.description}
            </p>
            <p
              className="mt-6"
              style={{ fontSize: "13px", lineHeight: "22px" }}
            >
              <span className="font-bold text-white">{h.hero.products}</span>
            </p>
            <p
              className="mt-1"
              style={{ fontSize: "13px", lineHeight: "22px" }}
            >
              {h.hero.productsList}
            </p>
          </>
        }
      />

      {/* VISION */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionTitle eyebrow={h.vision.eyebrow} title={h.vision.title} />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <p
              className="font-medium"
              style={{
                color: "var(--color-navy)",
                fontSize: "16px",
                lineHeight: "26px",
              }}
            >
              {h.vision.lead}
            </p>
            <ul className="space-y-2.5">
              {h.vision.items.map((it) => (
                <li key={it} className="flex gap-3">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "var(--color-gold)" }}
                  />
                  <span
                    style={{
                      color: "var(--color-foreground)",
                      fontSize: "15px",
                      lineHeight: "24px",
                    }}
                  >
                    {it}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(180deg, #f7f8fa 0%, #ffffff 100%)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10 flex flex-col items-center">
            <SectionTitle
              eyebrow={h.globalReach.eyebrow}
              title={h.globalReach.title}
              align="center"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {h.globalReach.items.map((country) => (
              <div
                key={country.name}
                className="bg-white p-5 text-center border border-[color:var(--color-line)] hover:border-[color:var(--color-gold)] hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-2">{country.flag}</div>
                <h3
                  className="mb-1"
                  style={{
                    fontSize: "14px",
                    letterSpacing: "2px",
                    color: "var(--color-navy)",
                  }}
                >
                  {country.name}
                </h3>
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "var(--color-muted)",
                  }}
                >
                  {country.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US — Who are we */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
          <div
            className="aspect-[4/3] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/factory-bd1.jpg')" }}
          />
          <div>
            <SectionTitle
              eyebrow={h.aboutUs.eyebrow}
              title={h.aboutUs.title}
            />
            <p
              className="mt-5 font-bold"
              style={{
                color: "var(--color-gold)",
                fontSize: "16px",
                letterSpacing: "1px",
              }}
            >
              {h.aboutUs.lead}
            </p>
            <p
              className="mt-3"
              style={{
                color: "var(--color-muted)",
                fontSize: "15px",
                lineHeight: "26px",
              }}
            >
              {h.aboutUs.desc}
            </p>
            <Link href={`/${lang}/about`} className="btn-gold mt-6">
              {h.aboutUs.cta} →
            </Link>
          </div>
        </div>
      </section>

      {/* PRIVATE LABEL PARTNER */}
      <section
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(21,52,82,0.92), rgba(13,34,56,0.94)), url('/images/vision-bg.jpg')",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center text-white">
          <p
            className="font-bold mb-3"
            style={{
              color: "var(--color-gold)",
              fontSize: "13px",
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            {h.privateLabel.eyebrow}
          </p>
          <h2 style={{ color: "#fff", letterSpacing: "3px" }}>
            {h.privateLabel.title}
          </h2>
          <div
            className="h-[2px] w-10 mx-auto my-5"
            style={{ background: "var(--color-gold)" }}
          />
          <p
            className="text-white/85 max-w-2xl mx-auto"
            style={{ fontSize: "15px", lineHeight: "26px" }}
          >
            {h.privateLabel.desc}
          </p>
          <Link href={`/${lang}/contact`} className="btn-gold mt-7">
            {h.privateLabel.cta} →
          </Link>
        </div>
      </section>

      {/* PLYWOOD PREVIEW — 4 products */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10 flex flex-col items-center">
            <SectionTitle
              eyebrow={h.plywoodPreview.eyebrow}
              title={h.plywoodPreview.title}
              subtitle={h.plywoodPreview.desc}
              align="center"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dict.plywood.products.items.map((p, i) => (
              <Link
                key={p.slug}
                href={`/${lang}/plywood#${p.slug}`}
                className="group block"
              >
                <div
                  className="aspect-square bg-cover bg-center mb-3 relative overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(13,34,56,0.05), rgba(13,34,56,0.55)), url('${
                      [
                        "/images/factory-bd1.jpg",
                        "/images/factory-bd2.jpeg",
                        "/images/sustainability-3.jpg",
                        "/images/sustainability-2.jpg",
                      ][i % 4]
                    }')`,
                  }}
                >
                  <span className="absolute bottom-3 left-4 right-4 text-white font-bold text-sm tracking-wider uppercase">
                    {p.name}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--color-muted)",
                    lineHeight: "18px",
                  }}
                >
                  {p.material}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`/${lang}/plywood`} className="btn-navy">
              {h.plywoodPreview.cta} →
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="py-16" style={{ background: "#f7f8fa" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              eyebrow={h.experiencePreview.eyebrow}
              title={h.experiencePreview.title}
              subtitle={h.experiencePreview.desc}
            />
            <Link
              href={`/${lang}/experience`}
              className="btn-gold mt-6"
            >
              {h.experiencePreview.cta} →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              "/images/sustainability-1.jpg",
              "/images/sustainability-2.jpg",
              "/images/sustainability-3.jpg",
              "/images/sustainability-4.jpg",
            ].map((src) => (
              <div
                key={src}
                className="aspect-square bg-cover bg-center"
                style={{ backgroundImage: `url('${src}')` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FACTORIES */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-10 flex flex-col items-center">
            <SectionTitle
              eyebrow={h.factories.eyebrow}
              title={h.factories.title}
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {h.factories.items.map((f, i) => (
              <div
                key={f.name}
                className="overflow-hidden group"
                style={{ background: "var(--color-navy)" }}
              >
                <div
                  className="aspect-[16/10] bg-cover bg-center transition-transform group-hover:scale-105"
                  style={{ backgroundImage: `url('${factoryImages[i]}')` }}
                />
                <div className="p-6 text-white">
                  <h3 className="text-white text-lg mb-2">{f.name}</h3>
                  <p
                    className="text-white/75 mb-4"
                    style={{ fontSize: "14px", lineHeight: "22px" }}
                  >
                    {f.desc}
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/15">
                    <Stat
                      label={h.factories.labels.area}
                      value={f.area}
                    />
                    <Stat
                      label={h.factories.labels.products}
                      value={f.products}
                      small
                    />
                    <Stat
                      label={h.factories.labels.people}
                      value={f.people}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section
        className="py-16 relative bg-cover bg-center"
        style={{
          background:
            "linear-gradient(135deg, #153452 0%, #0d2238 50%, #1a4470 100%)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-white">
          <div className="text-center mb-10 flex flex-col items-center">
            <p
              className="heading-eyebrow mb-3"
              style={{ color: "var(--color-gold)" }}
            >
              {h.milestones.eyebrow}
            </p>
            <h2 style={{ color: "#fff" }}>{h.milestones.title}</h2>
            <div
              className="h-[2px] w-10 mt-4"
              style={{ background: "var(--color-gold)" }}
            />
            <p
              className="text-white/70 mt-4 max-w-2xl"
              style={{ fontSize: "15px", lineHeight: "24px" }}
            >
              {h.milestones.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {h.milestones.items.map((m) => (
              <div
                key={m.year}
                className="text-center border border-white/10 p-4"
              >
                <div
                  className="font-bold mb-3"
                  style={{
                    color: "var(--color-gold)",
                    fontSize: "20px",
                    letterSpacing: "2px",
                  }}
                >
                  {m.year}
                </div>
                <h4
                  className="text-white mb-2"
                  style={{
                    fontSize: "13px",
                    letterSpacing: "1px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {m.title}
                </h4>
                <p
                  className="text-white/65"
                  style={{ fontSize: "12px", lineHeight: "18px" }}
                >
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({
  label,
  value,
  small,
}: {
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div>
      <p
        className="text-white/60 mb-1"
        style={{
          fontSize: "9px",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </p>
      <p
        className="font-bold text-white"
        style={{ fontSize: small ? "12px" : "15px", lineHeight: "18px" }}
      >
        {value}
      </p>
    </div>
  );
}
