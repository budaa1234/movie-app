import { Star, Play } from "lucide-react";
export const MovieCarouselItem = () => {
  return (
    <div>
      <img
        className="md:relative md:flex w-[375px] h-[246px] md:w-full md:h-[600px]"
        src="item.jpg"
      />
      <div className="md:absolut md:flex w-[375px] p-[20px] flex-col gap-y-[16px]">

        <div className="flex gap-[20px]">
          <div className=" flex-col w-[375px] justify-between">
            <p className="text-[14px]">Now Playing:</p>
            <p className="text-[24px] font-normal">Wiced</p>
          </div>
          <div className="flex gap-[4px] p-[8px]">
            <Star color="yellow" />
            <p className="text-[18px] md:text-[14px] ">6.9/10</p>
          </div>
        </div>

        <div className="flex w-[350px]">
          <p className="text-[14px]">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.{" "}
          </p>
        </div>

        <button className="w-[145px] h-[40px] px-[8px] text-[#fff] bg-[#18181B] flex items-center gap-[8px] rounded-md">
          <Play className="w-[16px] h-[16px] " />
          Watch Trailer
        </button>

      </div>
    </div>
  );
};
