import { MovieCard } from "./MovieCard";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
export const Upcoming = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-[24px]">Upcoming</h1>
        <Button variant="ghost">
          see more
          <MoveRight />
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <MovieCard />
        ))}
      </div>
    </div>
  );
};
