import { useRouter } from "next/router";
import { getMovieById } from "@/utils";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cover } from "@/components/details/Cover";
import { StaffImformation } from "@/components/details/StaffImformation";
import { MoreLikeThis } from "@/components/details/MoreLikeThis";
export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const data = await getMovieById(movieId);
    setMovie(data);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="container mx-auto flex flex-col gap-y-[20px]">
      <Header />
      <div className="mx-auto max-w-[1280px]">
      <Cover movie={movie} />
      <StaffImformation/>
      <MoreLikeThis/>
      </div>
      <Footer />
    </div>
  );
}
