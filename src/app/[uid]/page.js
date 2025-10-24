import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const client = createClient();
  try {
    const page = await client.getByUID("page_sector", params.uid);
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
  } catch (e) {
    return {};
  }
}

export default async function SectorPage({ params }) {
  const client = createClient();
  let page;
  try {
    page = await client.getByUID("page_sector", params.uid);
  } catch (e) {
    notFound();
  }

  if (!page) {
    notFound();
  }

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page_sector");
  return pages.map((doc) => ({ uid: doc.uid }));
}

