import { Card } from "./Card";

interface ICard {
  title: string;
  thumb: string;
  images: any;
  desc: string;
  github?: string;
  live?: string;
}

interface ICards {
  data: ICard[];
  title: string;
}

export const Cards = ({ data, title }: ICards) => {
  return (
    <div className="pt-40">
      <div className="flex flex-col gap-20 items-center ">
        <div className="text-[#a0ecff] text-[60px] md:text-[100px] text-center tracking-tight headText">
          {title}
        </div>
        <div className="mx-auto grid w-full justify-between px-20 lg:grid-cols-3 md:grid-cols-2 md:grid py-20  sm:flex sm:flex-col gap-20">
          {data.map(({ title, thumb, images, desc, github, live }) => (
            <div key={title} className="flex flex-col gap-5 items-center">
              <Card
                title={title}
                thumb={thumb}
                images={images}
                desc={desc}
                github={github}
                live={live}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
