import { useCallback, useState } from 'react';

const TechnologiesCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Array de imágenes de skills disponibles (faltan skill6.png y skill11.png)
  const skills = [
    '/skills/skill1.png',
    '/skills/skill2.png',
    '/skills/skill3.png',
    '/skills/skill4.png',
    '/skills/skill5.png',
    '/skills/skill7.png',
    '/skills/skill8.png',
    '/skills/skill9.png',
    '/skills/skill10.png',
    '/skills/skill12.png',
    '/skills/skill13.png',
    '/skills/skill14.png',
    '/skills/skill15.png',
    '/skills/skill16.png',
    '/skills/skill17.png',
    '/skills/skill18.png',
    '/skills/skill19.png',
    '/skills/skill20.png',
    '/skills/skill21.png',
    '/skills/skill22.png',
    '/skills/skill23.png',
    '/skills/skill24.png',
    '/skills/skill25.png',
    '/skills/skill26.png',
    '/skills/skill27.jpg',
    '/skills/skill28.png',
    '/skills/skill29.png',
    '/skills/skill30.png',
    '/skills/skill31.png',
    '/skills/skill32.png',
    '/skills/skill33.png',
    '/skills/skill34.png',
    '/skills/skill35.png',
  ];

  // Duplicar el array para crear efecto infinito
  const duplicatedSkills = [...skills, ...skills];

  const handleCarouselMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleCarouselMouseLeave = useCallback(() => {
    setIsPaused(false);
    setHoveredIndex(null);
  }, []);

  const handleLogoMouseEnter = useCallback((uniqueId: string) => {
    setHoveredIndex(uniqueId);
  }, []);

  const handleLogoMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  return (
    <>
      <div 
        className="w-full overflow-hidden pt-4 mt-2 md:mt-4 mb-8 md:mb-16"
        onMouseEnter={handleCarouselMouseEnter}
        onMouseLeave={handleCarouselMouseLeave}
      >
        <div className="relative overflow-hidden">
          <div 
            className={`flex technologies-scroll ${isPaused ? '[animation-play-state:paused]' : '[animation-play-state:running]'}`}
          >
            {duplicatedSkills.map((skill, index) => {
              const uniqueId = `${skill}-${index}`;
              const isHovered = hoveredIndex === uniqueId;
              return (
                <div
                  key={uniqueId}
                  className="flex-[0_0_auto] mx-4 md:mx-6 flex items-center justify-center"
                  onMouseEnter={() => handleLogoMouseEnter(uniqueId)}
                  onMouseLeave={handleLogoMouseLeave}
                >
                  <div className="relative flex items-center justify-center">
                    <img
                      src={skill}
                      alt={`Technology ${index + 1}`}
                      className={`max-w-[60px] max-h-[60px] md:max-w-[80px] md:max-h-[80px] object-contain transition-all duration-500 ease-in-out ${
                        isHovered 
                          ? 'filter-none opacity-100 scale-110' 
                          : 'grayscale'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologiesCarousel;

