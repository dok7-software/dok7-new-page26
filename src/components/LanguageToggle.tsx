import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('dok7-language', lang);
  };

  if (!mounted) {
    return (
      <div className="h-9 px-3 rounded-full bg-muted/50" />
    );
  }

  const currentLang = i18n.language;

  return (
    <div className="flex items-center gap-1 h-9 px-3 rounded-full bg-muted/50 text-sm">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded transition-all duration-200 ${
          currentLang === 'en'
            ? 'text-foreground font-medium'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-muted-foreground/30">|</span>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 rounded transition-all duration-200 ${
          currentLang === 'es'
            ? 'text-foreground font-medium'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}


