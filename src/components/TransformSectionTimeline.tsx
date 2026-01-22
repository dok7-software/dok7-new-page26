import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Registrar el plugin de ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TransformSectionTimeline = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  useEffect(() => {
    if (typeof window === "undefined" || !itemsRef.current.length) return;

    const items = itemsRef.current.filter(Boolean) as HTMLDivElement[];

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 50,
          x: index % 2 === 0 ? -50 : 50,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about-timeline" 
      className="pt-8 md:pt-16 pb-16 md:pb-32 relative overflow-hidden"
    >
      {/* Soft background gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl text-foreground mb-6">
            {t('transform.headline')}
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/30 hidden md:block transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-2 md:space-y-4">
            {values.map((value, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemsRef.current[index] = el;
                  }}
                  className={`relative flex flex-col md:flex-row items-center gap-4 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="soft-card p-8 md:p-10 hover:shadow-lg transition-shadow duration-500">
                      <h3 className="font-display text-xl mb-4 text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10 hidden md:block" />

                  {/* Spacer for mobile */}
                  <div className="w-full md:w-5/12 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-12 pt-8 md:pt-16 mt-16 md:mt-24 border-t border-border/50">
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

export default TransformSectionTimeline;

