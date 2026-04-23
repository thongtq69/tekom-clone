function emojiToCodepoints(emoji: string): string {
  const codepoints = [...emoji].map((c) => c.codePointAt(0)!.toString(16));
  if (codepoints.length > 1) {
    return codepoints.filter((cp) => cp !== "fe0f").join("-");
  }
  return codepoints.join("-");
}

type Props = {
  emoji: string;
  size?: number;
  className?: string;
};

export default function Twemoji({ emoji, size = 20, className }: Props) {
  const cp = emojiToCodepoints(emoji);
  const src = `https://cdn.jsdelivr.net/gh/jdecked/twemoji@v15.1.0/assets/svg/${cp}.svg`;
  return (
    <img
      src={src}
      alt={emoji}
      width={size}
      height={size}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
      draggable={false}
    />
  );
}
