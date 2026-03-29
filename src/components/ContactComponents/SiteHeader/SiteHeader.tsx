"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.scss";

const imgLogo =
  "/images/aider-academy-logo.png";
const imgFacebook = "/images/icons/fb.svg";
const imgInstagram = "/images/icons/insta.svg";
const imgLinkedIn = "/images/icons/linkedin.svg";
const imgWhatsApp = "/images/icons/wp.svg";
const imgCtaArrow = "/images/icons/right-arrow.svg";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
];

const socialItems = [
  { label: "Facebook", href: "#", icon: imgFacebook },
  { label: "Instagram", href: "#", icon: imgInstagram },
  { label: "LinkedIn", href: "#", icon: imgLinkedIn },
  { label: "WhatsApp", href: "#", icon: imgWhatsApp },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header-main">
      <div className="site-header-container container">
        <Link className="site-header__brand" href="/" aria-label="Aider Academy home">
          <img className="site-header__logo" src={imgLogo} alt="Aider Academy" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          {navigationItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href === "/about"
                  ? pathname === "/about"
                  : item.href === "/courses"
                    ? pathname === "/courses"
                    : item.href === "/blog"
                      ? pathname === "/blog"
                  : false;

            return (
            <Link
              className={`site-header__nav-link ${
                isActive ? "site-header__nav-link--pill" : ""
              }`.trim()}
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
            );
          })}
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

          <Link
            className={`site-header__contact-cta ${
              pathname === "/contact" ? "site-header__contact-cta--active" : ""
            }`.trim()}
            href="/contact"
          >
            <span>Contact</span>
            <span className="site-header__contact-cta-icon">
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
