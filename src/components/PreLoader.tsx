import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

const PreLoader = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    new SplitType('.preloader-text');
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      duration: .1,
      onComplete: () => {
        gsap.to('.char', {
          y: -100,
          stagger: 0.05,
          delay: 3,
          duration: .1,
          onComplete: () => {
            gsap.to(containerRef.current, {
              height: 0,
              duration: 1,
              onComplete: () => {
                document.body.style.overflow = "unset"
              }
            });
          }
        });
      }
    });

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full text-white grid place-items-center transition-height"
    >
      <div className="text-[70px]">
        <div className="preloader-text">{`Hi there :]`}</div>
      </div>
    </div>
  );
};

export default PreLoader;
