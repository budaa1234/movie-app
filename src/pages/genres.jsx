import { AllGenres } from "@/components/AllGenres";
import { MovieCard } from "@/components/MovieCard";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = () => {
  const [genreMovies, setGenreMovie] = useState({});
  const router = useRouter();

  const genreIds = router.query.genreIds;
  console.log(genreIds)

  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${genreIds}&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      setGenreMovie(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, [genreIds]);

  return (
    <div className="mx-auto max-w-[1280px]">
      <h1 className="text-[30px]">Search filter</h1>
      <div className="md:flex md:gap-y-6 md:mt-8">
        <div className="w-[387px]">
          <AllGenres />
        </div>
        <Separator orientation="vertical" className="h-full mx-4"/>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center ">
          {genreMovies?.results?.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Page;
