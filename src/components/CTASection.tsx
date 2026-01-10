import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-r from-accent/15 via-secondary/10 to-primary/15 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="soft-card p-12 md:p-20 text-center max-w-4xl mx-auto">
          {/* Decorative element */}
          <div className="w-20 h-20 mx-auto mb-10 rounded-full bg-gradient-to-br from-accent via-secondary to-primary flex items-center justify-center">
            <span className="text-3xl">💬</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
            Ready for technology
            <br />
            <span className="font-display-light text-muted-foreground">that feels like relief?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's have a gentle conversation about how we can help your team 
            reclaim their time and focus on what truly matters.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 py-6"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full px-10 py-6"
            >
              hello@dok7.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;