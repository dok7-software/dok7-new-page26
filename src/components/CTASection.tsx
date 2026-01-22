import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-section-dark">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="soft-card py-16 px-8 md:py-20 md:px-16 lg:py-24 lg:px-20 relative overflow-hidden">
              <div className="relative z-10 text-center">
                {/* Icon badge */}
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 via-secondary/20 to-primary/20 border border-primary/30 mb-8">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Comienza Hoy</span>
                </div>
                
                {/* Headline con gradient */}
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                  <span className="gradient-text">{t('cta.headline')}</span>
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                  {t('cta.subtitle')}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary via-secondary/80 to-primary hover:from-primary/90 hover:via-secondary/70 hover:to-primary/90 text-white rounded-full px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto group"
                  >
                    <MessageCircle className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    {t('cta.ctaPrimary')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;