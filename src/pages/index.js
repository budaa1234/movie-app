import { Header } from "@/components/Header";
import { MovieCarousel } from "@/components/MovieCarousel";
import { Footer } from "@/components/Footer";
import { Upcoming } from "@/components/Upcoming";
export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <MovieCarousel/>
      <div className="flex justify-center">
        <Upcoming/>
        </div>
  
      <Footer />
    </div>
  );
}
