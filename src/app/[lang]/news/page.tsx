import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

const thumbs = [
  "/images/news-thumb-1.png",
  "/images/news-thumb-2.png",
  "/images/news-thumb-3.jpg",
  "/images/news-thumb-4.png",
];

export default async function NewsPage(props: PageProps<"/[lang]/news">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const n = dict.news;

  return (
    <>
      <Hero
        eyebrow={n.hero.eyebrow}
        title={n.hero.title}
        description={n.hero.description}
        bgImage="/images/hero-news.png"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle
              eyebrow={n.section.eyebrow}
              title={n.section.title}
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {n.articles.map((a, i) => (
              <article
                key={a.title}
                className="group flex flex-col md:flex-row gap-5 border border-[color:var(--color-line)] overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className="md:w-2/5 aspect-video md:aspect-auto bg-cover bg-center"
                  style={{ backgroundImage: `url('${thumbs[i]}')` }}
                />
                <div className="p-6 md:w-3/5 flex flex-col">
                  <p
                    className="text-xs uppercase tracking-[0.25em] font-bold mb-2"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {a.category} · {a.date}
                  </p>
                  <h3
                    className="font-display font-bold text-xl mb-3 leading-snug group-hover:text-[color:var(--color-gold)] transition-colors"
                    style={{ color: "var(--color-navy)" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-muted)] leading-relaxed mb-4 flex-1">
                    {a.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="text-xs uppercase tracking-[0.2em] font-bold"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {dict.common.readMore} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
