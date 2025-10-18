"use client";

import { H4, L1 } from "@/components/Text";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

export default function BlogCarousel({ slice }) {
  const { primary, items } = slice;

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          {primary.kicker ? (
            <PrismicRichText
              field={primary.kicker}
              components={{
                paragraph: ({ children }) => (
                  <L1 className="mb-0">{children}</L1>
                ),
              }}
            />
          ) : (
            <L1>BLOG</L1>
          )}
          {/* Basic prev/next placeholders (no state) */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full grid place-items-center bg-black/10">
              ‹
            </div>
            <div className="h-8 w-8 rounded-full grid place-items-center bg-black/10">
              ›
            </div>
          </div>
        </div>

        <div
          className="flex overflow-x-auto gap-8 scroll-smooth snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {items?.map((item, i) => (
            <article
              key={i}
              className={`snap-start shrink-0 w-[780px] max-w-[85vw] ${i === 0 ? "ml-2" : ""}`}
            >
              {/* If your blog post document has an image field, render it here when available */}
              {item.post?.data?.image ? (
                <PrismicNextImage
                  field={item.post.data.image}
                  className="aspect-[16/9] rounded-[12px] object-cover w-full"
                />
              ) : (
                <div className="aspect-[16/9] rounded-[12px] bg-[#E9E7E1]" />
              )}

              {/* Title from linked document if available; otherwise fallback to link label */}
              <div className="mt-5">
                {item.post?.data?.title ? (
                  <PrismicRichText
                    field={item.post.data.title}
                    components={{
                      heading1: ({ children }) => <H4>{children}</H4>,
                      heading2: ({ children }) => <H4>{children}</H4>,
                      paragraph: ({ children }) => <H4>{children}</H4>,
                    }}
                  />
                ) : (
                  <H4>
                    <PrismicLink field={item.post}>Voir l’article</PrismicLink>
                  </H4>
                )}
              </div>

              {/* Subcontent intentionally omitted as requested */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
