import {
  h2ClassName,
  h3ClassName,
  h4ClassName,
  p1ClassName,
} from "@/utils/style";
import { PrismicRichText } from "@prismicio/react";
import { twMerge } from "tailwind-merge";

export default function ServicesGrid({ slice }) {
  const { primary, items } = slice;

  const BulletRow = ({ index }) => (
    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className={`w-4 h-4 rounded-full ${
            i <= index ? "bg-dark-100" : "bg-[#DCE9A3]"
          } inline-block`}
        />
      ))}
    </div>
  );

  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F2F9BE] rounded-[12px] px-8 py-12 ">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2">
                <PrismicRichText
                  field={primary.kicker}
                  components={{
                    paragraph: ({ children }) => (
                      <h3 className={h3ClassName}>{children}</h3>
                    ),
                  }}
                />
                <PrismicRichText
                  field={primary.heading}
                  components={{
                    heading2: ({ children }) => (
                      <h2
                        className={twMerge(h2ClassName, "mt-8 max-w-[360px]")}
                      >
                        {children}
                      </h2>
                    ),
                  }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 lg:col-span-3">
                {items?.map((item, i) => (
                  <div key={i} className="flex items-start gap-8">
                    <BulletRow index={i} />
                    <div>
                      <PrismicRichText
                        field={item.title}
                        components={{
                          paragraph: ({ children }) => (
                            <h4 className={twMerge(h4ClassName)}>{children}</h4>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
