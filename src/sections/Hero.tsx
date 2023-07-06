import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
const abdelkrim_main = require('../images/abdelkrim_main.png')
export const Hero = () => {
  // const targetRef = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["end end", "end start"],
  // });
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);


  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row h-fit lg:h-screen  text-[#6499af]">
          <div className=" w-full lg:w-[55%]">
            <img
              className="w-[800px] abdelkrim "
              src={abdelkrim_main}
              alt=""
            />
          </div>
          <div className="  w-full lg:w-[45%] justify-center flex items-center">
            <div className="flex flex-col items-center lg:items-start">
              <div className="text-[80px] font-bold">Abdelkrim</div>
              <div className="text-[80px] font-bold leading-6">Djerrah</div>
              <div  className="text-[25px] mt-20 text-[#a0ecff]"> Software Developer </div>
              <div className="text-[25px] leading-10 text-[#a0ecff]"> UI/UX | Brand Designer </div>

            </div>
          </div>
      </div>

      <div className=" fixed text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100%)_var(--y,_200%),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40" />
    
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
