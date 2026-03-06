interface SectionTitleProps {
  lines: string[];
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionTitle({ lines, align = "center", dark = false }: SectionTitleProps) {
  return (
    <div className={`w-full ${align === "center" ? "text-center" : "text-left"}`}>
      {lines.map((line, i) => (
        <p
          key={i}
          className={`text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-tight lg:leading-[64px] ${
            dark ? "text-white" : "text-black"
          }`}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
