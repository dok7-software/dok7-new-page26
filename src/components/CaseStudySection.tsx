import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudySection = () => {
  const caseStudies = [
    {
      company: "Shopify",
      title: "Revolutionizing e-commerce with AI-powered recommendations",
      tags: ["E-commerce", "AI", "Machine Learning"],
      image: "linear-gradient(135deg, #96bf48 0%, #5e8e3e 100%)"
    },
    {
      company: "Microsoft",
      title: "Building next-gen productivity tools with intelligent automation",
      tags: ["Enterprise", "Automation", "Cloud"],
      image: "linear-gradient(135deg, #00a4ef 0%, #0078d4 100%)"
    },
    {
      company: "Spotify",
      title: "Enhancing music discovery through personalized AI experiences",
      tags: ["Media", "Personalization", "UX"],
      image: "linear-gradient(135deg, #1db954 0%, #191414 100%)"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-4">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Trusted by industry leaders
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 self-start md:self-auto"
          >
            View All Case Studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div 
                className="aspect-[4/3] rounded-2xl mb-6 flex items-end p-6 relative overflow-hidden"
                style={{ background: study.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="relative z-10 text-white font-bold text-2xl">
                  {study.company}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {study.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, tagIndex) => (
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

export default CaseStudySection;
