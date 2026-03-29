"use client";

import { useMemo, useState } from "react";
import Footer from "@/components/Footer/Footer";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import "@/components/BlogSection/style.scss";
import "./style.scss";

const imgArticleOnePrimary =
  "https://www.figma.com/api/mcp/asset/f5e14e15-2cb4-4770-98d8-9a6ae2c6ffac";
const imgArticleOneOverlay =
  "https://www.figma.com/api/mcp/asset/05e92654-7ef5-47f8-b992-4a7f9e2d09f3";
const imgCalendar = "/images/icons/calendar.png";
const imgArticleTwo =
  "https://www.figma.com/api/mcp/asset/78cf3f08-2718-40ff-bf10-21e9a8cb02c3";
const imgArticleThree =
  "https://www.figma.com/api/mcp/asset/fd334987-73e7-4d8a-bf0a-1639b263a6ce";

const posts = [
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleOnePrimary,
    overlayImage: imgArticleOneOverlay,
    imageClassName: "blog-card__image--article-one",
    overlayClassName: "blog-card__overlay--article-one",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleTwo,
    imageClassName: "blog-card__image--article-two",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleThree,
    imageClassName: "blog-card__image--article-three",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleOnePrimary,
    overlayImage: imgArticleOneOverlay,
    imageClassName: "blog-card__image--article-one",
    overlayClassName: "blog-card__overlay--article-one",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleTwo,
    imageClassName: "blog-card__image--article-two",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleThree,
    imageClassName: "blog-card__image--article-three",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleOnePrimary,
    overlayImage: imgArticleOneOverlay,
    imageClassName: "blog-card__image--article-one",
    overlayClassName: "blog-card__overlay--article-one",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleTwo,
    imageClassName: "blog-card__image--article-two",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleThree,
    imageClassName: "blog-card__image--article-three",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleOnePrimary,
    overlayImage: imgArticleOneOverlay,
    imageClassName: "blog-card__image--article-one",
    overlayClassName: "blog-card__overlay--article-one",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleTwo,
    imageClassName: "blog-card__image--article-two",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleThree,
    imageClassName: "blog-card__image--article-three",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleOnePrimary,
    overlayImage: imgArticleOneOverlay,
    imageClassName: "blog-card__image--article-one",
    overlayClassName: "blog-card__overlay--article-one",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleTwo,
    imageClassName: "blog-card__image--article-two",
  },
  {
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleThree,
    imageClassName: "blog-card__image--article-three",
  },
];

const pageSize = 12;

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(posts.length / pageSize);

  const visiblePosts = useMemo(() => {
    const start = (page - 1) * pageSize;
    return posts.slice(start, start + pageSize);
  }, [page]);

  return (
    <>
      <main className="blog-page-main">
        <section className="blog-page-section">
          <div className="blog-page-container container">
            <SectionHeading
              className="blog-page__heading"
              eyebrow="Our Blog"
              title="The Aider Journal"
              accent="Aider Journal"
              description="Updates, guides, and notes from our team on digital skills and real workflows."
            />

            <div className="blog-cards-container blog-page__grid">
              {visiblePosts.map((post, index) => (
                <article className="blog-card" key={`${post.title}-${post.image}-${index}`}>
                  <div className="blog-card__image-frame">
                    <img
                      className={`blog-card__image ${post.imageClassName}`}
                      src={post.image}
                      alt={post.title}
                    />
                    {post.overlayImage ? (
                      <img
                        className={`blog-card__overlay ${post.overlayClassName ?? ""}`.trim()}
                        src={post.overlayImage}
                        alt=""
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="blog-card__category">{post.category}</div>
                  </div>

                  <div className="blog-card__content">
                    <h3 className="blog-card__title">{post.title}</h3>

                    <div className="blog-card__meta">
                      <img src={imgCalendar} alt="" aria-hidden="true" />
                      <span>{post.date}</span>
                    </div>

                    <p className="blog-card__description">{post.description}</p>

                    <PrimaryButton className="blog-card__cta" variant="light">
                      Know More
                    </PrimaryButton>
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 ? (
              <div className="blog-page__pagination">
                <button
                  className="blog-page__page-button"
                  type="button"
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                  disabled={page === 1}
                >
                  Previous
                </button>

                <div className="blog-page__page-numbers">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                    (pageNumber) => (
                      <button
                        className={`blog-page__page-number ${
                          pageNumber === page ? "blog-page__page-number--active" : ""
                        }`.trim()}
                        key={pageNumber}
                        type="button"
                        onClick={() => setPage(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    )
                  )}
                </div>

                <button
                  className="blog-page__page-button"
                  type="button"
                  onClick={() =>
                    setPage((current) => Math.min(totalPages, current + 1))
                  }
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </div>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
