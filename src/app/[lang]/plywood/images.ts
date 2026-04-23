/**
 * Product gallery images. Up to 10 slots per product.
 * Drop files named `<slug>-N.jpg` (N from 1–10) into public/images/plywood/.
 * Missing files are filtered out at import time so pages never show broken tiles.
 */
import fs from "node:fs";
import path from "node:path";

const PLYWOOD_DIR = path.join(process.cwd(), "public", "images", "plywood");
const MAX_PER_PRODUCT = 10;
const SLUGS = ["rubberwood", "eucalyptus", "acacia", "pine"] as const;

function resolveImages(slug: string): string[] {
  const result: string[] = [];
  for (let i = 1; i <= MAX_PER_PRODUCT; i++) {
    for (const ext of ["jpg", "jpeg", "png", "webp"]) {
      const file = `${slug}-${i}.${ext}`;
      if (fs.existsSync(path.join(PLYWOOD_DIR, file))) {
        result.push(`/images/plywood/${file}`);
        break;
      }
    }
  }
  return result;
}

export const productImages: Record<string, string[]> = Object.fromEntries(
  SLUGS.map((slug) => [slug, resolveImages(slug)]),
);
