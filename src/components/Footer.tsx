import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const logoSrc = '/images/logo cuadrado blanco sin fondo.png';

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo y Descripción */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logoSrc} 
                alt={t('header.logo')}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-display text-background mb-6">{t('footer.sections.resources.title')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-background/60 hover:text-background transition-colors">
                  {t('footer.sections.resources.links.home')}
                </Link>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-background/60 hover:text-background transition-colors">
                  {t('footer.sections.resources.links.services')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-background/60 hover:text-background transition-colors">
                  {t('footer.sections.resources.links.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-background/60 hover:text-background transition-colors">
                  {t('footer.sections.resources.links.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="font-display text-background mb-6">{t('footer.sections.support.title')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/aviso-legal" className="text-sm text-background/60 hover:text-background transition-colors">
                  {t('footer.sections.support.links.legal')}
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidad" className="text-sm text-background/60 hover:text-background transition-colors">
                  {t('footer.sections.support.links.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="text-sm text-background/60 hover:text-background transition-colors">
                  {t('footer.sections.support.links.cookies')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-display text-background mb-6">{t('footer.sections.company.title')}</h4>
            <ul className="space-y-3">
              <li className="text-sm text-background/60">
                {t('footer.sections.company.address')}
              </li>
              <li>
                <a 
                  href={`mailto:${t('footer.sections.company.email')}`}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {t('footer.sections.company.email')}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${t('footer.sections.company.phone').replace(/\s/g, '')}`}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {t('footer.sections.company.phone')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/10">
          <p className="text-sm text-background/50 text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
