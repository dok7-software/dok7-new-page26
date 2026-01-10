const TransformSection = () => {
  const values = [
    {
      title: "Empathy First",
      description: "We listen deeply to understand the real challenges people face, designing solutions that truly serve human needs."
    },
    {
      title: "Quiet Innovation",
      description: "Technology should work seamlessly in the background, enhancing life without demanding attention."
    },
    {
      title: "Trustworthy & Clear",
      description: "We believe in transparent communication and building lasting relationships based on reliability."
    }
  ];

  const stats = [
    { value: "98%", label: "Client satisfaction" },
    { value: "15+", label: "Years of care" },
    { value: "200+", label: "Lives improved" },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary text-sm tracking-widest mb-6 uppercase">Our Philosophy</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Human-centered
            <br />
            <span className="font-display-light text-muted-foreground">at every step</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe technology should feel like relief, not complexity. 
            Our approach puts people at the center of every decision.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
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
        <div className="grid md:grid-cols-3 gap-12 pt-16 border-t border-border/50">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-5xl md:text-6xl gradient-text mb-3">
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