"use client";

import { useEffect, useState } from "react";

type Props = {
  images: string[];
  alt: string;
  prevLabel?: string;
  nextLabel?: string;
  closeLabel?: string;
  /** Number of images visible at a time in the grid. Default 4. */
  visible?: number;
};

/**
 * Grid shows a sliding window of `visible` images (default 4).
 * Prev/Next buttons rotate the window through the full image list.
 * Click = open lightbox (does NOT navigate).
 */
export default function ProductGallery({
  images,
  alt,
  prevLabel = "Previous",
  nextLabel = "Next",
  closeLabel = "Close",
  visible = 4,
}: Props) {
  const [open, setOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [start, setStart] = useState(0);

  const total = images.length;
  const windowSize = Math.min(visible, total);
  const hasPager = total > windowSize;

  const shown = Array.from({ length: windowSize }, (_, i) => {
    const idx = (start + i) % total;
    return { src: images[idx], idx };
  });

  const shiftNext = () => setStart((s) => (s + 1) % total);
  const shiftPrev = () => setStart((s) => (s - 1 + total) % total);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight")
        setLightboxIdx((i) => (i + 1) % total);
      if (e.key === "ArrowLeft")
        setLightboxIdx((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, total]);

  if (total === 0) return null;

  return (
    <>
      <div className="relative border-t border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1" aria-label={alt}>
          {shown.map(({ src, idx }) => (
            <button
              key={`${start}-${idx}`}
              type="button"
              onClick={() => {
                setLightboxIdx(idx);
                setOpen(true);
              }}
              className="relative aspect-[3/4] overflow-hidden cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]"
              aria-label={`${alt} ${idx + 1}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${src}')` }}
              />
            </button>
          ))}
        </div>

        {hasPager && (
          <>
            <button
              type="button"
              aria-label={prevLabel}
              onClick={shiftPrev}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white/90 hover:bg-white text-[color:var(--color-navy)] shadow-md transition-colors text-xl leading-none z-10"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label={nextLabel}
              onClick={shiftNext}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white/90 hover:bg-white text-[color:var(--color-navy)] shadow-md transition-colors text-xl leading-none z-10"
            >
              ›
            </button>
          </>
        )}
      </div>

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
                  setLightboxIdx((i) => (i - 1 + total) % total);
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
                  setLightboxIdx((i) => (i + 1) % total);
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
              src={images[lightboxIdx]}
              alt={`${alt} ${lightboxIdx + 1}`}
              className="max-w-[92vw] max-h-[88vh] object-contain select-none"
            />
            <p className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 text-white/80 text-xs tracking-widest uppercase">
              {lightboxIdx + 1} / {total}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
