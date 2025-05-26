import { MovieCard } from "@/components/MovieCard";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getSimilarMovies } from "@/lib/api/get-similar-movie"; 
import { useRouter } from "next/router";
export const Similar = () => {
  const router = useRouter();
    const movieId = router.query.movieId;
    
  const [similarMovies, setSimilarMovies] = useState([])
  useEffect(() => {
      if (!movieId) return;
      const getMovie = async () => {
        const data = await getSimilarMovies (movieId);
        setSimilarMovies(data);
        
      };
      getMovie();
    }, [movieId]);
  
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
        {similarMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie}  movieId={movie.id}/>
        ))}
      </div>
    </div>
  );
};
