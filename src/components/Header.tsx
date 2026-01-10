import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { label: t('header.nav.solutions'), href: "#solutions" },
    { label: t('header.nav.about'), href: "#about" },
    { label: t('header.nav.process'), href: "#process" },
    { label: t('header.nav.stories'), href: "#stories" },
    { label: t('header.nav.contact'), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent via-secondary to-primary flex items-center justify-center">
              <span className="font-display text-foreground font-medium text-lg">D7</span>
            </div>
            <span className="font-display text-xl text-foreground">{t('header.logo')}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
            <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
              {t('header.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-8 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-4 bg-foreground text-background rounded-full">
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