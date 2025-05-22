import { Star, Play } from "lucide-react";
import { Button } from "../ui/button";
export const Cover = ({ movie }) => {
  console.log(movie);
  return (
    <div >
      <div className="flex justify-between p-5 mx-auto max-w-[1280px]">
        <div className="flex-col">
          <p className="text-[24px] font-normal">Wicked{movie?.title}</p>
          <p className="text-[12px] md:text-[18px]">2024.11.26 · PG · 2h 40m</p>
        </div>
        <div className="flex">
          <div className="">
            <Star className="text-yellow-300 fill-amber-300" />
          </div>
          <div>
            <p className="text-[14px] ">6.9/10</p>
            <p className="text-[12px] text-[#71717A]">37k</p>
          </div>
        </div>
      </div>
      <div className="flex md:gap-8 md:justify-center">
        <img src="https://i.ebayimg.com/00/s/MTYwMFgxMDUw/z/6ysAAOSwm41bSQV9/$_57.JPG?set_id=8800005007" className="md:w-[290px] md:h-[428px] hidden md:inline " />
        <div className="relative flex">
          <img src="https://m.media-amazon.com/images/I/81cmJpAKEVL._AC_UF894,1000_QL80_.jpg" className="w-screen md:w-[760px]  h-[211px]  md:h-[428px]" />
          <div className="absolute flex items-center content-end p-[12px] gap-3">
            <Button variant="outline" className="rounded-full"><Play /></Button>
            <p className="text-[#FFFFFF] text-[12px]">Play trailer</p>
            <p className="text-[#FFFFFF] text-[12px]">2:35</p>
          </div>
        </div>
      </div>
      <div className="flex p-[20px] gap-8">
        <img src="https://i.ebayimg.com/00/s/MTYwMFgxMDUw/z/6ysAAOSwm41bSQV9/$_57.JPG?set_id=8800005007" className="w-[100px] h-[148px] md:hidden" />
        <div className="flex flex-col gap-y-4 md:justify-center">
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="rounded-full h-[20px]">
              Fairy Tale
            </Button>
            <Button variant="outline" className="rounded-full h-[20px]">
              Pop Musical
            </Button>
            <Button variant="outline" className="rounded-full h-[20px]">
              Fantasy
            </Button>
            <Button variant="outline" className="rounded-full h-[20px]">
              Musical
            </Button>
            <Button variant="outline" className="rounded-full h-[20px]">
              Romance
            </Button>
          </div>
          <p className="text-[16px]">Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.</p>
        </div>
      </div>
    </div>
  );
};
