import Dropdowm from "@/components/Genre/Dropdown";
import Genre from "@/components/Genre/Genre";
import { getGenre } from "@/lib/api/get-genre";
import { useRouter } from "next/router";
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
    <div>
      {movieGenre.genres?.map((genre) => (
        <Genre genre={genre} key={genre.id} />
      ))}
      {movieGenre.genres?.map((genre) => (
        <Dropdowm genre={genre} key={genre.id} />
      ))}
    </div>
  );
};
export default Page;
