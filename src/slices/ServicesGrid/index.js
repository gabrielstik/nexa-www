import { PrismicRichText } from "@prismicio/react";

export default function ServicesGrid({ slice }) {
  const { primary, items } = slice;

  // Split items into two columns
  const midpoint = Math.ceil((items?.length || 0) / 2);
  const colA = items?.slice(0, midpoint) || [];
  const colB = items?.slice(midpoint) || [];

  const ServiceItem = ({ item }) => (
    <div className="flex gap-4 py-6">
      <div className="mt-2 grid grid-cols-2 gap-1">
        <span className="h-3 w-3 rounded-full bg-black" />
        <span className="h-3 w-3 rounded-full bg-black/20" />
        <span className="h-3 w-3 rounded-full bg-black/40" />
        <span className="h-3 w-3 rounded-full bg-black/10" />
      </div>
      <div>
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
              <p className="mt-2 text-black/70 leading-relaxed">{children}</p>
            ),
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl rounded-2xl bg-lime-200 px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
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
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              {colA.map((item, i) => (
                <ServiceItem item={item} key={`a-${i}`} />
              ))}
            </div>
            <div>
              {colB.map((item, i) => (
                <ServiceItem item={item} key={`b-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
