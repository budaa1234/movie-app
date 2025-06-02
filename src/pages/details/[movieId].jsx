import { useRouter } from "next/router";
import { getMovieById } from "@/utils";
import { useEffect, useState } from "react";
import { Cover } from "@/components/details/Cover";
import { StaffImformation } from "@/components/details/StaffImformation";
import { Similar } from "@/components/details/Similar";
export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };
    getMovie();
  }, [movieId]);
  return (
    <div className="container mx-auto flex flex-col gap-y-[20px]">
    
      <div className="mx-auto max-w-[1280px] flex flex-col gap-y-5">
        <Cover movie={movie} />
        <StaffImformation id={movie.id} />
        <Similar  movie={movie} />
      </div>
    
    </div>
  );
}
