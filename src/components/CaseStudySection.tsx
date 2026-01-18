import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CaseStudySection = () => {
  const { t } = useTranslation();

  const autoplayPlugin = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  });

  const stories = [
    {
      quote: t('stories.testimonials.testimonial1.quote'),
      name: t('stories.testimonials.testimonial1.name'),
      role: t('stories.testimonials.testimonial1.role'),
      company: t('stories.testimonials.testimonial1.company'),
      impact: t('stories.testimonials.testimonial1.impact')
    },
    {
      quote: t('stories.testimonials.testimonial2.quote'),
      name: t('stories.testimonials.testimonial2.name'),
      role: t('stories.testimonials.testimonial2.role'),
      company: t('stories.testimonials.testimonial2.company'),
      impact: t('stories.testimonials.testimonial2.impact')
    },
    {
      quote: t('stories.testimonials.testimonial3.quote'),
      name: t('stories.testimonials.testimonial3.name'),
      role: t('stories.testimonials.testimonial3.role'),
      company: t('stories.testimonials.testimonial3.company'),
      impact: t('stories.testimonials.testimonial3.impact')
    }
  ];

  return (
    <section id="stories" className="py-32 relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-primary text-sm tracking-widest mb-6 uppercase">{t('stories.label')}</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              {t('stories.headline')}
              <br />
              <span className="font-display-light text-muted-foreground">{t('stories.headlineLight')}</span>
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full self-start lg:self-auto"
          >
            {t('stories.cta')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Stories Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="soft-card p-10 hover:shadow-lg transition-all duration-500 group cursor-pointer flex flex-col"
            >
              {/* Quote */}
              <p className="text-foreground text-xl leading-relaxed mb-8 flex-grow font-light">
                "{story.quote}"
              </p>
              
              {/* Impact Badge */}
              <div className="inline-flex self-start px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 via-secondary/15 to-primary/20 text-sm text-foreground mb-6">
                {story.impact}
              </div>

              {/* Author */}
              <div>
                <p className="font-display text-foreground mb-1">{story.name}</p>
                <p className="text-muted-foreground text-sm">{story.role}</p>
                <p className="text-muted-foreground/70 text-sm">{story.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stories Carousel - Mobile */}
        <div className="block md:hidden relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {stories.map((story, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4">
                  <div className="soft-card p-10 hover:shadow-lg transition-all duration-500 group cursor-pointer flex flex-col">
                    {/* Quote */}
                    <p className="text-foreground text-xl leading-relaxed mb-8 flex-grow font-light">
                      "{story.quote}"
                    </p>
                    
                    {/* Impact Badge */}
                    <div className="inline-flex self-start px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 via-secondary/15 to-primary/20 text-sm text-foreground mb-6">
                      {story.impact}
                    </div>

                    {/* Author */}
                    <div>
                      <p className="font-display text-foreground mb-1">{story.name}</p>
                      <p className="text-muted-foreground text-sm">{story.role}</p>
                      <p className="text-muted-foreground/70 text-sm">{story.company}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:-left-12" />
            <CarouselNext className="right-2 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;