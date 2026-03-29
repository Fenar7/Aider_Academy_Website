import Footer from "@/components/Footer/Footer";
import ContactFaqSection from "@/components/ContactComponents/ContactFaqSection/ContactFaqSection";
import ContactFormInfoSection from "@/components/ContactComponents/ContactFormInfoSection/ContactFormInfoSection";
import ContactHero from "@/components/ContactComponents/ContactHero/ContactHero";
import ContactMapSection from "@/components/ContactComponents/ContactMapSection/ContactMapSection";
import "./style.scss";

export default function ContactPage() {
  return (
    <main className="contact-page-main">
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
