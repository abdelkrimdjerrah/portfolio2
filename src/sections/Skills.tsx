import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import IconCss from "../icons/IconCss";
import IconExpress from "../icons/IconExpress";
import IconHtml from "../icons/IconHtml";
import IconJavascript from "../icons/IconJavascript";
import IconMongodb from "../icons/IconMongodb";
import IconNode from "../icons/IconNode";
import IconReact from "../icons/IconReact";
import IconTailwind from "../icons/IconTailwind";
import IconTypescript from "../icons/IconTypescript";
import IconPhotoshop from "../icons/IconPhotoshop";
import IconIllustrator from "../icons/IconIllustrator";
import IconFigma from "../icons/IconFigma";


const content = [
  {
    icon: IconReact,
    title: "React",
  },
  {
    icon: IconTypescript,
    title: "Typescript",
  },
  {
    icon: IconTailwind,
    title: "Tailwind",
  },
  {
    icon: IconExpress,
    title: "Express",
  },
  {
    icon: IconNode,
    title: "Node",
  },
  {
    icon: IconMongodb,
    title: "Mongodb",
  },
  {
    icon: IconHtml,
    title: "Html",
  },
  {
    icon: IconCss,
    title: "Css",
  },
  {
    icon: IconJavascript,
    title: "Javascript",
  },
  {
    icon: IconIllustrator,
    title: "Illustrator",
  },
  {
    icon: IconFigma,
    title: "Figma",
  },
  {
    icon: IconPhotoshop,
    title: "Photoshop",
  },
];

export const Skills = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "40vh"]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity, y }}
     
    >
      <div className="flex flex-col items-center py-64">
        <div className="text-[#a0ecff] text-[70px] lg:text-[100px]">Skills</div>
        <div className="mx-auto grid w-full max-w-[120rem] md:grid-cols-4 py-20  sm:grid-cols-3 grid-cols-2 gap-24">
          {content.map(({ icon:Icon, title }) => (
            <div key={title} className="flex flex-col gap-5 items-center">
              <div className="relative flex items-center justify-center">
                <span className="iconWrapper padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#151515]" />
                <div className="text-[#009bc1] mb-3 z-20 absolute">
                  <Icon />
                </div>
              </div>
              <h3 className="mb-2 text-4xl text-[#a0ecff]">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};