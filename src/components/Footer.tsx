import Link from "next/link";
import Image from "next/image";
import type { Dictionary, Locale } from "@/dictionaries";

type Props = { lang: Locale; dict: Dictionary };

export default function Footer({ lang, dict }: Props) {
  const f = dict.footer;
  return (
    <footer
      className="text-white/90 text-sm"
      style={{ background: "var(--color-navy-dark)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-5">
            <Image
              src="/images/logo.png"
              alt="TEKCOM"
              width={140}
              height={42}
              className="h-10 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-white/70 text-xs uppercase tracking-[0.32em] mb-3">
            {f.follow}
          </p>
          <div className="flex gap-3 mb-6">
            <SocialIcon
              href="https://www.facebook.com/TekcomCorporation/"
              label="Facebook"
            >
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v7A10 10 0 0 0 22 12z" />
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com" label="YouTube">
              <path d="M23 12s0-3.6-.46-5.32a2.78 2.78 0 0 0-1.95-1.95C18.86 4.27 12 4.27 12 4.27s-6.86 0-8.59.46A2.78 2.78 0 0 0 1.46 6.68C1 8.4 1 12 1 12s0 3.6.46 5.32a2.78 2.78 0 0 0 1.95 1.95c1.73.46 8.59.46 8.59.46s6.86 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95C23 15.6 23 12 23 12zM9.75 15.27V8.73L15.5 12l-5.75 3.27z" />
            </SocialIcon>
          </div>
          <form className="flex border border-white/30">
            <input
              type="email"
              placeholder={f.emailPlaceholder}
              className="bg-transparent px-3 py-2 text-xs flex-1 outline-none placeholder-white/50"
            />
            <button
              type="submit"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider"
              style={{ background: "var(--color-gold)" }}
            >
              {f.subscribe}
            </button>
          </form>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.32em] mb-4 text-white">
            {f.company}
          </h4>
          <p className="font-bold mb-2 text-white">{f.bd1Title}</p>
          <p className="text-white/70 leading-relaxed text-[13px] whitespace-pre-line">
            {f.address}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.32em] mb-4 text-white">
            {f.bd2Title}
          </h4>
          <p className="text-white/70 leading-relaxed text-[13px] whitespace-pre-line mb-6">
            {f.address2}
          </p>
          <p className="text-[13px]">
            <a
              href="tel:+84977668000"
              className="hover:text-[color:var(--color-gold)]"
            >
              (+84) 977 668 000
            </a>{" "}
            —{" "}
            <a
              href="mailto:info@tekcom.vn"
              className="hover:text-[color:var(--color-gold)]"
            >
              info@tekcom.vn
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.32em] mb-4 text-white">
            Info
          </h4>
          <p className="text-white/70 leading-relaxed text-[13px] whitespace-pre-line">
            {f.companyInfo}
          </p>
          <Link
            href={`/${lang}/career`}
            className="inline-block mt-4 text-[color:var(--color-gold)] text-xs uppercase tracking-[0.2em] font-bold"
          >
            {f.careerCta}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <p>{f.rights.replace("{year}", String(new Date().getFullYear()))}</p>
          <p>{f.tagline}</p>
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
      className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-[color:var(--color-gold)] hover:border-[color:var(--color-gold)] transition-colors"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
