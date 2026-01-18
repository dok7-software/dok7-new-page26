import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Imágenes del carrusel
const carouselSlides = [
  {
    id: 1,
    image: "/banner/imagen mock 1.jpg",
  },
  {
    id: 2,
    image: "/banner/imagen mock 2.jpg",
  },
  {
    id: 3,
    image: "/banner/imagen mock 3.JPG",
  },
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Efecto para cambiar de imagen automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  // Obtener los índices de los siguientes slides
  const getNextIndex = (index: number, offset: number = 1) => {
    return (index + offset) % carouselSlides.length;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      className="relative h-full w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden"
    >
      {/* Carousel Container con vista de imágenes parciales */}
      <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-[95%] lg:w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-start overflow-hidden">
          {carouselSlides.map((slide, index) => {
            const isCurrent = index === currentIndex;
            const isNext1 = index === getNextIndex(currentIndex, 1);
            const isNext2 = index === getNextIndex(currentIndex, 2);
            const isVisible = isCurrent || isNext1 || isNext2;

            // Calcular la posición y propiedades
            let left = '0';
            let opacity = 0;
            let zIndex = 0;
            let width = '90vw';
            let maxWidth = '600px';

            if (isCurrent) {
              left = '0%';
              opacity = 1;
              zIndex = 30;
              width = '55%';
              maxWidth = '600px';
            } else if (isNext1) {
              left = '57%'; // Separación de 2% del slide actual
              opacity = 1;
              zIndex = 20;
              width = '27.5%'; // Mitad del ancho del slide actual
              maxWidth = '300px';
            } else if (isNext2) {
              left = '70%'; // Ajustado para no salirse del viewport
              opacity = 0.7;
              zIndex = 10;
              width = '25%'; // Reducido ligeramente para caber
              maxWidth = '280px';
            }

            return (
              <div
                key={slide.id}
                className="absolute transition-all duration-700 ease-out overflow-hidden"
                style={{
                  left: left,
                  opacity: isVisible ? opacity : 0,
                  zIndex: zIndex,
                  pointerEvents: isCurrent ? 'auto' : 'none',
                  width: width,
                  maxWidth: maxWidth,
                  height: '100%',
                  borderRadius: '1.5rem',
                }}
              >
                <div
                  className="relative h-full overflow-hidden rounded-3xl bg-black/5"
                  style={{
                    width: isCurrent ? '100%' : '200%',
                    position: 'relative',
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      className="h-full w-full object-cover"
                      style={{
                        imageRendering: 'high-quality',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                        WebkitFontSmoothing: 'antialiased',
                        filter: 'contrast(1.05) brightness(1.02)',
                      }}
                      loading="eager"
                      decoding="async"
                    />
                  </div>

                  {/* Gradient Overlay - más sutil para el hero */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

