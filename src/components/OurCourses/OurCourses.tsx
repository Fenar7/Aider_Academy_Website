import React from "react";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
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
    tag: "Graphic Designing",
    title: "Mastering Digital Marketing",
    description:
      "Build strong design fundamentals, master industry tools, and create portfolio-ready work with real-world briefs.",
    image: imgDigitalMarketing,
    alt: "Student learning digital marketing on a phone with floating social icons",
    imageClassName: "course-card__image--marketing",
  },
  {
    tag: "Graphic Designing",
    title: "Mastering Web Development",
    description:
      "Build strong design fundamentals, master industry tools, and create portfolio-ready work with real-world briefs.",
    image: imgWebDevelopment,
    alt: "Student coding at a multi-monitor desk setup",
    imageClassName: "course-card__image--web",
  },
];

const OurCourses = () => {
  return (
    <section className="our-courses-container-main">
      <div className="our-courses-container container">
        <SectionHeading
          eyebrow="Our Courses"
          title="Choose Your Track"
          accent="Track"
          description="Explore programs designed around hands-on learning, modern tools, and outcomes you can prove."
        />

        <div className="course-cards-container">
          {courses.map((course) => (
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
      </div>
    </section>
  );
};

export default OurCourses;
