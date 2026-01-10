import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Solutions: [
      "Wellbeing Automation",
      "Intelligent Systems",
      "Trusted Platforms",
      "Team Empowerment"
    ],
    Company: [
      "About Us",
      "Our Process",
      "Stories",
      "Careers"
    ],
    Resources: [
      "Insights",
      "Case Studies",
      "Newsletter",
      "Contact"
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent via-secondary to-primary flex items-center justify-center">
                <span className="font-display text-foreground font-medium text-lg">D7</span>
              </div>
              <span className="font-display text-xl text-background">DOK7</span>
            </a>
            <p className="text-background/70 leading-relaxed text-sm">
              Technology that works quietly to improve people's lives. 
              Human-centered automation you can trust.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-background mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#"
                      className="text-sm text-background/60 hover:text-background transition-colors"
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
        <div className="pt-10 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-background/50">
            © 2026 DOK7 Software Solutions. Made with care.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-3 rounded-full bg-background/10 text-background/60 hover:text-background hover:bg-background/20 transition-all"
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