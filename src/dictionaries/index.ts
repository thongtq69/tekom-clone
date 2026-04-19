import "server-only";
import type viDict from "./vi.json";

export type Dictionary = typeof viDict;

const dictionaries = {
  vi: () => import("./vi.json").then((m) => m.default as Dictionary),
  en: () => import("./en.json").then((m) => m.default as Dictionary),
};

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["vi", "en"];
export const defaultLocale: Locale = "vi";

export const hasLocale = (lang: string): lang is Locale => lang in dictionaries;

export const getDictionary = async (lang: Locale): Promise<Dictionary> =>
  dictionaries[lang]();
