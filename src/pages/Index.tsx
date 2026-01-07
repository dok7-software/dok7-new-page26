import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TransformSection from "@/components/TransformSection";
import ServicesSection from "@/components/ServicesSection";
import AIShowcase from "@/components/AIShowcase";
import AgentsSection from "@/components/AgentsSection";
import CaseStudySection from "@/components/CaseStudySection";
import InsightsSection from "@/components/InsightsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TransformSection />
        <ServicesSection />
        <AIShowcase />
        <AgentsSection />
        <CaseStudySection />
        <InsightsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
