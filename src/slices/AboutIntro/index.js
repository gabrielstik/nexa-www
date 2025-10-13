import CtaButton from "@/components/CtaButton";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function AboutIntro({ slice }) {
  const { primary } = slice;

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
        <div>
          {primary.kicker?.length ? (
            <PrismicRichText
              field={primary.kicker}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-sm tracking-[0.25em] text-black/70">
                    {children}
                  </p>
                ),
              }}
            />
          ) : null}

          <PrismicRichText
            field={primary.heading}
            components={{
              heading2: ({ children }) => (
                <h2 className="mt-2 text-5xl leading-tight tracking-tight">
                  {children}
                </h2>
              ),
            }}
          />

          <PrismicRichText
            field={primary.body}
            components={{
              paragraph: ({ children }) => (
                <p className="mt-6 text-lg text-black/70 leading-relaxed">
                  {children}
                </p>
              ),
            }}
          />

          {primary.cta_label || primary.cta_link ? (
            <div className="mt-10">
              <CtaButton
                href={primary.cta_link}
                label={primary.cta_label}
                variant="primary"
                showArrow
              />
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="sm:col-span-1">
            {primary.main_image?.url ? (
              <PrismicNextImage
                field={primary.main_image}
                className="w-full rounded-lg"
                alt=""
              />
            ) : null}
          </div>
          <div className="sm:col-span-1 flex flex-col gap-6">
            <div className="rounded-lg bg-lime-200 p-6">
              <div className="text-5xl font-medium">{primary.stat_value}</div>
              <div className="mt-2 text-black/80 leading-relaxed">
                <PrismicRichText
                  field={primary.stat_text}
                  components={{
                    paragraph: ({ children }) => <p>{children}</p>,
                  }}
                />
              </div>
            </div>
            {primary.secondary_image?.url ? (
              <PrismicNextImage
                field={primary.secondary_image}
                className="w-full rounded-lg"
                alt=""
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
