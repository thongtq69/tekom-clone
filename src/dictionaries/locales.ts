// Client-safe locale metadata. Do NOT add "server-only" here.

export const locales = ["vi", "en", "zh", "hi", "ko", "ja"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

export const localeNames: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English",
  zh: "中文",
  hi: "हिन्दी",
  ko: "한국어",
  ja: "日本語",
};

export const localeFlags: Record<Locale, string> = {
  vi: "🇻🇳",
  en: "🇬🇧",
  zh: "🇨🇳",
  hi: "🇮🇳",
  ko: "🇰🇷",
  ja: "🇯🇵",
};

export const hasLocale = (lang: string): lang is Locale =>
  (locales as readonly string[]).includes(lang);
