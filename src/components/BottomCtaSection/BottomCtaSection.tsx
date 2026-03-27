import React from "react";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import "./style.scss";

const imgGridPrimary =
  "https://www.figma.com/api/mcp/asset/207910ff-aab5-44ed-a6c2-f7c852faf3fb";
const imgGridSecondary =
  "https://www.figma.com/api/mcp/asset/39a17838-0c28-4aeb-a558-dfb8310fa43b";

const BottomCtaSection = () => {
  return (
    <section className="bottom-cta-section-container">
      <div className="bottom-cta-section container">
        <div className="bottom-cta-panel">
          <div className="bottom-cta-panel__grid-layer bottom-cta-panel__grid-layer--primary">
            <img src={imgGridPrimary} alt="" aria-hidden="true" />
            <img src={imgGridPrimary} alt="" aria-hidden="true" />
            <img src={imgGridPrimary} alt="" aria-hidden="true" />
          </div>
          <div className="bottom-cta-panel__grid-layer bottom-cta-panel__grid-layer--secondary">
            <img src={imgGridSecondary} alt="" aria-hidden="true" />
            <img src={imgGridSecondary} alt="" aria-hidden="true" />
            <img src={imgGridSecondary} alt="" aria-hidden="true" />
          </div>

          <div className="bottom-cta-panel__cutout bottom-cta-panel__cutout--bottom-left" />
          <div className="bottom-cta-panel__cutout bottom-cta-panel__cutout--top-right" />

          <div className="bottom-cta-panel__content">
            <h2 className="bottom-cta-panel__title">
              <span>Start Your Learning Journey with </span>
              <span className="bottom-cta-panel__title-accent">Aider</span>
            </h2>
            <p className="bottom-cta-panel__description">
              Talk to our team, understand the program structure, and register when
              you’re ready.
            </p>

            <div className="bottom-cta-panel__actions">
              <PrimaryButton className="bottom-cta-panel__button" variant="dark">
                Explore Courses
              </PrimaryButton>
              <PrimaryButton className="bottom-cta-panel__button" variant="white">
                Talk to an Advisor
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCtaSection;
