"use client";

import { useEffect, useState } from "react";

type Props = {
  images: string[];
  alt: string;
  prevLabel?: string;
  nextLabel?: string;
  closeLabel?: string;
};

export default function ProductDetailGallery({
  images,
  alt,
  prevLabel = "Previous",
  nextLabel = "Next",
  closeLabel = "Close",
}: Props) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const total = images.length;
  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (total === 0) return null;

  return (
    <>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`${alt} ${active + 1}`}
          className="block w-full aspect-[4/3] bg-cover bg-center border border-[color:var(--color-line)] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]"
          style={{ backgroundImage: `url('${images[active]}')` }}
        />

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label={prevLabel}
              onClick={prev}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white/90 hover:bg-white text-[color:var(--color-navy)] shadow-md transition-colors text-xl leading-none"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label={nextLabel}
              onClick={next}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white/90 hover:bg-white text-[color:var(--color-navy)] shadow-md transition-colors text-xl leading-none"
            >
              ›
            </button>
            <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/50 text-white text-[11px] font-bold tracking-wider">
              {active + 1} / {total}
            </span>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mt-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${alt} ${i + 1}`}
              aria-pressed={i === active}
              className={`aspect-[4/3] bg-cover bg-center border transition-all focus:outline-none ${
                i === active
                  ? "border-[color:var(--color-gold)] border-2 opacity-100"
                  : "border-[color:var(--color-line)] opacity-70 hover:opacity-100"
              }`}
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label={closeLabel}
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl leading-none"
          >
            ✕
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                aria-label={prevLabel}
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label={nextLabel}
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-xl"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative max-w-[92vw] max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[active]}
              alt={`${alt} ${active + 1}`}
              className="max-w-[92vw] max-h-[88vh] object-contain select-none"
            />
            {total > 1 && (
              <p className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 text-white/80 text-xs tracking-widest uppercase">
                {active + 1} / {total}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
