import React from "react";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import "./style.scss";

const WhoWeAreSection = () => {
  const imgMain =
    "https://www.figma.com/api/mcp/asset/227cf369-c5d3-4d57-a984-2674d284a54f";
  const imgGlobe =
    "https://www.figma.com/api/mcp/asset/1474e749-bb22-4013-8678-7104af3bc393";
  const imgBadge =
    "https://www.figma.com/api/mcp/asset/0a959ce3-8aea-4091-8bab-fd3b1b8f6c84";
  const imgSpark =
    "https://www.figma.com/api/mcp/asset/dd6c53eb-fcc3-4acb-869e-498bf30f4368";
  const imgBriefcase =
    "https://www.figma.com/api/mcp/asset/685bd877-ff6a-4538-a485-dc0e7d6e704e";

  const features = [
    { icon: imgGlobe, label: "GCC-Ready Curriculum" },
    { icon: imgBadge, label: "CTDS Certified Academy" },
    { icon: imgSpark, label: "AI-Powered Practice" },
    { icon: imgBriefcase, label: "Career Support That Continues" },
  ];

  return (
    <section className="who-we-are-section-container-main">
      <div className="who-we-section-container container">
        <div className="who-we-are-section__media">
          <div className="who-we-are-section__image-frame">
            <img
              className="who-we-are-section__image"
              src={imgMain}
              alt="Students working in a classroom environment"
            />
          </div>
        </div>

        <div className="who-we-are-section__content">
          <SectionHeading
            className="who-we-are-section__heading"
            eyebrow="Who We Are"
            title="A Training Institute Built for Real Outcomes"
            accent="Real Outcomes"
            description="Aider Academy is a CTDS certified institute built for people who want practical skills that hold up in the real world. Our learning is structured, mentor-led, and project-driven, with a strong focus on GCC market expectations. Students train on modern tools, work on real briefs, and build portfolio-ready outputs while getting continuous guidance, plus career, internship, and freelancing support."
          />

          <div className="who-we-are-section__features">
            {features.map((feature) => (
              <div className="who-we-are-section__feature" key={feature.label}>
                <img src={feature.icon} alt="" aria-hidden="true" />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>

          <PrimaryButton className="who-we-are-section__cta">
            Know More
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
