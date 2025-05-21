import { Star } from "lucide-react";
export const MovieCard = () => {
  return (
    <div>
      <img className="w-[158px] h-[234px] md:w-[230px] md:h-[340px] rounded-t-lg " src="card.jpg"/>
      <div className=" h-auto md:h-auto bg-[#F4F4F5] rounded-b-lg">
        <div className="flex gap-[4px] p-[8px]">
          <Star className="text-yellow-300 fill-amber-300 w-4 h-4" />
          <p className="text-[12px] md:text-[14px] ">6.9/10</p>
        </div>
        <p className="text-[14px] md:text-[18px] p-[8px]">Movie name</p>
      </div>
    </div>
  );
};
