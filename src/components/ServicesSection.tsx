import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Code, Palette, Smartphone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & UX",
      description: "Human-centered design that creates meaningful connections between users and products.",
      tags: ["UX Research", "UI Design", "Prototyping", "Design Systems"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Engineering",
      description: "Robust, scalable software solutions built with modern technologies and best practices.",
      tags: ["Web Development", "Cloud Architecture", "DevOps", "Quality Assurance"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Intelligent systems that learn, adapt, and deliver transformative business value.",
      tags: ["Machine Learning", "NLP", "Computer Vision", "AI Strategy"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile experiences that users love.",
      tags: ["iOS", "Android", "React Native", "Flutter"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              A services-first approach
              <br />
              <span className="text-muted-foreground">to any software you can dream of—</span>
              <br />
              <span className="gradient-text">now amplified by AI</span>
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 self-start md:self-auto"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  {service.icon}
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
