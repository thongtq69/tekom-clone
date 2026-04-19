"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About Us", href: "/" },
  { label: "Plywood", href: "/plywood" },
  { label: "Cabinets", href: "/cabinets" },
  { label: "Market Coverage", href: "/market-coverage" },
  { label: "News", href: "/news" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
  { label: "Sustainability", href: "/sustainability" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[70px] flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
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

        <div className="hidden lg:flex items-center gap-4 text-[color:var(--color-navy)]">
          <button aria-label="Search" className="hover:text-[color:var(--color-gold)] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button className="text-[12px] font-bold uppercase tracking-wider hover:text-[color:var(--color-gold)] transition-colors">
            EN ▾
          </button>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden text-[color:var(--color-navy)]"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
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
          </nav>
        </div>
      )}
    </header>
  );
}
