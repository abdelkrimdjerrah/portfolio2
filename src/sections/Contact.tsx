import { contact } from "../data/data";
import { IconStyle } from "../components/IconStyle";
import { EnvelopeSimple } from "phosphor-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const { ref, inView } = useInView();

  return (
    <section className="relative z-10 pb-48 lg:pb-80 flex items-center justify-center ">
      <div className="flex flex-col gap-16 items-center">
        <div className=" text-[60px] md:text-[100px] text-center leading-[80px] tracking-tight headText text-white">
          Contact
        </div>
        <div className="text-[20px] flex gap-3 items-center text-[#6499af]">
          <EnvelopeSimple size={35} />
          abdelkrimdjerrah@gmail.com
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="mx-auto grid w-full max-w-[120rem] lg:grid-cols-4  grid-cols-2 gap-24">
            {contact.map(({ icon: Icon, url }) => (
              <div key={url} className="flex flex-col gap-5 items-center">
                <IconStyle Icon={Icon} url={url} animation/>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


