import CtaButton from "@/components/CtaButton";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function CtaBanner({ slice }) {
  const { primary } = slice;

  return (
    <section className="relative isolate overflow-hidden">
      {primary.background_image?.url ? (
        <div className="absolute inset-0 -z-10">
          <PrismicNextImage
            field={primary.background_image}
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : null}

      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <PrismicRichText
          field={primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-white text-5xl sm:text-6xl tracking-tight">
                {children}
              </h2>
            ),
          }}
        />
        <PrismicRichText
          field={primary.subheading}
          components={{
            paragraph: ({ children }) => (
              <p className="mt-6 text-white/85 text-xl max-w-3xl mx-auto">
                {children}
              </p>
            ),
          }}
        />

        {primary.cta_label || primary.cta_link ? (
          <div className="mt-10 flex justify-center">
            <CtaButton
              href={primary.cta_link}
              label={primary.cta_label}
              variant="primary"
              showArrow
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}


