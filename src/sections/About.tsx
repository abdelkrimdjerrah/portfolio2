import { about } from "../data/data";
export const About = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center w-full px-10 md:px-24 lg:px-48 py-64 mt-28 lg:mt-0">
      <div className="text-[#a0ecff] text-[60px] md:text-[100px] text-center tracking-tight headText">
        About
      </div>
      <div className="text-center text-[17px] md:text-[20px] font-light leading-[42px] text-[#6499af]">
        {about}
      </div>
    </div>
  );
};
