import { stylesWithCssVar } from "../utils/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Streamlined = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-120%"]);
  const opacitySection = useTransform(scrollYProgress, [0 , 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0.7, 1, 0]
  );

  return (
    <motion.section
      style={stylesWithCssVar({
        opacity: opacitySection,
        "--scale": scale,
        "--opacity-border": opacityBorder,
      })}
      ref={targetRef}
      className="mt-[40vh] flex h-[300vh] items-start justify-start"
    >
      <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[25rem] lg:min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-t-0 before:border-l-0 before:border-r-0 before:border-[2.5rem] before:border-[#a0ecff] before:opacity-[var(--opacity-border)]">

        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="headText whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[13rem] text-heading"
        >
          Ready to work.
        </motion.p>

        <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] opacity-[var(--opacity-border)]" />
      </div>
    </motion.section>
  );
};
