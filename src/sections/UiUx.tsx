import { useState } from "react";
import Modal from "../components/Modal";
import { X } from "phosphor-react";
import Button from "../components/Button";
import PostSlider from "../components/PostSlider";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "phosphor-react";


const content = [
  {
    title: "Bac 2023",
    thumb:
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_419.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A11?alt=media&token=d214a0ea-f30a-4d7d-a22c-6d7644d5316e",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_419.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A11?alt=media&token=d214a0ea-f30a-4d7d-a22c-6d7644d5316e",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_491.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A9?alt=media&token=6ad43fe0-0d54-42d4-b36b-49c455fe68b5",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_576.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A12?alt=media&token=ab8f0d2e-4194-4c58-90f1-21c0c64e60fe",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_678.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A14?alt=media&token=13d2069e-6a0b-4991-8291-6bac21a3a261",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_678.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A14?alt=media&token=13d2069e-6a0b-4991-8291-6bac21a3a261",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_748.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A15?alt=media&token=09e5b936-80ab-4833-8e12-bf3f099a0f19",
    ],
    desc: "Project for L2 Informatique with collaboration of Younes KHENIFER, It's a Desktop & Web Application for doctors to manage appointments, nurses, medecines, payments, patients and more ... My role was to design UI/UX and implement the front-end using React Typescript & Tailwind. ",
  },
  {
    title: "BrainerX Brand Identity",
    thumb:
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_048.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A48?alt=media&token=4dcc3b53-7c86-4ce7-bb41-aaf0f51a8b80",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_048.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A48?alt=media&token=4dcc3b53-7c86-4ce7-bb41-aaf0f51a8b80",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_181.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A51?alt=media&token=d4824f92-ca7c-4b9f-bf1b-16f8cb94f14a",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_236.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A53?alt=media&token=2e24c04d-67d4-4d89-9239-2b0ded0902a0",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_281.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A56?alt=media&token=ed657c26-055d-4ca5-8e2e-15af9d735802",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_318.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A58?alt=media&token=e07db40c-8b28-4269-b5e6-0d84efcfbe63",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_355.jpg%20%20%20%20%20%20%202023-7-5%2023%3A25%3A0?alt=media&token=4c06ce3e-7cfd-41f2-92c4-221101453f2b",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_383.jpg%20%20%20%20%20%20%202023-7-5%2023%3A25%3A1?alt=media&token=8ebd1ace-5f43-4731-bea9-a29c4b5e79a4",
    ],
    desc: "I had the pleasure to design the brand identity of @brainerx.app and be a part of this promising project. BrainerX offers quality content and a unique approach to help people master practical skills effortlessly.",
  },
  {
    title: "Bac Guide",
    thumb:
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FFrame%203.png%20%20%20%20%20%20%202023-7-5%2023%3A27%3A35?alt=media&token=141cda15-0fdc-4d2c-9aa0-7d4446547719",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FFrame%204.png%20%20%20%20%20%20%202023-7-5%2023%3A27%3A38?alt=media&token=f95afaa5-6123-4e2e-8cd9-5ca6229bb1f6",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FFrame%203.png%20%20%20%20%20%20%202023-7-5%2023%3A27%3A35?alt=media&token=141cda15-0fdc-4d2c-9aa0-7d4446547719",
      "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FFrame%205.png%20%20%20%20%20%20%202023-7-5%2023%3A27%3A32?alt=media&token=6b1f3865-ba82-4262-a0e3-f65443bf5093",
    ],
    desc: "Bac Guide is an application to guide bac students, I did the UI/UX and later on I will implement it in React Native.",
  },
];

export const UiUx = () => {
  return (
    <div className="pt-40">
      <div className="flex flex-col gap-20 items-center ">
        <div className="text-[#a0ecff] text-[70px] lg:text-[100px] tracking-tight headText">
          Design
        </div>
        <div className="mx-auto grid w-full justify-between px-20 lg:grid-cols-3 md:grid-cols-2 md:grid py-20  sm:flex sm:flex-col gap-20">
          {content.map(({ title, thumb, images, desc }) => (
            <div key={title} className="flex flex-col gap-5 items-center">
              <Project
                title={title}
                thumb={thumb}
                images={images}
                desc={desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface InterfaceProjectComponent {
  title: string;
  thumb: string;
  images: any;
  desc: string;
}

export const Project = ({
  title,
  thumb,
  images,
  desc,
}: InterfaceProjectComponent) => {

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
