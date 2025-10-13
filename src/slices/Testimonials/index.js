import CtaButton from "@/components/CtaButton";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function Testimonials({ slice }) {
  const { primary, items } = slice;

  return (
    <section className="py-16">
      {primary.kicker?.length ? (
        <div className="mx-auto max-w-6xl px-6">
          <PrismicRichText
            field={primary.kicker}
            components={{
              paragraph: ({ children }) => (
                <p className="text-center text-sm tracking-[0.25em] text-black/70">
                  {children}
                </p>
              ),
            }}
          />
        </div>
      ) : null}

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2 xl:grid-cols-3">
        {items?.map((item, i) => (
          <article
            key={i}
            className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
          >
            {item.image?.url ? (
              <PrismicNextImage
                field={item.image}
                className="h-56 w-full object-cover"
                alt=""
              />
            ) : null}
            <div className="bg-stone-100 p-6">
              <PrismicRichText
                field={item.quote}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-stone-900 leading-relaxed">{children}</p>
                  ),
                }}
              />
              <div className="mt-4 text-stone-600 text-sm uppercase tracking-wide">
                <PrismicRichText
                  field={item.author}
                  components={{
                    paragraph: ({ children }) => <p>{children}</p>,
                  }}
                />
              </div>
              {item.cta_label || item.cta_link ? (
                <div className="mt-4 flex justify-end">
                  <CtaButton
                    href={item.cta_link}
                    label={item.cta_label || "Voir plus"}
                    variant="black"
                    showPlus
                  />
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
