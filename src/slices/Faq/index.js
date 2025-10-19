"use client";

import { h3ClassName, h4ClassName, p1ClassName } from "@/utils/style";
import { PrismicRichText } from "@prismicio/react";
import { useRef, useState } from "react";

function FaqItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  return (
    <li className="rounded-[10px] overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`w-full text-left px-6 py-5 flex items-center justify-between transition-colors ${
          open ? "bg-[#F1F8C9]" : "bg-white"
        } hover:bg-[#F1F8C9] cursor-pointer`}
      >
        <span className="text-free font-[700] text-[14px] leading-[22px] uppercase text-dark-100">
          <PrismicRichText
            field={q}
            components={{
              paragraph: ({ children }) => (
                <h2 className={h4ClassName}>{children}</h2>
              ),
            }}
          />
        </span>
        <span
          aria-hidden
          className="text-[22px] leading-none text-dark-100 select-none"
        >
          {open ? "×" : "+"}
        </span>
      </button>
      <div
        className="px-6 bg-white"
        style={{
          maxHeight:
            open && contentRef.current ? contentRef.current.scrollHeight : 0,
          transition: "max-height 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
        }}
      >
        <div ref={contentRef} className="py-5 border-t border-black/10">
          <PrismicRichText
            field={a}
            components={{
              paragraph: ({ children }) => (
                <p className={p1ClassName}>{children}</p>
              ),
            }}
          />
        </div>
      </div>
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
                  <h2 className={h3ClassName}>{children}</h2>
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
