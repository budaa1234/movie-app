import { MovieCard } from "./MovieCard";
import { ArrowBigRight } from "lucide-react";
export const Upcoming = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1>Upcoming</h1>
        <ArrowBigRight />
      </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieCard />
          ))}
      </div>
    </div>
  );
};
