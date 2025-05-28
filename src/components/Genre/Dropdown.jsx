import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getGenre } from "@/lib/api/get-genre";
import Genre from "./Genre";

const Dropdowm = () => {
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
    <Link href={`/Genre/Genre`}>
      <DropdownMenu className="flex">
        <DropdownMenuTrigger asChild>
          <Button variant="outline">genre</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col justify-center md:justify-center gap-4">
          <p className="text-[24px] font-black">Genres</p>
          <p className="text-[16px]">See lists of movies by genre</p>
          <div className="flex flex-wrap w-[335px] h-[513px] md:w-[577px] md:h-[333px] gap-4">
            {movieGenre.genres?.map((genre) => (
              <Genre genre={genre} key={genre.id} />
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </Link>
  );
};
export default Dropdowm;
