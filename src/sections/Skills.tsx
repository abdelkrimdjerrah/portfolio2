import { Flow } from "../icons/flow";
import { Intellisense } from "../icons/intellisense";
import { Keyboard } from "../icons/keyboard";
import { MagicBranch } from "../icons/magic-branch";
import { Prebuilds } from "../icons/prebuilds";
import { Preview } from "../icons/preview";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const content = [
  {
    icon: Prebuilds,
    title: "test",
  },
  {
    icon: Intellisense,
    title: "test",
  },
  {
    icon: Flow,
    title: "test",
  },
  {
    icon: MagicBranch,
    title: "test",
  },
  {
    icon: Keyboard,
    title: "test",
  },
  {
    icon: Preview,
    title: "test",
  },
];

export const Skills = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0.8, 1], ["0vh", "50vh"]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity, y }}
      className="mx-auto grid w-full max-w-[120rem] md:grid-cols-3 py-40  sm:grid-cols-2 gap-40"
    >
      {content.map(({ icon: Icon, title }) => (
        <div key={title} className="flex flex-col items-center">
          <span className="iconWrapper padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#151515]">
            <Icon className="h-12 w-12" />
          </span>
          <h3 className="mb-2 text-4xl text-white">{title}</h3>
        </div>
      ))}
    </motion.section>
  );
};
