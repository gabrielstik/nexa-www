"use client";

import { useEffect, useRef, useState } from "react";
import { L1, P1 } from "./Text";

const ITEMS = [
  {
    company: "LOGO",
    quote:
      "Office ipsum you must be muted. Strategic identify regroup close loop want dogpile. Lean are flesh running 30,000ft closest engagement.",
    author: "JOHN DOE, ARTISAN MENUISIER",
  },
  {
    company: "LOGO",
    quote:
      "Protocol back-end strategy when without nail. Client manager procrastinating after invite those.",
    author: "JANE DOE, FONDATEUR",
  },
  {
    company: "LOGO",
    quote: "We deliver pragmatic support with clarity and proximity.",
    author: "ACME INC.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const goTo = (i) => setIndex((i + ITEMS.length) % ITEMS.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section className="w-full py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <L1 className="mb-8 text-center">CE QU’ILS EN PENSENT</L1>

        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {ITEMS.map((item, i) => (
              <div key={i} className="min-w-full px-2">
                <div className="rounded-[16px] overflow-hidden shadow-sm bg-white">
                  <div className="h-[260px] md:h-[360px] bg-[#E9E7E1] flex items-center justify-center">
                    <span className="text-5xl md:text-7xl tracking-widest text-white/80 mix-blend-overlay">
                      {item.company}
                    </span>
                  </div>
                  <div className="bg-[#E9E7E1]/60 p-6">
                    <P1 className="text-dark-100">{item.quote}</P1>
                    <p className="mt-4 text-geist-mono text-dark-100 text-xs uppercase">
                      {item.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            aria-label="Previous"
            onClick={prev}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
          >
            ›
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          {ITEMS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === i ? "bg-dark-100 w-6" : "bg-dark-100/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
