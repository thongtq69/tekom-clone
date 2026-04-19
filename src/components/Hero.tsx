import { ReactNode } from "react";

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  bgImage?: string;
  bgGradient?: string;
  align?: "left" | "center";
  height?: "full" | "tall" | "medium";
  showScroll?: boolean;
};

export default function Hero({
  eyebrow,
  title,
  description,
  bgImage,
  bgGradient,
  align = "left",
  height = "full",
  showScroll = true,
}: HeroProps) {
  const heightClass = {
    full: "min-h-screen",
    tall: "min-h-[80vh]",
    medium: "min-h-[60vh]",
  }[height];

  const background =
    bgImage
      ? `url('${bgImage}') center/cover no-repeat`
      : bgGradient ||
        "linear-gradient(135deg, #153452 0%, #0d2238 60%, #1a4470 100%)";

  return (
    <section
      className={`relative ${heightClass} flex items-center bg-overlay`}
      style={{ background }}
    >
      <div
        className={`relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-24 pb-20 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
          {eyebrow && <p className="heading-eyebrow mb-6">{eyebrow}</p>}
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide uppercase mb-6">
            {title}
          </h1>
          {description && (
            <div className="text-white/85 text-base md:text-lg leading-relaxed font-light max-w-2xl">
              {description}
            </div>
          )}
        </div>
      </div>
      {showScroll && <div className="scrolldown">SCROLL DOWN</div>}
    </section>
  );
}
