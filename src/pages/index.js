import { Header } from "@/components/Header";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Footer } from "@/components/Footer";
import { Upcoming } from "@/components/Upcoming";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { useEffect, useState } from "react";
export default function Home() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([])
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          }
        }
      )
      const movies = await response.json()
      console.log(movies)

      setNowPlayingMovie(movies.results)
    }catch (error) {
      console.log(error)
    };
  }
  useEffect(() => {
    getNowPlayingMovies()
  }, [])
  return (
    <div className="container mx-auto">
      {/* <Header /> */}
      <MovieCarousel nowPlayingMovie={nowPlayingMovie}/>
      <div className="flex justify-center">
        <div className="flex flex-col gap-13">
          <Upcoming />
          <Popular />
          <TopRated />
        </div>
      </div>
      <Footer />
    </div>
  );
}
