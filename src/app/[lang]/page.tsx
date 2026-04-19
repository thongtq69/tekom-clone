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
      <Hero
        eyebrow={h.hero.eyebrow}
        title={h.hero.title}
        bgImage="/images/hero-about.png"
        description={
          <>
            {h.hero.description}
            <br />
            <br />
            {h.hero.products} <strong>{h.hero.productsList}</strong>
          </>
        }
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionTitle eyebrow={h.vision.eyebrow} title={h.vision.title} />
          </div>
          <div className="lg:col-span-7 space-y-5 text-[color:var(--color-foreground)]/80 leading-relaxed">
            <p
              className="text-lg font-medium"
              style={{ color: "var(--color-navy)" }}
            >
              {h.vision.lead}
            </p>
            <ul className="space-y-3 text-[15px]">
              {h.vision.items.map((it) => (
                <Bullet key={it}>{it}</Bullet>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg, #f7f8fa 0%, #ffffff 100%)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle
              eyebrow={h.values.eyebrow}
              title={h.values.title}
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {h.values.items.map((v) => (
              <div
                key={v.title}
                className="bg-white p-7 border-t-4 hover:shadow-xl transition-shadow"
                style={{ borderColor: "var(--color-gold)" }}
              >
                <h3
                  className="font-display font-bold uppercase tracking-wider text-lg mb-4"
                  style={{ color: "var(--color-navy)" }}
                >
                  {v.title}
                </h3>
                <ul className="space-y-2 text-sm text-[color:var(--color-muted)]">
                  {v.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span style={{ color: "var(--color-gold)" }}>•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle
              eyebrow={h.factories.eyebrow}
              title={h.factories.title}
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {h.factories.items.map((f, i) => (
              <div
                key={f.name}
                className="relative overflow-hidden group"
                style={{ background: "var(--color-navy)" }}
              >
                <div
                  className="aspect-[16/10] bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(21,52,82,0.35), rgba(13,34,56,0.15)), url('${factoryImages[i]}')`,
                  }}
                />
                <div className="p-7 text-white">
                  <h3 className="font-display font-bold uppercase tracking-wider text-xl mb-3">
                    {f.name}
                  </h3>
                  <p className="text-white/75 text-[14px] leading-relaxed mb-5">
                    {f.desc}
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/15">
                    <Stat label={h.factories.labels.area} value={f.area} />
                    <Stat
                      label={h.factories.labels.products}
                      value={f.products}
                      small
                    />
                    <Stat label={h.factories.labels.people} value={f.people} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,34,56,0.92), rgba(13,34,56,0.92)), url('/images/milestones-bg.png')",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-white relative">
          <div className="text-center mb-14">
            <p className="heading-eyebrow mb-3">{h.milestones.eyebrow}</p>
            <h2 className="font-display font-bold uppercase text-3xl md:text-4xl tracking-wide mb-3">
              {h.milestones.title}
            </h2>
            <div
              className="h-[3px] w-12 mx-auto"
              style={{ background: "var(--color-gold)" }}
            />
            <p className="text-white/70 mt-5 max-w-2xl mx-auto">
              {h.milestones.subtitle}
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-7 left-0 right-0 h-px bg-white/20 hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
              {h.milestones.items.map((m) => (
                <div key={m.year} className="text-center">
                  <div
                    className="w-14 h-14 mx-auto rounded-full flex items-center justify-center font-bold mb-4 relative"
                    style={{ background: "var(--color-gold)" }}
                  >
                    <span className="text-white text-[12px]">{m.year}</span>
                  </div>
                  <h4 className="font-display font-bold uppercase text-sm tracking-wider mb-2">
                    {m.title}
                  </h4>
                  <p className="text-white/65 text-[13px] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div
            className="relative px-8 py-16 md:px-16 md:py-20 text-center text-white overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(21,52,82,0.92) 0%, rgba(13,34,56,0.92) 50%, rgba(26,68,112,0.92) 100%), url('/images/vision-bg.jpg')",
            }}
          >
            <h3 className="font-display font-bold uppercase text-2xl md:text-3xl tracking-wide mb-4">
              {h.cta.title}
            </h3>
            <p className="text-white/75 max-w-2xl mx-auto mb-8">{h.cta.desc}</p>
            <Link href={`/${lang}/contact`} className="btn-gold">
              {h.cta.button} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        className="mt-2 w-2 h-2 rounded-full shrink-0"
        style={{ background: "var(--color-gold)" }}
      />
      <span>{children}</span>
    </li>
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
      <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] mb-1">
        {label}
      </p>
      <p className={`font-bold ${small ? "text-[12px]" : "text-base"}`}>
        {value}
      </p>
    </div>
  );
}
