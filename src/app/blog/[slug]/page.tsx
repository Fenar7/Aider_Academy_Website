import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import "@/components/BlogSection/style.scss";
import "./style.scss";

const imgCalendar = "/images/icons/calendar.png";
const imgArticleOnePrimary =
  "https://www.figma.com/api/mcp/asset/f5e14e15-2cb4-4770-98d8-9a6ae2c6ffac";
const imgArticleOneOverlay =
  "https://www.figma.com/api/mcp/asset/05e92654-7ef5-47f8-b992-4a7f9e2d09f3";
const imgArticleTwo =
  "https://www.figma.com/api/mcp/asset/78cf3f08-2718-40ff-bf10-21e9a8cb02c3";
const imgArticleThree =
  "https://www.figma.com/api/mcp/asset/fd334987-73e7-4d8a-bf0a-1639b263a6ce";

const featuredPost = {
  slug: "from-beginner-to-job-ready",
  date: "Jan 2, 2026",
  title: "From Beginner to Job-Ready: A Practical 90-Day Learning Plan",
  heroImage: imgArticleThree,
  content: [
    {
      type: "paragraph",
      value:
        "Most people don't fail because they're bad at learning. They fail because they learn in the wrong order.",
    },
    {
      type: "paragraph",
      value:
        "They watch tutorial after tutorial, collect screenshots, save links, and feel productive. Then the moment someone asks, “Can you do this for me?” they freeze. Not because they don't know anything, but because they never built the habit that matters: turning learning into output.",
    },
    {
      type: "paragraph",
      value:
        "If you're starting from zero, or restarting after a gap, this is a practical 90-day plan that works across digital marketing, graphic design, and web development. It's structured, realistic, and built around one idea:",
    },
    {
      type: "paragraph",
      value: "Every week must produce something you can show.",
    },
    {
      type: "heading",
      value: "The 90-Day Rule That Changes Everything",
    },
    {
      type: "paragraph",
      value: "A complete work cycle in 90 days covers several layers:",
    },
    {
      type: "list",
      value: [
        "First, you learn the skill at a beginner level",
        "Then, you complete small tasks without panic",
        "You can explain what you did and why",
        "You finally finish projects that feel like real work",
      ],
    },
    {
      type: "paragraph",
      value:
        "That's what separates confident learners from people who just consume content.",
    },
    {
      type: "heading",
      value: "Phase 1: Weeks 1-3 Build the Base",
    },
    {
      type: "paragraph",
      value: "Goal:",
    },
    {
      type: "paragraph",
      value: "Understand fundamentals and build consistency.",
    },
    {
      type: "paragraph",
      value: "What most beginners do wrong:",
    },
    {
      type: "paragraph",
      value:
        "They start with advanced topics too fast. You can't solve high-level problems without understanding low-level patterns first.",
    },
    {
      type: "paragraph",
      value: "Weekly targets:",
    },
    {
      type: "list",
      value: [
        "Learn 1 fundamental skill daily",
        "Learn concept deeply, but immediately test the foundation",
        "Practice 60-90 minutes per day",
        "Finish 1 small output per week that can be explained end-to-end",
      ],
    },
    {
      type: "heading",
      value: "Phase 2: Weeks 4-8 Make Workflows",
    },
    {
      type: "list",
      value: [
        "Learn tools in simple workflows",
        "Recreate mini-projects",
        "Build repeatable workflow",
        "End each week with one small task using the workflow",
      ],
    },
    {
      type: "heading",
      value: "Phase 3: Weeks 9-12 Go Real",
    },
    {
      type: "list",
      value: [
        "Recreate work used by real teams",
        "Continue to push skills to realistic scope",
        "End each week with one polished file or project",
      ],
    },
    {
      type: "heading",
      value: "Examples",
    },
    {
      type: "list",
      value: [
        "Digital Marketing: Analyze a mock brand and build a basic content strategy",
        "Web Dev: Develop a complete one-page app plan",
        "Graphic Design: Build one polished mockup and export",
      ],
    },
  ],
};

const relatedPosts = [
  {
    slug: "client-ready-workflows",
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
    slug: "team-learning-systems",
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleTwo,
    imageClassName: "blog-card__image--article-two",
  },
  {
    slug: "dashboard-thinking",
    title: "Blog Title",
    category: "Education",
    date: "16 Jan 2025",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
    image: imgArticleThree,
    imageClassName: "blog-card__image--article-three",
  },
];

export function generateStaticParams() {
  return [{ slug: featuredPost.slug }];
}

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  if (slug !== featuredPost.slug) {
    notFound();
  }

  return (
    <>
      <main className="blog-detail-main">
        <section className="blog-detail-hero-section">
          <div className="blog-detail-hero-container container">
            <div className="blog-detail-hero__frame">
              <img
                className="blog-detail-hero__image"
                src={featuredPost.heroImage}
                alt={featuredPost.title}
              />
            </div>
          </div>
        </section>

        <section className="blog-detail-content-section">
          <div className="blog-detail-content-container container">
            <div className="blog-detail-content__header">
              <p className="blog-detail-content__date">{featuredPost.date}</p>
              <h1 className="blog-detail-content__title">{featuredPost.title}</h1>
            </div>

            <div className="blog-detail-content__body">
              {featuredPost.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2 className="blog-detail-content__subheading" key={`${block.value}-${index}`}>
                      {block.value}
                    </h2>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul className="blog-detail-content__list" key={`list-${index}`}>
                      {block.value.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p className="blog-detail-content__paragraph" key={`${block.value}-${index}`}>
                    {block.value}
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        <section className="blog-detail-read-more-section">
          <div className="blog-detail-read-more-container container">
            <h2 className="blog-detail-read-more__title">Read More</h2>

            <div className="blog-cards-container blog-detail-read-more__grid">
              {relatedPosts.map((post) => (
                <article className="blog-card" key={post.slug}>
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

                    <Link className="blog-detail-read-more__link" href={`/blog/${post.slug}`}>
                      <PrimaryButton className="blog-card__cta" variant="light">
                        Know More
                      </PrimaryButton>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
