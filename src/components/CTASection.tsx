import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-section-dark">
      {/* Subtle gradient overlay on dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-r from-accent/10 via-secondary/8 to-primary/10 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="soft-card max-w-5xl mx-auto py-12 px-12 md:py-16 md:px-20 lg:py-20 lg:px-28 xl:py-24 xl:px-36">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Columna izquierda - Texto */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground leading-tight">
                {t('cta.headline')}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('cta.subtitle')}
              </p>
            </div>
            
            {/* Columna derecha - CTA */}
            <div className="space-y-6 lg:ml-8">
              <div className="flex flex-col gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base w-full"
                >
                  {t('cta.ctaPrimary')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <div className="text-center">
                  <span className="text-muted-foreground text-sm">o escríbenos a</span>
                </div>
                
                <a 
                  href="mailto:contacto@dok7.io"
                  className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-medium"
                >
                  <Mail className="w-5 h-5" />
                  {t('cta.ctaSecondary')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;