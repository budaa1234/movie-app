import Genre from "@/components/Genre/Genre";
import { Button } from "@/components/ui/button";
import { getGenre } from "@/lib/api/get-genre";
import { useEffect, useState } from "react";

const Page = () => {
  const [movieGenre, setMovieGenre] = useState([]);

  useEffect(() => {
    const getMovieGenre = async () => {
      const data = await getGenre();
      console.log(data);
      setMovieGenre(data);
    };
    getMovieGenre();
  }, []);
  return (
    <div className="flex flex-col gap-y-5 p-5">
      <p className="text-[30px]">Search filter</p>
      <p className="text-[24px] font-black">Genres</p>
      <p className="text-[16px]">See lists of movies by genre</p>

      <div className="flex flex-wrap  gap-4">
        {movieGenre.genres?.map((genre) => (
          <Genre genre={genre} key={genre.id} />
        ))}
      </div>
    </div>
  );
};
export default Page;
