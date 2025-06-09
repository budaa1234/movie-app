import { AllGenres } from "@/components/AllGenres";
import { MovieCard } from "@/components/MovieCard";
import { SearchInput } from "@/lib/api/get-search-value";
import { useEffect, useState } from "react";

const Search = ({movies, setSearchValue}) => {
    console.log(movies)
  
  return (
    <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {movies?.results?.map((movie, i) => (
          <MovieCard key={i} movie={movie} setSearchValue={setSearchValue}/>
        ))}
      </div>
      {/* <AllGenres /> */}
    </div>
  );
};
export default Search;
