import { Star } from "lucide-react";
export const Cover = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <div className="flex justify-between p-5">
        <div className="flex-col">
          <p className="text-[24px] font-normal">{movie?.title}</p>
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
      <img src="item.jpg" className=""></img>
    </div>
  );
};
