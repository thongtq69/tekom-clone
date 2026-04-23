"use client";

import { useEffect, useState } from "react";

type Props = {
  images: string[];
  alt: string;
  prevLabel?: string;
  nextLabel?: string;
  closeLabel?: string;
  className?: string;
  itemClassName?: string;
};

export default function LightboxGrid({
  images,
  alt,
  prevLabel = "Previous",
  nextLabel = "Next",
  closeLabel = "Close",
  className = "grid grid-cols-2 md:grid-cols-4 gap-2",
  itemClassName = "aspect-[3/4]",
}: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
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
      <div className={className}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`${alt} ${i + 1}`}
            onClick={() => {
              setActive(i);
              setOpen(true);
            }}
            className={`${itemClassName} bg-cover bg-center cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
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
