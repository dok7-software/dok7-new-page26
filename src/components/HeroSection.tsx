import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Soft organic gradient backgrounds */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/25 blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight text-foreground">
            {t('hero.headline')}
            <br />
            <span className="gradient-text">{t('hero.headlineHighlight')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full px-8 py-6 text-base"
            >
              {t('hero.ctaSecondary')}
            </Button>
          </div>

          {/* Trusted by */}
          <div className="pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-8">{t('hero.trustedBy')}</p>
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
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;