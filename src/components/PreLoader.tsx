import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

const PreLoader = () => {
  const containerRef = useRef(null);
  // let imageElement = document.getElementById('loaded')
  useEffect(() => {
    document.body.style.overflow = "hidden";
    new SplitType(".preloader-text");
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      duration: 0.1,
      onComplete: () => {
        StartFinalAnimations();
      },
    });
  }, []);

  const StartFinalAnimations = () => {
    gsap.to(".char", {
      y: -100,
      stagger: 0.05,
      delay: 3,
      duration: 0.1,
      onComplete: () => {
        gsap.to(containerRef.current, {
          height: 0,
          duration: 1,
          onComplete: () => {
            document.body.style.overflow = "unset";
          },
        });
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="h-screen w-full text-white grid place-items-center transition-height"
    >
      <div className="md:text-[70px] md:leading-[7rem] leading-[5rem] text-[25px]">
        <div className="preloader-text">{`Hi there :]`}</div>
      </div>
    </div>
  );
};

export default PreLoader;
