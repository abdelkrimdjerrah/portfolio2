import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative h-screen text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_50%)_var(--y,_100%),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
    >
      <div className="w-full h-screen flex items-center justify-center">
        <motion.div style={{ position, scale, x: "0" }}>
          <h2 className="font-heading text-3xl font-bold tracking-tighter text-white">
            Heyoo
          </h2>
        </motion.div>
      </div>
    </motion.section>
  );
};
