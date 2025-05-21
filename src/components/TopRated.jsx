import { MovieCard } from "./MovieCard";
import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
export const TopRated = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-black">Top Rated</h1>
        <Button variant="ghost">
          see more
          <MoveRight />
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <MovieCard />
        ))}
      </div>
    </div>
  );
};
