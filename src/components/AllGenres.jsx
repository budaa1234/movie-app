import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const AllGenres = () => {
  const router = useRouter();
  const [genres, setGenres] = useState([]);
  const [genreIds, setGenreIds] = useState([]);
  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      setGenres(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, []);

  const handleSelectGenre = (id, name) => {
    setGenreIds([...genreIds, id]);

    router.push(`/genres?genreIds=${genreIds}&name=${name}`);
  };

  return (
    <div className="flex flex-wrap gap-4 w-[387px]">
      {genres?.genres?.map((genre) => (
        <Button
          variant="outline"
          className="w-fit bg-white text-foreground hover:bg-none text-[12px] font-bold h-[20px]"
          onClick={() => handleSelectGenre(genre.id, genre.name)}
        >
          {genre.name}
        </Button>
      ))}
    </div>
  );
};
