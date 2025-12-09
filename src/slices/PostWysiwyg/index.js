"use client";

import { PrismicRichText } from "@prismicio/react";
import { h2ClassName, p1ClassName } from "@/utils/style";
import { twMerge } from "tailwind-merge";

export default function PostWysiwyg({ slice }) {
  const { primary } = slice || {};

  return (
    <section className="py-10">
      <div className="mx-auto max-w-3xl px-6">
        <PrismicRichText
          field={primary?.content}
          components={{
            heading1: ({ children }) => (
              <h2 className={twMerge(h2ClassName, "mt-8")}>{children}</h2>
            ),
            heading2: ({ children }) => (
              <h2 className={twMerge(h2ClassName, "mt-8")}>{children}</h2>
            ),
            heading3: ({ children }) => (
              <h3 className={twMerge(h2ClassName, "mt-8 text-[24px]")}>
                {children}
              </h3>
            ),
            paragraph: ({ children }) => (
              <p className={twMerge(p1ClassName, "mt-4")}>{children}</p>
            ),
            list: ({ children }) => <ul className="mt-4 list-disc pl-6">{children}</ul>,
            oList: ({ children }) => (
              <ol className="mt-4 list-decimal pl-6">{children}</ol>
            ),
            preformatted: ({ children }) => (
              <pre className="mt-4 overflow-auto rounded-md bg-black/5 p-4 text-sm">
                {children}
              </pre>
            ),
            image: ({ node }) => {
              if (!node?.url) return null;
              return (
                <figure className="my-6">
                  <img
                    src={node.url}
                    alt={node.alt ?? ""}
                    className="w-full h-auto rounded-md"
                  />
                  {node.caption?.length ? (
                    <figcaption className="mt-2 text-center text-sm text-gray-600">
                      <PrismicRichText field={node.caption} />
                    </figcaption>
                  ) : null}
                </figure>
              );
            },
            embed: ({ node }) => (
              <div
                className="my-6"
                dangerouslySetInnerHTML={{ __html: node.oembed?.html || "" }}
              />
            ),
          }}
        />
      </div>
    </section>
  );
}


