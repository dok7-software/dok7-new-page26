import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { 
      label: t('header.nav.solutions'), 
      href: "#solutions",
      isDropdown: true,
      subItems: [
        { label: t('header.nav.solutionsMenu.customDevelopment'), href: "/soluciones/desarrollo-medida" },
        { label: t('header.nav.solutionsMenu.softwareIntegrations'), href: "/soluciones/integraciones-software" },
      ]
    },
    { label: t('header.nav.about'), href: "#about" },
    { label: t('header.nav.process'), href: "#process" },
    { label: t('header.nav.stories'), href: "#stories" },
    { label: t('header.nav.contact'), href: "#contact" },
  ];

  // Logo siempre en color para el diseño de fondos alternantes
  const logoSrc = '/images/logo completo a color sin fondo.png';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img 
              src={logoSrc} 
              alt={t('header.logo')}
              className="h-8 md:h-10 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              item.isDropdown ? (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <button
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1 py-2"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSolutionsOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="w-64 bg-card rounded-2xl shadow-lg border border-border p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
              {t('header.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              className="p-1.5 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 md:py-6 border-t border-border">
            <nav className="flex flex-col gap-3 md:gap-4">
              {navItems.map((item) => (
                item.isDropdown ? (
                  <div key={item.label} className="flex flex-col gap-2">
                    <button
                      onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                      className="py-2 text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isSolutionsOpen && (
                      <div className="pl-4 flex flex-col gap-2">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <Button className="mt-3 md:mt-4 bg-foreground text-background rounded-full text-sm py-2">
                {t('header.cta')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;