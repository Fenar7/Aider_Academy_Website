import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer/Footer";
import CourseDetailSidebar from "@/components/CourseDetailComponents/CourseDetailSidebar";
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
              <CourseDetailTabs course={course} />
              <CourseDetailSidebar course={course} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
