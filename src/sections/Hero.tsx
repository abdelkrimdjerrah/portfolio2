import { useLoadingContext } from "../context/useLoadingContext";
import { TypingEffect } from "../components/TypingEffect";
const abdelkrim_main = require("../images/abdelkrim_main.png");
export const Hero = () => {

  const { loading, setLoading } = useLoadingContext()


  const texts: string[] = ["UI/UX | Brand Designer","Software Developer"];


  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row h-fit lg:h-screen  text-[#6499af]">
        <div className=" w-full lg:w-[55%]">
          <img className="w-[800px] abdelkrim " src={abdelkrim_main} alt="" onLoad={() => setLoading(false) }/>
        </div>
        <div className="  w-full lg:w-[45%] justify-center flex items-center">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-[50px] md:text-[80px] font-medium tracking-tight headText">
              Abdelkrim
            </div>
            <div className="text-[50px] md:text-[80px] font-medium leading-6 tracking-tight headText">
              Djerrah
            </div>

            <div className="wrapper text-[15px] lg:text-[25px] mt-20 text-[#a0ecff] border-[#a0ecff] h-10">
                  <TypingEffect texts={texts}/>
            </div>
            
          </div>
        </div>
      </div>


      <div className=" fixed text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100%)_var(--y,_200%),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40" />

    </div>
  );
};
