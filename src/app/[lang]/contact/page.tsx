import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

export default async function ContactPage(props: PageProps<"/[lang]/contact">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const c = dict.contact;

  return (
    <>
      <Hero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        description={c.hero.description}
        bgImage="/images/factory-bd1.jpg"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <SectionTitle eyebrow={c.form.eyebrow} title={c.form.title} />
            <form className="mt-8 grid md:grid-cols-2 gap-5">
              <Input label={c.form.name} />
              <Input label={c.form.email} type="email" />
              <Input label={c.form.phone} />
              <Input label={c.form.company} />
              <div className="md:col-span-2">
                <Input label={c.form.subject} />
              </div>
              <div className="md:col-span-2">
                <label
                  className="block text-xs uppercase tracking-[0.2em] font-bold mb-2"
                  style={{ color: "var(--color-navy)" }}
                >
                  {c.form.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-[color:var(--color-line)] px-4 py-3 text-sm focus:border-[color:var(--color-gold)] focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <button type="button" className="btn-gold">
                  {c.form.submit} →
                </button>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-2 space-y-8">
            <div>
              <h3
                className="font-display font-bold uppercase tracking-wider text-base mb-3"
                style={{ color: "var(--color-navy)" }}
              >
                {c.info.company}
              </h3>
              <p
                className="font-bold text-sm mb-1"
                style={{ color: "var(--color-navy)" }}
              >
                {c.info.hq}
              </p>
              <p className="text-[14px] text-[color:var(--color-muted)] leading-relaxed">
                {c.info.addr1}
              </p>
              <a
                href="https://goo.gl/maps/mvpFrgczdoixrdjQ6"
                className="text-xs uppercase tracking-[0.2em] font-bold mt-2 inline-block"
                style={{ color: "var(--color-gold)" }}
              >
                {dict.common.viewMap} →
              </a>
            </div>
            <div>
              <p
                className="font-bold text-sm mb-1"
                style={{ color: "var(--color-navy)" }}
              >
                {c.info.bd2}
              </p>
              <p className="text-[14px] text-[color:var(--color-muted)] leading-relaxed">
                {c.info.addr2}
              </p>
              <a
                href="https://goo.gl/maps/oBwuK9u2YS4oqBDbA"
                className="text-xs uppercase tracking-[0.2em] font-bold mt-2 inline-block"
                style={{ color: "var(--color-gold)" }}
              >
                {dict.common.viewMap} →
              </a>
            </div>
            <div className="pt-6 border-t border-[color:var(--color-line)] space-y-2">
              <p className="text-sm">
                <span className="text-[color:var(--color-muted)]">
                  {c.info.hotlineLabel}
                </span>{" "}
                <a
                  href="tel:+84977668000"
                  className="font-bold"
                  style={{ color: "var(--color-navy)" }}
                >
                  (+84) 977 668 000
                </a>
              </p>
              <p className="text-sm">
                <span className="text-[color:var(--color-muted)]">
                  {c.info.emailLabel}
                </span>{" "}
                <a
                  href="mailto:info@tekcom.vn"
                  className="font-bold"
                  style={{ color: "var(--color-navy)" }}
                >
                  info@tekcom.vn
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label
        className="block text-xs uppercase tracking-[0.2em] font-bold mb-2"
        style={{ color: "var(--color-navy)" }}
      >
        {label}
      </label>
      <input
        type={type}
        className="w-full border border-[color:var(--color-line)] px-4 py-3 text-sm focus:border-[color:var(--color-gold)] focus:outline-none"
      />
    </div>
  );
}
