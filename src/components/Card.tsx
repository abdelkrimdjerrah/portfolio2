import { useState } from "react";
import { Image } from "phosphor-react";
import Modal from "./Modal";
import { X } from "phosphor-react";
import PostSlider from "./PostSlider";
import Button from "./Button";

interface ICard {
  title: string;
  thumb: string;
  images: any;
  desc: string;
  github?: string;
  live?: string;
}

export const Card = ({ title, thumb, images, desc, github, live }: ICard) => {
  const [showModal, setShowModal] = useState(false);

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
    window.open(url, "_blank");
  };

  return (
    <div className="px-6 py-10 transparent border-2 border-[#212121] bg-[#0d0d0d] rounded-3xl text-[#a0ecff] flex flex-col gap-10">
      <div
        className="relative cursor-pointer"
        onClick={() => {
          setShowModal(true);
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={thumb} className="rounded-xl cursor-pointer" alt="" />
        {isHovering && (
          <div
            className={`h-full w-full absolute top-0 rounded-xl bg-[#000000] bg-opacity-70 grid place-items-center`}
          >
            <Image size={35} />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-[25px] font-medium">{title}</div>
        <div className="text-2xl text-[#6499af]">{desc}</div>
      </div>
      <div className="flex gap-3">
        {live?.length ? (
          <Button
            widthFull
            className="bg-[#009bc1]"
            onClick={() => {
              openInNewTab(live);
            }}
          >
            Live
          </Button>
        ) : null}
        {github?.length ? (
          <Button
            className="bg-gray-800"
            widthFull
            onClick={() => {
              openInNewTab(github);
            }}
          >
            Github
          </Button>
        ) : null}
      </div>
      {showModal && (
        <Modal
          closeModal={() => {
            setShowModal(false);
          }}
        >
          <div onClick={() => setShowModal(false)}>
            <X
              size={28}
              className="text-[#a0ecff] cursor-pointer absolute right-10 top-10"
            />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full flex justify-center h-fit rounded-2xl relative"
          >
            <PostSlider images={images} />

            {/* added this since we gave post slider full width to center in middle,
              and as we see , we already did e.stopPropagation to stop unmounting the modal if we touch on pictures,
              but we made the wide full ! so the right or left side has also e.stopPropagation   */}
            <div
              className="w-full absolute h-full"
              onClick={() => setShowModal(false)}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};
