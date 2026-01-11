import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Code2, Cog, Zap, TrendingUp, Shield, Users2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const DesarrolloMedida = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      titleKey: "customDevelopment.benefits.productivity.title",
      descriptionKey: "customDevelopment.benefits.productivity.description",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      titleKey: "customDevelopment.benefits.competitive.title",
      descriptionKey: "customDevelopment.benefits.competitive.description",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      titleKey: "customDevelopment.benefits.personalized.title",
      descriptionKey: "customDevelopment.benefits.personalized.description",
    },
  ];

  const features = [
    {
      titleKey: "customDevelopment.features.respectProcesses.title",
      descriptionKey: "customDevelopment.features.respectProcesses.description",
      icon: <Shield className="w-8 h-8" />,
      color: "from-primary/40 to-primary/10"
    },
    {
      titleKey: "customDevelopment.features.efficiency.title",
      descriptionKey: "customDevelopment.features.efficiency.description",
      icon: <Cog className="w-8 h-8" />,
      color: "from-secondary/40 to-secondary/10"
    },
    {
      titleKey: "customDevelopment.features.focus.title",
      descriptionKey: "customDevelopment.features.focus.description",
      icon: <Users2 className="w-8 h-8" />,
      color: "from-accent/40 to-accent/10"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Soft organic gradient backgrounds */}
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] animate-pulse-soft" />
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/25 blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Label */}
              <p className="text-primary text-sm tracking-widest mb-6 uppercase">
                {t('customDevelopment.label')}
              </p>

              {/* Main Headline */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight text-foreground">
                {t('customDevelopment.hero.headline')}
                <br />
                <span className="gradient-text">{t('customDevelopment.hero.headlineHighlight')}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                {t('customDevelopment.hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                <Button 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base"
                >
                  {t('customDevelopment.hero.ctaPrimary')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full px-8 py-6 text-base"
                >
                  {t('customDevelopment.hero.ctaSecondary')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why is it Important Section */}
        <section className="py-32 relative overflow-hidden bg-muted/30">
          <div className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[80px]" />
          <div className="absolute bottom-20 right-10 w-[250px] h-[250px] rounded-full bg-accent/10 blur-[80px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                {t('customDevelopment.why.headline')}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('customDevelopment.why.description')}
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="soft-card p-8 text-center hover:shadow-lg transition-all duration-500"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-foreground mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display text-xl mb-3 text-foreground">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(benefit.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute top-1/3 right-20 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-primary text-sm tracking-widest mb-6 uppercase">
                {t('customDevelopment.features.label')}
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                {t('customDevelopment.features.headline')}
                <br />
                <span className="font-display-light text-muted-foreground">
                  {t('customDevelopment.features.headlineLight')}
                </span>
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="soft-card p-10 hover:shadow-lg transition-all duration-500 group cursor-pointer"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-foreground mb-8 inline-flex`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="font-display text-2xl mb-4 text-foreground">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 relative overflow-hidden bg-muted/30">
          <div className="absolute bottom-20 left-10 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                  {t('customDevelopment.process.headline')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('customDevelopment.process.description')}
                </p>
              </div>

              {/* Process Steps */}
              <div className="space-y-6">
                {[1, 2, 3, 4].map((step) => (
                  <div 
                    key={step}
                    className="soft-card p-8 flex items-start gap-6 hover:shadow-lg transition-all duration-500"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center font-display text-xl text-foreground">
                      {step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl mb-2 text-foreground">
                        {t(`customDevelopment.process.steps.step${step}.title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`customDevelopment.process.steps.step${step}.description`)}
                      </p>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-6xl mb-6 text-foreground">
                {t('customDevelopment.cta.headline')}
                <br />
                <span className="font-display-light text-muted-foreground">
                  {t('customDevelopment.cta.headlineLight')}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                {t('customDevelopment.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-6 text-base"
                >
                  {t('customDevelopment.cta.ctaPrimary')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full px-8 py-6 text-base"
                >
                  {t('customDevelopment.cta.ctaSecondary')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DesarrolloMedida;

