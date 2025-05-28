import Genre from "@/components/Genre/Genre";
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
    <div className="flex flex-wrap [335px] h-[513px] md:w-[577px] md:h-[333px] rounded-lg border p-5 gap-4">
      {movieGenre.genres?.map((genre) => (
        <Genre genre={genre} key={genre.id} />
      ))}
    </div>
  );
};
export default Page;
