"use client";

import { H4, L1 } from "@/components/Text";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useRef, useState } from "react";

const POSTS = [
  {
    title: "TVA SUR PLACE, À EMPORTER, EN LIVRAISON : COMMENT S’Y RETROUVER ?",
    excerpt:
      "Un guide simple pour comprendre les taux applicables en fonction de votre mode de service.",
  },
  {
    title:
      "RÉMUNÉRER SES ÉQUIPES EN RESTAURATION : CDI, EXTRAS, POURBOIRES... QUE DIT LA LOI ?",
    excerpt:
      "Paie, charges, fiches de poste : on vous aide à mieux structurer vos RH.",
  },
  {
    title: "STATUT MICRO, SASU, EURL : COMMENT CHOISIR QUAND ON SE LANCE ?",
    excerpt:
      "Avantages, inconvénients, seuils : on compare les statuts les plus courants pour freelance.",
  },
];

export default function BlogCarousel({ slice }) {
  const { primary } = slice;

  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i) => {
    const container = containerRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(i, POSTS.length - 1));
    const child = container.children[clamped];
    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
      setIndex(clamped);
    }
  };

  const next = () => scrollToIndex(index + 1);
  const prev = () => scrollToIndex(index - 1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = () => {
      const children = Array.from(el.children);
      const offsets = children.map((c) =>
        Math.abs(
          c.getBoundingClientRect().left - el.getBoundingClientRect().left
        )
      );
      const nearest = offsets.indexOf(Math.min(...offsets));
      setIndex(nearest);
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          {primary.kicker ? (
            <PrismicRichText
              field={primary.kicker}
              components={{
                paragraph: ({ children }) => (
                  <L1 className="mb-0">{children}</L1>
                ),
              }}
            />
          ) : (
            <L1>BLOG</L1>
          )}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="h-8 w-8 rounded-full grid place-items-center bg-black/10"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="h-8 w-8 rounded-full grid place-items-center bg-black/10"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-8 scroll-smooth snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {POSTS.map((post, i) => (
            <article
              key={i}
              className={`snap-start shrink-0 w-[780px] max-w-[85vw] ${i === 0 ? "ml-2" : ""}`}
            >
              <div className="aspect-[16/9] rounded-[12px] bg-[#E9E7E1]" />
              <H4 className="mt-5">{post.title}</H4>
              <p className="mt-2 text-[16px] leading-[24px] lg:text-[14px] lg:leading-[20px] text-[#232518]">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
