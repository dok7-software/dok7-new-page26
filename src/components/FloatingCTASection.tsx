import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const FloatingCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-8 md:pb-12 lg:pb-16 relative">
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Background dividido: Mitad oscuro arriba, mitad claro abajo */}
          <div className="absolute inset-0 pointer-events-none -mx-[50vw] left-1/2 right-1/2 w-screen">
            <div className="h-1/2 bg-section-dark" style={{ backgroundColor: 'hsl(220 45% 18%)' }} />
            <div className="h-1/2 bg-section-light" style={{ backgroundColor: 'hsl(40 30% 97%)' }} />
          </div>
          
          {/* Extensión del fondo claro hacia abajo */}
          <div className="absolute top-full left-1/2 right-1/2 -mx-[50vw] w-screen h-12 md:h-16 lg:h-20 xl:h-24 bg-section-light pointer-events-none" style={{ backgroundColor: 'hsl(40 30% 97%)' }} />
          
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Contenedor blanco elevado con el contenido */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 p-8 md:p-12 lg:p-16 xl:p-20 relative overflow-hidden">
              
              {/* Decorative gradient background */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-accent/20 via-secondary/15 to-primary/20 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-gradient-to-tr from-primary/15 via-accent/10 to-secondary/15 blur-[80px] pointer-events-none" />
              
              {/* Contenido */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
                <div>
                  {/* Icon decorativo */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent via-secondary to-primary mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  
                  <h2 className="text-[#182547] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    {t('floatingCTA.headline')}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                    {t('floatingCTA.subtitle')}
                  </p>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="space-y-4">
                    {/* Benefits list */}
                    {[
                      t('floatingCTA.benefit1'),
                      t('floatingCTA.benefit2'),
                      t('floatingCTA.benefit3'),
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-base">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      size="lg"
                      className="bg-[#182547] hover:bg-[#182547]/90 text-white rounded-full px-8 py-6 text-base w-full sm:w-auto"
                    >
                      {t('floatingCTA.cta')}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingCTASection;

