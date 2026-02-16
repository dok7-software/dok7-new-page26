import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  visible: (reduce: boolean) => ({
    opacity: 1,
    transition: {
      staggerChildren: reduce ? 0 : 0.12,
      delayChildren: reduce ? 0 : 0.2,
    },
  }),
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: (reduce: boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: reduce ? 0.01 : 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function ImpactHeroStrip() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative py-10 sm:py-14 md:py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/80">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[320px] h-[320px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[280px] h-[280px] rounded-full bg-secondary/5 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="visible"
          custom={!!reduceMotion}
        >
          <motion.p
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary mb-3 sm:mb-6"
            variants={item}
            custom={!!reduceMotion}
          >
            {t("hero.trustedBy")}
          </motion.p>
          <motion.h1
            className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.15] mb-4 sm:mb-6"
            variants={item}
            custom={!!reduceMotion}
          >
            {t("hero.headline")}{" "}
            <span className="font-display-light gradient-text block sm:inline">
              {t("hero.headlineHighlight")}
            </span>
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-0 sm:px-2"
            variants={item}
            custom={!!reduceMotion}
          >
            {t("hero.subtitle")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
