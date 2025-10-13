import CtaButton from "@/components/CtaButton";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function ExpertiseList({ slice }) {
  const { primary, items } = slice;

  return (
    <section className="py-16">
      {primary.section_heading?.length ? (
        <div className="mx-auto max-w-6xl px-6">
          <PrismicRichText
            field={primary.section_heading}
            components={{
              paragraph: ({ children }) => (
                <p className="text-sm tracking-[0.25em] text-black/70">
                  {children}
                </p>
              ),
              heading2: ({ children }) => (
                <h2 className="mt-2 text-3xl font-medium">{children}</h2>
              ),
            }}
          />
        </div>
      ) : null}

      <div className="mx-auto mt-6 max-w-6xl px-6">
        <ul className="divide-y divide-black/10">
          {items?.map((item, i) => (
            <li key={i} className="flex items-center justify-between py-6">
              <div className="min-w-0 pr-6">
                <PrismicRichText
                  field={item.title}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-3xl sm:text-4xl tracking-tight">
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>

              {item.inline_image?.url ? (
                <div className="hidden sm:block pr-6">
                  <PrismicNextImage
                    field={item.inline_image}
                    className="w-36 rotate-6 rounded-md shadow-sm"
                    alt=""
                  />
                </div>
              ) : null}

              <CtaButton
                href={item.cta_link}
                label={item.cta_label || "Voir plus"}
                variant={"black"}
                showPlus
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
