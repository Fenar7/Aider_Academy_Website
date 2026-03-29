"use client";

import { useMemo, useState } from "react";
import Footer from "@/components/Footer/Footer";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import "@/components/OurCourses/style.scss";
import "./style.scss";

const imgGraphicDesign =
  "https://www.figma.com/api/mcp/asset/6188dcce-e472-4fdc-9fcc-39589840876d";
const imgGraphicDesignOverlay =
  "https://www.figma.com/api/mcp/asset/25e8227a-674d-485e-afdb-3a77a37cda6a";
const imgDigitalMarketing =
  "https://www.figma.com/api/mcp/asset/62bd03c7-52ad-48b2-b698-442b7ec77b94";
const imgWebDevelopment =
  "https://www.figma.com/api/mcp/asset/4ea26847-a53b-40ae-838e-7537bd29ad1a";
const imgModulesIcon =
  "https://www.figma.com/api/mcp/asset/785f4460-3400-4038-94ea-51f8ffdc3291";
const imgDurationIcon =
  "https://www.figma.com/api/mcp/asset/f32565a6-9f24-4f82-a03d-3660fd91ff67";
const imgCertificateIcon =
  "https://www.figma.com/api/mcp/asset/5a8cc306-2c87-4492-83df-006c6bb0376b";

const courseMeta = [
  { icon: imgModulesIcon, label: "10 Modules" },
  { icon: imgDurationIcon, label: "3 Months" },
  { icon: imgCertificateIcon, label: "Certificate" },
];

const courses = [
  {
    tag: "Graphic Designing",
    title: "Mastering Graphic Designing",
    description:
      "Build strong design fundamentals, master industry tools, and create portfolio-ready work with real-world briefs.",
    image: imgGraphicDesign,
    overlayImage: imgGraphicDesignOverlay,
    alt: "Student working on graphic design at a desktop setup",
    imageClassName: "course-card__image--graphic",
  },
  {
    tag: "Digital Marketing",
    title: "Mastering Digital Marketing",
    description:
      "Build strong campaign thinking, platform fluency, and execution skills that translate into portfolio-ready results.",
    image: imgDigitalMarketing,
    alt: "Student learning digital marketing on a phone with floating social icons",
    imageClassName: "course-card__image--marketing",
  },
  {
    tag: "Web Development",
    title: "Mastering Web Development",
    description:
      "Build strong coding fundamentals, modern workflows, and project-based confidence with real-world web briefs.",
    image: imgWebDevelopment,
    alt: "Student coding at a multi-monitor desk setup",
    imageClassName: "course-card__image--web",
  },
  {
    tag: "Graphic Designing",
    title: "Graphic Design for Social Media",
    description:
      "Learn to create fast, polished visual content for campaigns, brands, and digital-first communication.",
    image: imgGraphicDesign,
    overlayImage: imgGraphicDesignOverlay,
    alt: "Student working on graphic design at a desktop setup",
    imageClassName: "course-card__image--graphic",
  },
  {
    tag: "Digital Marketing",
    title: "Performance Marketing Essentials",
    description:
      "Understand paid campaigns, measurement, audience targeting, and optimization through practical assignments.",
    image: imgDigitalMarketing,
    alt: "Student learning digital marketing on a phone with floating social icons",
    imageClassName: "course-card__image--marketing",
  },
  {
    tag: "Web Development",
    title: "Frontend Web Foundations",
    description:
      "Build responsive interfaces, clean components, and real web projects with structured mentor guidance.",
    image: imgWebDevelopment,
    alt: "Student coding at a multi-monitor desk setup",
    imageClassName: "course-card__image--web",
  },
  {
    tag: "Graphic Designing",
    title: "Branding and Visual Identity",
    description:
      "Create identity systems, brand assets, and presentation-ready outputs that reflect practical industry workflows.",
    image: imgGraphicDesign,
    overlayImage: imgGraphicDesignOverlay,
    alt: "Student working on graphic design at a desktop setup",
    imageClassName: "course-card__image--graphic",
  },
  {
    tag: "Digital Marketing",
    title: "Content and Social Strategy",
    description:
      "Plan content with platform-specific thinking and produce work that supports measurable brand growth.",
    image: imgDigitalMarketing,
    alt: "Student learning digital marketing on a phone with floating social icons",
    imageClassName: "course-card__image--marketing",
  },
  {
    tag: "Web Development",
    title: "Responsive Website Production",
    description:
      "Translate design into working pages, build layouts cleanly, and strengthen development confidence through projects.",
    image: imgWebDevelopment,
    alt: "Student coding at a multi-monitor desk setup",
    imageClassName: "course-card__image--web",
  },
  {
    tag: "Graphic Designing",
    title: "Portfolio Design Projects",
    description:
      "Develop presentation-quality case studies and polished pieces that help your portfolio feel job-ready.",
    image: imgGraphicDesign,
    overlayImage: imgGraphicDesignOverlay,
    alt: "Student working on graphic design at a desktop setup",
    imageClassName: "course-card__image--graphic",
  },
  {
    tag: "Digital Marketing",
    title: "Digital Campaign Planning",
    description:
      "Learn how to build campaign structures, align messaging, and track outcomes across core channels.",
    image: imgDigitalMarketing,
    alt: "Student learning digital marketing on a phone with floating social icons",
    imageClassName: "course-card__image--marketing",
  },
  {
    tag: "Web Development",
    title: "Full Website Build Workflow",
    description:
      "Move from fundamentals to finished projects using practical planning, coding, and delivery workflows.",
    image: imgWebDevelopment,
    alt: "Student coding at a multi-monitor desk setup",
    imageClassName: "course-card__image--web",
  },
  {
    tag: "Graphic Designing",
    title: "Creative Design Systems",
    description:
      "Understand repeatable systems, consistency, and layout thinking while building design outputs for real use cases.",
    image: imgGraphicDesign,
    overlayImage: imgGraphicDesignOverlay,
    alt: "Student working on graphic design at a desktop setup",
    imageClassName: "course-card__image--graphic",
  },
  {
    tag: "Digital Marketing",
    title: "Analytics for Growth",
    description:
      "Build comfort with reporting, interpretation, and marketing decisions grounded in campaign performance.",
    image: imgDigitalMarketing,
    alt: "Student learning digital marketing on a phone with floating social icons",
    imageClassName: "course-card__image--marketing",
  },
  {
    tag: "Web Development",
    title: "Practical UI Development",
    description:
      "Strengthen UI implementation skills through component-based builds and responsive project work.",
    image: imgWebDevelopment,
    alt: "Student coding at a multi-monitor desk setup",
    imageClassName: "course-card__image--web",
  },
  {
    tag: "Graphic Designing",
    title: "Visual Communication Practice",
    description:
      "Refine layout, typography, and concept presentation through guided assignments and review loops.",
    image: imgGraphicDesign,
    overlayImage: imgGraphicDesignOverlay,
    alt: "Student working on graphic design at a desktop setup",
    imageClassName: "course-card__image--graphic",
  },
  {
    tag: "Digital Marketing",
    title: "Platform Execution Lab",
    description:
      "Get hands-on with execution tasks, optimization habits, and marketing workflows that support employability.",
    image: imgDigitalMarketing,
    alt: "Student learning digital marketing on a phone with floating social icons",
    imageClassName: "course-card__image--marketing",
  },
  {
    tag: "Web Development",
    title: "Project-Based Web Practice",
    description:
      "Use real briefs to improve coding accuracy, workflow confidence, and portfolio-ready development output.",
    image: imgWebDevelopment,
    alt: "Student coding at a multi-monitor desk setup",
    imageClassName: "course-card__image--web",
  },
];

const pageSize = 12;

export default function CoursesPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(courses.length / pageSize);

  const visibleCourses = useMemo(() => {
    const start = (page - 1) * pageSize;
    return courses.slice(start, start + pageSize);
  }, [page]);

  return (
    <>
      <main className="courses-page-main">
        <section className="courses-page-section">
          <div className="courses-page-container container">
            <SectionHeading
              className="courses-page__heading"
              eyebrow="Our Blog"
              title="The Aider Journal"
              accent="Aider Journal"
              description="Updates, guides, and notes from our team on digital skills and real workflows."
            />

            <div className="course-cards-container courses-page__grid">
              {visibleCourses.map((course) => (
                <article className="course-card-item" key={course.title}>
                  <div className="course-card__image-frame">
                    <img
                      className={`course-card__image ${course.imageClassName}`}
                      src={course.image}
                      alt={course.alt}
                    />
                    {course.overlayImage ? (
                      <img
                        className="course-card__image-overlay"
                        src={course.overlayImage}
                        alt=""
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>

                  <div className="course-card__content">
                    <div className="course-card__tag">{course.tag}</div>
                    <h3 className="course-card__title">{course.title}</h3>
                    <p className="course-card__description">{course.description}</p>

                    <div className="course-card__meta">
                      {courseMeta.map((item) => (
                        <div className="course-card__meta-item" key={item.label}>
                          <img src={item.icon} alt="" aria-hidden="true" />
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>

                    <PrimaryButton className="course-card__cta">
                      Know More
                    </PrimaryButton>
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 ? (
              <div className="courses-page__pagination">
                <button
                  className="courses-page__page-button"
                  type="button"
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                  disabled={page === 1}
                >
                  Previous
                </button>

                <div className="courses-page__page-numbers">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                    (pageNumber) => (
                      <button
                        className={`courses-page__page-number ${
                          pageNumber === page ? "courses-page__page-number--active" : ""
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
                  className="courses-page__page-button"
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
