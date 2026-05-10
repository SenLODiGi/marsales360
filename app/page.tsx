import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ServicesPreview from "@/components/ServicesPreview";
import ProcessSection from "@/components/ProcessSection";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhySection />
      <ServicesPreview />
      <ProcessSection />
      <MissionSection />
      <Footer />
    </main>
  );
}
