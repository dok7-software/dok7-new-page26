import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Cpu, MessageSquare, Settings } from "lucide-react";

const AgentsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">AI Products</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Agents Factory
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Build, deploy, and scale AI agents that automate complex workflows 
            and deliver intelligent interactions at enterprise scale.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="glass-card p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm text-primary uppercase tracking-widest">Featured Product</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Custom AI Agents for Enterprise
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Deploy intelligent agents that understand your business context, 
                integrate with your systems, and scale with your needs. From 
                customer service to internal operations.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="text-sm">Custom Training</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-sm">Multi-channel</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Settings className="w-4 h-4 text-primary" />
                  <span className="text-sm">Full Integration</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Visual Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/20 p-8 flex items-center justify-center border border-white/10">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent animate-pulse flex items-center justify-center">
                  <Bot className="w-16 h-16 text-primary-foreground" />
                </div>
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-8 left-1/2 w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-12 right-8 w-2 h-2 rounded-full bg-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">Powered by leading AI platforms</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["OpenAI", "Azure", "AWS", "Google Cloud", "Anthropic"].map((partner) => (
              <span key={partner} className="text-lg font-medium text-muted-foreground">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
