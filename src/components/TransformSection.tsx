import { useTranslation } from "react-i18next";

const TransformSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      title: t('transform.values.empathy.title'),
      description: t('transform.values.empathy.description')
    },
    {
      title: t('transform.values.innovation.title'),
      description: t('transform.values.innovation.description')
    },
    {
      title: t('transform.values.trustworthy.title'),
      description: t('transform.values.trustworthy.description')
    }
  ];

  const stats = [
    { value: "98%", label: t('transform.stats.satisfaction') },
    { value: "15+", label: t('transform.stats.years') },
    { value: "200+", label: t('transform.stats.lives') },
  ];

  return (
    <section id="about" className="pt-8 md:pt-16 pb-16 md:pb-32 relative overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary text-sm tracking-widest mb-6 uppercase">{t('transform.label')}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            {t('transform.headline')}
            <br />
            <span className="font-display-light text-muted-foreground">{t('transform.headlineLight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('transform.description')}
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 md:mb-24">
          {values.map((value, index) => (
            <div 
              key={index}
              className="soft-card p-10 text-center hover:shadow-lg transition-shadow duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/30 via-secondary/20 to-primary/20 flex items-center justify-center">
                <span className="text-2xl">{index === 0 ? '💛' : index === 1 ? '✨' : '🤝'}</span>
              </div>
              <h3 className="font-display text-xl mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-12 pt-8 md:pt-16 border-t border-border/50">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl md:text-5xl lg:text-6xl gradient-text mb-2 md:mb-3">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-xs md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;