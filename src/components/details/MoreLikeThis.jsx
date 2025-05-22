import { MovieCard } from "@/components/MovieCard";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPopularMovies } from "@/lib/api/get-popular-movie";
import { useEffect, useState } from "react";
export const MoreLikeThis = () => {
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies()
      setPopularMovies(popularMovies)
      console.log(popularMovies)
    }
    fetchMovies()
  }, [])
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-black">More like this</h1>
        <Button variant="ghost">
          see more
          <MoveRight />
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {popularMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
};
