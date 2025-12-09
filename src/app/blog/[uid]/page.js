import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import { H4 } from "@/components/Text";

export async function generateMetadata({ params }) {
  const client = createClient();
  try {
    const page = await client.getByUID("post_blog", params.uid);
    const title = page.data.meta_title || page.data.uid || "";
    const description = page.data.meta_description || "";
    const image = page.data.meta_image?.url || undefined;
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: image ? [{ url: image }] : undefined,
      },
      twitter: {
        card: image ? "summary_large_image" : "summary",
        title,
        description,
        images: image ? [image] : undefined,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }) {
  const client = createClient();
  let page;
  try {
    page = await client.getByUID("post_blog", params.uid);
  } catch {
    notFound();
  }

  if (!page) {
    notFound();
  }

  const image = page.data?.meta_image;
  const title = page.data?.meta_title || page.uid || "";

  return (
    <main className="w-full py-10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[12px] overflow-hidden bg-[#E9E7E1]">
          {image?.url ? (
            <PrismicNextImage
              field={image}
              className="w-full h-auto object-cover"
              alt={image.alt ?? ""}
            />
          ) : null}
        </div>
        <H4 className="mt-5">{title}</H4>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("post_blog");
  return pages.map((doc) => ({ uid: doc.uid }));
}


