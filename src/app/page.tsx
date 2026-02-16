import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollHeroSection } from "@/components/sections/ScrollHeroSection";
import { ImpactHeroStrip } from "@/components/sections/ImpactHeroStrip";
import { ImpactCards } from "@/components/sections/ImpactCards";
import { StatsStrip } from "@/components/sections/StatsStrip";
import TransformSectionTimeline from "@/components/TransformSectionTimeline";
import CTASection from "@/components/CTASection";

export default function ScrollHeroPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ImpactHeroStrip />
        <ScrollHeroSection />
        <ImpactCards />
        <div className="bg-section-light">
          <TransformSectionTimeline />
        </div>
        <StatsStrip />
        <div className="bg-section-dark">
          <CTASection />
        </div>
      </main>
      <div className="bg-section-light">
        <Footer />
      </div>
    </div>
  );
}
