import "server-only";
import type viDict from "./vi.json";
import type { Locale } from "./locales";

export type Dictionary = typeof viDict;

const dictionaries = {
  vi: () => import("./vi.json").then((m) => m.default as Dictionary),
  en: () => import("./en.json").then((m) => m.default as Dictionary),
  zh: () => import("./zh.json").then((m) => m.default as Dictionary),
  hi: () => import("./hi.json").then((m) => m.default as Dictionary),
  ko: () => import("./ko.json").then((m) => m.default as Dictionary),
  ja: () => import("./ja.json").then((m) => m.default as Dictionary),
};

export const getDictionary = async (lang: Locale): Promise<Dictionary> =>
  dictionaries[lang]();

// Re-export client-safe metadata so callers have one entry point
export {
  locales,
  defaultLocale,
  localeNames,
  localeFlags,
  hasLocale,
} from "./locales";
export type { Locale } from "./locales";
