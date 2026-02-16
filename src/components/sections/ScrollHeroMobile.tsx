import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const BLOCKS = [
  {
    title: "Ideas que transforman",
    body: "Cada proyecto nace de una conversación. Entendemos tu contexto y tus objetivos para diseñar soluciones que encajen con tu realidad.",
  },
  {
    title: "Diseño y construcción",
    body: "Trabajamos con procesos claros y tecnología probada. Desde el concepto hasta el despliegue, con foco en resultados y plazos.",
  },
  {
    title: "Crecimiento continuo",
    body: "No entregamos y nos despedimos. Acompañamos la evolución de tus sistemas y equipos para que sigan sumando valor con el tiempo.",
  },
];

const SECTION_HEIGHT_VH = 320;

export function ScrollHeroMobile() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const op1 = useTransform(
    scrollYProgress,
    [0, 0.08, 0.2, 0.33],
    [0, 1, 1, 0]
  );
  const op2 = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.5, 0.58],
    [0, 1, 1, 0]
  );
  const op3 = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.75, 1],
    [0, 1, 1, 1]
  );

  const syncVideo = (progress: number) => {
    const video = videoRef.current;
    if (!video || !duration || prefersReducedMotion) return;
    const t = Math.max(0, Math.min(1, progress)) * duration;
    video.currentTime = t;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onLoadedMetadata = () => setDuration(video.duration);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    if (video.duration && isFinite(video.duration)) setDuration(video.duration);
    return () => video.removeEventListener("loadedmetadata", onLoadedMetadata);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const unsub = scrollYProgress.on("change", syncVideo);
    return () => unsub();
  }, [scrollYProgress, duration, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${SECTION_HEIGHT_VH}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video a pantalla completa como fondo */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/videos/portada.mp4"
            preload="auto"
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Hero video"
          />
          {/* Gradiente para legibilidad del texto blanco */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none"
            aria-hidden
          />
        </div>

        {/* Texto sobre el video, lado izquierdo, blanco */}
        <div className="absolute inset-0 z-10 flex items-center px-4 sm:px-6">
          <div className="max-w-[85%] sm:max-w-xl relative min-h-[140px]">
            {BLOCKS.map((block, i) => {
              const opacity = i === 0 ? op1 : i === 1 ? op2 : op3;
              return (
                <motion.div
                  key={i}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{
                    opacity: prefersReducedMotion ? (i === 0 ? 1 : 0) : opacity,
                  }}
                >
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-white mb-2 drop-shadow-sm">
                    {block.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed drop-shadow-sm">
                    {block.body}
                  </p>
                </motion.div>
              );
            })}
            <div className="h-24 invisible pointer-events-none select-none" aria-hidden>
              {BLOCKS[0].title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
