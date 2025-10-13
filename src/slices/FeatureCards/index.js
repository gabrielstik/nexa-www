import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function FeatureCards({ slice }) {
  const { primary, items } = slice;

  return (
    <section className="py-16">
      {primary.section_heading?.length ? (
        <div className="mx-auto max-w-6xl px-6">
          <PrismicRichText
            field={primary.section_heading}
            components={{
              paragraph: ({ children }) => (
                <p className="text-center text-sm tracking-[0.25em] text-black/70">
                  {children}
                </p>
              ),
              heading2: ({ children }) => (
                <h2 className="mt-2 text-center text-2xl font-medium">
                  {children}
                </h2>
              ),
            }}
          />
        </div>
      ) : null}

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {items?.map((item, i) => (
          <article key={i} className="rounded-lg bg-lime-100 p-8">
            {item.visual?.url ? (
              <div className="mb-6">
                <PrismicNextImage
                  field={item.visual}
                  className="w-full rounded-md"
                  alt=""
                />
              </div>
            ) : null}

            {item.pill?.length ? (
              <div className="mb-3">
                <PrismicRichText
                  field={item.pill}
                  components={{
                    paragraph: ({ children }) => (
                      <span className="inline-block rounded-full bg-black text-white px-4 py-1 text-sm">
                        {children}
                      </span>
                    ),
                  }}
                />
              </div>
            ) : null}

            <PrismicRichText
              field={item.title}
              components={{
                paragraph: ({ children }) => (
                  <p className="font-semibold tracking-tight">{children}</p>
                ),
              }}
            />

            <PrismicRichText
              field={item.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="mt-3 text-black/70 leading-relaxed">
                    {children}
                  </p>
                ),
              }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
