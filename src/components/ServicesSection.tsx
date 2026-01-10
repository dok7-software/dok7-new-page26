import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Lightbulb, Shield, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Wellbeing Automation",
      description: "Systems that free people from repetitive tasks, giving them time for what matters most in their lives.",
      color: "from-accent/40 to-accent/10"
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Intelligent Solutions",
      description: "Smart technology that learns and adapts, always working quietly in the background to serve you better.",
      color: "from-secondary/40 to-secondary/10"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Trusted Systems",
      description: "Secure, reliable platforms built with transparency and care for your data and peace of mind.",
      color: "from-primary/40 to-primary/10"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Team Empowerment",
      description: "Tools that bring teams together, fostering collaboration and genuine human connection.",
      color: "from-accent/30 via-secondary/20 to-primary/30"
    }
  ];

  return (
    <section id="solutions" className="py-32 relative overflow-hidden bg-muted/30">
      {/* Soft organic shapes */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[80px]" />
      <div className="absolute bottom-20 right-10 w-[250px] h-[250px] rounded-full bg-accent/10 blur-[80px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-primary text-sm tracking-widest mb-6 uppercase">What We Create</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Automation as
              <br />
              <span className="font-display-light text-muted-foreground">relief</span>
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full self-start lg:self-auto"
          >
            Explore All Solutions
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="soft-card p-10 hover:shadow-lg transition-all duration-500 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-foreground`}>
                  {service.icon}
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <h3 className="font-display text-2xl mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;