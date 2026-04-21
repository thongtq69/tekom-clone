type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  inverse = false,
}: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p
          className="heading-eyebrow mb-3"
          style={{ color: "var(--color-gold)" }}
        >
          {eyebrow}
        </p>
      )}
      <h2 style={inverse ? { color: "#fff", letterSpacing: "5px" } : undefined}>
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-3 max-w-2xl"
          style={{
            color: inverse
              ? "rgba(255,255,255,0.75)"
              : "var(--color-muted)",
            fontSize: "15px",
            lineHeight: "24px",
          }}
        >
          {subtitle}
        </p>
      )}
      <div
        className="h-[2px] w-10 mt-4"
        style={{
          background: "var(--color-gold)",
          marginLeft: align === "center" ? "auto" : 0,
          marginRight: align === "center" ? "auto" : 0,
        }}
      />
    </div>
  );
}
