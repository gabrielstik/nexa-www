"use client";

import { L1, P1 } from "@/components/Text";
import { PrismicRichText } from "@prismicio/react";

function FaqItem({ q, a, defaultOpen = false }) {
  return (
    <li className="rounded-[10px] overflow-hidden">
      <details className="group" open={defaultOpen}>
        <summary className="list-none cursor-pointer w-full text-left px-6 py-5 flex items-center justify-between transition-colors bg-white group-open:bg-[#F1F8C9]">
          <span className="text-free font-[700] text-[14px] leading-[22px] uppercase text-dark-100">
            <PrismicRichText
              field={q}
              components={{
                paragraph: ({ children }) => <span>{children}</span>,
              }}
            />
          </span>
          <span
            aria-hidden
            className="text-[22px] leading-none text-dark-100 select-none"
          >
            <span className="group-open:hidden">+</span>
            <span className="hidden group-open:inline">×</span>
          </span>
        </summary>
        <div className="px-6 bg-white">
          <div className="py-5 border-t border-black/10">
            <PrismicRichText
              field={a}
              components={{ paragraph: ({ children }) => <P1>{children}</P1> }}
            />
          </div>
        </div>
      </details>
    </li>
  );
}

export default function Faq({ slice }) {
  const { primary, items } = slice;

  return (
    <section className="w-full py-20 bg-[#EEEADF]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {primary.kicker ? (
          <div className="mb-6">
            <PrismicRichText
              field={primary.kicker}
              components={{
                paragraph: ({ children }) => (
                  <L1 className="mb-0">{children}</L1>
                ),
              }}
            />
          </div>
        ) : null}

        <ul className="space-y-3">
          {items?.map((item, i) => (
            <FaqItem
              key={i}
              q={item.question}
              a={item.answer}
              defaultOpen={i === 2}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
