import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const articles = [
  {
    title: "TEKCOM Expands Export Footprint to North America",
    date: "Mar 12, 2026",
    category: "Company News",
    excerpt: "We are proud to announce a new long-term supply agreement with a leading US distributor of formwork plywood…",
    image: "/images/news-thumb-1.png",
  },
  {
    title: "Sustainability Report 2025 Released",
    date: "Feb 02, 2026",
    category: "Sustainability",
    excerpt: "Highlights include a 23% reduction in scope-1 emissions, FSC® certified raw material rate of 88%, and a new solar rooftop…",
    image: "/images/news-thumb-2.png",
  },
  {
    title: "Inside the BD2 Furniture Plywood Line",
    date: "Jan 18, 2026",
    category: "Behind the Scenes",
    excerpt: "A walkthrough of our most automated line — from log peeling to packaging, here's how a sheet is made.",
    image: "/images/news-thumb-3.jpg",
  },
  {
    title: "TEKCOM at Vietnam Wood 2025",
    date: "Nov 22, 2025",
    category: "Events",
    excerpt: "Visit us at booth A-12 to see our newest formwork line and the RTA Cabinet showroom.",
    image: "/images/news-thumb-4.png",
  },
];

export default function NewsPage() {
  return (
    <>
      <Hero
        eyebrow="News"
        title="News & Updates"
        description="Latest stories from TEKCOM — product launches, sustainability progress and behind-the-scenes from our factories."
        bgImage="/images/hero-news.png"
        height="medium"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 flex flex-col items-center">
            <SectionTitle eyebrow="Latest Articles" title="Stories from TEKCOM" align="center" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {articles.map((a) => (
              <article
                key={a.title}
                className="group flex flex-col md:flex-row gap-5 border border-[color:var(--color-line)] overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className="md:w-2/5 aspect-video md:aspect-auto bg-cover bg-center"
                  style={{ backgroundImage: `url('${a.image}')` }}
                />
                <div className="p-6 md:w-3/5 flex flex-col">
                  <p className="text-xs uppercase tracking-[0.25em] font-bold mb-2" style={{ color: "var(--color-gold)" }}>
                    {a.category} · {a.date}
                  </p>
                  <h3 className="font-display font-bold text-xl mb-3 leading-snug group-hover:text-[color:var(--color-gold)] transition-colors" style={{ color: "var(--color-navy)" }}>
                    {a.title}
                  </h3>
                  <p className="text-sm text-[color:var(--color-muted)] leading-relaxed mb-4 flex-1">
                    {a.excerpt}
                  </p>
                  <Link href="#" className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: "var(--color-gold)" }}>
                    Read More →
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
