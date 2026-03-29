"use client";

import { useState } from "react";
import type { Course } from "@/data/courses";
import "./style.scss";

const imgTick = "/images/icons/who-can-join-tick.png";

type CourseDetailTabsProps = {
  course: Course;
};

const sectionIds = {
  overview: "course-overview",
  modules: "course-modules",
  features: "course-features",
  trainers: "course-trainers",
} as const;

const CourseDetailTabs = ({ course }: CourseDetailTabsProps) => {
  const [openModuleIndex, setOpenModuleIndex] = useState(0);

  return (
    <div className="course-detail-tabs-shell">
      <div className="course-detail-tabs-nav">
        <a className="course-detail-tabs-nav__item course-detail-tabs-nav__item--active" href={`#${sectionIds.overview}`}>
          Overview
        </a>
        <a className="course-detail-tabs-nav__item" href={`#${sectionIds.modules}`}>
          Modules
        </a>
        <a className="course-detail-tabs-nav__item" href={`#${sectionIds.features}`}>
          Features
        </a>
        <a className="course-detail-tabs-nav__item" href={`#${sectionIds.trainers}`}>
          Trainers
        </a>
      </div>

      <section className="course-detail-panel" id={sectionIds.overview}>
        <div className="course-detail-panel__header">
          <p className="course-detail-panel__eyebrow">{course.tag}</p>
          <h2 className="course-detail-panel__title">{course.overviewTitle}</h2>
        </div>
        <p className="course-detail-panel__intro">{course.overviewParagraph}</p>
        <div className="course-detail-outcomes">
          {course.outcomes.map((item) => (
            <div className="course-detail-outcomes__item" key={item}>
              <img src={imgTick} alt="" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="course-detail-panel" id={sectionIds.modules}>
        <div className="course-detail-panel__header">
          <p className="course-detail-panel__eyebrow">Course Content</p>
          <h2 className="course-detail-panel__title">Modules that build real skill</h2>
        </div>
        <div className="course-detail-accordion">
          {course.modules.map((module, index) => {
            const isOpen = openModuleIndex === index;
            return (
              <div className="course-detail-accordion__item" key={module.title}>
                <button
                  className={`course-detail-accordion__trigger ${
                    isOpen ? "course-detail-accordion__trigger--active" : ""
                  }`.trim()}
                  type="button"
                  onClick={() => setOpenModuleIndex(isOpen ? -1 : index)}
                >
                  <span>{module.title}</span>
                  <span className="course-detail-accordion__icon">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? (
                  <div className="course-detail-accordion__content">
                    <p>{module.summary}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <section className="course-detail-panel" id={sectionIds.features}>
        <div className="course-detail-panel__header">
          <p className="course-detail-panel__eyebrow">Why this program works</p>
          <h2 className="course-detail-panel__title">Built for practice, clarity, and confidence</h2>
        </div>
        <div className="course-detail-feature-columns">
          {course.featureColumns.map((column) => (
            <div className="course-detail-feature-column" key={column.title}>
              <h3>{column.title}</h3>
              <div className="course-detail-feature-column__divider" />
              <ul>
                {column.items.map((item) => (
                  <li key={item}>
                    <img src={imgTick} alt="" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="course-detail-panel" id={sectionIds.trainers}>
        <div className="course-detail-panel__header">
          <p className="course-detail-panel__eyebrow">Meet the mentors</p>
          <h2 className="course-detail-panel__title">Learn from people who build and review work every day</h2>
        </div>
        <div className="course-detail-trainers">
          {course.trainers.map((trainer) => (
            <article className="course-detail-trainer-card" key={trainer.name}>
              <div className="course-detail-trainer-card__media">
                <div className="course-detail-trainer-card__shape" />
                <img src={trainer.image} alt={trainer.name} />
              </div>
              <div className="course-detail-trainer-card__content">
                <h3>{trainer.name}</h3>
                <p className="course-detail-trainer-card__role">{trainer.role}</p>
                <p className="course-detail-trainer-card__bio">{trainer.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="course-detail-panel course-detail-panel--form">
        <div className="course-detail-panel__header">
          <p className="course-detail-panel__eyebrow">Let’s talk</p>
          <h2 className="course-detail-panel__title">Have questions about this course?</h2>
        </div>
        <form className="course-detail-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Tell us what you want to know" rows={4} />
          <button className="primary-button primary-button--primary course-detail-form__submit" type="button">
            Send Enquiry
          </button>
        </form>
      </section>
    </div>
  );
};

export default CourseDetailTabs;
