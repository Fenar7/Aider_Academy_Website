import type { TypedObject } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";

export type BlogPostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  coverImage?: SanityImageSource & { alt?: string };
};

export type BlogPost = BlogPostCard & {
  body: TypedObject[];
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: SanityImageSource & { alt?: string };
  seoNoIndex?: boolean;
};
