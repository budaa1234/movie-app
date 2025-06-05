import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { getPopularMovies } from "@/lib/api/get-popular-movie";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MovieCard } from "./MovieCard";
import { PopularLouding } from "./PopularLouding";
export const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [louding, setLouding] = useState(false);
  useEffect(() => {
    setLouding(true);
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();

      const firstTenMovies = popularMovies?.results?.slice(0, 10)

      setPopularMovies(firstTenMovies );
    
    };
    fetchMovies();
    setLouding(false);
  }, []);
  if (louding) return <PopularLouding />;
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-[24px] font-black">Popular</h1>
          <Link href={`/popular`}>
            <Button variant="ghost">
              see more
              <MoveRight />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {popularMovies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
