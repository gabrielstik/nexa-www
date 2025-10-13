import { PrismicNextLink } from "@prismicio/next";

const VARIANT_TO_CLASSES = {
  primary:
    "text-geist-mono inline-flex items-center gap-2 rounded-md bg-[#F2F9BE] text-gray-900 px-5 py-3 font-medium hover:bg-[F2F9BE] transition-colors",
  secondary:
    "inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition-colors",
  ghost:
    "inline-flex items-center gap-2 rounded-md text-white/80 hover:text-white px-3 py-2 font-medium",
  black:
    "inline-flex items-center gap-2 rounded-md bg-black text-white px-5 py-3 font-medium hover:bg-black/90 transition-colors",
};

export default function CtaButton({
  href,
  label,
  variant = "primary",
  newTab = false,
  showArrow = false,
  showPlus = false,
}) {
  const className = VARIANT_TO_CLASSES[variant] || VARIANT_TO_CLASSES.primary;
  return (
    <PrismicNextLink
      href={href}
      className={className}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      <span>{label}</span>
      {showPlus ? <span aria-hidden>＋</span> : null}
      {!showPlus && showArrow ? <span aria-hidden>→</span> : null}
    </PrismicNextLink>
  );
}
