"use client";

import { h2ClassName, h3ClassName, p1ClassName } from "@/utils/style";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";

export default function UseCase({ slice }) {
  const { primary } = slice;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        {primary.overline?.length ? (
          <div className="mb-6 text-center">
            <PrismicRichText
              field={primary.overline}
              components={{
                paragraph: ({ children }) => (
                  <h3 className={twMerge(h3ClassName, "text-[#23261B]/80")}>
                    {children}
                  </h3>
                ),
              }}
            />
          </div>
        ) : null}

        {primary.image?.url ? (
          <div className="rounded-[10px] overflow-hidden">
            <PrismicNextImage
              field={primary.image}
              className="w-full h-auto object-cover"
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
            <PrismicRichText
              field={primary.left_title}
              components={{
                paragraph: ({ children }) => (
                  <h4 className="font-free font-[700] text-[14px] uppercase text-[#232518] mb-3">
                    {children}
                  </h4>
                ),
              }}
            />
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
            <PrismicRichText
              field={primary.middle_title}
              components={{
                paragraph: ({ children }) => (
                  <h4 className="font-free font-[700] text-[14px] uppercase text-[#232518] mb-3">
                    {children}
                  </h4>
                ),
              }}
            />
            <ul className="space-y-2">
              {primary.middle_list?.map?.((row, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-[6px] block h-1.5 w-1.5 rounded-full bg-[#232518]" />
                  <PrismicRichText
                    field={row.item}
                    components={{
                      paragraph: ({ children }) => (
                        <p className={p1ClassName}>{children}</p>
                      ),
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <PrismicRichText
              field={primary.right_title}
              components={{
                paragraph: ({ children }) => (
                  <h4 className="font-free font-[700] text-[14px] uppercase text-[#232518] mb-3">
                    {children}
                  </h4>
                ),
              }}
            />
            <ul className="space-y-2">
              {primary.right_list?.map?.((row, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-[6px] block h-1.5 w-1.5 rounded-full bg-[#232518]" />
                  <PrismicRichText
                    field={row.item}
                    components={{
                      paragraph: ({ children }) => (
                        <p className={p1ClassName}>{children}</p>
                      ),
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
