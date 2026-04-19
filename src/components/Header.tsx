"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import type { Dictionary, Locale } from "@/dictionaries";

type Props = { lang: Locale; dict: Dictionary };

export default function Header({ lang, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: dict.nav.about, href: `/${lang}` },
    { label: dict.nav.plywood, href: `/${lang}/plywood` },
    { label: dict.nav.cabinets, href: `/${lang}/cabinets` },
    { label: dict.nav.marketCoverage, href: `/${lang}/market-coverage` },
    { label: dict.nav.news, href: `/${lang}/news` },
    { label: dict.nav.career, href: `/${lang}/career` },
    { label: dict.nav.contact, href: `/${lang}/contact` },
    { label: dict.nav.sustainability, href: `/${lang}/sustainability` },
  ];

  const switchLangHref = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = target;
    return "/" + segments.join("/");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[70px] flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="TEKCOM Corporation"
            width={140}
            height={42}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold uppercase tracking-wider">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[color:var(--color-navy)] hover:text-[color:var(--color-gold)] transition-colors py-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 text-[color:var(--color-navy)] relative">
          <button
            aria-label="Search"
            className="hover:text-[color:var(--color-gold)] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-[12px] font-bold uppercase tracking-wider hover:text-[color:var(--color-gold)] transition-colors"
            >
              {lang.toUpperCase()} ▾
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-lg border border-[color:var(--color-line)] min-w-[100px]">
                {(["vi", "en"] as Locale[]).map((l) => (
                  <Link
                    key={l}
                    href={switchLangHref(l)}
                    onClick={() => setLangOpen(false)}
                    className={`block px-4 py-2 text-xs uppercase tracking-wider font-bold hover:bg-[color:var(--color-line)]/40 ${
                      l === lang ? "text-[color:var(--color-gold)]" : ""
                    }`}
                  >
                    {l === "vi" ? "Tiếng Việt" : "English"}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          aria-label={dict.nav.menu}
          className="lg:hidden text-[color:var(--color-navy)]"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-[color:var(--color-line)]">
          <nav className="px-6 py-4 flex flex-col gap-1 text-sm font-semibold uppercase tracking-wider">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[color:var(--color-navy)] hover:text-[color:var(--color-gold)] py-3 border-b border-[color:var(--color-line)]"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-3">
              {(["vi", "en"] as Locale[]).map((l) => (
                <Link
                  key={l}
                  href={switchLangHref(l)}
                  onClick={() => setOpen(false)}
                  className={`text-xs uppercase tracking-wider font-bold ${
                    l === lang
                      ? "text-[color:var(--color-gold)]"
                      : "text-[color:var(--color-navy)]"
                  }`}
                >
                  {l === "vi" ? "Tiếng Việt" : "English"}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
