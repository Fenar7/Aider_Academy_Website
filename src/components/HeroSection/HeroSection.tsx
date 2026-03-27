import React from 'react';
import './style.scss';

const imgPngegg1 = "http://localhost:3845/assets/3344d4a18f4bd7ed189d26b6054e8b241242ad9e.png";
const imgPngegg2 = "http://localhost:3845/assets/cf26b3e4a1da84a6e692a434a6f4acd33121c86c.png";
const imgCtdsLogo11 = "http://localhost:3845/assets/819c6b122fd7c3abdab8f0862cef7a629cd4ceca.png";
const imgPhoneIcon = "http://localhost:3845/assets/24a6e0cafa699c64ab17c0342809902b2ea92f88.png";
const imgHeroMain = "http://localhost:3845/assets/04a1b9beb697aa7ef30e421fad3b31ea733bb1ea.png";
const imgAsteriskIcon = "http://localhost:3845/assets/0f23cbb3486a64574ac41bfa090eada01a98abf2.png";
const imgCyanAsteriskTop = "http://localhost:3845/assets/8fde289adeed9fa14a855f9ed2bf9c865a3eeb9e.png";
const imgIconGraphicDesign = "http://localhost:3845/assets/7485581bb43aeac7d6f0c8564eded9fe6d2b6f0c.png";
const imgIconDigitalMarketing = "http://localhost:3845/assets/823d7e11db702c76df9ec4fabb46b3a441a94370.png";
const imgIconWebDev = "http://localhost:3845/assets/59b50bea39784f6aa027676f93e497dfa78bf790.png";

const HeroSection = () => {
  return (
    <div className='hero-section-container-main'>
      <img src={imgCyanAsteriskTop} alt="Decoration" className="hero-decoration-top" />
      
      <div className="hero-section-container container">
        <div className="left-section content-section">
          <h1 className="hero-headline">
            <span className="highlight-blue">Career-focused</span> training<br/>
            for real-world <span className="highlight-blue">digital roles.</span>
          </h1>
          <p className="hero-description">
            CTDS certified academy with a GCC-centric curriculum,
            live projects, and mentor-led learning. Built for beginners
            and professionals who want outcomes, not noise.
          </p>
          
          <div className="hero-ctas">
            <button className="btn-explore">Explore Courses</button>
            <button className="btn-advisor">Talk to an Advisor</button>
          </div>
          
          <div className="hero-contact-info">
            <div className="academy-badge">
              <img src={imgCtdsLogo11} alt="CTDS Logo" />
              <span>CTDS Certified Academy</span>
            </div>
            
            <div className="contact-details">
              <div className="phone-icon-wrapper">
                <img src={imgPhoneIcon} alt="Phone" className="phone-icon" />
              </div>
              <div className="contact-text">
                <span className="contact-label">Have any queries call us</span>
                <span className="contact-number">+91 88888 88888</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section image-section">
          <div className="hero-bg-wrapper">
             <img src={imgPngegg1} alt="" className="bg-shape bg-shape-1" />
             <img src={imgPngegg2} alt="" className="bg-shape bg-shape-2" />
          </div>

          <div className="hero-card-container">
            <div className="hero-image-mask">
              <img src={imgHeroMain} alt="Students collaborating" className="hero-main-img" />
            </div>
            
            <div className="floating-badge badge-graphic">
              <div className="icon-wrapper">
                <img src={imgIconGraphicDesign} alt="Graphic Design" />
              </div>
              <span className="badge-text">Graphic Design</span>
            </div>

            <div className="floating-badge badge-digital">
              <div className="icon-wrapper">
                <img src={imgIconDigitalMarketing} alt="Digital Marketing" />
              </div>
              <span className="badge-text">Digital Marketing</span>
            </div>

            <div className="floating-badge badge-web">
              <div className="icon-wrapper">
                <img src={imgIconWebDev} alt="Web Development" />
              </div>
              <span className="badge-text">Web Development</span>
            </div>

            <div className="bottom-highlight">
              <div className="asterisk-circle">
                 <img src={imgAsteriskIcon} alt="*" />
              </div>
              <p className="highlight-text">
                CTDS certified academy with a GCC-centric curriculum, live projects,
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
