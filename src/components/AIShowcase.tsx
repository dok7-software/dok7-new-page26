import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const AIShowcase = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t('process.steps.step1.title'),
      description: t('process.steps.step1.description')
    },
    {
      number: "02",
      title: t('process.steps.step2.title'),
      description: t('process.steps.step2.description')
    },
    {
      number: "03",
      title: t('process.steps.step3.title'),
      description: t('process.steps.step3.description')
    },
    {
      number: "04",
      title: t('process.steps.step4.title'),
      description: t('process.steps.step4.description')
    }
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-r from-accent/10 via-secondary/10 to-primary/10 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary text-sm tracking-widest mb-6 uppercase">{t('process.label')}</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              {t('process.headline')}
              {t('process.headlineLight') && (
                <>
                  <br />
                  <span className="font-display-light text-muted-foreground">{t('process.headlineLight')}</span>
                </>
              )}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t('process.description')}
            </p>

            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
              {t('process.cta')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Right - Process Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="soft-card p-8 hover:shadow-lg transition-all duration-500 group"
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl gradient-text">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;