import { useCallback, useState } from 'react';

const TechnologiesCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Generar array de imágenes de skills (skill1.png a skill35.png)
  const skills = Array.from({ length: 35 }, (_, i) => {
    const skillNumber = i + 1;
    // skill27 es .jpg, el resto son .png
    const extension = skillNumber === 27 ? 'jpg' : 'png';
    return `/skills/skill${skillNumber}.${extension}`;
  });

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
        className="w-full overflow-hidden py-12 mt-8 md:mt-16"
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

