import { cache } from "react";
import { groq } from "next-sanity";
import { hasRequiredSanityEnv } from "@/sanity/env";
import { sanityClient } from "@/sanity/lib/client";
import type { BlogPost, BlogPostCard } from "@/sanity/types";

const blogCardProjection = `
  _id,
  title,
  "slug": slug.current,
  "excerpt": coalesce(excerpt, ""),
  "category": coalesce(category, "Education"),
  "publishedAt": coalesce(publishedAt, _createdAt),
  coverImage
`;

export const getAllBlogPosts = cache(async (): Promise<BlogPostCard[]> => {
  if (!hasRequiredSanityEnv) {
    return [];
  }

  return sanityClient.fetch(
    groq`*[_type == "blogPost" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {${blogCardProjection}}`
  );
});

export const getLatestBlogPosts = cache(async (limit: number): Promise<BlogPostCard[]> => {
  if (!hasRequiredSanityEnv) {
    return [];
  }

  return sanityClient.fetch(
    groq`*[_type == "blogPost" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc)[0...$limit] {${blogCardProjection}}`,
    { limit }
  );
});

export const getAllBlogSlugs = cache(async (): Promise<string[]> => {
  if (!hasRequiredSanityEnv) {
    return [];
  }

  return sanityClient.fetch(
    groq`*[_type == "blogPost" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc).slug.current`
  );
});

export const getBlogPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  if (!hasRequiredSanityEnv) {
    return null;
  }

  return sanityClient.fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0]{
      ${blogCardProjection},
      body,
      seoTitle,
      seoDescription,
      seoImage,
      seoNoIndex
    }`,
    { slug }
  );
});

export const getRelatedBlogPosts = cache(
  async (slug: string, limit: number): Promise<BlogPostCard[]> => {
    if (!hasRequiredSanityEnv) {
      return [];
    }

    return sanityClient.fetch(
      groq`*[_type == "blogPost" && defined(slug.current) && slug.current != $slug] | order(coalesce(publishedAt, _createdAt) desc)[0...$limit] {${blogCardProjection}}`,
      { slug, limit }
    );
  }
);
