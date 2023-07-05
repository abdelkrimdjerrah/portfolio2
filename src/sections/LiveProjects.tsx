import { useState } from "react";
import Modal from "../components/Modal";
import { X } from "phosphor-react";
import Button from "../components/Button";
import PostSlider from "../components/PostSlider";


const content = [
    {
      title: "Medically",
      thumb: "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FmedicallyThumb.png%20%20%20%20%20%20%202023-7-5%2017%3A44%3A11?alt=media&token=d6672941-9a68-4aec-8f18-597d25234c8c",
      images: [
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FScreenshot%202023-07-05%20at%205.07.41%20PM.png%20%20%20%20%20%20%202023-7-5%2019%3A3%3A4?alt=media&token=814df27b-fff4-4194-b809-b0f299920737',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FScreenshot%202023-07-05%20at%205.08.23%20PM.png%20%20%20%20%20%20%202023-7-5%2019%3A2%3A42?alt=media&token=03da7a3c-2923-487d-90f7-cb21b4e1125b',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FScreenshot%202023-07-05%20at%205.09.05%20PM.png%20%20%20%20%20%20%202023-7-5%2019%3A2%3A36?alt=media&token=9399be76-8279-42b3-a40d-6306c2d5db9b',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FScreenshot%202023-07-05%20at%205.07.53%20PM.png%20%20%20%20%20%20%202023-7-5%2019%3A2%3A57?alt=media&token=f16d37ae-e89d-47fc-98f4-706a264c550e',
      ],
      desc: "Project for L2 Informatique with collaboration of Younes KHENIFER, It's a Desktop & Web Application for doctors to manage appointments, nurses, medecines, payments, patients and more ... My role was to design UI/UX and implement the front-end using React Typescript & Tailwind. ",
      github: "https://github.com/YounesKHENIFER/medicaly_electron",
      live: "https://medicaly.netlify.app/"
    },
    {
      title: "Akalaty",
      thumb: "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FScreenshot%202023-07-05%20at%209.48.34%20PM.png%20%20%20%20%20%20%202023-7-5%2023%3A29%3A27?alt=media&token=972c7ad3-a2ee-4d77-bbfa-250b1321b274",
      images: [
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FScreenshot%202023-07-05%20at%209.48.34%20PM.png%20%20%20%20%20%20%202023-7-5%2023%3A29%3A27?alt=media&token=972c7ad3-a2ee-4d77-bbfa-250b1321b274',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FScreenshot%202023-07-05%20at%208.46.21%20PM.png%20%20%20%20%20%20%202023-7-5%2023%3A29%3A33?alt=media&token=31c3cb58-7e6e-4e33-8b50-dfa6ee358ce6',
          'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FScreenshot%202023-07-05%20at%208.46.28%20PM.png%20%20%20%20%20%20%202023-7-5%2023%3A29%3A39?alt=media&token=503f5d3c-afd8-47ae-aaab-422c914722c6',
      ],
      desc: "A social media food app, I created it for learning backend technologies such as Node, Express and MongoDB. Still working on it .. ",
      github: "https://github.com/abdelkrimdjerrah/akalaty",
      live: "https://akalaty.vercel.app"
    },
    {
      title: "KYO assistant",
      thumb: "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FExtension-Splash.png%20%20%20%20%20%20%202023-7-5%2023%3A28%3A7?alt=media&token=6c84b491-4561-4aae-a388-b7bd72353e61",
      images: [
         'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2Fv0.png%20%20%20%20%20%20%202023-7-6%200%3A21%3A12?alt=media&token=a95858dd-a732-4b2f-a59f-502b9583750d',
         'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2Fv1.png%20%20%20%20%20%20%202023-7-6%200%3A21%3A13?alt=media&token=75ae2e4f-eebe-4598-96ee-49fe04ed528b',
         'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FGroup%201024.png%20%20%20%20%20%20%202023-7-6%200%3A21%3A14?alt=media&token=2695cb54-731e-4689-ac26-be3e7737bc82',
         'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2Fv3.png%20%20%20%20%20%20%202023-7-6%200%3A21%3A16?alt=media&token=4b0c4e3f-5bb5-4467-bfb8-5f53b2ce2e60',
         'https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2Fv4.png%20%20%20%20%20%20%202023-7-6%200%3A21%3A18?alt=media&token=1de1bd4b-8b3f-4f5d-9c13-a4f26b414192',
      ],
      desc: "For Junction Hackathon 2023, me and my team Pentec created a chrome extension and mobile app for virtual assistance using chat-gpt 3.5 api, my role was to create the UI/UX of both extension and app. Also, I've helped in implementing the frontend-using Vanilla JS. ",
      github: "https://github.com/Arrrax1/junctionApp",
      live: ""
    },
  
   
  ];

export const LiveProjects = () => {

  return (
    <div className="pt-40">
         <div className="flex flex-col gap-20 items-center ">
          <div className="text-[#a0ecff] text-[70px] lg:text-[100px]">Dev Projects</div>
          <div className="mx-auto grid w-full max-w-[120rem] md:grid-cols-3 py-20  sm:grid-cols-2 gap-24">
            {content.map(({ title, thumb, images, desc, github, live }) => (
                <div key={title} className="flex flex-col gap-5 items-center">
                  <Project title={title} thumb={thumb} images={images} desc={desc} github={github} live={live}/>
                </div>
            ))}
            
        </div>
          </div>
    </div>
  )
}


interface InterfaceProjectComponent {
    title: string;
    thumb: string;
    images: any;
    desc: string;
    github: string;
    live: string;
  }
  

export const Project = ({ title, thumb, images, desc, github, live }: InterfaceProjectComponent) => {
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
            {live.length ? <Button widthFull className="bg-red-500" onClick={()=>{openInNewTab(live)}}>Live</Button> : null}
            <Button className="bg-gray-800" widthFull onClick={()=>{openInNewTab(github)}}>Github</Button>
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
       