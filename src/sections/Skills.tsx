import { IconStyle } from "../components/IconStyle";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { skills } from '../data/data'

export const Skills = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "40vh"]);

  return (
    <motion.section ref={targetRef} style={{ opacity, y }}>
      <div className="flex flex-col items-center py-64">
        <div className="text-[#a0ecff] text-[60px] md:text-[100px] text-center tracking-tight headText">
          Skills
        </div>
        <div className="mx-auto grid w-full max-w-[120rem] md:grid-cols-4 py-20  sm:grid-cols-3 grid-cols-2 gap-24 px-28 md:px-0">
          {skills.map(({ icon: Icon, title }) => (
            <div key={title} className="flex flex-col gap-5 items-center">
              <IconStyle Icon={Icon} title={title}/>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
