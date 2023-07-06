import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
const abdelkrim_main = require("../images/abdelkrim_main.png");
export const Hero = () => {
  // const targetRef = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["end end", "end start"],
  // });
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const texts = ["Software Developer", "UI/UX | Brand Designer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const typingElementRef = useRef<HTMLHeadingElement>(null);
  const typingAnimationRequestIdRef = useRef<number>();
  const typingSpeed = 100; // Adjust typing speed (in milliseconds)
  const deletingSpeed = 50; // Adjust deleting speed (in milliseconds)
  const delayBeforeDelete = 1000; // Delay before deleting the text (in milliseconds)
  const delayBeforeType = 500; // Delay before typing the next text (in milliseconds)

  useEffect(() => {
    let currentText = "";
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingTimeout: NodeJS.Timeout | null = null;
    let deletingTimeout: NodeJS.Timeout | null = null;

    const typeText = () => {
      if (currentCharIndex <= texts[currentTextIndex].length) {
        currentText = texts[currentTextIndex].slice(0, currentCharIndex);
        typingElementRef.current!.textContent = currentText;
        currentCharIndex++;
        typingTimeout = setTimeout(typeText, typingSpeed);
      } else if (!isDeleting) {
        isDeleting = true;
        deletingTimeout = setTimeout(deleteText, delayBeforeDelete);
      }
    };

    const deleteText = () => {
      if (currentCharIndex >= 0) {
        currentText = texts[currentTextIndex].slice(0, currentCharIndex);
        typingElementRef.current!.textContent = currentText;
        currentCharIndex--;
        deletingTimeout = setTimeout(deleteText, deletingSpeed);
      } else {
        isDeleting = false;
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Switch to the next text
        typingTimeout = setTimeout(typeText, delayBeforeType);
      }
    };

    typingTimeout = setTimeout(typeText, typingSpeed);

    // Clean up timeouts on unmount
    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
      if (deletingTimeout) clearTimeout(deletingTimeout);
    };
  }, [currentTextIndex]);

  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row h-fit lg:h-screen  text-[#6499af]">
        <div className=" w-full lg:w-[55%]">
          <img className="w-[800px] abdelkrim " src={abdelkrim_main} alt="" />
        </div>
        <div className="  w-full lg:w-[45%] justify-center flex items-center">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-[50px] md:text-[80px] font-medium tracking-tight headText">
              Abdelkrim
            </div>
            <div className="text-[50px] md:text-[80px] font-medium leading-6 tracking-tight headText">
              Djerrah
            </div>

            <div className="wrapper text-[15px] lg:text-[25px] mt-20 text-[#a0ecff] border-[#a0ecff] h-10">
              <h1 ref={typingElementRef} id="typing-demo" className="typing-demo"></h1>
            </div>
            
          </div>
        </div>
      </div>


      {/* <motion.section
      style={{ opacity }}
      ref={targetRef}
      className=" fixed text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100%)_var(--y,_200%),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-20 lg:before:opacity-30"
    >
      <div className="w-full h-screen text-[#6499af]">
       
      </div>
    </motion.section> */}
    </div>
  );
};
