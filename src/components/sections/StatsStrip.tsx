import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

const container = {
  hidden: { opacity: 0 },
  visible: (reduce: boolean) => ({
    opacity: 1,
    transition: {
      staggerChildren: reduce ? 0 : 0.15,
      delayChildren: reduce ? 0 : 0.2,
    },
  }),
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: (reduce: boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: reduce ? 0.01 : 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const STAT_KEYS = ["satisfaction", "years", "lives"] as const;

export function StatsStrip() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-section-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-primary/10 to-transparent blur-2xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="grid grid-cols-3 gap-4 sm:gap-10 md:gap-16 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={!!reduceMotion}
        >
          {STAT_KEYS.map((key) => (
            <motion.div
              key={key}
              variants={item}
              custom={!!reduceMotion}
              className="text-center"
            >
              <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-0.5 sm:mb-2">
                {key === "satisfaction" ? "100" : key === "years" ? "15" : "500"}
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider leading-tight">
                {t(`transform.stats.${key}`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
