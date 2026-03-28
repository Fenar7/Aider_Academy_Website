import Footer from "@/components/Footer/Footer";
import ContactFaqSection from "@/components/ContactComponents/ContactFaqSection/ContactFaqSection";
import ContactFormInfoSection from "@/components/ContactComponents/ContactFormInfoSection/ContactFormInfoSection";
import ContactHero from "@/components/ContactComponents/ContactHero/ContactHero";
import ContactMapSection from "@/components/ContactComponents/ContactMapSection/ContactMapSection";
import SiteHeader from "@/components/ContactComponents/SiteHeader/SiteHeader";
import "./style.scss";

export default function ContactPage() {
  return (
    <main className="contact-page-main">
      <SiteHeader />
      <div className="contact-page-content">
        <ContactHero />
        <ContactFormInfoSection />
        <ContactMapSection />
        <ContactFaqSection />
      </div>
      <Footer />
    </main>
  );
}
