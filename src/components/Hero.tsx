import { ReactNode } from "react";

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  bgImage?: string;
  bgGradient?: string;
  align?: "left" | "center";
  height?: "full" | "hero" | "tall" | "medium" | "short";
  /** Darkness of overlay over bgImage. "soft" lets the image show through more clearly. */
  overlay?: "soft" | "normal" | "dark";
};

export default function Hero({
  eyebrow,
  title,
  description,
  bgImage,
  bgGradient,
  align = "left",
  height = "hero",
  overlay = "normal",
}: HeroProps) {
  const heightClass = {
    full: "min-h-screen",
    hero: "min-h-[72vh] lg:min-h-0",
    tall: "min-h-[78vh]",
    medium: "min-h-[55vh]",
    short: "min-h-[40vh]",
  }[height];

  const overlayGradient = {
    soft: "linear-gradient(180deg, rgba(26,32,44,0.35) 0%, rgba(26,32,44,0.65) 100%)",
    normal: "linear-gradient(180deg, rgba(26,32,44,0.55) 0%, rgba(26,32,44,0.85) 100%)",
    dark: "linear-gradient(180deg, rgba(26,32,44,0.75) 0%, rgba(26,32,44,0.96) 100%)",
  }[overlay];

  const background = bgImage
    ? `${overlayGradient}, url('${bgImage}') center/cover no-repeat`
    : bgGradient || "#1A202C";

  return (
    <section
      className={`relative ${heightClass} flex items-center`}
      style={{ background }}
    >
      <div
        className={`relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-28 lg:pt-36 pb-14 lg:pb-32 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
          {eyebrow && (
            <p
              className="font-bold mb-4 text-white"
              style={{
                fontSize: "13px",
                letterSpacing: "5px",
                lineHeight: "20px",
              }}
            >
              {eyebrow}
            </p>
          )}
          <h1 className="text-white mb-5">{title}</h1>
          {description && (
            <div
              className="text-white/90"
              style={{ fontSize: "15px", lineHeight: "26px", fontWeight: 400 }}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
