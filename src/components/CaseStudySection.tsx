import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CaseStudySection = () => {
  const stories = [
    {
      quote: "DOK7 didn't just build us software — they gave our team their evenings back.",
      name: "Maria Santos",
      role: "Operations Director",
      company: "Sunrise Healthcare",
      impact: "40% less time on admin tasks"
    },
    {
      quote: "Finally, technology that feels like it was made by people who actually care.",
      name: "James Chen",
      role: "Founder",
      company: "EduConnect",
      impact: "Team satisfaction up 65%"
    },
    {
      quote: "The gentlest transformation we've ever experienced. And the most effective.",
      name: "Anna Kowalski",
      role: "CEO",
      company: "Wellspring Wellness",
      impact: "Serving 3x more clients"
    }
  ];

  return (
    <section id="stories" className="py-32 relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-primary text-sm tracking-widest mb-6 uppercase">Stories</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              Real people,
              <br />
              <span className="font-display-light text-muted-foreground">real relief</span>
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full self-start lg:self-auto"
          >
            Read All Stories
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="soft-card p-10 hover:shadow-lg transition-all duration-500 group cursor-pointer flex flex-col"
            >
              {/* Quote */}
              <p className="text-foreground text-xl leading-relaxed mb-8 flex-grow font-light">
                "{story.quote}"
              </p>
              
              {/* Impact Badge */}
              <div className="inline-flex self-start px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 via-secondary/15 to-primary/20 text-sm text-foreground mb-6">
                {story.impact}
              </div>

              {/* Author */}
              <div>
                <p className="font-display text-foreground mb-1">{story.name}</p>
                <p className="text-muted-foreground text-sm">{story.role}</p>
                <p className="text-muted-foreground/70 text-sm">{story.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;