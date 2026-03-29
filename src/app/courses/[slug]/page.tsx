import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import CourseDetailTabs from "@/components/CourseDetailComponents/CourseDetailTabs";
import { courseMeta, courses } from "@/data/courses";
import "@/components/OurCourses/style.scss";
import "@/components/CourseDetailComponents/style.scss";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((entry) => entry.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | Aider Academy",
    };
  }

  return {
    title: `${course.shortTitle} | Aider Academy`,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = courses.find((entry) => entry.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <main className="course-detail-page-main">
        <section className="course-detail-hero-section">
          <div className="course-detail-hero-container container">
            <div className="course-detail-hero">
              <div className="course-detail-hero__grid">
                <div className="course-detail-hero__content">
                  <span className="course-detail-hero__eyebrow">{course.heroEyebrow}</span>
                  <h1 className="course-detail-hero__title">{course.heroTitle}</h1>
                  <p className="course-detail-hero__description">{course.heroDescription}</p>

                  <div className="course-detail-hero__meta">
                    {courseMeta.map((item) => (
                      <div className="course-detail-hero__meta-item" key={item.label}>
                        <img src={item.icon} alt="" aria-hidden="true" />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="course-detail-hero__fee-pill">{course.feeLabel}</div>
                </div>

                <div className="course-detail-hero__visual">
                  <div className="course-detail-hero__shape" />
                  <div className="course-detail-hero__image-frame">
                    <img className="course-detail-hero__image" src={course.image} alt={course.alt} />
                    {course.overlayImage ? (
                      <img
                        className="course-detail-hero__image-overlay"
                        src={course.overlayImage}
                        alt=""
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>

                  <div className="course-detail-hero__floating-card">
                    <p className="course-detail-hero__floating-card-label">Outcome Focus</p>
                    <p className="course-detail-hero__floating-card-value">Portfolio + Confidence</p>
                    <p className="course-detail-hero__floating-card-copy">
                      Structured mentor feedback, output-driven practice, and real delivery habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="course-detail-body-section">
          <div className="course-detail-body-container container">
            <div className="course-detail-body-layout">
              <aside className="course-detail-sidebar">
                <button className="primary-button primary-button--primary course-detail-sidebar__cta" type="button">
                  Apply Now
                </button>
                <p className="course-detail-sidebar__placement">
                  CTDS certified learning path with mentor-led support and portfolio-focused practice.
                </p>

                <div className="course-detail-sidebar__rows">
                  <div className="course-detail-sidebar__row">
                    <span className="course-detail-sidebar__row-label">Duration</span>
                    <span className="course-detail-sidebar__row-value">{course.duration}</span>
                  </div>
                  <div className="course-detail-sidebar__row">
                    <span className="course-detail-sidebar__row-label">Session Duration</span>
                    <span className="course-detail-sidebar__row-value">{course.sessionDuration}</span>
                  </div>
                  <div className="course-detail-sidebar__row">
                    <span className="course-detail-sidebar__row-label">Class Schedule</span>
                    <span className="course-detail-sidebar__row-value">{course.classSchedule}</span>
                  </div>
                  <div className="course-detail-sidebar__row">
                    <span className="course-detail-sidebar__row-label">Mode</span>
                    <span className="course-detail-sidebar__row-value">{course.mode}</span>
                  </div>
                  <div className="course-detail-sidebar__row">
                    <span className="course-detail-sidebar__row-label">Enrolled</span>
                    <span className="course-detail-sidebar__row-value">{course.enrolled}</span>
                  </div>
                </div>

                <div className="course-detail-sidebar__support">
                  <p className="course-detail-sidebar__support-copy">
                    Need help deciding if this track is right for you?
                  </p>
                  <a className="course-detail-sidebar__phone" href="tel:+918888888888">
                    Call Us: +91 88888 88888
                  </a>
                  <button
                    className="primary-button primary-button--dark course-detail-sidebar__brochure"
                    type="button"
                  >
                    Download Brochure
                  </button>
                </div>
              </aside>

              <CourseDetailTabs course={course} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
