import React from "react";
import "./style.scss";

const imgLogo =
  "https://www.figma.com/api/mcp/asset/ec58bb8d-9a86-4092-a035-f52ae1e0c7a0";
const imgFacebook =
  "https://www.figma.com/api/mcp/asset/a7869b1c-87ac-44e1-a819-ad5eb0193fab";
const imgInstagram =
  "https://www.figma.com/api/mcp/asset/9c195c96-403d-4fef-af51-6f9f02a5220f";
const imgLinkedIn =
  "https://www.figma.com/api/mcp/asset/a2ffc6e9-741f-447f-9132-0216906d3761";
const imgWhatsApp =
  "https://www.figma.com/api/mcp/asset/6c84e7c7-ba7c-4d53-b884-273a3485809b";

const navigationLinks = ["Home", "About", "Courses", "Contact"];
const courseLinks = ["Graphic Design", "Digital Marketing", "Web Development"];
const contactItems = [
  "support@example.com",
  "+91 99999 99999",
  "Nadakkavu, Calicut",
];

const socialLinks = [
  { icon: imgFacebook, label: "Facebook" },
  { icon: imgInstagram, label: "Instagram" },
  { icon: imgLinkedIn, label: "LinkedIn" },
  { icon: imgWhatsApp, label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="footer-section-container-main">
      <div className="footer-section-container container">
        <div className="footer-section__top">
          <div className="footer-section__brand">
            <img className="footer-section__logo" src={imgLogo} alt="Aider Academy" />
            <div className="footer-section__socials">
              {socialLinks.map((item) => (
                <a
                  className="footer-section__social-link"
                  href="#"
                  aria-label={item.label}
                  key={item.label}
                >
                  <img src={item.icon} alt="" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section__column">
            <h3 className="footer-section__column-title">Navigation</h3>
            <div className="footer-section__column-links">
              {navigationLinks.map((item) => (
                <a className="footer-section__link" href="#" key={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section__column footer-section__column--courses">
            <h3 className="footer-section__column-title">Courses</h3>
            <div className="footer-section__column-links">
              {courseLinks.map((item) => (
                <a className="footer-section__link" href="#" key={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section__column footer-section__column--contact">
            <h3 className="footer-section__column-title">Contact</h3>
            <div className="footer-section__column-links">
              {contactItems.map((item) => (
                <p className="footer-section__text" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="footer-section__copyright">
          © 2025 Aider.Academy All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
