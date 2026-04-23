import Link from "next/link";
import Image from "next/image";
import type { Dictionary, Locale } from "@/dictionaries";

type Props = { lang: Locale; dict: Dictionary };

export default function Footer({ lang, dict }: Props) {
  const f = dict.footer;

  return (
    <footer
      className="text-white/85"
      style={{ background: "var(--color-navy-dark)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand + brief */}
        <div>
          <div className="mb-4 inline-block bg-white p-2">
            <Image
              src="/images/logo.png"
              alt="A&A Logistics"
              width={120}
              height={120}
              className="h-16 w-auto"
            />
          </div>
          <p
            className="text-white/70 mb-5"
            style={{ fontSize: "13px", lineHeight: "21px" }}
          >
            {f.brief}
          </p>
          <div className="flex gap-2">
            <SocialIcon
              href="https://www.facebook.com/AAlogCorporation/"
              label="Facebook"
            >
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v7A10 10 0 0 0 22 12z" />
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com" label="YouTube">
              <path d="M23 12s0-3.6-.46-5.32a2.78 2.78 0 0 0-1.95-1.95C18.86 4.27 12 4.27 12 4.27s-6.86 0-8.59.46A2.78 2.78 0 0 0 1.46 6.68C1 8.4 1 12 1 12s0 3.6.46 5.32a2.78 2.78 0 0 0 1.95 1.95c1.73.46 8.59.46 8.59.46s6.86 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95C23 15.6 23 12 23 12zM9.75 15.27V8.73L15.5 12l-5.75 3.27z" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com" label="LinkedIn">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </SocialIcon>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4
            className="mb-4 text-white"
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {f.quickLinksTitle}
          </h4>
          <ul className="space-y-2.5">
            {[
              { label: dict.nav.about, href: `/${lang}` },
              { label: dict.nav.plywood, href: `/${lang}/plywood` },
              { label: dict.nav.experience, href: `/${lang}/experience` },
              { label: dict.nav.news, href: `/${lang}/news` },
              { label: dict.nav.contact, href: `/${lang}/contact` },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-[color:var(--color-gold)] transition-colors"
                  style={{ fontSize: "13px" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4
            className="mb-4 text-white"
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {f.productsTitle}
          </h4>
          <ul className="space-y-2.5">
            {f.products.map((p) => (
              <li
                key={p}
                className="text-white/70"
                style={{ fontSize: "13px" }}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="mb-4 text-white"
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {f.contactTitle}
          </h4>
          <ul className="space-y-2.5 text-white/70" style={{ fontSize: "13px" }}>
            <li className="flex gap-2 items-start">
              <span style={{ color: "var(--color-gold)" }}>📍</span>
              <span>{f.addressShort}</span>
            </li>
            <li className="flex gap-2 items-start">
              <span style={{ color: "var(--color-gold)" }}>📞</span>
              <a
                href={`tel:${f.phone.replace(/\s/g, "")}`}
                className="hover:text-[color:var(--color-gold)]"
              >
                {f.phone}
              </a>
            </li>
            <li className="flex gap-2 items-start">
              <span style={{ color: "var(--color-gold)" }}>✉️</span>
              <a
                href={`mailto:${f.email}`}
                className="hover:text-[color:var(--color-gold)]"
              >
                {f.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div
          className="max-w-[1280px] mx-auto px-6 lg:px-10 py-5 text-white/50 text-center"
          style={{ fontSize: "12px" }}
        >
          <p>{f.rights.replace("{year}", String(new Date().getFullYear()))}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-[color:var(--color-gold)] hover:border-[color:var(--color-gold)] transition-colors"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
