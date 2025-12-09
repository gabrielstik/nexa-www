"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";
import { H4, L1, P1 } from "@/components/Text";

/**
 * BlogPosts slice
 * Renders an 8-card paginated grid of post_blog documents.
 */
export default function BlogPosts({ slice }) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const pageSize = 8;

  useEffect(() => {
    let isActive = true;
    async function run() {
      setIsLoading(true);
      try {
        const client = createClient();
        const response = await client.getByType("post_blog", {
          page,
          pageSize,
          orderings: [{ field: "document.first_publication_date", direction: "desc" }],
        });
        if (!isActive) return;
        setResults(response.results);
        setTotalPages(response.total_pages || 1);
      } catch (e) {
        if (!isActive) return;
        setResults([]);
        setTotalPages(1);
      } finally {
        if (isActive) setIsLoading(false);
      }
    }
    run();
    return () => {
      isActive = false;
    };
  }, [page]);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full py-16 bg-white"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <L1>BLOG</L1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={!canPrev || isLoading}
              className="h-8 w-8 rounded-full grid place-items-center bg-black/10 disabled:opacity-40"
              aria-label="Previous page"
            >
              ‹
            </button>
            <P1 className="m-0">
              {page} / {Math.max(totalPages, 1)}
            </P1>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={!canNext || isLoading}
              className="h-8 w-8 rounded-full grid place-items-center bg-black/10 disabled:opacity-40"
              aria-label="Next page"
            >
              ›
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((doc) => {
            const href = `/blog/${doc.uid}`;
            const title = doc.data?.meta_title || doc.uid || "Untitled";
            const image = doc.data?.meta_image;
            return (
              <article key={doc.id}>
                <Link href={href} className="block group">
                  <div className="aspect-[16/9] overflow-hidden rounded-[12px] bg-[#E9E7E1]">
                    {image?.url ? (
                      <PrismicNextImage
                        field={image}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        alt={image.alt ?? ""}
                      />
                    ) : null}
                  </div>
                  <H4 className="mt-4">{title}</H4>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
