import { Header } from "@/components/Header";
import { MovieCarouselItem } from "@/components/MovieCarouselItem";
import { MovieCard } from "@/components/MovieCard";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Footer } from "@/components/Footer";
import { Upcoming } from "@/components/Upcoming";
export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <MovieCarousel/>
      <Upcoming/>
      <Footer />
    </div>
  );
}
