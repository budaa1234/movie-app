import { MovieCarousel } from "@/components/MovieCarousel";
import { Upcoming } from "@/components/Upcoming";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
import { useEffect, useState } from "react";
import { HomePageLouding } from "@/components/HomePageLouding";
export default function Home() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([])
  const [louding, setLouding] = useState(false)
  const getNowPlayingMovies = async () => {
    setLouding(true)
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
      // console.log(movies)

      setNowPlayingMovie(movies.results)
      setLouding(false)
    } catch (error) {
      console.log(error)
    };
  }
  useEffect(() => {
    getNowPlayingMovies()
  }, [])
  if(louding) return <HomePageLouding/>
  return (
    <div className="container mx-auto">
      
      <MovieCarousel nowPlayingMovie={nowPlayingMovie} />
      <div className="flex flex-col gap-13 mx-auto max-w-[1280px]">
        <Upcoming />
        <Popular />
        <TopRated />
      </div>
      
    </div>
  );
}
