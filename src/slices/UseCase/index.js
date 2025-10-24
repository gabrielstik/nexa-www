"use client";

import { h2ClassName, h3ClassName, p1ClassName } from "@/utils/style";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";

export default function UseCase({ slice }) {
  const { primary } = slice;

  return (
    <section className="py-16 bg-[#EDE8DF]">
      <div className="mx-auto max-w-6xl px-6">
        {primary.overline?.length ? (
          <div className="mb-6 text-center">
            <PrismicRichText
              field={primary.overline}
              components={{
                paragraph: ({ children }) => (
                  <h3 className={twMerge(h3ClassName, "pb-6")}>{children}</h3>
                ),
              }}
            />
          </div>
        ) : null}

        {primary.image?.url ? (
          <div className="rounded-[10px] overflow-hidden aspect-[16/9]">
            <PrismicNextImage
              field={primary.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        ) : null}

        <div className="mt-10">
          <PrismicRichText
            field={primary.title}
            components={{
              paragraph: ({ children }) => (
                <h2 className={twMerge(h2ClassName)}>{children}</h2>
              ),
            }}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex">
              <PrismicRichText
                field={primary.left_title}
                components={{
                  paragraph: ({ children }) => (
                    <h4
                      className={twMerge(
                        h3ClassName,
                        "text-white mb-3",
                        "bg-[#232518] px-4 py-1 rounded-full"
                      )}
                    >
                      {children}
                    </h4>
                  ),
                }}
              />
            </div>
            <PrismicRichText
              field={primary.left_body}
              components={{
                paragraph: ({ children }) => (
                  <p className={p1ClassName}>{children}</p>
                ),
              }}
            />
          </div>

          <div>
            <div className="flex">
              <PrismicRichText
                field={primary.middle_title}
                components={{
                  paragraph: ({ children }) => (
                    <h4
                      className={twMerge(
                        h3ClassName,
                        "text-white mb-3",
                        "bg-[#232518] px-4 py-1 rounded-full"
                      )}
                    >
                      {children}
                    </h4>
                  ),
                }}
              />
            </div>
            <PrismicRichText
              field={primary.middle_body}
              components={{
                paragraph: ({ children }) => (
                  <p className={p1ClassName}>{children}</p>
                ),
              }}
            />
          </div>

          <div>
            <div className="flex">
              <PrismicRichText
                field={primary.right_title}
                components={{
                  paragraph: ({ children }) => (
                    <h4
                      className={twMerge(
                        h3ClassName,
                        "text-white mb-3",
                        "bg-[#232518] px-4 py-1 rounded-full"
                      )}
                    >
                      {children}
                    </h4>
                  ),
                }}
              />
            </div>
            <PrismicRichText
              field={primary.right_body}
              components={{
                paragraph: ({ children }) => (
                  <p className={p1ClassName}>{children}</p>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
