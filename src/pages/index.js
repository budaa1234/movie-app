import { Header } from "@/components/Header";
import { MovieCarouselItem } from "@/components/MovieCarouselItem";
import { MovieCard } from "@/components/MovieCard";
export default function Home() {
  return (
    <div>
      <Header/>
      <MovieCarouselItem/>
      <MovieCard/>
    </div>
  );
}
