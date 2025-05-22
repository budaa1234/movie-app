import { useRouter } from "next/router";
import { getMovieById } from "@/utils";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cover } from "@/components/details/Cover";
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
    <div className="w-full lg:max-w-[1278px] mx-auto">
      <Header />
      <Cover movie={movie} />
      <Footer />
    </div>
  );
}
