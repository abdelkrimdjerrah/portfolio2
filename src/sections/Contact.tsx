import { useState } from "react";
import {
  IconGithub,
  IconLinkedin,
  IconInstagram,
  IconBehance,
} from "../icons/Icons";
import { EnvelopeSimple } from "phosphor-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const content = [
  {
    icon: IconInstagram,
    title: "Instagram",
    url: "https://www.instagram.com/abdelkrimdjerrah/",
  },
  {
    icon: IconBehance,
    title: "Behance",
    url: "https://www.behance.net/abdelkrimdjerrah",
  },
  {
    icon: IconGithub,
    title: "Github",
    url: "https://github.com/abdelkrimdjerrah",
  },
  {
    icon: IconLinkedin,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/abdelkrim-djerrah/",
  },
];

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
            {content.map(({ icon: Icon, title, url }) => (
              <div key={title} className="flex flex-col gap-5 items-center">
                <IconComponent Icon={Icon} url={url} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface InterfaceIconComponent {
  Icon: any;
  url: string;
}

const IconComponent = ({ Icon, url }: InterfaceIconComponent) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isOutHovering, setIsOutHovering] = useState("");

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleMouseOver = () => {
    setIsHovering(true);
    setIsOutHovering("");
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setIsOutHovering(" out ");
  };

  const hoverStyle = isHovering ? " scale-150 duration-200 " : "";

  return (
    <div
      className="parent relative flex items-center justify-center cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => openInNewTab(url)}
    >
      <span className="iconWrapper transform padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#151515]">
        <div
          className={
            ` text-white mb-3 z-20 absolute transform ` +
            hoverStyle +
            isOutHovering
          }
        >
          <Icon />
        </div>
      </span>
    </div>
  );
};
