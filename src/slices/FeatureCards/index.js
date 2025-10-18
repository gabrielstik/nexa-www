"use client";

import { h3ClassName, h4ClassName, p1ClassName } from "@/utils/style";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Lottie from "lottie-react";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

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
                <h2 className={twMerge(h3ClassName, "text-center")}>
                  {children}
                </h2>
              ),
              heading2: ({ children }) => (
                <h2 className={twMerge(h3ClassName, "mt-2 text-center")}>
                  {children}
                </h2>
              ),
            }}
          />
        </div>
      ) : null}

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {items?.map((item, i) => (
          <article key={i} className="rounded-lg bg-[#F2F9BE] p-8">
            {item.visual?.url ? (
              <div className="mb-6">
                <PrismicNextImage
                  field={item.visual}
                  className="w-full rounded-md"
                  alt=""
                />
              </div>
            ) : null}

            <CardLottie index={i} />

            {item.pill?.length ? (
              <div className="mb-3">
                <PrismicRichText
                  field={item.pill}
                  components={{
                    paragraph: ({ children }) => (
                      <h2
                        className={twMerge(
                          h3ClassName,
                          "inline-block rounded-full bg-black text-[#F2F9BE] px-4 py-1 text-[14px]"
                        )}
                      >
                        {children}
                      </h2>
                    ),
                  }}
                />
              </div>
            ) : null}

            <PrismicRichText
              field={item.title}
              components={{
                paragraph: ({ children }) => (
                  <h3 className={twMerge(h4ClassName, "mb-2")}>{children}</h3>
                ),
              }}
            />

            <PrismicRichText
              field={item.description}
              components={{
                paragraph: ({ children }) => (
                  <p className={p1ClassName}>{children}</p>
                ),
              }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

function CardLottie({ index }) {
  const [data, setData] = useState(null);

  const src = useMemo(() => {
    const paths = [
      "/lotties/circle.json",
      "/lotties/reactivity.json",
      "/lotties/visiblity.json",
    ];
    return paths[index % 3];
  }, [index]);

  useEffect(() => {
    let isActive = true;
    fetch(src)
      .then((r) => r.json())
      .then((json) => {
        if (isActive) setData(json);
      })
      .catch(() => {});
    return () => {
      isActive = false;
    };
  }, [src]);

  if (!data) return null;

  return (
    <div className="mb-8">
      <Lottie
        animationData={data}
        loop
        autoplay
        style={{ width: "100%", height: 140 }}
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
