import { useState } from "react";
import Modal from "../components/Modal";
import { X } from "phosphor-react";
import Button from "../components/Button";
import PostSlider from "../components/PostSlider";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const content = [
    {
      title: "Bac 2023",
      thumb: "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_419.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A11?alt=media&token=d214a0ea-f30a-4d7d-a22c-6d7644d5316e",
      images: [
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_419.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A11?alt=media&token=d214a0ea-f30a-4d7d-a22c-6d7644d5316e',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_491.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A9?alt=media&token=6ad43fe0-0d54-42d4-b36b-49c455fe68b5',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_576.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A12?alt=media&token=ab8f0d2e-4194-4c58-90f1-21c0c64e60fe',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_678.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A14?alt=media&token=13d2069e-6a0b-4991-8291-6bac21a3a261',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_678.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A14?alt=media&token=13d2069e-6a0b-4991-8291-6bac21a3a261',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230328_221232_748.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A15?alt=media&token=09e5b936-80ab-4833-8e12-bf3f099a0f19',
      ],
      desc: "Project for L2 Informatique with collaboration of Younes KHENIFER, It's a Desktop & Web Application for doctors to manage appointments, nurses, medecines, payments, patients and more ... My role was to design UI/UX and implement the front-end using React Typescript & Tailwind. ",
    },
    {
        title: "BrainerX Brand Identity",
        thumb: 'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_048.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A48?alt=media&token=4dcc3b53-7c86-4ce7-bb41-aaf0f51a8b80',
        images: [
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_048.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A48?alt=media&token=4dcc3b53-7c86-4ce7-bb41-aaf0f51a8b80',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_181.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A51?alt=media&token=d4824f92-ca7c-4b9f-bf1b-16f8cb94f14a',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_236.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A53?alt=media&token=2e24c04d-67d4-4d89-9239-2b0ded0902a0',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_281.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A56?alt=media&token=ed657c26-055d-4ca5-8e2e-15af9d735802',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_318.jpg%20%20%20%20%20%20%202023-7-5%2023%3A24%3A58?alt=media&token=e07db40c-8b28-4269-b5e6-0d84efcfbe63',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_355.jpg%20%20%20%20%20%20%202023-7-5%2023%3A25%3A0?alt=media&token=4c06ce3e-7cfd-41f2-92c4-221101453f2b',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FIMG_20230602_210223_383.jpg%20%20%20%20%20%20%202023-7-5%2023%3A25%3A1?alt=media&token=8ebd1ace-5f43-4731-bea9-a29c4b5e79a4'
        ],
        desc: "I had the pleasure to design the brand identity of @brainerx.app and be a part of this promising project. BrainerX offers quality content and a unique approach to help people master practical skills effortlessly.",
      },
    {
      title: "Bac Guide",
      thumb: "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FFrame%203.png%20%20%20%20%20%20%202023-7-5%2023%3A27%3A35?alt=media&token=141cda15-0fdc-4d2c-9aa0-7d4446547719",
      images: [
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FFrame%204.png%20%20%20%20%20%20%202023-7-5%2023%3A27%3A38?alt=media&token=f95afaa5-6123-4e2e-8cd9-5ca6229bb1f6',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FFrame%203.png%20%20%20%20%20%20%202023-7-5%2023%3A27%3A35?alt=media&token=141cda15-0fdc-4d2c-9aa0-7d4446547719',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FFrame%205.png%20%20%20%20%20%20%202023-7-5%2023%3A27%3A32?alt=media&token=6b1f3865-ba82-4262-a0e3-f65443bf5093',
      ],
      desc: "A social media food app, I created it for learning backend technologies such as Node, Express and MongoDB. Still working on it .. ",
    },  
   
  ];

export const UiUx = () => {

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
     <div className="py-80">
         <div className="flex flex-col gap-20 items-center ">
          <div className="text-[#a0ecff] text-[70px] lg:text-[100px]">Design</div>
          <div className="mx-auto grid w-full max-w-[120rem] md:grid-cols-3 py-20  sm:grid-cols-2 gap-24">
            {content.map(({ title, thumb, images, desc }) => (
                <div key={title} className="flex flex-col gap-5 items-center">
                  <Project title={title} thumb={thumb} images={images} desc={desc}/>
                </div>
            ))}
            
        </div>
          </div>
    </div>
  </motion.section>
   
  )
}


interface InterfaceProjectComponent {
    title: string;
    thumb: string;
    images: any;
    desc: string;
  }
  

export const Project = ({ title, thumb, images, desc}: InterfaceProjectComponent) => {
    const openInNewTab = (url:string) => {
        window.open(url, '_blank');
      };

 const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-10 bg-white rounded-3xl flex flex-col gap-5">
      <img src={thumb} onClick={()=>{setShowModal(true)}} className="rounded-xl" alt="" />
      <div>
        <div className="text-[25px] font-medium">{title}</div>
        <div className="text-2xl">{desc}</div>
      </div>
      <div className="flex gap-3">
            <Button widthFull outlined onClick={()=>{setShowModal(true)}}>Images</Button>
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
                className="text-[#a0ecff] cursor-pointer hover:text-black absolute right-10 top-10"
              />
            </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-[75%] min-w-[75%] h-fit p-5 rounded-2xl relative"
          >
            

            <PostSlider images={images}/>
          </div>
        </Modal>
      )}
    </div>
  )
  }
       