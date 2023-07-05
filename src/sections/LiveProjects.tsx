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
      desc: "Project for L2 Informatique with collaboration of Younes KHENIFER, It's a Desktop & Web Application for doctors to manage appointments, nurses, medecines, payments, patients and more ... My role was to implement the front end. ",
      github: "https://github.com/YounesKHENIFER/medicaly_electron",
      live: "https://medicaly.netlify.app/"
    },
    {
      title: "Medically",
      thumb: "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FmedicallyThumb.png%20%20%20%20%20%20%202023-7-5%2017%3A44%3A11?alt=media&token=d6672941-9a68-4aec-8f18-597d25234c8c",
      images: "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FmedicallyThumb.png%20%20%20%20%20%20%202023-7-5%2017%3A44%3A11?alt=media&token=d6672941-9a68-4aec-8f18-597d25234c8c",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quam minus assumenda aperiam quos neque facilis nam totam soluta! Consequatur, ipsum unde. Placeat laudantium nisi perspiciatis sunt dolore laboriosam!",
      github: "github",
      live: ""
    },
    {
      title: "Medically",
      thumb: "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FmedicallyThumb.png%20%20%20%20%20%20%202023-7-5%2017%3A44%3A11?alt=media&token=d6672941-9a68-4aec-8f18-597d25234c8c",
      images: "https://firebasestorage.googleapis.com/v0/b/akalaty-ce8bd.appspot.com/o/files%2FmedicallyThumb.png%20%20%20%20%20%20%202023-7-5%2017%3A44%3A11?alt=media&token=d6672941-9a68-4aec-8f18-597d25234c8c",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestiae quam minus assumenda aperiam quos neque facilis nam totam soluta! Consequatur, ipsum unde. Placeat laudantium nisi perspiciatis sunt dolore laboriosam!",
      github: "github",
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
        window.open(url, '_blank', 'noopener,noreferrer');
      };

 const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-10 bg-white rounded-3xl flex flex-col gap-5">
      <img src={thumb} className="rounded-xl" alt="" />
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
       