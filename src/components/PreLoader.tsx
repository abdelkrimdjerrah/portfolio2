import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

const PreLoader = () => {
  const containerRef = useRef(null);
  const [finishedAnimation, setFinishedAnimation] = useState(false);

  let windowLoaded = false

  const handleWindowLoad = () => {
    windowLoaded = true;
  };

  useEffect(() => {

  window.addEventListener("load", handleWindowLoad);
    
    document.body.style.overflow = "hidden";
    new SplitType('.preloader-text');
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.5,
      duration: .1,
      onComplete: () => {
        setFinishedAnimation(true)
        setTimeout(() => {
            if (windowLoaded) {
              StartFinalAnimations();
            }
        }, 2000);
      }
    });

    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
    
  }, []);

  useEffect(() => {
    console.log(`windowLoaded : ${windowLoaded}`)
    console.log(`finishedAnimation : ${finishedAnimation}`)
    if (windowLoaded && finishedAnimation) {
      StartFinalAnimations();
    }
  }, [windowLoaded]);



  const StartFinalAnimations = () => {
    gsap.to('.char', {
      y: -100,
      stagger: 0.05,
      delay: 0.5,
      duration: .1,
      onComplete: () => {
        gsap.to(containerRef.current, {
          height: 0,
          duration: 1,
          onComplete: () => {
            document.body.style.overflow = "unset";
          }
        });
      }
    });
  };

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
