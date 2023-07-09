import { useState } from "react";

interface InterfaceIconComponent {
  Icon: any;
  url?: string;
  title?: string;
  animation?: boolean;
}

export const IconStyle = ({
  Icon,
  url,
  title,
  animation,
}: InterfaceIconComponent) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isOutHovering, setIsOutHovering] = useState("");

  const handleMouseOver = () => {
    setIsHovering(true);
    setIsOutHovering("");
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setIsOutHovering(" out ");
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const hoverStyle = isHovering && animation ? " scale-150 duration-200 " : "";
  const cursorStyle = url ? " cursor-pointer " : "";

  return (
    <div
      className={
        ` parent relative flex items-center justify-center ` + cursorStyle
      }
      onMouseOver={() => animation && handleMouseOver}
      onMouseOut={() => animation && handleMouseOut}
      onClick={() => url && openInNewTab(url)}
    >
      <div key={title} className="flex flex-col gap-5 items-center">
        <div className="relative flex items-center justify-center">
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
        {title && <h3 className="mb-2 text-4xl text-[#a0ecff]">{title}</h3>}
      </div>
    </div>
  );
};
