import { ArrowUpRight } from "lucide-react";

const TransformSection = () => {
  const stats = [
    { value: "600+", label: "Projects Delivered" },
    { value: "20+", label: "Years of Excellence" },
    { value: "15+", label: "Countries Served" },
  ];

  const features = [
    {
      icon: "🔮",
      title: "Innovation",
      description: "Pioneering solutions that push the boundaries of what's possible with technology."
    },
    {
      icon: "⚡",
      title: "Agility & Speed",
      description: "Rapid development cycles that deliver results without compromising quality."
    },
    {
      icon: "🎯",
      title: "Client To Success",
      description: "Strategic partnerships focused on driving measurable business outcomes."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">Our Evolution</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Digital Native
            <br />
            <span className="gradient-text">to AI Native</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <ArrowUpRight className="w-5 h-5 text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-border/30">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
