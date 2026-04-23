"use client";

import { useState } from "react";

type Props = {
  images: string[];
  alt: string;
  prevLabel: string;
  nextLabel: string;
  className?: string;
};

export default function FactorySlider({
  images,
  alt,
  prevLabel,
  nextLabel,
  className = "",
}: Props) {
  const [idx, setIdx] = useState(0);
  if (images.length === 0) return null;

  const prev = () =>
    setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url('${images[idx]}')` }}
        role="img"
        aria-label={`${alt} ${idx + 1}/${images.length}`}
      />
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label={prevLabel}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/85 hover:bg-white text-[color:var(--color-navy)] flex items-center justify-center shadow-md transition-colors text-xl leading-none"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label={nextLabel}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/85 hover:bg-white text-[color:var(--color-navy)] flex items-center justify-center shadow-md transition-colors text-xl leading-none"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === idx
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <div
            className="absolute top-3 right-3 px-2.5 py-1 bg-black/50 text-white text-[11px] font-bold tracking-wider"
            aria-hidden
          >
            {idx + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
