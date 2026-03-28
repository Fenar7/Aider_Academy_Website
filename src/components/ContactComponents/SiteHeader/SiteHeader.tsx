import Link from "next/link";
import "./style.scss";

const imgLogo =
  "https://www.figma.com/api/mcp/asset/c5ba3f99-e6b7-4935-a088-81a7b3214522";
const imgFacebook =
  "https://www.figma.com/api/mcp/asset/5a39475b-0f40-4529-b38d-5c9d9ec08a62";
const imgInstagram =
  "https://www.figma.com/api/mcp/asset/3e66438d-9063-4e19-8f1b-fd9d753bf215";
const imgLinkedIn =
  "https://www.figma.com/api/mcp/asset/50ac74e3-d427-4740-ac2c-e8de4d231999";
const imgWhatsApp =
  "https://www.figma.com/api/mcp/asset/6405efe5-2841-4999-88e2-f590ba9b0c43";
const imgCtaCircle =
  "https://www.figma.com/api/mcp/asset/80f51911-1263-478f-99eb-3c761c379fe9";
const imgCtaArrow =
  "https://www.figma.com/api/mcp/asset/14a6d769-3e77-408b-ba6a-b3ff057c1899";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Courses", href: "/#courses" },
  { label: "Blog", href: "/#blog" },
];

const socialItems = [
  { label: "Facebook", href: "#", icon: imgFacebook },
  { label: "Instagram", href: "#", icon: imgInstagram },
  { label: "LinkedIn", href: "#", icon: imgLinkedIn },
  { label: "WhatsApp", href: "#", icon: imgWhatsApp },
];

export default function SiteHeader() {
  return (
    <header className="site-header-main">
      <div className="site-header-container container">
        <Link className="site-header__brand" href="/" aria-label="Aider Academy home">
          <img className="site-header__logo" src={imgLogo} alt="Aider Academy" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {navigationItems.map((item, index) => (
            <Link
              className={`site-header__nav-link ${
                index === 0 ? "site-header__nav-link--pill" : ""
              }`.trim()}
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <div className="site-header__socials" aria-label="Social links">
            {socialItems.map((item) => (
              <a
                className="site-header__social-link"
                href={item.href}
                key={item.label}
                aria-label={item.label}
              >
                <img src={item.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>

          <Link className="site-header__contact-cta" href="/contact">
            <span>Contact</span>
            <span className="site-header__contact-cta-icon">
              <img
                className="site-header__contact-cta-circle"
                src={imgCtaCircle}
                alt=""
                aria-hidden="true"
              />
              <img
                className="site-header__contact-cta-arrow"
                src={imgCtaArrow}
                alt=""
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
