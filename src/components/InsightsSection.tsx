import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const InsightsSection = () => {
  const { t } = useTranslation();

  const articles = [
    {
      category: t('insights.articles.article1.category'),
      title: t('insights.articles.article1.title'),
      excerpt: t('insights.articles.article1.excerpt'),
      readTime: t('insights.articles.article1.readTime')
    },
    {
      category: t('insights.articles.article2.category'),
      title: t('insights.articles.article2.title'),
      excerpt: t('insights.articles.article2.excerpt'),
      readTime: t('insights.articles.article2.readTime')
    },
    {
      category: t('insights.articles.article3.category'),
      title: t('insights.articles.article3.title'),
      excerpt: t('insights.articles.article3.excerpt'),
      readTime: t('insights.articles.article3.readTime')
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Soft shapes */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] rounded-full bg-secondary/10 blur-[60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <p className="text-primary text-sm tracking-widest mb-6 uppercase">{t('insights.label')}</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              {t('insights.headline')}
              <br />
              <span className="font-display-light text-muted-foreground">{t('insights.headlineLight')}</span>
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-primary/40 text-primary hover:border-primary hover:bg-primary/10 hover:text-white rounded-full self-start lg:self-auto transition-all duration-300"
          >
            {t('insights.cta')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="soft-card p-8 hover:shadow-lg transition-all duration-500 group cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-primary">
                  {article.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {article.readTime}
                </span>
              </div>
              
              <h3 className="font-display text-xl mb-4 text-foreground group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {article.excerpt}
              </p>
              
              <div className="mt-6 flex items-center text-foreground text-sm group-hover:text-primary transition-colors">
                {t('insights.readMore')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;