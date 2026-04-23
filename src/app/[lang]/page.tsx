import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import FactorySlider from "@/components/FactorySlider";
import Twemoji from "@/components/Twemoji";
import Link from "next/link";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

const factoryImageSets: string[][] = [
  [
    "/images/factory-bd1.jpg",
    "/images/plywood/rubberwood-1.jpg",
    "/images/plywood/rubberwood-3.jpg",
    "/images/plywood/rubberwood-4.jpg",
    "/images/plywood/eucalyptus-1.jpg",
    "/images/plywood/eucalyptus-3.jpg",
  ],
  [
    "/images/factory-bd2.jpeg",
    "/images/plywood/acacia-1.jpg",
    "/images/plywood/acacia-3.jpg",
    "/images/plywood/pine-1.jpg",
    "/images/plywood/pine-3.jpg",
    "/images/plywood/pine-4.jpg",
  ],
];

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

      {/* WHO ARE WE — replaces former Vision slot (left = image, right = content) */}
      <section
        className="py-16"
        style={{ background: "#eef2f6" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-stretch">
          <div
            className="bg-cover bg-center w-full aspect-[4/5] lg:aspect-auto lg:min-h-[560px]"
            style={{ backgroundImage: "url('/images/founder.jpg')" }}
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
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <SectionTitle
              eyebrow={h.globalReach.eyebrow}
              title={h.globalReach.title}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {h.globalReach.items.map((country) => (
              <div
                key={country.name}
                className="bg-white p-5 text-center border border-[color:var(--color-line)] hover:border-[color:var(--color-gold)] hover:shadow-md transition-all"
              >
                <div className="mb-2 flex justify-center">
                  <Twemoji emoji={country.flag} size={40} />
                </div>
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

      {/* FACTORIES */}
      <section className="py-20" style={{ background: "#1A202C" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <SectionTitle
              eyebrow={h.factories.eyebrow}
              title={h.factories.title}
              inverse
            />
          </div>
          <div
            className={`grid gap-8 ${
              h.factories.items.length > 1
                ? "lg:grid-cols-2"
                : "lg:grid-cols-2 max-w-3xl mx-auto"
            }`}
          >
            {h.factories.items.map((f, i) => (
              <div
                key={f.name}
                className={`overflow-hidden group flex flex-col border ${
                  h.factories.items.length === 1 ? "md:col-span-2 md:flex-row" : ""
                }`}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                <FactorySlider
                  images={factoryImageSets[i] ?? factoryImageSets[0]}
                  alt={f.name}
                  prevLabel={dict.common.prev}
                  nextLabel={dict.common.next}
                  className={
                    h.factories.items.length === 1
                      ? "md:w-1/2 aspect-video md:aspect-auto min-h-[280px]"
                      : "aspect-[16/10]"
                  }
                />
                <div
                  className={`p-6 text-white ${
                    h.factories.items.length === 1 ? "md:w-1/2 md:p-8" : ""
                  }`}
                >
                  <h3 className="text-lg mb-2" style={{ color: "#fff" }}>
                    {f.name}
                  </h3>
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

      {/* PRIVATE LABEL PARTNER — moved BELOW Factories */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
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
          <h2 style={{ color: "var(--color-navy)", letterSpacing: "3px" }}>
            {h.privateLabel.title}
          </h2>
          <div
            className="h-[2px] w-10 my-5"
            style={{ background: "var(--color-gold)" }}
          />
          <p
            className="max-w-2xl"
            style={{
              color: "var(--color-muted)",
              fontSize: "15px",
              lineHeight: "26px",
            }}
          >
            {h.privateLabel.desc}
          </p>
          <Link href={`/${lang}/contact`} className="btn-gold mt-7">
            {h.privateLabel.cta} →
          </Link>
        </div>
      </section>

      {/* MILESTONES */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "#1A202C" }}
      >
        {/* Background mosaic — worker photos. 6 tiles so every breakpoint
            (2 / 3 / 6 cols) covers the whole section without empty cells. */}
        <div
          aria-hidden
          className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pointer-events-none"
        >
          {[
            { src: "/images/workers-thumbs.jpg", pos: "center" },
            { src: "/images/sustainability-1.jpg", pos: "center" },
            { src: "/images/sustainability-2.jpg", pos: "center" },
            { src: "/images/sustainability-3.jpg", pos: "center" },
            { src: "/images/sustainability-4.jpg", pos: "center" },
            // Reuse product-photo with worker measuring veneer — anchor to
            // left so the worker stays in frame when the tile is narrow.
            { src: "/images/sustainability-2.jpg", pos: "left center" },
          ].map((t, i) => (
            <div
              key={`${t.src}-${i}`}
              className="bg-cover"
              style={{
                backgroundImage: `url('${t.src}')`,
                backgroundPosition: t.pos,
                filter: "grayscale(20%)",
              }}
            />
          ))}
        </div>
        {/* Dark overlay for contrast — softened */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,32,44,0.62) 0%, rgba(26,32,44,0.45) 50%, rgba(26,32,44,0.72) 100%)",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 text-white">
          <div className="mb-12">
            <SectionTitle
              eyebrow={h.milestones.eyebrow}
              title={h.milestones.title}
              subtitle={h.milestones.subtitle}
              inverse
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {h.milestones.items.map((m) => (
              <div
                key={m.year}
                className="text-center border p-5 backdrop-blur-sm transition-colors hover:border-[color:var(--color-gold)]"
                style={{
                  borderColor: "rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                }}
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
                    lineHeight: "18px",
                    minHeight: "36px",
                  }}
                >
                  {m.title}
                </h4>
                <p
                  className="text-white/70"
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
