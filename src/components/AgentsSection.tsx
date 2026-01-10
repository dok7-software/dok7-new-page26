import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Smile, Sun } from "lucide-react";

const AgentsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-muted/30">
      {/* Soft organic background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px] animate-float-gentle" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-secondary/15 blur-[100px] animate-float-gentle" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm tracking-widest mb-6 uppercase">The DOK7 Promise</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Time back for
            <br />
            <span className="font-display-light text-muted-foreground">what matters</span>
          </h2>
        </div>

        {/* Main Feature Card */}
        <div className="soft-card p-12 md:p-16 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-3xl mb-6 text-foreground">
                Reclaim your day
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Imagine finishing work with energy to spare. Our automation solutions 
                handle the repetitive, freeing you to focus on creativity, connection, 
                and the work that truly fulfills you.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-foreground/70" />
                  </div>
                  <span>Save hours every week</span>
                </div>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Smile className="w-5 h-5 text-foreground/70" />
                  </div>
                  <span>Reduce daily stress</span>
                </div>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-foreground/70" />
                  </div>
                  <span>More time for life</span>
                </div>
              </div>

              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
                See How It Works
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Visual Element - Organic shapes */}
            <div className="relative flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-accent/30 via-secondary/20 to-primary/30 flex items-center justify-center animate-float-gentle">
                <div className="w-48 h-48 rounded-full bg-card flex items-center justify-center shadow-lg">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent via-secondary to-primary flex items-center justify-center">
                    <span className="text-5xl">🌱</span>
                  </div>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-4 right-8 w-6 h-6 rounded-full bg-accent/40" />
              <div className="absolute bottom-8 left-4 w-4 h-4 rounded-full bg-secondary/40" />
              <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;