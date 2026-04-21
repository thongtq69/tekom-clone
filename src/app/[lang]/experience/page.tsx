import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

const galleryImages = [
  "/images/sustainability-1.jpg",
  "/images/sustainability-2.jpg",
  "/images/sustainability-3.jpg",
  "/images/sustainability-4.jpg",
  "/images/factory-bd1.jpg",
  "/images/factory-bd2.jpeg",
  "/images/news-1.png",
  "/images/news-2.png",
];

export default async function ExperiencePage(
  props: PageProps<"/[lang]/experience">
) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const e = dict.experience;

  const sections = [
    { key: "products", title: e.categories.products, images: galleryImages.slice(0, 4) },
    { key: "customers", title: e.categories.customers, images: galleryImages.slice(2, 6) },
    { key: "loading", title: e.categories.loading, images: galleryImages.slice(4, 8) },
    { key: "documents", title: e.categories.documents, images: galleryImages.slice(0, 2) },
  ];

  return (
    <>
      <Hero
        eyebrow={e.hero.eyebrow}
        title={e.hero.title}
        description={e.hero.description}
        bgImage="/images/factory-bd1.jpg"
        height="medium"
      />

      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 space-y-12">
          {sections.map((s) => (
            <div key={s.key}>
              <SectionTitle eyebrow={s.key.toUpperCase()} title={s.title} />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                {s.images.map((src, i) => (
                  <div
                    key={`${s.key}-${i}`}
                    className="aspect-[4/3] bg-cover bg-center hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ backgroundImage: `url('${src}')` }}
                  />
                ))}
              </div>
            </div>
          ))}
          <p
            className="text-center pt-4"
            style={{ color: "var(--color-muted)", fontSize: "13px" }}
          >
            {e.comingSoon}
          </p>
        </div>
      </section>
    </>
  );
}
