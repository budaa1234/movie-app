import { Header } from "@/components/Header";
import { MovieCarouselItem } from "@/components/MovieCarouselItem";
import { MovieCard } from "@/components/MovieCard";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header/>
      <MovieCarouselItem/>
      <MovieCard/>
      <Footer/>
    </div>
  );
}
