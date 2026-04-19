import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");

const images = {
  "logo.png": "https://tekcom.vn/uploads/images/general/b6581780c67413605de3c740cd2e117d.png",
  "hero-about.png": "https://tekcom.vn/uploads/images/general/9c6109ac851bfda8dc26c39932ec784a-fill-size-1920x900.png",
  "vision-bg.jpg": "https://tekcom.vn/uploads/images/general/dd3e3ef1aafd623eb43c1e4d2a806e43.jpg",
  "factory-bd1.jpg": "https://tekcom.vn/uploads/images/general/aeaf8fc2d693d7eb002107a1aaf55d9e.jpg",
  "factory-bd2.jpeg": "https://tekcom.vn/uploads/images/general/2d8f09e07aecb44eecb1d1e2c6136de9.jpeg",
  "milestones-bg.png": "https://tekcom.vn/uploads/images/general/ab321ef3f5371a05294599fed66860b2.png",
  "hero-cabinets.jpg": "https://tekcom.vn/uploads/images/general/59bf3b5ffb99fc8bbd79ad1c6341fdaf.jpg",
  "hero-sustainability.png": "https://tekcom.vn/uploads/images/general/1d8d8fe84b9efa53ed235e01db757b0f-max-size-1920x900.png",
  "hero-career.png": "https://tekcom.vn/uploads/images/general/aec54b64a387dd12b124c41a71fb1094-max-size-1920x900.png",
  "hero-news.png": "https://tekcom.vn/uploads/images/general/6e54c23b7bfe4ba3711ce54f41194ac7-max-size-1920x900.png",
  "career-1.png": "https://tekcom.vn/uploads/images/general/240ba1c1a3d4b554842e084fb9a9cb19.png",
  "career-2.jpg": "https://tekcom.vn/uploads/images/general/ba93cc791c755a580310e6084feb75e8.jpg",
  "sustainability-1.jpg": "https://tekcom.vn/uploads/images/general/3f6cc955de916a509401d150a917cb4a.jpg",
  "sustainability-2.jpg": "https://tekcom.vn/uploads/images/general/1d8a6e14ee3ae7fa44fcf2a0ec59f44e.jpg",
  "sustainability-3.jpg": "https://tekcom.vn/uploads/images/general/5e2f09e6680b49ca48891dce1261422f.jpg",
  "sustainability-4.jpg": "https://tekcom.vn/uploads/images/general/8a1c2ac939cf150fe58efc9b928ea948.jpg",
  "news-1.png": "https://tekcom.vn/uploads/images/general/735494360fce6db0b242220d53a34728-fill-size-1920x600.png",
  "news-2.png": "https://tekcom.vn/uploads/images/general/20083687478efcd7a2160c47d0b1d4d1-fill-size-1920x600.png",
  "news-3.jpg": "https://tekcom.vn/uploads/images/general/b0099f0b5c1ea8ebc8bd0002c095f425-fill-size-1920x600.jpg",
  "news-thumb-1.png": "https://tekcom.vn/uploads/images/general/735494360fce6db0b242220d53a34728-fill-size-405x270.png",
  "news-thumb-2.png": "https://tekcom.vn/uploads/images/general/20083687478efcd7a2160c47d0b1d4d1-fill-size-405x270.png",
  "news-thumb-3.jpg": "https://tekcom.vn/uploads/images/general/b0099f0b5c1ea8ebc8bd0002c095f425-fill-size-405x270.jpg",
  "news-thumb-4.png": "https://tekcom.vn/uploads/images/general/a11f907a36f58c4447af7de4b174f6f5-fill-size-350x270.png",
  "news-thumb-5.jpg": "https://tekcom.vn/uploads/images/general/eeca92f40b8c2d62e04c4266e3aefe6f-fill-size-350x270.jpg",
  "news-thumb-6.png": "https://tekcom.vn/uploads/images/general/9960378cfad286f12722e7ad53f6ca78-fill-size-350x270.png",
};

if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });

let ok = 0,
  fail = 0;
for (const [name, url] of Object.entries(images)) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15",
        Referer: "https://tekcom.vn/",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(join(outDir, name), buf);
    console.log(`✓ ${name} (${(buf.length / 1024).toFixed(1)} KB)`);
    ok++;
  } catch (e) {
    console.log(`✗ ${name}: ${e.message}`);
    fail++;
  }
}
console.log(`\nDone: ${ok} ok, ${fail} failed`);
