"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  locales,
  localeNames,
  localeFlags,
  type Locale,
} from "@/dictionaries/locales";
import type { Dictionary } from "@/dictionaries";

type Props = { lang: Locale; dict: Dictionary };

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

export default function Header({ lang, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node))
        setLangOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  const plywoodChildren: NavChild[] = dict.plywood.products.items.map(
    (item) => ({
      label: item.name,
      href: `/${lang}/plywood/${item.slug}`,
    }),
  );

  const navItems: NavItem[] = [
    { label: dict.nav.about, href: `/${lang}` },
    {
      label: dict.nav.plywood,
      href: `/${lang}/plywood`,
      children: plywoodChildren,
    },
    { label: dict.nav.experience, href: `/${lang}/experience` },
    { label: dict.nav.news, href: `/${lang}/news` },
    { label: dict.nav.contact, href: `/${lang}/contact` },
  ];

  const switchLangHref = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = target;
    return "/" + segments.join("/");
  };

  const closeMobile = () => {
    setOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-white/85 backdrop-blur"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[88px] flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="A&A Logistics"
            width={160}
            height={160}
            priority
            className="h-20 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() =>
                item.children && setHoveredNav(item.href)
              }
              onMouseLeave={() =>
                item.children && setHoveredNav(null)
              }
            >
              <Link
                href={item.href}
                className="text-[color:var(--color-navy)] hover:text-[color:var(--color-gold)] transition-colors py-2 inline-flex items-center gap-1"
              >
                {item.label}
                {item.children && <span className="text-[10px]">▾</span>}
              </Link>
              {item.children && hoveredNav === item.href && (
                <div className="absolute left-0 top-full bg-white shadow-xl border border-[color:var(--color-line)] min-w-[220px] py-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setHoveredNav(null)}
                      className="block px-4 py-2.5 text-sm text-[color:var(--color-navy)] hover:bg-[color:var(--color-line)]/40 hover:text-[color:var(--color-gold)] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div
          ref={langRef}
          className="hidden lg:flex items-center gap-4 text-[color:var(--color-navy)] relative"
        >
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="text-[13px] font-semibold flex items-center gap-2 hover:text-[color:var(--color-gold)] transition-colors"
            >
              <span>{localeFlags[lang]}</span>
              <span>{localeNames[lang]}</span>
              <span className="text-[10px]">▾</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white shadow-xl border border-[color:var(--color-line)] min-w-[160px] py-1">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={switchLangHref(l)}
                    onClick={() => setLangOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-[color:var(--color-line)]/40 ${
                      l === lang
                        ? "text-[color:var(--color-gold)] font-bold"
                        : "text-[color:var(--color-navy)]"
                    }`}
                  >
                    <span>{localeFlags[l]}</span>
                    <span>{localeNames[l]}</span>
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
        <div className="lg:hidden bg-white border-t border-[color:var(--color-line)] max-h-[80vh] overflow-y-auto">
          <nav className="px-6 py-4 flex flex-col gap-1 text-sm font-medium">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.href ? null : item.href,
                      )
                    }
                    aria-expanded={mobileExpanded === item.href}
                    className="w-full text-left text-[color:var(--color-navy)] hover:text-[color:var(--color-gold)] py-3 border-b border-[color:var(--color-line)] flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px]">
                      {mobileExpanded === item.href ? "▴" : "▾"}
                    </span>
                  </button>
                  {mobileExpanded === item.href && (
                    <div className="flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMobile}
                          className="pl-5 py-2.5 text-[13px] text-[color:var(--color-navy)] hover:text-[color:var(--color-gold)] border-b border-[color:var(--color-line)]"
                        >
                          — {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className="text-[color:var(--color-navy)] hover:text-[color:var(--color-gold)] py-3 border-b border-[color:var(--color-line)]"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="pt-4">
              <p
                className="text-[10px] uppercase tracking-[3px] font-bold mb-3"
                style={{ color: "var(--color-muted)" }}
              >
                Language
              </p>
              <div className="grid grid-cols-2 gap-2">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={switchLangHref(l)}
                    onClick={closeMobile}
                    className={`flex items-center gap-2 py-2 px-3 border ${
                      l === lang
                        ? "border-[color:var(--color-gold)] text-[color:var(--color-gold)] font-bold"
                        : "border-[color:var(--color-line)] text-[color:var(--color-navy)]"
                    }`}
                  >
                    <span>{localeFlags[l]}</span>
                    <span className="text-xs">{localeNames[l]}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
