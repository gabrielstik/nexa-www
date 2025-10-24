import CtaButton from "@/components/CtaButton";
import { h1ClassName } from "@/utils/style";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";

export default function Hero({ slice }) {
  const { primary, items } = slice;

  return (
    <section className="relative isolate overflow-hidden pt-[80px]">
      {primary.background_image?.url ? (
        <div className="absolute inset-0 -z-10">
          <PrismicNextImage
            field={primary.background_image}
            className="h-full w-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <div className="text-white/90">
            <PrismicRichText
              field={primary.kicker}
              components={{
                paragraph: ({ children }) => (
                  <p className="mb-4 text-xl">{children}</p>
                ),
              }}
            />
            <PrismicRichText
              field={primary.heading}
              components={{
                heading1: ({ children }) => (
                  <h1 className={twMerge(h1ClassName, "text-white")}>
                    {children}
                  </h1>
                ),
              }}
            />
            <PrismicRichText
              field={primary.subheading}
              components={{
                paragraph: ({ children }) => (
                  <p className="mt-6 text-xl text-white/80 max-w-2xl">
                    {children}
                  </p>
                ),
              }}
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {items?.map((item, i) => (
              <CtaButton
                key={i}
                href={item.button_link}
                label={item.button_label}
                variant={item.button_variant || "primary"}
                newTab={item.button_new_tab}
                showArrow={item.button_show_arrow}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
