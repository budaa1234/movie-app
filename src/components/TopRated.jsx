import { MovieCard } from "./MovieCard";
import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import { getTopRatedMovies } from "@/lib/api/get-topRated-movie";
import { useEffect, useState } from "react";
import Link from "next/link";
import { PopularLouding } from "./PopularLouding";
export const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [louding, setLoudig]= useState(false)
  useEffect(() => {
    setLoudig(true)
    const fetchMovies = async () => {
      const topRatedMovies = await getTopRatedMovies();

      setTopRatedMovies(topRatedMovies);
      

      // console.log(topRatedMovies);
    };
    setLoudig(false)
    fetchMovies();
  }, []);
  if(louding)return <PopularLouding/>
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-[24px] font-black">Top Rated</h1>
        <Link href={`/toprated`}>
          <Button variant="ghost">
            see more
            <MoveRight />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {topRatedMovies?.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} movieId={movie.id} />
        ))}
      </div>
    </div>
  );
};
