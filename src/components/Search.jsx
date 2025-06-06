import { useEffect, useState } from "react";
import { SearchResult } from "./SearchResult";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

export const HomeSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  
  const searchMovie = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}search/movie?query=${searchValue}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );

      const movies = await response.json();
      
      

      setMovies(movies)
    } catch (error) {
      console.log(error);
    }
  };
  console.log(searchValue);
  useEffect(() => {
    searchMovie();
  }, [searchValue]);
  return (
    <div >
      <Input
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        type="text"
        placeholder="Search..."
        className={cn("pl-[38px]", "rounded-lg shadow-sm border-none", "h-[36px]")}
      />
      {movies?.results?.length > 0 && (
        <SearchResult movies={movies} setSearchValue={setSearchValue} />
      )}
    </div>
  );
};
