import CtaButton from "@/components/CtaButton";
import { h3ClassName } from "@/utils/style";
import { PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";

export default function ExpertiseList({ slice }) {
  const { primary, items } = slice;

  return (
    <section className="w-full py-20 bg-[#EEEADF]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrismicRichText
          field={primary.section_heading}
          components={{
            paragraph: ({ children }) => (
              <h2 className={twMerge(h3ClassName, "mb-6")}>{children}</h2>
            ),
            heading2: ({ children }) => (
              <h2 className={twMerge(h3ClassName, "mb-6")}>{children}</h2>
            ),
          }}
        />

        <ul className="divide-y divide-black/10">
          {items?.map((item, i) => (
            <li
              key={i}
              className="py-6 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center"
            >
              <PrismicRichText
                field={item.title}
                components={{
                  paragraph: ({ children }) => (
                    <h3 className="text-[20px] leading-[33px] lg:text-[32px] lg:leading-[42px] text-[#232518] uppercase">
                      {children}
                    </h3>
                  ),
                }}
              />
              <div className="mt-4 md:mt-0 justify-self-end">
                <CtaButton
                  href={item.cta_link}
                  label={item.cta_label || "Voir plus"}
                  variant="black"
                  showPlus
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
