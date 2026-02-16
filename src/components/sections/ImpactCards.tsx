import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Zap, Lightbulb, Shield, Users } from "lucide-react";
import clsx from "clsx";

const ICONS = [Zap, Lightbulb, Shield, Users] as const;
const KEYS = ["wellbeing", "intelligent", "trusted", "team"] as const;

const container = {
  hidden: { opacity: 0 },
  visible: (reduce: boolean) => ({
    opacity: 1,
    transition: {
      staggerChildren: reduce ? 0 : 0.1,
      delayChildren: reduce ? 0 : 0.15,
    },
  }),
};

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: (reduce: boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: reduce ? 0.01 : 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export function ImpactCards() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-12 sm:py-16 md:py-28 bg-section-light">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: !!reduceMotion ? 0.01 : 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            {t("services.label")}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 sm:mt-3 mb-2 sm:mb-4">
            {t("services.headline")}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={!!reduceMotion}
        >
          {KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <motion.article
                key={key}
                variants={card}
                custom={!!reduceMotion}
                className={clsx(
                  "group relative rounded-xl sm:rounded-2xl border border-border/60 bg-card p-4 sm:p-6 md:p-8",
                  "shadow-sm active:shadow-md sm:hover:shadow-lg sm:hover:border-primary/30",
                  "transition-all duration-300 ease-out"
                )}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 text-primary mb-3 sm:mb-5">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl text-foreground mb-2 sm:mb-3">
                  {t(`services.items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base line-clamp-4 sm:line-clamp-none">
                  {t(`services.items.${key}.description`)}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
