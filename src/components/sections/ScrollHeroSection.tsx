import { useState, useEffect } from "react";
import { ScrollHeroDesktop } from "./ScrollHero";
import { ScrollHeroMobile } from "./ScrollHeroMobile";

const MOBILE_BREAKPOINT = 1024;

export function ScrollHeroSection() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    setIsDesktop(mq.matches);
    const handler = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isDesktop ? <ScrollHeroDesktop /> : <ScrollHeroMobile />;
}
