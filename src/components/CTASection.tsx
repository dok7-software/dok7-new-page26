import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-section-dark">
      {/* Subtle gradient overlay on dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-r from-accent/10 via-secondary/8 to-primary/10 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="soft-card p-12 md:p-20 text-center max-w-4xl mx-auto">
          {/* Decorative element */}
          <div className="w-20 h-20 mx-auto mb-10 rounded-full bg-gradient-to-br from-accent via-secondary to-primary flex items-center justify-center">
            <span className="text-3xl">💬</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-12 text-foreground">
            {t('cta.headline')}
            <br />
            <span className="font-display-light text-muted-foreground">{t('cta.headlineLight')}</span>
          </h2>
          
          <div className="flex items-center justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/40 text-primary hover:border-primary hover:bg-primary/10 hover:text-white rounded-full px-10 py-6 transition-all duration-300"
            >
              {t('cta.ctaSecondary')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;