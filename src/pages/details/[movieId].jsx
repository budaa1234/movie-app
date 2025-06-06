import { useRouter } from "next/router";
import { getMovieById } from "@/utils/getMovieById";
import { useEffect, useState } from "react";
import { Cover } from "@/components/details/Cover";
import { StaffImformation } from "@/components/details/StaffImformation";
import { Similar } from "@/components/details/Similar";
import { DetailsLouding } from "@/components/DetailsLouding";
export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});
  const [louding, setLouding] = useState(false);

  useEffect(() => {
    setLouding(true);
    if (!movieId) return;
    const getMovie = async () => {
      const data = await getMovieById(movieId);
      setMovie(data);
    };
    getMovie();
    setLouding(false);
  }, [movieId]);
  if (louding) return <DetailsLouding />;
  return (
    <div>
      <div className="mx-auto max-w-[1280px] flex flex-col gap-y-5">
        <Cover movie={movie} />
        <StaffImformation id={movie.id} />
        <Similar movie={movie} />
      </div>
    </div>
  );
}
