import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const TransformSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      title: t('transform.values.innovation.title'),
      description: t('transform.values.innovation.description')
    },
    {
      title: t('transform.values.clarity.title'),
      description: t('transform.values.clarity.description')
    },
    {
      title: t('transform.values.evolution.title'),
      description: t('transform.values.evolution.description')
    },
    {
      title: t('transform.values.agility.title'),
      description: t('transform.values.agility.description')
    },
    {
      title: t('transform.values.collaboration.title'),
      description: t('transform.values.collaboration.description')
    }
  ];

  const stats = [
    { value: "100%", label: t('transform.stats.satisfaction') },
    { value: "20+", label: t('transform.stats.years') },
    { value: "200+", label: t('transform.stats.lives') },
  ];

  const autoplayPlugin = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  return (
    <section id="about" className="pt-8 md:pt-16 pb-16 md:pb-32 relative overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl text-foreground mb-6">
            {t('transform.headline')}
          </h2>
        </div>

        {/* Values Carousel */}
        <div className="mb-12 md:mb-24 max-w-6xl mx-auto relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[autoplayPlugin]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {values.map((value, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                  <div className="soft-card p-10 text-center hover:shadow-lg transition-shadow duration-500">
                    <h3 className="font-display text-xl mb-4 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
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