import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";

const AIShowcase = () => {
  const capabilities = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Generative AI",
      description: "Create content, code, and creative assets at scale"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Process Automation",
      description: "Streamline workflows with intelligent automation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with ML insights"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "AI Strategy",
      description: "Navigate the AI landscape with expert guidance"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-4">AI Powered</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              AI-centered services
              <br />
              <span className="gradient-text">for that AI world</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We help organizations harness the power of artificial intelligence 
              to drive innovation, efficiency, and competitive advantage in an 
              increasingly AI-driven world.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                ChatGPT Integration
              </span>
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                Custom LLMs
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                AI Agents
              </span>
            </div>

            <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
              Explore AI Solutions
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Right - Capabilities Grid */}
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary w-fit mb-4">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;
