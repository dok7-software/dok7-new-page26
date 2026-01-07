import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User } from "lucide-react";

const InsightsSection = () => {
  const articles = [
    {
      category: "AI & Technology",
      title: "Implementing AI in today's world",
      excerpt: "How organizations can successfully integrate artificial intelligence into their existing workflows and infrastructure.",
      author: "Sarah Johnson",
      readTime: "5 min read",
      featured: true
    },
    {
      category: "Engineering",
      title: "The future of cloud-native development",
      excerpt: "Exploring modern architecture patterns and best practices for building scalable applications.",
      author: "Michael Chen",
      readTime: "8 min read",
      featured: false
    },
    {
      category: "Design",
      title: "Human-centered design in the age of AI",
      excerpt: "Balancing automation with empathy to create meaningful user experiences.",
      author: "Emily Rodriguez",
      readTime: "6 min read",
      featured: false
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-4">Blog</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Insights & Perspectives
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 self-start md:self-auto"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Article */}
          <div className="glass-card p-8 hover:border-primary/30 transition-all duration-300 group cursor-pointer row-span-2">
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-6">
              {articles[0].category}
            </span>
            
            <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
              {articles[0].title}
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              {articles[0].excerpt}
            </p>
            
            <div className="flex items-center gap-6 mt-auto">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-4 h-4" />
                <span className="text-sm">{articles[0].author}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{articles[0].readTime}</span>
              </div>
            </div>
          </div>

          {/* Other Articles */}
          {articles.slice(1).map((article, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary mb-4">
                {article.category}
              </span>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{article.author}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
