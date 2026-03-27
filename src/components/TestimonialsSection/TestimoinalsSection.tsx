"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import "./style.scss";

const imgQuoteIcon =
  "https://www.figma.com/api/mcp/asset/8ff34da2-5c16-48fe-96c6-a5ccb8e00eec";
const imgAvatar =
  "https://www.figma.com/api/mcp/asset/60b438bf-0739-4095-9ae0-1f5531239dbf";
const imgArrow =
  "https://www.figma.com/api/mcp/asset/57f11bc3-4e8a-43b1-ad36-d5d8fcdd61bf";

const testimonials = [
  {
    id: 1,
    quote:
      "PTE Stories made my preparation so much easier! The personalized guidance and structured approach gave me the confidence I needed. I’m thrilled to say I achieved the score to pursue my dream of studying abroad, all thanks to this incredible team.",
    name: "Afsal K",
    role: "Student",
  },
  {
    id: 2,
    quote:
      "PTE Stories made my preparation so much easier! The personalized guidance and structured approach gave me the confidence I needed. I’m thrilled to say I achieved the score to pursue my dream of studying abroad, all thanks to this incredible team.",
    name: "Afsal K",
    role: "Student",
  },
  {
    id: 3,
    quote:
      "PTE Stories made my preparation so much easier! The personalized guidance and structured approach gave me the confidence I needed. I’m thrilled to say I achieved the score to pursue my dream of studying abroad, all thanks to this incredible team.",
    name: "Afsal K",
    role: "Student",
  },
];

const TestimoinalsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const updateControls = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      setCanScrollPrev(track.scrollLeft > 8);
      setCanScrollNext(track.scrollLeft < maxScrollLeft - 8);
    };

    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, []);

  const scrollTrack = (direction: "prev" | "next") => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".testimonial-card");

    if (!track || !firstCard) {
      return;
    }

    const styles = window.getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
    const offset = firstCard.offsetWidth + gap;

    track.scrollBy({
      left: direction === "next" ? offset : -offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonials-section-container-main">
      <div className="testimonials-section-container container">
        <div className="testimonials-section__header">
          <SectionHeading
            className="testimonials-section__heading"
            eyebrow="Testimonials"
            title="Stories That Speak for Themselves"
            accent="Themselves"
            description="From beginners to career switchers, see how learners progressed through structured, hands-on training."
          />

          <div className="testimonials-section__controls">
            <button
              className="testimonials-section__control testimonials-section__control--prev"
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scrollTrack('prev')}
              disabled={!canScrollPrev}
            >
              <img src={imgArrow} alt="" aria-hidden="true" />
            </button>
            <button
              className="testimonials-section__control testimonials-section__control--next"
              type="button"
              aria-label="Next testimonials"
              onClick={() => scrollTrack('next')}
              disabled={!canScrollNext}
            >
              <img src={imgArrow} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="testimonials-section__track" ref={trackRef}>
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.id}>
              <img
                className="testimonial-card__quote-icon"
                src={imgQuoteIcon}
                alt=""
                aria-hidden="true"
              />
              <p className="testimonial-card__quote">{item.quote}</p>

              <div className="testimonial-card__footer">
                <div className="testimonial-card__avatar">
                  <img src={imgAvatar} alt={item.name} />
                </div>
                <div className="testimonial-card__person">
                  <p className="testimonial-card__name">{item.name}</p>
                  <p className="testimonial-card__role">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoinalsSection;
