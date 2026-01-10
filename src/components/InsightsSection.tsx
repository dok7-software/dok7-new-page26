import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const InsightsSection = () => {
  const articles = [
    {
      category: "Wellbeing",
      title: "The quiet revolution: automation that respects your time",
      excerpt: "How thoughtful technology can give us back the moments that matter most in our lives.",
      readTime: "4 min read"
    },
    {
      category: "Human-Centered",
      title: "Why empathy is our most important tool",
      excerpt: "Building technology that truly serves people starts with understanding their lived experience.",
      readTime: "6 min read"
    },
    {
      category: "Teams",
      title: "Creating space for creativity in automated workflows",
      excerpt: "When routine tasks handle themselves, teams discover new possibilities for innovation.",
      readTime: "5 min read"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-muted/30">
      {/* Soft shapes */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] rounded-full bg-secondary/10 blur-[60px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <p className="text-primary text-sm tracking-widest mb-6 uppercase">Insights</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Thoughts on
              <br />
              <span className="font-display-light text-muted-foreground">technology that cares</span>
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full self-start lg:self-auto"
          >
            View All Insights
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="soft-card p-8 hover:shadow-lg transition-all duration-500 group cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-primary">
                  {article.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {article.readTime}
                </span>
              </div>
              
              <h3 className="font-display text-xl mb-4 text-foreground group-hover:text-primary transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {article.excerpt}
              </p>
              
              <div className="mt-6 flex items-center text-foreground text-sm group-hover:text-primary transition-colors">
                Read more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;