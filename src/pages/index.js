import { Header } from "@/components/Header";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Footer } from "@/components/Footer";
import { Upcoming } from "@/components/Upcoming";
import { Popular } from "@/components/Popular";
import { TopRated } from "@/components/TopRated";
export default function Home() {
  return (
    <div className="">
      <Header />
      <MovieCarousel />
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
