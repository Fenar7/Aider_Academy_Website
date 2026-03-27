import React from 'react';
import './style.scss';

const logos = [
  { src: "http://localhost:3845/assets/8100e32ef7761e69c77ed20bd1cd693eb1e28d4b.png", alt: "Logo 1" },
  { src: "http://localhost:3845/assets/ebccb707dca98966800eebadbe8ef0b50a83a387.png", alt: "Logo 2" },
  { src: "http://localhost:3845/assets/b998a7b9fa5359466a7a5f27969eee3a15202c18.png", alt: "Logo 3" },
  { src: "http://localhost:3845/assets/018336619c43df1dd41a7dddd8f514e7e8a9dc65.png", alt: "Logo 4" },
  { src: "http://localhost:3845/assets/3ee174fa659111ebedbc0d01cf28e8122a2387e3.png", alt: "Logo 5" },
  { src: "http://localhost:3845/assets/35f2fd913069ee523eeabf1dbcf8932f07999de9.png", alt: "Logo 6" },
  { src: "http://localhost:3845/assets/62d5558b2fd457308cf0cddaf0d4ecb2bdcea7e3.png", alt: "Logo 7" },
  { src: "http://localhost:3845/assets/8c902c069c403ef849bd49825616dda03d733ad6.png", alt: "Logo 8" },
  { src: "http://localhost:3845/assets/6f5b71fa32d7dd11e57fa4725f9611fcef10a7a6.png", alt: "Logo 9" },
  { src: "http://localhost:3845/assets/2642d06944cbe273985a4afb2a3d198b4eac1262.png", alt: "Logo 10" },
  { src: "http://localhost:3845/assets/66a9868976f434889d8a607b0de169094641f35e.png", alt: "Logo 11" },
  { src: "http://localhost:3845/assets/9e1b4d04acc8ff53e31a98b1ad63c6fd6957805c.png", alt: "Logo 12" },
  { src: "http://localhost:3845/assets/db75caf09b14d9e2d961e9ae1d4e76e403c1cfa6.png", alt: "Logo 13" },
];

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