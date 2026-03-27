import React from "react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import "./style.scss";

const imgBeginners = "https://www.figma.com/api/mcp/asset/582deb55-d1a2-4305-93cb-a4030c576d84";
const imgProfessionals = "https://www.figma.com/api/mcp/asset/8c893cfd-2308-485a-88bb-f5d7f737a175";
const imgStudents = "https://www.figma.com/api/mcp/asset/89872538-f5d1-468b-a69b-566d5a654971";
const imgFreelancers = "https://www.figma.com/api/mcp/asset/a8abb596-3f6f-42ea-8247-4dbed7399fad";
const imgCheck = "https://www.figma.com/api/mcp/asset/ca4da20e-3eed-4703-982b-33557168b988";

const audienceCards = [
  {
    icon: imgBeginners,
    title: "Complete Beginners",
    description:
      "Start from the basics, learn step by step, and build confidence through guided practice and weekly reviews today.",
  },
  {
    icon: imgStudents,
    title: "Students",
    description:
      "Strengthen job-ready skills, build a solid portfolio, and get support for placements, internships, and entry-level opportunities here quickly.",
  },
  {
    icon: imgProfessionals,
    title: "Working Professionals",
    description:
      "Upgrade your expertise or switch careers with structured modules, real assignments, and mentor guidance that fits your schedule.",
  },
  {
    icon: imgFreelancers,
    title: "Freelancers and Entrepreneurs",
    description:
      "Learn to deliver client-ready work, price your services, and build a portfolio that helps you win projects consistently.",
  },
];

const WhoCanJoin = () => {
  return (
    <section className="who-can-join-container-main">
      <div className="who-can-join-container container">
        <SectionHeading
          className="who-can-join__heading"
          eyebrow="Who Can Join"
          title="If You’re Ready to Learn, You’re Ready for Aider."
          accent="Ready to Learn,"
          layout="split"
          sideDescription="Whether you’re a beginner, a student, or a working professional, Aider is built for you."
        />

        <div className="feature-items-container-who-can-join">
          {audienceCards.map((item) => (
            <article className="who-can-join-card" key={item.title}>
              <div className="who-can-join-card__icon-wrap">
                <img src={item.icon} alt="" aria-hidden="true" />
              </div>
              <div className="who-can-join-card__content">
                <h3 className="who-can-join-card__title">{item.title}</h3>
                <p className="who-can-join-card__description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="who-can-join__note">
          <img src={imgCheck} alt="" aria-hidden="true" />
          <p>No prior experience required. Consistency is what creates results.</p>
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;
