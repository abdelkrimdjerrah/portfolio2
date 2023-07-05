import React, { useState } from "react";
import IconGithub from "../icons/IconGithub";
import IconLinkedin from "../icons/IconLinkedin";
import IconInstagram from "../icons/IconInstagram";

const content = [
  {
    icon: IconGithub,
    title: "Github",
    url: "https://github.com/abdelkrimdjerrah",
  },
  {
    icon: IconInstagram,
    title: "Instagram",
    url: "https://www.instagram.com/abdelkrimdjerrah/",
  },
  {
    icon: IconLinkedin,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/abdelkrim-djerrah/",
  },
];

export const Contact = () => {
  return (
    <section className="relative z-10 h-screen bg-[#009bc1] flex items-center justify-center">
      <div className="flex flex-col gap-20 items-center">
        <div className="text-black text-[100px]">Contact</div>
        <div className="mx-auto grid w-full max-w-[120rem] md:grid-cols-3  sm:grid-cols-3 gap-24">
          {content.map(({ icon: Icon, title, url }) => (
            <div key={title} className="flex flex-col gap-5 items-center">
              <IconComponent Icon={Icon} url={url} />
            </div>
          ))}
        </div>
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

  const openInNewTab = (url:string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
      className="parent relative flex items-center justify-center"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={()=>openInNewTab(url)}
    >
      <span className="iconWrapper_smiple transform padding-8 mb-4 flex h-32 w-32 items-center justify-center rounded-[1.8rem] bg-[#151515]">
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
