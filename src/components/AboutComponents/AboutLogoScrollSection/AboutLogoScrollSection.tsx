import "./style.scss";

const logoFiles = [
  "1 4.png",
  "1 5.png",
  "1 6.png",
  "1 7.png",
  "1 8.png",
  "1 9.png",
  "1 10.png",
  "1 11.png",
  "1 12.png",
  "1 13.png",
  "14 1.png",
  "14 2.png",
  "14 3.png",
];

const logos = logoFiles.map((fileName, index) => ({
  src: `/images/slider-logos/${encodeURIComponent(fileName)}`,
  alt: `Accreditation logo ${index + 1}`,
}));

export default function AboutLogoScrollSection() {
  return (
    <section className="about-logo-scroll-section-main">
      <div className="about-logo-scroll-section-header">
        <div className="about-logo-scroll-section-header__container container">
          <h2 className="about-logo-scroll-section__title">
            <span className="about-logo-scroll-section__title-text">
              Certifications &amp;{" "}
            </span>
            <span className="about-logo-scroll-section__title-accent">
              Accreditations
            </span>
          </h2>
          <p className="about-logo-scroll-section__description">
            Recognitions that support our standards, curriculum structure, and
            training credibility.
          </p>
        </div>
      </div>

      <div className="about-logo-scroll-section-track-wrap">
        <div className="about-logo-scroll-section-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="about-logo-scroll-section-item" key={`${logo.alt}-${index}`}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
