interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "outline-light";
}

export default function CTAButton({ label, href, onClick, variant = "outline" }: CTAButtonProps) {
  const base = "inline-flex items-center justify-center px-12 py-2 text-[18px] leading-[38px] rounded-xl transition-colors duration-200 cursor-pointer";
  const variantStyles: Record<string, string> = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black bg-transparent hover:bg-black hover:text-white",
    "outline-light": "border border-white text-white bg-transparent hover:bg-white hover:text-black",
  };
  const styles = variantStyles[variant];

  if (href) {
    return (
      <a href={href} className={`${base} ${styles}`}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {label}
    </button>
  );
}
