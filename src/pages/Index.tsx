import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TransformSectionTimeline from "@/components/TransformSectionTimeline";
import ServicesSection from "@/components/ServicesSection";
import CaseStudySection from "@/components/CaseStudySection";
import InsightsSection from "@/components/InsightsSection";
import CTASection from "@/components/CTASection";
import FloatingCTASection from "@/components/FloatingCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Sección 1 - Fondo Claro (Hero + Transform) */}
        <div className="bg-section-light">
          <HeroSection />
          <TransformSectionTimeline />
        </div>
        
        {/* Sección 2 - Fondo Oscuro (Services) */}
        <div className="bg-section-dark">
          <ServicesSection />
        </div>
        
        {/* Sección 3 - Transición con Floating CTA */}
        <FloatingCTASection />
        
        {/* Sección 4 - Fondo Claro (CaseStudy) */}
        <div className="bg-section-light">
          <CaseStudySection />
        </div>
        
        {/* Sección 5 - Fondo Oscuro (Insights + CTA) */}
        <div className="bg-section-dark">
          <InsightsSection />
          <CTASection />
        </div>
      </main>
      
      {/* Footer - Fondo Claro */}
      <div className="bg-section-light">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
