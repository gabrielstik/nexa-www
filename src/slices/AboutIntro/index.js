import CtaButton from "@/components/CtaButton";
import { h2ClassName, h3ClassName, p1ClassName } from "@/utils/style";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";

export default function AboutIntro({ slice }) {
  const { primary } = slice;

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
        <div>
          {primary.kicker?.length ? (
            <PrismicRichText
              field={primary.kicker}
              components={{
                paragraph: ({ children }) => (
                  <h3 className={h3ClassName}>{children}</h3>
                ),
              }}
            />
          ) : null}

          <PrismicRichText
            field={primary.heading}
            components={{
              heading2: ({ children }) => (
                <h3 className={twMerge(h2ClassName, "mt-16")}>{children}</h3>
              ),
            }}
          />

          <PrismicRichText
            field={primary.body}
            components={{
              paragraph: ({ children }) => (
                <p className={twMerge(p1ClassName, "mt-6")}>{children}</p>
              ),
            }}
          />

          {primary.cta_label || primary.cta_link ? (
            <div className="mt-10">
              <CtaButton
                href={primary.cta_link}
                label={primary.cta_label}
                variant="primary"
                showArrow
              />
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="sm:col-span-1">
            {primary.main_image?.url ? (
              <PrismicNextImage
                field={primary.main_image}
                className="w-full h-full rounded-[4px] object-cover"
                alt=""
              />
            ) : null}
          </div>
          <div className="sm:col-span-1 flex flex-col gap-2">
            <div className="rounded-[4px] bg-[#F2F9BE] p-6">
              <svg
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[40px] h-auto ml-[-2px] mb-2"
              >
                <circle cx="20" cy="11.875" r="6.25" fill="#23261B" />
                <circle cx="27.73" cy="17.49" r="6.25" fill="#23261B" />
                <circle cx="24.775" cy="26.57" r="6.25" fill="#23261B" />
                <circle cx="15.225" cy="26.57" r="6.25" fill="#23261B" />
                <circle cx="12.27" cy="17.49" r="6.25" fill="#23261B" />
              </svg>
              <PrismicRichText
                field={primary.stat_text}
                components={{
                  paragraph: ({ children }) => (
                    <p className={p1ClassName}>{children}</p>
                  ),
                }}
              />
              <div className={twMerge(h2ClassName, "mt-4 text-center")}>
                {primary.stat_value}
              </div>
            </div>
            {primary.secondary_image?.url ? (
              <PrismicNextImage
                field={primary.secondary_image}
                className="w-full h-full object-cover rounded-[4px]"
                alt=""
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
