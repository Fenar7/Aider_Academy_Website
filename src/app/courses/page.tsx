"use client";

import { useMemo, useState } from "react";
import TransitionLink from "@/components/AppShell/TransitionLink";
import Footer from "@/components/Footer/Footer";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { courseMeta, courses } from "@/data/courses";
import "@/components/OurCourses/style.scss";
import "./style.scss";

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
              eyebrow="Our Courses"
              title="Programs Built for Real Digital Roles"
              accent="Real Digital Roles"
              description="Explore mentor-led programs designed to build practical capability, portfolio-ready output, and job-focused confidence."
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

                    <TransitionLink
                      className="primary-button primary-button--primary course-card__cta course-card__cta-link"
                      href={`/courses/${course.slug}`}
                    >
                      Know More
                    </TransitionLink>
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
