import BlogSection from "@/components/BlogSection/BlogSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import LogoScrollSection from "@/components/LogoScrollSection/LogoScrollSection";
import OurCourses from "@/components/OurCourses/OurCourses";
import PillarsSection from "@/components/PillarsSection/PillarsSection";
import TestimoinalsSection from "@/components/TestimonialsSection/TestimoinalsSection";
import WhoCanJoin from "@/components/WhoCanJoin/WhoCanJoin";
import WhoWeAreSection from "@/components/WhoWeAreSection/WhoWeAreSection";
import WhyAiderSectiont from "@/components/WhyAiderSection/WhyAiderSectiont";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LogoScrollSection />
      <PillarsSection />
      <OurCourses />
      <WhoWeAreSection />
      <WhyAiderSectiont />
      <WhoCanJoin />
      <BlogSection />
      <TestimoinalsSection />
    </main>
  );
}
