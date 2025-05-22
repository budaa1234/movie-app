import { Star } from "lucide-react";
export const MovieCard = ({ movie }) => {
  return (
    <div className="w-full bg-[#F4F4F5] rounded-lg ">
      <img
        className=" rounded-t-lg "
        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
      />

      <div className=" h-auto md:h-auto bg-[#F4F4F5] rounded-b-lg">
        <div className="flex gap-[4px] p-[8px]">
          <Star className="text-yellow-300 fill-amber-300 w-4 h-4" />
          <p className="text-[12px] md:text-[14px] ">
            {movie?.vote_average.toFixed(1)}
          </p>
        </div>
        <p className="text-[14px] md:text-[18px] p-[8px]">{movie?.title}</p>
      </div>
    </div>
  );
};
