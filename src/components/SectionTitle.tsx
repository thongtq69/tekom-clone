type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p className="heading-eyebrow mb-3" style={{ color: "var(--color-gold)" }}>
          {eyebrow}
        </p>
      )}
      <h2
        className="font-display font-bold uppercase text-2xl md:text-3xl lg:text-4xl leading-tight tracking-wide mb-3"
        style={{ color: "var(--color-navy)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base max-w-2xl"
          style={{ color: "var(--color-muted)" }}
        >
          {subtitle}
        </p>
      )}
      <div
        className="h-[3px] w-12 mt-5"
        style={{
          background: "var(--color-gold)",
          marginLeft: align === "center" ? "auto" : 0,
          marginRight: align === "center" ? "auto" : 0,
        }}
      />
    </div>
  );
}
