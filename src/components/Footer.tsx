import { Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = {
    [t('footer.sections.company.title')]: [
      { text: t('footer.sections.company.links.about'), href: "#about" },
      { text: t('footer.sections.company.links.process'), href: "#process" },
      { text: t('footer.sections.company.links.stories'), href: "#stories" },
      { text: t('footer.sections.company.links.careers'), href: "#" }
    ],
    [t('footer.sections.solutions.title')]: [
      { text: t('footer.sections.solutions.links.wellbeing'), href: "#" },
      { text: t('footer.sections.solutions.links.intelligent'), href: "#" },
      { text: t('footer.sections.solutions.links.trusted'), href: "#" },
      { text: t('footer.sections.solutions.links.team'), href: "#" }
    ],
    [t('footer.sections.resources.title')]: [
      { text: t('footer.sections.resources.links.insights'), href: "#" },
      { text: t('footer.sections.resources.links.cases'), href: "#" },
      { text: t('footer.sections.resources.links.newsletter'), href: "#" },
      { text: t('footer.sections.resources.links.contact'), href: "#contact" }
    ],
    [t('footer.sections.support.title')]: [
      { text: t('footer.sections.support.links.legal'), href: "/aviso-legal" },
      { text: t('footer.sections.support.links.privacy'), href: "/politica-privacidad" },
      { text: t('footer.sections.support.links.cookies'), href: "/politica-cookies" }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/dok7-io/about/", label: t('footer.social.linkedin'), target: "_blank", rel: "noopener noreferrer" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/dok7_solutions/", label: t('footer.social.instagram'), target: "_blank", rel: "noopener noreferrer" }
  ];

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-background mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => {
                  const linkText = typeof link === 'string' ? link : link.text;
                  const linkHref = typeof link === 'string' ? '#' : link.href;
                  return (
                    <li key={index}>
                      <a 
                        href={linkHref}
                        className="text-sm text-background/60 hover:text-background transition-colors"
                      >
                        {linkText}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-background/50">
            {t('footer.copyright')}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.target}
                rel={social.rel}
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