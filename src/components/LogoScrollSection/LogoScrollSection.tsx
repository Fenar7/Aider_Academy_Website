import React from 'react';
import './style.scss';

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
  alt: `Logo ${index + 1}`,
}));

const LogoScrollSection = () => {
  return (
    <section className="logo-scroll-section">
      <div className="logo-scroll-track-wrapper">
        <div className="logo-scroll-track">
          {/* Render logos twice for seamless infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div className="logo-scroll-item" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoScrollSection;
