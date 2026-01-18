import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { HeroCarousel } from "./HeroCarousel";

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-32 overflow-hidden">
      {/* Soft organic gradient backgrounds */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/25 blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Two Column Layout: Text Left, Carousel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight text-foreground">
              {t('hero.headline')}
              <br />
              <span className="gradient-text">{t('hero.headlineHighlight')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0 mb-12 leading-relaxed font-light">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base"
                onClick={() => scrollToSection('contact')}
              >
                {t('hero.ctaPrimary')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full px-8 py-6 text-base"
                onClick={() => scrollToSection('process')}
              >
                {t('hero.ctaSecondary')}
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Carousel */}
          <div className="flex items-center justify-center lg:justify-end">
            <HeroCarousel />
          </div>
        </div>

        {/* Trusted by */}
        <div className="pt-12 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-8 text-center">{t('hero.trustedBy')}</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {["healthcare", "education", "wellbeing", "community", "sustainability"].map((sector) => (
              <span 
                key={sector}
                className="text-muted-foreground/60 text-sm font-medium tracking-wide"
              >
                {t(`hero.sectors.${sector}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;