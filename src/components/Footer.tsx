import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Services: [
      "Design & UX",
      "Engineering",
      "AI Solutions",
      "Mobile Development",
      "Cloud & DevOps"
    ],
    Company: [
      "About Us",
      "Careers",
      "Case Studies",
      "Partners",
      "Contact"
    ],
    Resources: [
      "Blog",
      "Insights",
      "Whitepapers",
      "Events",
      "Newsletter"
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Security"
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" }
  ];

  return (
    <footer className="bg-card/80 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-background font-bold text-lg">Q</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Qubika</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Amplifying human potential through world-class design, engineering, and AI.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Qubika. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
