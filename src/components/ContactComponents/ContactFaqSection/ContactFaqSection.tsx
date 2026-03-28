"use client";

import { useState } from "react";
import "./style.scss";

const imgChevron =
  "https://www.figma.com/api/mcp/asset/f8f8cd1c-e380-4a6d-ab6a-380a3df0ff21";

const faqItems = [
  {
    id: "eligibility",
    question: "Who can join Aider Academy programs?",
    answer:
      "Beginners, students, working professionals, and freelancers can join. The programs are structured to support different starting points.",
  },
  {
    id: "format",
    question: "How are the classes conducted?",
    answer:
      "The learning model combines mentor-led sessions, guided practice, and project-based assignments built around real workflows.",
  },
  {
    id: "duration",
    question: "How long do the programs usually run?",
    answer:
      "Program durations vary by track, but each course is designed with a clear structure, milestones, and portfolio-focused output.",
  },
  {
    id: "certificate",
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes. Learners who complete the required modules and assignments receive course completion recognition aligned with the academy’s standards.",
  },
  {
    id: "support",
    question: "Do you provide career or portfolio support?",
    answer:
      "Yes. The academy supports portfolio building, practical feedback, and career-oriented guidance as part of the learning journey.",
  },
];

export default function ContactFaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section className="contact-faq-main">
      <div className="contact-faq-container container">
        <div className="contact-faq__heading">
          <h2 className="contact-faq__title">
            Quick <span>Answers</span>
          </h2>
          <p className="contact-faq__description">
            Clear information on programs, eligibility, learning format,
            certification, and admissions.
          </p>
        </div>

        <div className="contact-faq__items">
          {faqItems.map((item) => {
            const isOpen = item.id === openId;

            return (
              <article
                className={`contact-faq__item ${
                  isOpen ? "contact-faq__item--open" : ""
                }`.trim()}
                key={item.id}
              >
                <button
                  className="contact-faq__trigger"
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-panel`}
                >
                  <span>{item.question}</span>
                  <img
                    className="contact-faq__chevron"
                    src={imgChevron}
                    alt=""
                    aria-hidden="true"
                  />
                </button>

                <div
                  className="contact-faq__panel"
                  id={`${item.id}-panel`}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
