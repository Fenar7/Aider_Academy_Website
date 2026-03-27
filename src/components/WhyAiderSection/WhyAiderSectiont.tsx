import React from "react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import "./style.scss";

const imgFundamentalsIcon =
  "https://www.figma.com/api/mcp/asset/d1bca525-91fb-4f40-9978-ea724abc33c3";
const imgPortfolioIcon =
  "https://www.figma.com/api/mcp/asset/7097fa84-4438-421b-b2ac-05dfa5c9334e";
const imgWorkflowIcon =
  "https://www.figma.com/api/mcp/asset/e4bab0b3-b57b-49bb-b1fe-329efeea2ede";
const imgFeedbackIcon =
  "https://www.figma.com/api/mcp/asset/ce5b5897-d1e1-4dba-9b5a-8a8755721505";

const features = [
  {
    icon: imgFundamentalsIcon,
    title: "Fundamentals First",
    description: "Start with basics, then build skills through guided practice.",
  },
  {
    icon: imgPortfolioIcon,
    title: "Portfolio-Grade Output",
    description:
      "Create real work samples you can confidently show employers.",
  },
  {
    icon: imgWorkflowIcon,
    title: "Industry Workflows",
    description: "Learn professional processes used across agencies teams.",
  },
  {
    icon: imgFeedbackIcon,
    title: "Weekly Feedback Loop",
    description:
      "Improve faster with regular reviews, corrections, and clear direction.",
  },
];

const WhyAiderSectiont = () => {
  return (
    <section className="why-aider-section-container-main">
      <div className="why-aider-section-container container">
        <SectionHeading
          className="why-aider-section__heading"
          eyebrow="Why Aider.Academy"
          title="Why Aider Academy Is the Career-First Training Institute"
          accent="Career-First"
          description="Structured learning that starts with fundamentals and ends with confident, job-ready execution."
        />

        <div className="feature-cards-container">
          {features.map((feature) => (
            <article className="why-aider-feature-card" key={feature.title}>
              <div className="why-aider-feature-card__icon-wrap">
                <img src={feature.icon} alt="" aria-hidden="true" />
              </div>
              <div className="why-aider-feature-card__copy">
                <h3 className="why-aider-feature-card__title">
                  {feature.title}
                </h3>
                <p className="why-aider-feature-card__description">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAiderSectiont;
