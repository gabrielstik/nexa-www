"use client";

import { L1 } from "@/components/Text";
import { h3ClassName, p1ClassName } from "@/utils/style";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Testimonials({ slice }) {
  const { primary, items = [] } = slice;
  const [index, setIndex] = useState(() => (items.length > 1 ? 1 : 0));
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [gapPx, setGapPx] = useState(24);
  const [sidePadding, setSidePadding] = useState(0);

  const goTo = (i) =>
    setIndex(((i % items.length) + items.length) % items.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [index, items.length]);

  // Measure viewport and compute slide width so adjacent slides peek in view
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const compute = () => {
      const containerWidth = el.clientWidth || 0;
      const isMd = window.matchMedia("(min-width: 768px)").matches;
      // On md+ size each card to 60vh of viewport (capped by container width)
      // On mobile, keep full width for better readability
      const s = isMd
        ? Math.min(containerWidth, Math.round(window.innerHeight * 0.6))
        : containerWidth;
      setSlideWidth(s);
      setGapPx(isMd ? 32 : 24);
      setSidePadding(Math.max(0, (containerWidth - s) / 2));
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  if (!items.length) return null;

  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto">
        {primary.kicker?.length ? (
          <div className="mb-8 text-center">
            <PrismicRichText
              field={primary.kicker}
              components={{
                paragraph: ({ children }) => (
                  <h2 className={h3ClassName}>{children}</h2>
                ),
              }}
            />
          </div>
        ) : (
          <L1 className="mb-8 text-center">CE QU’ILS EN PENSENT</L1>
        )}

        <div ref={viewportRef} className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 gap-6 md:gap-8"
            style={{
              transform: `translateX(-${index * (slideWidth + gapPx)}px)`,
              paddingLeft: `${sidePadding}px`,
              paddingRight: `${sidePadding}px`,
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="shrink-0"
                style={{ width: `${slideWidth}px` }}
              >
                <div className="rounded-[16px] overflow-hidden shadow-sm bg-white">
                  <div className="h-[260px] md:h-[360px] bg-[#E9E7E1] flex items-center justify-center">
                    {item.image?.url ? (
                      <PrismicNextImage
                        field={item.image}
                        className="h-full w-full object-cover"
                        alt=""
                      />
                    ) : (
                      <span className="text-5xl md:text-7xl tracking-widest text-white/80 mix-blend-overlay">
                        LOGO
                      </span>
                    )}
                  </div>

                  <div className="bg-[#E9E7E1]/60 p-6">
                    <PrismicRichText
                      field={item.quote}
                      components={{
                        paragraph: ({ children }) => (
                          <p className={twMerge(p1ClassName)}>{children}</p>
                        ),
                      }}
                    />
                    <PrismicRichText
                      field={item.author}
                      components={{
                        paragraph: ({ children }) => (
                          <p className="mt-4 text-geist-mono text-dark-100 text-xs uppercase">
                            {children}
                          </p>
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {items.length > 1 ? (
            <>
              <button
                aria-label="Previous"
                onClick={prev}
                className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </>
          ) : null}
        </div>

        {items.length > 1 ? (
          <div className="mt-6 flex items-center justify-center gap-[3px]">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === i ? "bg-black" : "bg-black !h-[1px]"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
