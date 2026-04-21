<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Rules — TEKCOM Clone

> Đọc kỹ trước khi viết bất kỳ dòng code nào trong repo này. Mọi rule dưới đây là BẮT BUỘC trừ khi user nói khác.

## Tech stack (cố định)

- **Framework:** Next.js 16 App Router (Turbopack)
- **Styling:** Tailwind CSS v4 (dùng `@theme inline` trong `globals.css`, KHÔNG có `tailwind.config.js`)
- **Language:** TypeScript strict
- **Fonts:** `next/font/google` — Montserrat (sans) + Roboto Condensed (display)
- **Images:** `next/image` cho ảnh local trong `public/images/`

## Cấu trúc thư mục

```
src/
├── app/
│   ├── globals.css           ← Theme + utility classes (font, color, btn-gold, hero…)
│   ├── favicon.ico
│   └── [lang]/               ← MỌI page nằm trong dynamic segment này
│       ├── layout.tsx        ← Load dict, truyền xuống Header/Footer
│       ├── page.tsx          ← Home (About Us)
│       ├── plywood/page.tsx
│       ├── cabinets/page.tsx
│       └── …                 ← Mỗi route mới = thêm folder ở đây
├── components/               ← Shared UI components
├── dictionaries/
│   ├── vi.json               ← Tiếng Việt (default)
│   ├── en.json               ← Tiếng Anh
│   └── index.ts              ← getDictionary, hasLocale, Locale, locales
└── proxy.ts                  ← Tự redirect / → /vi
```

## Quy tắc 1 — i18n là BẮT BUỘC

❌ KHÔNG được hard-code chuỗi text (tiếng Việt hay Anh) trực tiếp vào JSX.

✅ Mọi text hiển thị cho người dùng phải lấy từ dictionary:

```tsx
// app/[lang]/<page>/page.tsx
import { getDictionary, hasLocale } from "@/dictionaries";
import { notFound } from "next/navigation";

export default async function MyPage(props: PageProps<"/[lang]/my-page">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return <h1>{dict.myPage.title}</h1>;
}
```

### Workflow khi thêm content/feature mới

| Bước | Việc làm |
|------|---------|
| 1 | Mở `src/dictionaries/vi.json`, thêm key + giá trị tiếng Việt |
| 2 | Mở **TẤT CẢ 5 file còn lại** (`en.json`, `zh.json`, `hi.json`, `ko.json`, `ja.json`) thêm **CÙNG key** với value đã dịch |
| 3 | Trong page/component, đọc `dict.<key>` thay vì hard-code |
| 4 | TypeScript suy `Dictionary` từ `vi.json` → mọi key tự autocomplete + báo lỗi nếu thiếu key ở các file khác |

### Ngôn ngữ hiện tại (6 ngôn ngữ)

| Code | Ngôn ngữ | File | URL prefix |
|------|----------|------|------------|
| `vi` | 🇻🇳 Tiếng Việt (default) | `vi.json` | `/vi/...` |
| `en` | 🇬🇧 English | `en.json` | `/en/...` |
| `zh` | 🇨🇳 中文 | `zh.json` | `/zh/...` |
| `hi` | 🇮🇳 हिन्दी | `hi.json` | `/hi/...` |
| `ko` | 🇰🇷 한국어 | `ko.json` | `/ko/...` |
| `ja` | 🇯🇵 日本語 | `ja.json` | `/ja/...` |

`/` tự động redirect sang `/vi` (default).

### Khi user yêu cầu thêm ngôn ngữ mới

1. Tạo `src/dictionaries/<code>.json` (copy structure từ `vi.json`, dịch values)
2. Thêm vào `src/dictionaries/index.ts` trong `dictionaries` object
3. Thêm code vào 4 nơi trong `src/dictionaries/locales.ts`: `locales`, `localeNames`, `localeFlags` (và verify `defaultLocale` nếu cần đổi)
4. Thêm code vào `locales` array trong `src/proxy.ts`

### Module tách rời server/client

- `src/dictionaries/index.ts` — **server-only**, chứa `getDictionary()`. CHỈ import từ Server Components.
- `src/dictionaries/locales.ts` — client-safe, chứa `locales`, `Locale`, `localeNames`, `localeFlags`, `hasLocale`. Client components (vd `Header.tsx`) phải import từ đây.

## Quy tắc 2 — Link nội bộ luôn có prefix `/${lang}`

❌ `<Link href="/contact">` — sẽ bị proxy redirect mất state

✅ `<Link href={\`/${lang}/contact\`}>` — đúng locale hiện tại

Layout và pages đã nhận `lang` qua params; client components nhận qua props (xem `Header.tsx`).

## Quy tắc 3 — Page = async Server Component

```tsx
export default async function MyPage(props: PageProps<"/[lang]/route">) {
  const { lang } = await props.params;   // ⚠️ params là Promise trong Next 16
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  // ...
}
```

- `params` luôn là `Promise<…>` — phải `await`
- Dùng `PageProps<…>` / `LayoutProps<…>` (global helper, không cần import)
- `notFound()` nếu lang không hợp lệ

## Quy tắc 4 — Brand identity (đừng đổi nếu không có lý do)

| Token | Giá trị | CSS var |
|-------|---------|---------|
| Navy chính | `#153452` | `var(--color-navy)` |
| Navy đậm | `#0d2238` | `var(--color-navy-dark)` |
| Gold accent | `#d18f26` | `var(--color-gold)` |
| Font sans | Montserrat | `var(--font-sans)` |
| Font display | Roboto Condensed | `var(--font-display)` |

Utility classes có sẵn: `font-display`, `heading-eyebrow`, `btn-gold`, `btn-outline`, `scrolldown`, `bg-overlay`.

## Quy tắc 5 — Components phổ biến

- **Hero**: `<Hero eyebrow title description bgImage height />` — dùng cho mọi top section
- **SectionTitle**: `<SectionTitle eyebrow title align />` — heading có thanh gold underline
- **Header / Footer**: nhận `{ lang, dict }` props, không tự fetch dict

Khi tạo section mới, ưu tiên reuse 2 component trên thay vì build lại.

## Quy tắc 6 — Ảnh

- Local: đặt trong `public/images/`, reference bằng `/images/<file>`
- `next/image` cho ảnh `<Image>`, background dùng `style={{ backgroundImage: "url('/images/...')" }}`
- Khi cần download ảnh hàng loạt: thêm vào `scripts/download-images.mjs` (Node fetch native, không cần curl/wget)

## Quy tắc 7 — Chạy dev/build

```bash
npm run dev       # http://localhost:3000 (auto-pickup port khác nếu busy)
npm run build     # Production build
npm run start     # Production server
```

⚠️ Trước khi báo "xong", verify trên trình duyệt qua chrome-devtools MCP — chụp screenshot, check console errors.

## Quy tắc 8 — KHÔNG làm

- ❌ Hard-code text bằng tiếng Việt hoặc Anh trong JSX
- ❌ Quên `await props.params`
- ❌ Tạo `tailwind.config.js` (Tailwind v4 không cần)
- ❌ Dùng `pages/` directory (đây là App Router)
- ❌ Đặt page ngoài `[lang]/` segment
- ❌ Hard-code màu hex thay vì dùng CSS var
- ❌ Bỏ qua `node_modules/next/dist/docs/` khi không chắc API

## Quy tắc 9 — Bản quyền nội dung

- Ảnh hiện tại trong `public/images/` lấy từ tekcom.vn — chỉ dùng cho **demo nội bộ**
- Trước khi deploy production, phải thay bằng ảnh do khách hàng cung cấp
- Nội dung text trong dictionary cũng vậy: kiểm tra với khách trước khi public

## Tham khảo nhanh

- Next.js docs offline: `node_modules/next/dist/docs/01-app/`
- I18n guide: `node_modules/next/dist/docs/01-app/02-guides/internationalization.md`
- Tailwind v4 (theme): xem `src/app/globals.css`
- Pattern mẫu: copy từ `src/app/[lang]/cabinets/page.tsx` khi tạo page mới
