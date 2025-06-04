import { MovieCard } from "@/components/MovieCard";
import { getPopularMovies } from "@/lib/api/get-popular-movie";
import { useEffect, useState } from "react";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();

      setPopularMovies(popularMovies);
      console.log(popularMovies);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-[24px] font-black">Popular</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {popularMovies?.results?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Popular;
